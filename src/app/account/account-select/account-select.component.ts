import { Component, OnInit, ViewChild, Output, EventEmitter, AfterContentChecked, ComponentFactoryResolver, Injector, AfterViewInit } from '@angular/core';
import { ToastrService  } from 'ngx-toastr';

import { AccountService } from '../account.service';
import { Account } from '../account';

import { mockAccount, mockAccount2, mockAccounts } from 'src/app/mock/mock-account';
import { SideMenuService } from 'src/app/menu/side-menu/side-menu.service';
import { AccountActivationComponent } from '../account-activation/account-activation.component';
import { ContextoInjecaoComponente } from 'src/app/menu/side-menu/contexto-injecao-componente';
import { AccountSidemenuComponent } from '../account-sidemenu/account-sidemenu.component';
import { DataTableService } from 'src/app/shared/services/datatable-service/datatable.service';
import { Router } from '@angular/router';

declare var $;

@Component({
	selector: 'app-account-select',
	templateUrl: './account-select.component.html'
})
export class AccountSelectComponent implements OnInit {

	constructor(
    private accountService: AccountService,
    private datatableService: DataTableService,
    private toastr: ToastrService,
    private menuService: SideMenuService,
    private factoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private router: Router
  ) {}

  @ViewChild('selectConta', { static: true })
  selectConta: any;

/*   account: Account;
  accounts: Account[]; */

  /* Mock */
  account: Account = mockAccount;
  accounts: Account[] = [mockAccount, mockAccount, mockAccount2, mockAccount2];

  @Output()
  accountEvent = new EventEmitter();

	ngOnInit(): void {
    if (!this.accounts) {
      this.listAccounts();
    }
    this.menuService.receberContexto(this.factoryResolver, this.injector, AccountSidemenuComponent);
  }

	listAccounts() {

    this.accountService
      .listAccounts()
      .subscribe(
      (accounts: Account[]) => {
        if (!accounts || accounts.length == 0) {
          return this.toastr.warning('Nenhuma conta retornada.');
        }
        const newAccounts: Account[] = [];
        accounts.forEach(account => {
          newAccounts.push(
            Object.assign(
              new Account(), JSON.parse(JSON.stringify(account))
            ));
        });
        this.accounts = newAccounts;
        this.accountService.setAccounts(this.accounts);
        this.datatableService.initializePrePopulated("#dataTable");
      },
      (err: Error) => {
        return this.toastr.error(`Não foi possível consultar as contas da Caixa`);
      });
	}

  showCreateAccountModal() {
    $('#accountCreateModal').modal('show');
  }

	resetAccount() {
    this.account = null;
    this.accountEvent.emit(this.account);
  }

  redirectTo(id: string) {
    this.router.navigate(['contas', 'lista', id]);
  }

}
