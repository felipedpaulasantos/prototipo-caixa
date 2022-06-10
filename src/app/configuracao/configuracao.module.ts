import { ConfiguracaoFuncionalidadeComponent } from "./components/configuracao-funcionalidade/configuracao-funcionalidade.component";
import { ServicoMensageriaComponent } from "./components/servico-mensageria/servico-mensageria.component";
import { ConfiguracaoDoModuloComponent } from "./components/configuracao-do-modulo/configuracao-do-modulo.component";
import { ConfiguracaoDoMenuComponent } from "./components/configuracao-do-menu/configuracao-do-menu.component";
import { MenuConfiguracaoComponent } from "./components/menu-configuracao/menu-configuracao.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConfiguracaoComponent } from "./configuracao.component";
import { ConfiguracaoRoutingModule } from "./configuracao-routing.module";
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        ConfiguracaoComponent,
        MenuConfiguracaoComponent,
        ConfiguracaoDoMenuComponent,
        ConfiguracaoDoModuloComponent,
        ConfiguracaoFuncionalidadeComponent,
        ServicoMensageriaComponent
    ],
    imports: [
        CommonModule,
        ConfiguracaoRoutingModule,
        SharedModule,
        SharedModule.forRoot()
    ]
})
export class ConfiguracaoModule { }
