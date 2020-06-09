import { Component, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AccountService } from "../../account.service";

declare var $;

@Component({
  selector: "app-account-create-modal",
  templateUrl: "account-create-modal.component.html",
  styleUrls: ["account-create-modal.component.css"]
})
export class AccountCreateModalComponent {
  @ViewChild("accountCreateModal", { static: true })
  private modal: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private accountService: AccountService
  ) {}

  accountForm = this.fb.group({
    id: [null, [Validators.required, Validators.minLength(12)]],
    endpoint: [null, Validators.required],
    status: ["A", Validators.required],
    user: [null, Validators.required],
    description: [null, Validators.required],
    serviceParameters: this.fb.group({
      name: [null, Validators.required],
      endpoint: [null, Validators.required],
      storeReceivedMessages: [true],
      storeSentMessages: [true],
      updateErrors: [true],
      updateStatus: [true]
    })
  });

  createAccount() {
    if (this.accountForm.invalid) {
      return this.toastr.error("Dados inválidos.");
    }

    this.toastr.success("Conta criada com sucesso");
    this.accountForm.reset();
    this.cancelar();
    this.accountService.listAccounts();
  }

  cancelar() {
    $(this.modal.nativeElement).modal("hide");
  }
}
