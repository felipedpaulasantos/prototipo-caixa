import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExtratoComponent } from "./extrato/extrato.component";
import { TabelaExtratoDirective } from './extrato/tabela-extrato.directive';



@NgModule({
  declarations: [ExtratoComponent, TabelaExtratoDirective],
  imports: [
    CommonModule
  ],
  exports: [ExtratoComponent, TabelaExtratoDirective]
})
export class ExtratoModule { }
