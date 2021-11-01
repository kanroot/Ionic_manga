/* eslint-disable @typescript-eslint/naming-convention */
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioRegistroModel} from '../../compartido/modelos/usuario.modelo';
import {LoadingController} from '@ionic/angular';
import {AuthService} from '../../servicios/auth.service';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.page.html',
    styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
    usuarioForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private loadingController: LoadingController,
        private auth: AuthService) {
    }

    ngOnInit() {
        this.usuarioForm = this.fb.group({
                username: [null, [Validators.required, Validators.minLength(4)]],
                email: [null, [Validators.required, Validators.email]],
                password: [null, [Validators.required, Validators.minLength(6)]],
                passwordConfirm: [null, [Validators.required]],
                fec_nac: [null, [Validators.required]],
            },
            {
                validator: this.comparePassword('password', 'passwordConfirm')
            });
    }

    comparePassword(
        controlName: string,
        matchingControlName: string
    ) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }

            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({mustMatch: true});
            } else {
                matchingControl.setErrors(null);
            }
        };
    }

    async onSubmit() {
        if (this.usuarioForm.invalid) {
            return;
        }

        const loading = await this.loadingController.create(
            {
                message: 'Registrando...',
                translucent: true,
            }
        );
        await loading.present();

        const usuario: UsuarioRegistroModel = {
            username: this.usuarioForm.value.username,
            email: this.usuarioForm.value.email,
            password: this.usuarioForm.value.password,
            fec_nac: this.usuarioForm.value.fec_nac,
        };

        return await this.auth.registrarUsuario(usuario).finally(
            () => {
                loading.dismiss();
            }
        );
    }
}
