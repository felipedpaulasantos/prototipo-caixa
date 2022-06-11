import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaseRoutingModule } from './fase-routing.module';

import { FaseComponent } from './fase.component';
import { ConsultarFaseComponent } from './consultar-fase/consultar-fase.component';
import { InserirFaseComponent } from './inserir-fase/inserir-fase.component';

@NgModule({
  declarations: [FaseComponent, ConsultarFaseComponent, InserirFaseComponent],
  imports: [
    CommonModule,
    FaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FaseModule { }
