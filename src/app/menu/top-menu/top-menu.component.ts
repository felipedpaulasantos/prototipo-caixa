import { Component, Input, OnInit, ElementRef, ViewChild, Renderer2 } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs";

import { UserService } from "../../authentication/users/user.service";
import { User } from "../../authentication/users/user";
import { ModalService } from "src/app/guia-caixa/services/modal.service";
import { SideMenuService } from "../side-menu/side-menu.service";
import { GuiaCaixaStyleService, Tema } from "src/app/guia-caixa/services/style-guia-caixa.service";
import { LOGO_CAIXA_BRANCO_SRC, LOGO_COMPLETO_BRANCO_SRC, Meses } from "src/app/guia-caixa/constants/constants";
import { StyleService } from "src/app/shared/services/style.service";

@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.scss"]
})
export class TopMenuComponent implements OnInit {

  logoXBranco = LOGO_CAIXA_BRANCO_SRC;
  logoCompletoBranco = LOGO_COMPLETO_BRANCO_SRC;

  @ViewChild("navbarTop") navbarTop: ElementRef;
  @Input() tema: Tema;
  @Input() resources;
  user$ = new Observable<User>(null);
  user: User;
  isMenuAberto: boolean;
  dataHora: string;

  constructor(
    private oauthService: OAuthService,
    private userService: UserService,
    private modalService: ModalService,
    private sidemenuService: SideMenuService,
    private styleService: StyleService,
    private renderer: Renderer2
  ) {
    this.user$ = this.userService.perfil;
    this.sidemenuService.isAberto$.subscribe(isAberto => this.isMenuAberto = isAberto);
    this.showDate();
    this.setDefaultTheme();
  }

  fontSizes = [
    { name: "Médio", value: "13px" },
    { name: "Grande", value: "14px" },
    { name: "Extra Grande", value: "15px" }
  ];

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
      modalBodyClass: "bg-danger-dark text-cinza-light"
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

  showDate(): void {
    this.setDate(new Date());
    setInterval(() => {
      this.setDate(new Date());
    }, 1000);
  }

  setDate(data: Date) {
    const hora = String(data.getHours()).padStart(2, "0");
    const minutos = String(data.getMinutes()).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = Meses[data.getMonth()];
    const ano = data.getFullYear();

    this.dataHora = `${hora}h${minutos} - ${dia} ${mes} ${ano}`;
  }

  setFontSize(fontSize: string): void {
    this.styleService.setFontSize(fontSize);
  }

  setTheme(tema: string) {
    this.styleService.setGlobalTheme(tema);
  }

  setDefaultTheme() {
    this.styleService.setDefaultStyle();
  }

}
