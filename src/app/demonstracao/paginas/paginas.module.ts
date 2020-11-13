import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginasComponent } from './paginas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GuiaCaixaModule } from 'src/app/guia-caixa/guia-caixa.module';
import { UploadComponent } from './upload/upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PaginasComponent, UploadComponent],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    SharedModule,
    GuiaCaixaModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PaginasModule { }
