import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { StepperModule } from "./stepper/stepper.module";
import { CardButtonModule } from "./card-button/card-button.module";
import { TimelineModule } from "./timeline/timeline.module";
import { CaixaDatatableModule } from "./datatable/caixa-datatable.module";
import { ButtonControlModule } from "./button-control/button-control.module";
import { AccordionModule } from "./accordion/accordion.module";
import { AlertaClienteIntegradoModule } from "./alerta-cliente-integrado/alerta-cliente-integrado.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StepperModule,
    CardButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TimelineModule,
    ButtonControlModule,
    CaixaDatatableModule,
    AccordionModule,
    AlertaClienteIntegradoModule
  ],
  exports: [
    StepperModule,
    CardButtonModule,
    TimelineModule,
    ButtonControlModule,
    CaixaDatatableModule,
    AccordionModule,
    AlertaClienteIntegradoModule
  ]
})
export class CaixaComponentsModule { }
