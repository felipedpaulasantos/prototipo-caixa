import { Component, Input, OnInit, ElementRef, ViewChild } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs";

import { AccountService } from "../../account/account.service";
import { UserService } from "../../authentication/users/user.service";
import { User } from "../../authentication/users/user";
import { ModalService } from "src/app/shared/services/modal.service";
import { SideMenuService } from "../side-menu/side-menu.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.css"]
})
export class TopMenuComponent implements OnInit {
  @ViewChild("navbarTop", { static: true }) navbarTop: ElementRef;
  @Input() resources;
  hasAccount: boolean;
  user$ = new Observable<User>(null);
  user: User;

  constructor(
    private accountService: AccountService,
    private oauthService: OAuthService,
    private userService: UserService,
    private modalService: ModalService,
    private sidemenuService: SideMenuService
  ) {
    this.user$ = this.userService.perfil;
  }

  ngOnInit(): void {
    this.accountService.currentAccount$.subscribe(account => {
      if (account) {
        this.hasAccount = true;
      }
    });
    this.user = this.setMockUser();
  }

  showLogoutModal() {
    this.modalService.show({
      showCancelar: true,
      titulo: "Logout",
      mensagem: "Deseja realmente sair?",
      btOkTexto: "Sair",
      btnOkClass: "btn btn-danger btn-caixa",
      btCancelarTexto: "Cancelar"
    });

    this.modalService.btOKEvent.subscribe(e => {
      this.sair();
    });
  }

  sair(): void {
    this.oauthService.logOut();
  }

  trocaMenuLateral() {
    this.sidemenuService.trocar();
  }

  setMockUser(): User {
    return {
      nome_completo: "Usuário Teste",
      primeiro_nome: "Usuário",
      matricula: "C123456",
      roles: []
    };
  }

}
