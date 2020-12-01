import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCaixaComponent } from './components/input-caixa/input-caixa.component';
import { InputCaixaDirective } from './components/input-caixa/input-caixa.directive';
import { SelectCaixaDirective } from './components/select-caixa/select-caixa.directive';
import { SelectCaixaComponent } from './components/select-caixa/select-caixa.component';
import { SpinnerCaixaComponent } from './components/spinner/spinner.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CardCaixaComponent } from './components/card-caixa/card-caixa.component';
import { StepperModule } from './components/stepper/stepper.module';



@NgModule({
  declarations: [
    InputCaixaComponent,
		InputCaixaDirective,
		SelectCaixaDirective,
    SelectCaixaComponent,
    SpinnerCaixaComponent,
		ModalComponent,
		CardCaixaComponent,
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    StepperModule
  ],
  exports: [
    InputCaixaComponent,
		InputCaixaDirective,
		SelectCaixaDirective,
    SelectCaixaComponent,
    SpinnerCaixaComponent,
    ModalComponent,
    CardCaixaComponent,
    StepperModule
  ]
})
export class GuiaCaixaModule { }
