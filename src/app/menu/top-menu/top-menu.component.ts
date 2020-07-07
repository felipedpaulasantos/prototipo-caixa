import { Component, Input, OnInit, ElementRef, ViewChild } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs";

import { UserService } from "../../authentication/users/user.service";
import { User } from "../../authentication/users/user";
import { ModalService } from "src/app/shared/services/modal.service";
import { SideMenuService } from "../side-menu/side-menu.service";
import { StyleService, Tema } from 'src/app/shared/services/style.service';
import { LOGO_CAIXA_BRANCO_SRC } from 'src/app/shared/constants/constants';

@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.scss"]
})
export class TopMenuComponent implements OnInit {

  logoBranco = LOGO_CAIXA_BRANCO_SRC;

  @ViewChild("navbarTop") navbarTop: ElementRef;
  @Input() tema: Tema;
  @Input() resources;
  user$ = new Observable<User>(null);
  user: User;

  constructor(
    private oauthService: OAuthService,
    private userService: UserService,
    private modalService: ModalService,
    private sidemenuService: SideMenuService,
    public styleService: StyleService
  ) {
    this.user$ = this.userService.perfil;
  }

  ngOnInit(): void {
    this.user = this.setMockUser();
  }

  showLogoutModal() {
    this.modalService.show({
      showCancelar: true,
      titulo: "Logout",
      classTitulo: "header-caixa text-danger-dark",
      mensagem: "Deseja realmente sair?",
      btOkTexto: "Sair",
      btnOkClass: "btn btn-caixa btn-danger",
      btnCancelarClass: "btn btn-caixa btn-outline-dark",
      btCancelarTexto: "Cancelar",
      modalBodyClass: "bg-danger-dark text-light-light"
    });

    this.modalService.btOKEvent.subscribe(() => {
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
