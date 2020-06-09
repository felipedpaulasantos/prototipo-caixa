import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedComponentsModule } from "../../shared/components/shared-components.module";
import { AccountSelectComponent } from "./account-select.component";
import { AccountCreateModalComponent } from './account-create-modal/account-create-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AccountSelectComponent,
        AccountCreateModalComponent
    ],
    imports: [
        CommonModule,
        SharedComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgxMaskModule.forChild()
    ],
    exports: [
        AccountSelectComponent,
        AccountCreateModalComponent
    ]
})
export class AccountSelectModule {}
