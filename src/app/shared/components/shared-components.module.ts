import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import { NgxSpinnerDefaultComponent } from './ngx-spinner-default/ngx-spinner-default.component';
import { BootstrapSelectComponent } from './bootstrap-select/bootstrap-select.component';
import { ContentCardComponent } from './cards/content-card.component';
import { TableCaixaComponent } from './tables/table-caixa/table-caixa.component';
import { CustomChartComponent } from './charts/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';
import { NgxMaskModule } from 'ngx-mask';
import { TooltipIconComponent } from './tooltip-icon/tooltip-icon.component';
import { ModalComponent } from './modal/modal.component';
import { InputFeedbackComponent } from './input-feedback-icon/input-feedback.component';
import { BackButtonComponent } from './buttons/back-button/back-button.component';
import { AccordionComponent } from './accordion/accordion.component';
import { RouterModule } from '@angular/router';
import { InputCaixaComponent } from './input-caixa/input-caixa.component';
import { InputCaixaDirective } from './input-caixa/input-caixa.directive';
import { TableCaixaDirective } from './tables/table-caixa/table-caixa.directive';
import { SelectCaixaComponent } from './select-caixa/select-caixa.component';
import { SelectCaixaDirective } from './select-caixa/select-caixa.directive';

@NgModule({
	declarations: [
		BootstrapSelectComponent,
		ContentCardComponent,
		TableCaixaComponent,
		TableCaixaDirective,
		CustomChartComponent,
		NgxSpinnerDefaultComponent,
		TooltipIconComponent,
		ModalComponent,
		InputFeedbackComponent,
		BackButtonComponent,
		AccordionComponent,
		InputCaixaComponent,
		InputCaixaDirective,
		SelectCaixaDirective,
		SelectCaixaComponent
	],
	imports: [
		CommonModule,
		NgxSpinnerModule,
		ChartsModule,
		RouterModule,
		NgxMaskModule.forChild()
	],
	exports: [
		BootstrapSelectComponent,
		ContentCardComponent,
		TableCaixaComponent,
		TableCaixaDirective,
		NgxSpinnerDefaultComponent,
		CustomChartComponent,
		TooltipIconComponent,
		ModalComponent,
		InputFeedbackComponent,
		BackButtonComponent,
		AccordionComponent,
		InputCaixaComponent,
		InputCaixaDirective,
		SelectCaixaDirective,
		SelectCaixaComponent
	]
})
export class SharedComponentsModule { }
