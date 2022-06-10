import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustaRoutingModule } from './custa-routing.module';

import { InserirCustaComponent } from './inserir-custa/inserir-custa.component';
import { CustaComponent } from './custa.component';
import { ExcluirCustaComponent } from './excluir-custa/excluir-custa.component';


@NgModule({
  declarations: [InserirCustaComponent, CustaComponent, ExcluirCustaComponent],
  imports: [
    CommonModule,
    CustaRoutingModule
  ]
})
export class CustaModule { }
