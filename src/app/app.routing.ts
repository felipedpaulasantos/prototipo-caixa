import { ModuleWithProviders } from '@angular/core';
import { Page404Component } from './page404/page404.component';
import { Routes, RouterModule, NoPreloading } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";

export const APP_ROUTES: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    data: {
      breadcrumb: "Início"
    }
  },
  {
    path: "404",
    component: Page404Component,
    data: {
      breadcrumb: "Custa"
    }
  },
  {
    path: "custa",
    loadChildren:
      () => import('./custa/custa.module').then(m => m.CustaModule),
    //canActivate: [KeycloakGuard],
    data: {
      breadcrumb: "Custa"
    }
  },
  {
    path: "fase",
    loadChildren:
      () => import('./fase/fase.module').then(m => m.FaseModule),
    //canActivate: [KeycloakGuard],
    data: {
      breadcrumb: "Fase"
    }
  },
  {
    path: "expediente",
    loadChildren:
      () => import('./expediente/expediente.module').then(m => m.ExpedienteModule),
    //canActivate: [KeycloakGuard],
    data: {
      breadcrumb: "Expediente"
    }
  },
  {
    path: "recurso",
    loadChildren:
      () => import('./recurso/recurso.module').then(m => m.RecursoModule),
    //canActivate: [KeycloakGuard],
    data: {
      breadcrumb: "Recurso"
    }
  }
];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES, {
  preloadingStrategy: NoPreloading,
  useHash: true
});
