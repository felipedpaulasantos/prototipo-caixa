import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCaixaComponent } from './components/input-caixa/input-caixa.component';
import { InputCaixaDirective } from './components/input-caixa/input-caixa.directive';
import { SelectCaixaDirective } from './components/select-caixa/select-caixa.directive';
import { SelectCaixaComponent } from './components/select-caixa/select-caixa.component';
import { SpinnerCaixaComponent } from './components/spinner/spinner.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    InputCaixaComponent,
		InputCaixaDirective,
		SelectCaixaDirective,
    SelectCaixaComponent,
    SpinnerCaixaComponent,
		ModalComponent
  ],
  imports: [
    CommonModule,
		NgxSpinnerModule
  ],
  exports: [
    InputCaixaComponent,
		InputCaixaDirective,
		SelectCaixaDirective,
    SelectCaixaComponent,
    SpinnerCaixaComponent,
    ModalComponent
  ]
})
export class GuiaCaixaModule { }
