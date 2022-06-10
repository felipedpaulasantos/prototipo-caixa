import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursoComponent } from './recurso.component';
import { InserirRecursoComponent } from './inserir-recurso/inserir-recurso.component';
import { RecursoRoutingModule } from "./recurso-routing.module";

@NgModule({
  declarations: [RecursoComponent, InserirRecursoComponent],
  imports: [
    CommonModule,
    RecursoRoutingModule
  ]
})
export class RecursoModule { }
