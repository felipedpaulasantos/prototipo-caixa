import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoresRoutingModule } from "./cores-routing.module";
import { CoresComponent } from "./cores.component";
import { SharedModule } from "src/app/shared/shared.module";
import { GuiaCaixaModule } from "src/app/guia-caixa/guia-caixa.module";
import { CaixaDatatableModule } from "src/app/guia-caixa/components/datatable/caixa-datatable.module";

@NgModule({
  declarations: [CoresComponent],
  imports: [
    CommonModule,
    CoresRoutingModule,
    GuiaCaixaModule,
    CaixaDatatableModule,
    SharedModule
  ]
})
export class CoresModule { }
