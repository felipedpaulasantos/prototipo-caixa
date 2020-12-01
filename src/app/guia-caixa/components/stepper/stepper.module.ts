import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper-component/stepper.component';

import { TabberComponent } from './tabber-component/tabber.component';
import { StepperDirective } from './stepper-directive';

@NgModule({
  declarations: [
    StepperComponent,
    StepperDirective,
    TabberComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StepperComponent,
    StepperDirective,
    TabberComponent
  ]
})
export class StepperModule { }
