import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../servicios/auth.service';
import {Router} from '@angular/router';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
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
        private alertController: AlertController,
        private toastController: ToastController
    ) {
    }

    ngOnInit() {
        this.credentials = this.fb.group({
            email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
            password: ['cityslicka', [Validators.required, Validators.minLength(6)]],
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
                const toast = await this.toastController.create({
                    message: `Bienvenido de vuelta, ${this.authService.usuarioConectado.username}!`,
                    duration: 2000,
                    position: 'top',
                    color: 'success',
                });
                await toast.present();
            },
            async (err) => {
                await loading.dismiss();
                const alert = await this.alertController.create({
                    header: 'Error al iniciar sesión',
                    message: err.error.message,
                    buttons: ['OK']
                });
                await alert.present();
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
