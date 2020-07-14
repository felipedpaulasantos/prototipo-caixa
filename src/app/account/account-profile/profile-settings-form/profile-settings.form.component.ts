import {
  Component,
  Input,
  SimpleChanges,
  OnChanges} from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { WhatsappSettings } from "../../../whatsapp-api/whatsapp-settings";
import { Account } from "../../account";
import { WhatsappApiService } from "src/app/whatsapp-api/whatsapp-api.service";

@Component({
  selector: "app-profile-settings-form",
  templateUrl: "./profile-settings-form.component.html"
})
export class ProfileSettingsFormComponent implements OnChanges {
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private whatsappService: WhatsappApiService
  ) {}

  @Input() account: Account;
  @Input() settingsData: WhatsappSettings;

  settingsForm = this.fb.group({
    callback_backoff_delay_ms: [null, Validators.required],
    max_callback_backoff_delay_ms: [null, Validators.required],
    heartbeat_interval: [null, Validators.required],
    unhealthy_interval: [null, Validators.required],
    pass_through: [null],
    sent_status: [null],
    callback_persist: [null],
    webhooks: this.fb.group({
      url: [null, Validators.required],
      max_concurrent_requests: [null, Validators.required]
    })
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.setSettingsData();
  }

  setSettingsData() {
    if (!this.settingsData || Object.keys(this.settingsData).length == 0) {
      return;
    }
    this.settingsForm.reset();
    const profileSettingsData = this.settingsData;

    this.settingsForm.patchValue({
      callback_backoff_delay_ms: profileSettingsData.callback_backoff_delay_ms,
      max_callback_backoff_delay_ms:
        profileSettingsData.max_callback_backoff_delay_ms,
      heartbeat_interval: profileSettingsData.heartbeat_interval,
      unhealthy_interval: profileSettingsData.unhealthy_interval,
      pass_through: profileSettingsData.pass_through,
      sent_status: profileSettingsData.sent_status,
      callback_persist: profileSettingsData.callback_persist
    });

    this.settingsForm.get("webhooks").patchValue({
      url: profileSettingsData.webhooks
      ? profileSettingsData.webhooks.url
      : null,
    max_concurrent_requests: profileSettingsData.webhooks
      ? profileSettingsData.webhooks.max_concurrent_requests
      : null
    });
  }

  onProfileSettingsSubmit() {
    const data = this.settingsForm.value;
    this.whatsappService.updateProfileSettings(data, this.account.id).subscribe(
      (response: any) => {
        if (response && response.errors) {
          return this.toastr.error(
            `Erro na requisição:<br> ${response.errors[0].details}`
          );
        }
        return this.toastr.success("Configurações atualizadas com sucesso");
      },
      (err: Error) =>
        this.toastr.error(
          `Não foi possível atualizar o perfil: ${err.message}`,
          "Erro"
        )
    );
  }
}
