import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'src/app/shared/components/accordion/types/accordion-config';
import { AccordionMenu } from 'src/app/shared/components/accordion/types/accordion-menu';
import { fadeAnimation } from 'src/app/shared/animations/simple-fade.animation';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-account-sidemenu',
  templateUrl: './account-sidemenu.component.html',
  styleUrls: ['./account-sidemenu.component.scss'],
  animations: [fadeAnimation]
})
export class AccountSidemenuComponent implements OnInit {

  account: Account;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {
    this.accountService.currentAccount$.subscribe(currentAccount => {
      this.account = currentAccount;
    });
  }

  options: AccordionConfig = { multi: false };

  menus: AccordionMenu[] = [
    {
      name: 'Parâmetros da conta',
      iconClass: 'fas fa-lg fa-phone-alt mx-auto',
      onClick: () => { this.navegarPara(``); },
      active: false
    },
    {
      name: 'Parâmetros da aplicação',
      iconClass: 'fas fa-lg fa-check-square mx-auto',
      onClick: () => { this.navegarPara('parametros'); },
      active: false
    },
    {
      name: 'Perfil',
      iconClass: 'fas fa-lg fa-id-card-alt mx-auto',
      onClick: () => { this.navegarPara('perfil'); },
      active: false
    },
    {
      name: 'Configurações',
      iconClass: 'fas fa-lg fa-cogs mx-auto',
      onClick: () => { this.navegarPara('config'); },
      active: false
    },
  ];

  ngOnInit() {}

  navegarPara(path: string, relativa = true) {
    if (relativa) {
      /* this.router.navigate(["contas", { id: this.account.id }, path]); */
      const change = this.router.navigateByUrl(`/contas/${this.account.id}/${path}`);
    } else {
      this.router.navigate([path]);
    }
  }

}
