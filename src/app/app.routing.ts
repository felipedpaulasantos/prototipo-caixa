import { ModuleWithProviders } from '@angular/core';
import { Page404Component } from './page404/page404.component';
import { Routes, RouterModule, NoPreloading } from "@angular/router";

export const APP_ROUTES: Routes = [
  { path: "", redirectTo: "404", pathMatch: "full" },
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
  //  {
  //   path: "principal",
  //   loadChildren:
  //     () => import('./gerenciador-atendimento/gerenciador-atendimento.module').then(m => m.GerenciadorAtendimetoModule),
  //   canActivate: [KeycloakGuard],
  //   data: {
  //     breadcrumb: "Gerenciador de Atendimento"
  //   }
  // },
  // {
  //   path: "comercial",
  //   loadChildren: () => import('./comercial/comercial.module').then(m => m.ComercialModule),
  //   canActivate: [KeycloakGuard],
  //   data: {
  //     breadcrumb: "Pessoa Física/Jurídica"
  //   }
  // },
  // {
  //   path: "govsocial",
  //   loadChildren: () => import('./governo-social/governo-social.module').then(m => m.GovernoSocialModule),
  //   canActivate: [KeycloakGuard],
  //   data: {
  //     breadcrumb: "Serviços ao Cidadão"
  //   }
  // },
  // {
  //   path: "investimento",
  //   loadChildren: () => import('./investimento/investimento.module').then(m => m.InvestimentoModule),
  //   canActivate: [KeycloakGuard],
  //   data: {
  //     breadcrumb: "Investimento"
  //   }
  // },
  // {
  //   path: "dossiedigital",
  //   loadChildren: () => import('./pessoa-fisica/pessoa-fisica.module').then(m => m.PessoaFisicaModule),
  //   canActivate: [KeycloakGuard],
  //   data: {
  //     breadcrumb: "Dossiê Digital"
  //   }
  // },
  // {
  //   path: "trilha-auditoria",
  //   loadChildren: () => import('./trilha-auditoria/trilha-auditoria.module').then(m => m.TrilhaAuditoriaModule),
  //   canActivate: [KeycloakGuard],
  //   data: {
  //     breadcrumb: "Trilha de Auditoria"
  //   }
  // },
  // {
  //   path: "formularios",
  //   loadChildren: () => import('./formularios/formularios.module').then(m => m.FormulariosModule),
  //   canActivate: [KeycloakGuard],
  //   data: {
  //     breadcrumb: "Formulários"
  //   }
  // },
  // {
  //   path: "configuracao",
  //   loadChildren: () => import('./configuracao/configuracao.module').then(m => m.ConfiguracaoModule),
  //   canActivate: [KeycloakGuard],
  //   data: {
  //     breadcrumb: "Configurações"
  //   }
  // },
  // {
  //   path: "autorizacao-gerencial",
  //   loadChildren: () => import('./autorizacao-gerencial/autorizacao-gerencial.module').then(m => m.AutorizacaoGerencialModule),
  //   canActivate: [KeycloakGuard],
  //   data: {
  //     breadcrumb: "Autorização"
  //   }
  // },
  // {
  //   path: "judicial",
  //   loadChildren: () => import('./determinacao-judicial/determinacao-judicial.module').then(m => m.DeterminacaoJudicialModule),
  //   canActivate: [KeycloakGuard],
  //   data: {
  //     breadcrumb: "Determinação Judicial"
  //   }
  // },
  // { path: "**", redirectTo: "principal", pathMatch: "full" }
];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES, {
  preloadingStrategy: NoPreloading,
  useHash: true
});
