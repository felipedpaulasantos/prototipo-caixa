import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { AccountService } from '../account.service';
import { Account } from '../account';
import { WhatsappApiService } from 'src/app/whatsapp-api/whatsapp-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { mockAccount } from 'src/app/mock/mock-account';
import { mockWhatsappData } from 'src/app/mock/mock-whatsapp-data';
import { fadeInAnimation } from 'src/app/shared/animations/simple-fade.animation';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  animations: [fadeInAnimation]
})
export class AccountProfileComponent implements OnInit, OnDestroy {

  constructor(
    public accountService: AccountService,
    public whatsappService: WhatsappApiService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  /* Mock */
   account: Account = mockAccount;

/*   account: Account; */
  @Output()
  accountEvent = new EventEmitter();

  ngOnInit(): void {

/*    this.route.params.subscribe(params => {
      params.id
        ? this.consultAccount(params.id)
        : this.redirectContaInvalida("Conta não encontrada");
    }); */

    /* Mock */
    this.accountService.setAccount(this.account);
    this.whatsappService.setWaApiData(mockWhatsappData);
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
            this.accountEvent.emit(null);
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

/*   setCurrentAccount(accountId: number, whatsappApiData: any) {
    this.accountService.consultAccountData(accountId)
    .subscribe(
      (account: Account) => {
        this.account = Object.assign(
          new Account(), JSON.parse(JSON.stringify(account))
        );
        this.accountService.setAccount(this.account);
        this.whatsappService.setWaApiData(whatsappApiData);
        this.accountEvent.emit(this.account);
        this.toastr.success(`Conta ${accountId} consultada com sucesso`);
      },
      (error: any) => {
        this.redirectContaInvalida();
      }
    );
  } */

  /* Mock */
	setCurrentAccount(accountId: number, whatsappApiData: any) {
      this.account = mockAccount;
      this.accountService.setAccount(this.account);
      this.whatsappService.setWaApiData(whatsappApiData);
      this.accountEvent.emit(this.account);
      this.toastr.success(`Conta ${accountId} consultada com sucesso`);
  }

  resetAccount() {
    this.account = null;
    this.accountEvent.emit(this.account);
  }

  redirectContaInvalida(msg: string = "Erro ao consultar a conta") {
    this.toastr.error(msg);
    this.router.navigate(['contas']);
  }

  ngOnDestroy(): void {
    this.account = null;
  }

}
