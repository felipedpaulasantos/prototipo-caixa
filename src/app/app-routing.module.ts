import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Início',
      animation: 'Home'
    }
  },
  {
    path: 'cores',
    data: {
      title: 'Cores',
      breadcrumb: 'Cores',
      animation: 'Cores'
    },
    loadChildren: () => import('./demonstracao/cores/cores.module').then(m => m.CoresModule)
  },
  {
    path: 'layout',
    data: {
      title: 'Layout',
      breadcrumb: 'Layout',
      animation: 'Layout'
    },
    loadChildren: () => import('./demonstracao/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'componentes',
    data: {
      title: 'Componentes',
      breadcrumb: 'Componentes',
      animation: 'Componentes'
    },
    loadChildren: () => import('./demonstracao/componentes/componentes.module').then(m => m.ComponentesModule)
  },
  {
    path: 'tipografia',
    data: {
      title: 'Tipografia',
      breadcrumb: 'Tipografia',
      animation: 'Tipografia'
    },
    loadChildren: () => import('./demonstracao/tipografia/tipografia.module').then(m => m.TipografiaModule)
  },
  {
    path: 'chat',
    data: {
      title: 'Chat',
      breadcrumb: 'Chat',
      animation: 'Chat'
    },
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },
  { 
    path: 'config-menu', 
    data: {
      title: 'Configuração do Menu',
      breadcrumb: 'Configuração do Menu',
      animation: 'Config-menu'
    },
    loadChildren: () => import('./demonstracao/config-menu/config-menu.module').then(m => m.ConfigMenuModule) 
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: true,
      initialNavigation: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
