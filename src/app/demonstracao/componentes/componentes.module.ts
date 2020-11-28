import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes.component';
import { CardsComponent } from './cards/cards.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { BotoesComponent } from './botoes/botoes.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { InputsComponent } from './inputs/inputs.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { TabelasComponent } from './tabelas/tabelas.component';
import { DataTablesModule } from 'angular-datatables';
import { HighlightModule } from 'ngx-highlightjs';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DocumentacaoTemplateComponent } from './documentacao-template/documentacao-template.component';
import { SelectComponent } from './select/select.component';
import { GuiaCaixaModule } from 'src/app/guia-caixa/guia-caixa.module';
import { TabberDemonstracaoComponent } from './tabber-demonstracao/tabber-demonstracao.component';

@NgModule({
  imports: [
    ComponentesRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    DataTablesModule,
    HighlightModule,
    PerfectScrollbarModule,
    GuiaCaixaModule
  ],
  declarations: [
    ComponentesComponent,
    CardsComponent,
    BotoesComponent,
    MensagensComponent,
    InputsComponent,
    TabelasComponent,
    DocumentacaoTemplateComponent,
    SelectComponent,
    TabberDemonstracaoComponent
  ],
  exports: [
    CardsComponent,
    BotoesComponent,
    MensagensComponent,
    DocumentacaoTemplateComponent
  ]
})
export class ComponentesModule { }
