import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
        private alertController: AlertController
    ) {
    }

    ngOnInit() {
        this.credentials = this.fb.group({
            email: ['correo@dominio.cl', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    async login() {
        const loading = await this.loadingController.create();
        await loading.present();

        this.authService.login(this.credentials.value).subscribe(
            async (res) => {
                console.log(res);
                await loading.dismiss();
                this.router.navigateByUrl('/inicio', { replaceUrl: true });
            },
            async (res) => {
                await loading.dismiss();
                console.log(res);
                const alert = await this.alertController.create({
                    header: 'Falló el inicio de sesión',
                    message: res.error.error,
                    buttons: ['OK'],
                });

                await alert.present();
            }
        );
    }

    // Easy access for form fields
    get email() {
        return this.credentials.get('email');
    }

    get password() {
        return this.credentials.get('password');
    }

}
