import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { AccountService } from "../../account.service";
import { WhatsappProfileAbout } from "../../../whatsapp-api/whatsapp-profile-about";
import { Account } from "../../account";
import { WhatsappProfileBusiness } from "src/app/whatsapp-api/whatsapp-profile-business";
import { WhatsappApiService } from "src/app/whatsapp-api/whatsapp-api.service";

@Component({
  selector: "app-profile-about-form",
  templateUrl: "./profile-about-form.component.html"
})
export class ProfileAboutFormComponent implements OnChanges {
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private accountService: AccountService,
    private whatsappService: WhatsappApiService
  ) {}

  @Input() account: Account;
  @Input() profileAboutData: WhatsappProfileAbout;

  profileAboutForm = this.fb.group({
    text: [null, Validators.required]
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.setProfileAboutData();
  }

  setProfileAboutData() {
    if (!this.profileAboutData
      || Object.keys(this.profileAboutData).length == 0) {
      return;
    }
    this.profileAboutForm.reset();
    this.profileAboutForm.patchValue({
      text: this.profileAboutData.text
    });
  }

  onProfileAboutSubmit() {
    const data = this.profileAboutForm.value;

    this.whatsappService
      .updateAccountProfileAbout(data, this.account.id)
      .subscribe(
        (response: any) => {
          if (response && response.errors) {
            return this.toastr.error(
              `Erro na requisição:<br> ${response.errors[0].details}`
            );
          }
          return this.toastr.success("Perfil atualizado com sucesso");
        },
        (err: Error) =>
          this.toastr.error(
            `Não foi possível atualizar o perfil: ${err.message}`,
            "Erro"
          )
      );
  }
}
