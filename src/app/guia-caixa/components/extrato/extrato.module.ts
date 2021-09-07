import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExtratoComponent } from "./extrato/extrato.component";



@NgModule({
  declarations: [ExtratoComponent],
  imports: [
    CommonModule
  ],
  exports: [ExtratoComponent]
})
export class ExtratoModule { }
