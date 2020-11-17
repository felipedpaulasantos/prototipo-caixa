import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaginasComponent } from './paginas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { GuiaCaixaModule } from 'src/app/guia-caixa/guia-caixa.module';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [PaginasComponent, UploadComponent],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    SharedModule,
    GuiaCaixaModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule
  ]
})
export class PaginasModule { }
