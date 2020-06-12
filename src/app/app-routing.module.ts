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
    loadChildren: () => import('./cores/cores.module').then(m => m.CoresModule) 
  },
  {
    path: 'layout',
    data: {
      title: 'Layout',
      breadcrumb: 'Layout',
      animation: 'Layout'
    },
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) 
  },
  {
    path: 'contas',
    data: {
      breadcrumb: 'Contas',
      animation: 'Contas'
    },
    loadChildren: './account/account.module#AccountModule'
  },
  {
    path: 'relatorios',
    data: {
      title: 'Relatórios',
      breadcrumb: 'Relatórios',
      animation: 'Relatórios'
    },
    loadChildren: './reports/reports.module#ReportsModule'
  },
  {
    path: 'componentes',
    data: {
      title: 'Componentes',
      breadcrumb: 'Componentes',
      animation: 'Componentes'
    },
    loadChildren: './demonstracao/componentes/componentes.module#ComponentesModule'
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
      useHash: false,
      initialNavigation: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
