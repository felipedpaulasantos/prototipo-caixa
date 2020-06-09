import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AccountActivationModule } from './account-activation/account-activation.module';
import { AccountProfileModule } from './account-profile/account-profile.module';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountSelectModule } from './account-select/account-select.module';
import { AccountSidemenuComponent } from './account-sidemenu/account-sidemenu.component';

@NgModule({
	imports: [
		AccountActivationModule,
		AccountProfileModule,
		AccountSelectModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgxSpinnerModule,
		SharedComponentsModule,
		AccountRoutingModule
	],
	declarations: [AccountSidemenuComponent]
})
export class AccountModule { }
