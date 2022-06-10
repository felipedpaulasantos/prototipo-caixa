import {NgModule} from "@angular/core";
import {MenuLateralFixoComponent} from "./menu-lateral-fixo.component";
import {CommonModule} from "@angular/common";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import { MenuLateralUnicoComponent } from "./menu-lateral-unico/menu-lateral-unico.component";
import { AccordionModule } from "../shared/caixa-components/accordion/accordion.module";

@NgModule({
  imports: [CommonModule, PerfectScrollbarModule, AccordionModule],
  declarations: [MenuLateralFixoComponent, MenuLateralUnicoComponent],
  exports: [MenuLateralFixoComponent]
})
export class MenuLateralFixoModule {

  constructor() {}

}
