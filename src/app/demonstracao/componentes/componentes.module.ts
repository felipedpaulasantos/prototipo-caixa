import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes.component';
import { CardsComponent } from './cards/cards.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { BotoesComponent } from './botoes/botoes.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { TabelasComponent } from './tabelas/tabelas.component';
import { DataTablesModule } from 'angular-datatables';
import { HighlightModule } from 'ngx-highlightjs';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DocumentacaoTemplateComponent } from './documentacao-template/documentacao-template.component';

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
    PerfectScrollbarModule
  ],
  declarations: [
    ComponentesComponent,
    CardsComponent,
    BotoesComponent,
    MensagensComponent,
    FormulariosComponent,
    TabelasComponent,
    DocumentacaoTemplateComponent
  ],
  exports: [
    CardsComponent,
    BotoesComponent,
    MensagensComponent,
    DocumentacaoTemplateComponent
  ]
})
export class ComponentesModule { }
