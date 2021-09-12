import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio-tab',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'registro-tab',
        loadChildren: () => import('../registro/registro.module').then(m => m.RegistroPageModule)
      },
      {
        path: 'catalogo-tab',
        loadChildren: () => import('../catalogo/catalogo.module').then(m => m.CatalogoPageModule)
      },
      {
        path: 'detalle-tab',
        loadChildren: () => import('../detalle/detalle.module').then( m => m.DetallePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/inicio-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
