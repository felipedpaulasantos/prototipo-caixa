import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import { Account } from "../../account";
import { AccountService } from "../../account.service";
import { ApplicationParameter } from "./ApplicationParameter";
import { ToastrService } from "ngx-toastr";
import { fadeAnimation } from 'src/app/shared/animations/simple-fade.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { WhatsappApiService } from 'src/app/whatsapp-api/whatsapp-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { mockAccount } from 'src/app/mock/mock-account';

declare var $;

@Component({
  selector: "app-parameters-form",
  templateUrl: "account-parameters.component.html",
  animations: [fadeAnimation]
})
export class AccountParametersFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private whatsappService: WhatsappApiService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

/*   @Input() account: Account;
  @Input() appParameters: ApplicationParameter[];
  originalAppParameters: ApplicationParameter[]; */

  /* Mock */
  @Input() account = mockAccount;
  @Input() appParameters: ApplicationParameter[];
  originalAppParameters: ApplicationParameter[];

	accountParametersForm = this.fb.group({
		endpoint: [null],
		status: [null, Validators.required],
	  user: [null, [Validators.required]],
    description: [null, Validators.required],
    serviceParameters: this.fb.group({
      name: [null, Validators.required],
      endpoint: [null, Validators.required],
      storeReceivedMessages: [false],
      storeSentMessages: [false],
      updateErrors: [false],
      updateStatus: [false]
    })
  });

  ngOnInit() {

/*     this.route.params.subscribe(params => {
      params.id
        ? this.consultAccount(params.id)
        : this.redirectContaInvalida("Conta não encontrada");
    }); */

/*     this.accountService.currentAccount$.subscribe(currentAccount => {
      currentAccount
        ? this.consultAccount(currentAccount.id)
        : this.redirectContaInvalida();
    });
    this.originalAppParameters = this.appParameters; */

    this.setParametersData();
  }

  consultAccount(id: number): void {

    this.toastr.info("Consultando a conta...");

    this.resetAccount();
    this.accountService.resetAccount();
    this.whatsappService.resetApiData();

		this.whatsappService
			.consultAccount(id)
			.subscribe(
				(whatsappApiData: any) => {
          if (!whatsappApiData) {
            this.redirectContaInvalida(`Erro ao consultar a conta ${id}`);
					} else {
            this.setCurrentAccount(id, whatsappApiData);
					}
				},
				(err: Error) => {
          console.error(err);
          this.spinner.hide();
					return this.redirectContaInvalida();
        }
      );
  }

  setCurrentAccount(accountId: number, whatsappApiData: any) {
    this.accountService.consultAccountData(accountId)
    .subscribe(
      (account: Account) => {
        this.account = Object.assign(
          new Account(), JSON.parse(JSON.stringify(account))
        );
        this.accountService.setAccount(this.account);
        this.whatsappService.setWaApiData(whatsappApiData);
        this.setParametersData();
        this.toastr.success(`Conta ${accountId} consultada com sucesso`);
      },
      (error: any) => {
        this.redirectContaInvalida();
      }
    );
  }

  setParametersData() {
/*     if (!this.account || !this.appParameters) {
      this.accountParametersForm.reset();
      return;
    } */

    this.accountParametersForm.reset();

    const account = this.account;

    this.accountParametersForm.patchValue({
      endpoint: account.endpoint,
      status: account.status,
      user: account.user,
      description: account.description
    });

    this.accountParametersForm.get("serviceParameters").patchValue({
      name: account.serviceParameters.name,
      endpoint: account.serviceParameters.endpoint,
      storeReceivedMessages: account.serviceParameters.storeReceivedMessages,
      storeSentMessages: account.serviceParameters.storeSentMessages,
      updateErrors: account.serviceParameters.updateErrors,
      updateStatus: account.serviceParameters.updateStatus
    });
  }

  selectParameterInput(parameter: ApplicationParameter): any {
    const inputId = `#parameter_${parameter.number}`;
    const input: any = $(inputId)[0];
    return input;
  }

  updateServiceParameter(): void {
    const data = this.accountParametersForm.value as Account;
    data.serviceParameters = this.accountParametersForm.get(
      "serviceParameters"
    ).value;

    this.accountService
      .updateAccountParameters(data, this.account.id)
      .subscribe(
        (response: any) => {
          if (response && response.errors) {
            return this.toastr.error(
              `Erro na requisição:<br> ${response.errors[0].details}`
            );
          }
          return this.toastr.success("Parâmetros atualizados com sucesso");
        },
        error => this.toastr.error("Não foi possível atualizar os parâmetros")
      );
  }

  updateParameter(parameter: ApplicationParameter): void {
    const input = this.selectParameterInput(parameter);

    this.accountService
      .updateServiceParameters(parameter.number, input.value)
      .subscribe(
        (response: any) => {
          if (response && response.errors) {
            return this.toastr.error(
              `Erro na requisição:<br> ${response.errors[0].details}`
            );
          }
          return this.toastr.success(
            `Parâmetro '${parameter.number} - ${parameter.name}' atualizado com sucesso`
          );
        },
        error =>
          this.toastr.error(
            `Erro ao atualizar o parâmetro '${parameter.number} - ${parameter.name}'`
          )
      );
  }

  resetParameter(parameter: ApplicationParameter) {
    const originalAppParameter = this.originalAppParameters.find(
      originalParam => parameter.number == originalParam.number
    );

    if (originalAppParameter) {
      const input = this.selectParameterInput(parameter);
      input.value = originalAppParameter.value;
    }
  }

  redirectContaInvalida(msg: string = "Erro ao consultar a conta") {
    this.toastr.error(msg);
    this.router.navigate(['contas']);
  }

  resetAccount() {
    this.account = null;
  }
}
