import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ExpedienteRoutingModule } from './expediente-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpedienteComponent } from './expediente.component';
import { ExtinguirExpedienteComponent } from './extinguir-expediente/extinguir-expediente.component';
import { InserirExpedienteComponent } from './inserir-expediente/inserir-expediente.component';
import { ExcluirExpedienteComponent } from './excluir-expediente/excluir-expediente.component';
import { ReativarExpedienteComponent } from './reativar-expediente/reativar-expediente.component';
import { ConsultarExpedienteComponent } from './consultar-expediente/consultar-expediente.component';

@NgModule({
  declarations: [ExpedienteComponent, ExtinguirExpedienteComponent, InserirExpedienteComponent, ExcluirExpedienteComponent, ReativarExpedienteComponent, ConsultarExpedienteComponent],
  imports: [
    CommonModule,
    NgxMaskModule,
    FormsModule,
    ReactiveFormsModule,
    ExpedienteRoutingModule,
    SharedModule
  ]
})
export class ExpedienteModule { }
