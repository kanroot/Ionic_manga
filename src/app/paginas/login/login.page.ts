import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastManagerService} from '../../servicios/toast-manager.service';
import {ErrorManagerService} from '../../servicios/error-manager.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    credentials: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router,
        private loadingController: LoadingController,
        private fb: FormBuilder,
        private errorManager: ErrorManagerService,
        private toast: ToastManagerService
    ) {
    }

    ngOnInit() {
        this.credentials = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(6)]],
        });
    }

    async login() {
        const loading = await this.loadingController.create(
            {
                message: 'Iniciando sesión...',
                translucent: true,
            }
        );
        await loading.present();

        (await this.authService.iniciarSesionConCredenciales(this.credentials.value)).subscribe(
            async (_) => {
                await loading.dismiss();
                this.router.navigate(['/inicio']);
                this.toast.mostrar('Bienvenido de vuelta, '+ this.authService.datosUsuario.username);
            },
            async (err) => {
                await loading.dismiss();
                this.errorManager.mostrar('Error al iniciar sesión', err);
            }
        );
    }

    get email() {
        return this.credentials.get('email');
    }

    get password() {
        return this.credentials.get('password');
    }

}
