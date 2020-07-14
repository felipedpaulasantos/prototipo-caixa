import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AccountParametersFormComponent } from "./account-parameters/account-parameters.component";
import { ProfileAboutFormComponent } from "./profile-about-form/profile-about-form.component";
import { ProfileBusinessFormComponent } from "./profile-business-form/profile-business-form.component";
import { ProfilePhotoFormComponent } from "./profile-photo-form/profile-photo-form.component";
import { ProfileSettingsFormComponent } from "./profile-settings-form/profile-settings.form.component";
import { AccountProfileComponent } from "./account-profile.component";
import { SharedComponentsModule } from "../../shared/components/shared-components.module";
import { NgxMaskModule } from 'ngx-mask';
import { GuiaCaixaModule } from 'src/app/guia-caixa/guia-caixa.module';

@NgModule({
    declarations: [
        AccountParametersFormComponent,
        ProfileAboutFormComponent,
        ProfileBusinessFormComponent,
        ProfilePhotoFormComponent,
        ProfileSettingsFormComponent,
        AccountProfileComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentsModule,
        GuiaCaixaModule,
        NgxMaskModule.forChild()
    ],
    exports: [
        AccountProfileComponent
    ]
})
export class AccountProfileModule {}
