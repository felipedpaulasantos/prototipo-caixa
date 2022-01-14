import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardCaixaComponent } from "../card-caixa.component";



@NgModule({
  declarations: [
    CardCaixaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CardCaixaComponent]
})
export class CardCaixaModule { }
