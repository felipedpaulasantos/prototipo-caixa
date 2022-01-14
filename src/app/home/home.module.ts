import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CardCaixaModule } from "../guia-caixa/components/card-caixa/card-caixa/card-caixa.module";
import { StepperModule } from "../guia-caixa/components/stepper/stepper.module";
import { HomeComponent } from "./home.component";

@NgModule({
   declarations: [
      HomeComponent
   ],
   imports: [
      CommonModule,
      NgxChartsModule,
      StepperModule,
      CardCaixaModule
   ]
})
export class HomeModule { }
