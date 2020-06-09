import { NgModule } from '@angular/core';

import { ActivationFormComponent } from './activation-form/activation-form.component';
import { DockerConnectionFormComponent } from './docker-connection-form/docker-connection-form.component';
import { AccountActivationComponent } from './account-activation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
		declarations: [
				ActivationFormComponent,
				DockerConnectionFormComponent,
				AccountActivationComponent
		],
		imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				SharedComponentsModule
		],
		exports: [AccountActivationComponent]
})
export class AccountActivationModule {}
