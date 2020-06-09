import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { MessageFilterFormComponent } from './message-filter-form/message-filter-form.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [MessageFilterFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    SharedComponentsModule,
    NgxMaskModule.forChild()
  ],
  exports: [
    MessageFilterFormComponent
  ]
})
export class MessagesModule { }
