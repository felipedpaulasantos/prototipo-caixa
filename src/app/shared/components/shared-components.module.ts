import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { NgxSpinnerDefaultComponent } from './ngx-spinner-default/ngx-spinner-default.component';
import { ChartsModule } from 'ng2-charts';
import { NgxMaskModule } from 'ngx-mask';

import { BootstrapSelectComponent } from './bootstrap-select/bootstrap-select.component';
import { CustomChartComponent } from './charts/bar-chart/bar-chart.component';
import { TooltipIconComponent } from './tooltip-icon/tooltip-icon.component';
import { ModalComponent } from './modal/modal.component';
import { BackButtonComponent } from './buttons/back-button/back-button.component';
import { AccordionComponent } from './accordion/accordion.component';
import { InputCaixaComponent } from './input-caixa/input-caixa.component';
import { InputCaixaDirective } from './input-caixa/input-caixa.directive';
import { SelectCaixaComponent } from './select-caixa/select-caixa.component';
import { SelectCaixaDirective } from './select-caixa/select-caixa.directive';
import { CodeViewComponent } from './code-view/code-view.component';

@NgModule({
	declarations: [
		BootstrapSelectComponent,
		CustomChartComponent,
		NgxSpinnerDefaultComponent,
		TooltipIconComponent,
		ModalComponent,
		BackButtonComponent,
		AccordionComponent,
		InputCaixaComponent,
		InputCaixaDirective,
		SelectCaixaDirective,
		SelectCaixaComponent,
		CodeViewComponent
	],
	imports: [
		CommonModule,
		NgxSpinnerModule,
		ChartsModule,
		RouterModule,
		HighlightModule,
		NgxMaskModule.forChild()
	],
	exports: [
		BootstrapSelectComponent,
		NgxSpinnerDefaultComponent,
		CustomChartComponent,
		TooltipIconComponent,
		ModalComponent,
		BackButtonComponent,
		AccordionComponent,
		InputCaixaComponent,
		InputCaixaDirective,
		SelectCaixaDirective,
		SelectCaixaComponent,
		CodeViewComponent
	]
})
export class SharedComponentsModule { }
