import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoresRoutingModule } from './cores-routing.module';
import { CoresComponent } from './cores.component';


@NgModule({
  declarations: [CoresComponent],
  imports: [
    CommonModule,
    CoresRoutingModule
  ]
})
export class CoresModule { }
