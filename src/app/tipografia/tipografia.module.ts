import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipografiaRoutingModule } from './tipografia-routing.module';
import { TipografiaComponent } from './tipografia.component';


@NgModule({
  declarations: [TipografiaComponent],
  imports: [
    CommonModule,
    TipografiaRoutingModule
  ]
})
export class TipografiaModule { }
