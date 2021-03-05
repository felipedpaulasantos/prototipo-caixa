import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComponentesBasicosRoutingModule } from "./componentes-basicos-routing.module";
import { ComponentesBasicosComponent } from "./componentes-basicos.component";


@NgModule({
  declarations: [ComponentesBasicosComponent],
  imports: [
    CommonModule,
    ComponentesBasicosRoutingModule
  ]
})
export class ComponentesBasicosModule { }
