import { MenuConfiguracaoComponent } from "./components/menu-configuracao/menu-configuracao.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { KeycloakGuard } from "../keycloak-service/keycloak.guard";
import { ConfiguracaoDoMenuComponent } from "./components/configuracao-do-menu/configuracao-do-menu.component";
import { ConfiguracaoComponent } from "./configuracao.component";
import { ConfiguracaoDoModuloComponent } from "./components/configuracao-do-modulo/configuracao-do-modulo.component";
import { ConfiguracaoFuncionalidadeComponent } from "./components/configuracao-funcionalidade/configuracao-funcionalidade.component";
import { ServicoMensageriaComponent } from "./components/servico-mensageria/servico-mensageria.component";

const routes: Routes = [
  {
    path: "",
    component: ConfiguracaoComponent,
    canActivate: [KeycloakGuard],
    children: [
      {
        path: "",
        redirectTo: "configuracao-do-modulo",
        pathMatch: "full",
      },
      {
        path: "configuracao-do-modulo",
        component: ConfiguracaoDoModuloComponent,
        canActivate: [KeycloakGuard],
        data: {
          breadcrumb: "Configuração do Módulo",
          menuLateral: MenuConfiguracaoComponent
        }
      },
      {
        path: "configuracao-do-menu",
        component: ConfiguracaoDoMenuComponent,
        canActivate: [KeycloakGuard],
        data: {
          breadcrumb: "Configuração do Menu",
           menuLateral: MenuConfiguracaoComponent
        }
      },
      {
        path: "configuracao-funcionalidade",
        component: ConfiguracaoFuncionalidadeComponent,
        canActivate: [KeycloakGuard],
        data: {
          breadcrumb: "Configuração de Funcionalidade",
           menuLateral: MenuConfiguracaoComponent
        }
      },
      {
        path: "servico-mensageria",
        component: ServicoMensageriaComponent,
        canActivate: [KeycloakGuard],
        data: {
          breadcrumb: "Serviço Mensageria",
           menuLateral: MenuConfiguracaoComponent
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracaoRoutingModule { }
