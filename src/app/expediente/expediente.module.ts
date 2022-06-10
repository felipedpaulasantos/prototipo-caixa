import { ExpedienteRoutingModule } from './expediente-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpedienteComponent } from './expediente.component';
import { ExtinguirExpedienteComponent } from './extinguir-expediente/extinguir-expediente.component';
import { InserirExpedienteComponent } from './inserir-expediente/inserir-expediente.component';
import { ExcluirExpedienteComponent } from './excluir-expediente/excluir-expediente.component';
import { ReativarExpedienteComponent } from './reativar-expediente/reativar-expediente.component';

@NgModule({
  declarations: [ExpedienteComponent, ExtinguirExpedienteComponent, InserirExpedienteComponent, ExcluirExpedienteComponent, ReativarExpedienteComponent],
  imports: [
    CommonModule,
    ExpedienteRoutingModule
  ]
})
export class ExpedienteModule { }
