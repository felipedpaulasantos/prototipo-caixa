import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { AccountService } from "../../account.service";
import { WhatsappProfileBusiness } from "../../../whatsapp-api/whatsapp-profile-business";
import { Account } from "../../account";
import { WhatsappApiService } from "src/app/whatsapp-api/whatsapp-api.service";

@Component({
  selector: "app-profile-business-form",
  templateUrl: "./profile-business-form.component.html"
})
export class ProfileBusinessFormComponent implements OnChanges {
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private whatsappService: WhatsappApiService
  ) {}

  @Input() account: Account;
  @Input() businessData: WhatsappProfileBusiness;

  profileBusinessForm = this.fb.group({
    address: [null],
    description: [null],
    email: [null],
    website1: [null],
    website2: [null],
    vertical: [null]
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.setBusinessData();
  }

  setBusinessData() {
    if (!this.businessData || Object.keys(this.businessData).length == 0) {
      return;
    }

    this.profileBusinessForm.reset();

    const businessData = this.businessData;
    this.profileBusinessForm.patchValue({
      address: businessData.address,
      description: businessData.description,
      email: businessData.email,
      website1: businessData.websites ? businessData.websites[0] : null,
      website2: businessData.websites ? businessData.websites[1] : null,
      vertical: businessData.vertical
    });
  }

  onProfileBusinessSubmit() {
    const data = this.profileBusinessForm.value;
    data.websites = [data.website1, data.website2];
    delete data.website1;
    delete data.website2;

    this.whatsappService
      .updateAccountProfileBusiness(data, this.account.id)
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
