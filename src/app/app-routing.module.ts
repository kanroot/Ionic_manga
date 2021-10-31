import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {AutologinGuard} from './guards/autologin.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./paginas/inicio/inicio.module').then(m => m.InicioPageModule)
    },
    {
        path: 'inicio',
        loadChildren: () => import('./paginas/inicio/inicio.module').then(m => m.InicioPageModule)
    },
    {
        path: 'detalle/:datos',
        loadChildren: () => import('./paginas/detalle/detalle.module').then(m => m.DetallePageModule)
    },
    {
        path: 'catalogo',
        loadChildren: () => import('./paginas/catalogo/catalogo.module').then(m => m.CatalogoPageModule)
    },
    {
        path: 'registro',
        loadChildren: () => import('./paginas/registro/registro.module').then(m => m.RegistroPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./paginas/login/login.module').then(m => m.LoginPageModule),
        canActivate: [AutologinGuard]
    },
    {
        path: 'miperfil',
        loadChildren: () => import('./paginas/miperfil/miperfil.module').then(m => m.MiperfilPageModule),
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
