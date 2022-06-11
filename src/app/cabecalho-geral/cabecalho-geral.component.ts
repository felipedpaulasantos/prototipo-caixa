import { BehaviorSubject, Subscription } from "rxjs";
import { Clock } from "./clock";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Component, OnInit } from "@angular/core";
import { getCurrentAddress, notEmpty, objIsNotEmpty } from "../shared/utils/utils";
import { environment } from "../../environments/environment";
import { MenuLateralService } from "../menu-lateral-fixo/menu-lateral-fixo.service";

import { Router } from "@angular/router";
import { Role } from "../model/enum/role.enum";
import { ControleAcessoFuncionalidade, Funcionalidade } from "../model/controle-acesso-funcionalidade.model";
import { StyleService } from "../service/style.service";
import { GlobalThemes } from "../model/global-style.model";

@Component({
  selector: "app-cabecalho-geral",
  templateUrl: "./cabecalho-geral.component.html",
  styleUrls: ["./cabecalho-geral.component.css"]
})
export class CabecalhoGeralComponent implements OnInit {

  public version: string = environment.VERSION;
  username = "";
  decodedToken;
  horaAtual: any;
  data: Date;
  clock: Clock = new Clock();
  exibirModalAgencia = false;
  loadingModalAgencia = false;
  listaAgenciasCombo: Array<any>;
  codigoAgenciaAtual: number;
  agenciaAtual: any = {};
  agenciaAtualSelect: any = {};
  flagLoadingAgencia = false;

  // flag para exibir o bloco referente a agencia
  habilitaInteragencia: boolean;
  // flag para indicar se o usuário tem permissão de interagencia
  temPermissaoInteragencia = false;

  public controleAcessoFuncionalidade$ = new BehaviorSubject<ControleAcessoFuncionalidade>(null);

  currentFontSize: string;
  currentTheme: GlobalThemes;
  logoSource: string;
  logoSourceReduzido: string;
  themes: GlobalThemes[] = [];

  fontSizes = [
    { name: "Pequeno", value: "13px" },
    { name: "Padrão", value: "14px" },
    { name: "Grande", value: "15px" },
    { name: "Extra Grande", value: "16px" },
    { name: "Extra Extra Grande", value: "17px" }
  ];

  constructor (
    protected menuService: MenuLateralService,
    //private modalService: MzModalService,
    private router: Router,
    private styleService: StyleService
  ) {
    this.data = new Date();
    this.listaAgenciasCombo = [];
    setInterval(() => {
      this.horaAtual = this.clock.run();
    }, 1000);
  }

  ngOnInit() {
    // this.keycloakService.getTokens().then((tokens: Tokens) => {
    //   if (tokens.accessToken !== undefined && tokens.accessToken !== "") {
    //     const decoded = new JwtHelperService().decodeToken(tokens.accessToken);
    //     this.decodedToken = decoded;
    //     this.username = decoded["given_name"];

    //     this.codigoAgenciaAtual = parseInt(sessionStorage.getItem(environment.localStorageKeys.CODIGO_AGENCIA_VIRTUAL), 10);

    //     this.buscarDadosAgencia(this.codigoAgenciaAtual);

    //     //this.temPermissaoInteragencia = this.controleAcessoService.hasRole(Role.ALTERA_AGENCIA_LOTACAO);
    //   }
    // }).then(() => {
    //   // this.carregarListaAgencias();
    //   this.controleAcessoInteragencia();
    // });

    this.styleService.currentFontSize$.subscribe(fontSize => this.currentFontSize = fontSize);
    this.styleService.currentGlobalStyle$.subscribe(theme => {
      this.currentTheme = theme;
      if (this.currentTheme && this.currentTheme.value) {
        this.logoSource = this.currentTheme.value.theme.cxLogoPrincipal;
        this.logoSourceReduzido = this.currentTheme.value.theme.cxLogoPrincipalReduzido;
      }
    });

    this.themes = this.styleService.getThemes();
    this.setDefaultTheme();
  }

  logout(): void {
    // window.localStorage.removeItem("storageData");
    sessionStorage.removeItem(environment.localStorageKeys.CODIGO_AGENCIA_VIRTUAL);
    //this.keycloakService.logout(getCurrentAddress());
  }

  trocarExibicaoMenuLateral() {
    this.menuService.trocar();
  }

  abrirModalAgencia() {
    // if (this.controleAcessoService.hasRole(Role.ALTERA_AGENCIA_LOTACAO)) {
    //   this.exibirModalAgencia = true;
    // } else {
    //   this.exibirModalAgencia = false;
    //   throw new Error("Acesso negado: Usuário sem permissão de acesso.");
    // }

  }

  fecharModalAgencia() {
    this.exibirModalAgencia = false;
  }

  private carregarListaAgencias(): Subscription {
    if (this.habilitaInteragencia && this.temPermissaoInteragencia) {
      this.loadingModalAgencia = true;
      return this.menuService.carregarListaAgencias().subscribe((PVs) => {
        this.listaAgenciasCombo = PVs["unidades"];
        for (let i = 0; i < this.listaAgenciasCombo.length; i++) {
          this.listaAgenciasCombo[i].index = i;
        }

        this.loadingModalAgencia = false;
      }, (error) => {
        this.loadingModalAgencia = false;
        //this.exibirMensagem(error.error.mensagem || "Erro ao carregar lista de agências", "error");
      });
    }
  }

  // private exibirMensagem(msg: string, type?: string): void {
  //   this.modalService.open(ModalAlertComponent, {
  //     message: msg,
  //     type,
  //     textoFechar: "OK"
  //   });
  // }

  mudarAgencia(): any {
    this.fecharModalAgencia();
    sessionStorage.setItem(environment.localStorageKeys.CODIGO_AGENCIA_VIRTUAL, this.agenciaAtualSelect.numeroUnidade);
  }

  private buscarDadosAgencia(codigoAgencia: number) {
    this.menuService.buscarAgencia(codigoAgencia).subscribe(
      res => {
        if (res && res.nomeUnidade) {
          this.agenciaAtual.nomeUnidade = res.nomeUnidade;
          this.agenciaAtual.numeroUnidade = res.unidade;
          this.agenciaAtual.numeroNomeUnidade = `${(res.unidade.toString().padStart(4, "0"))} - ${res.nomeUnidade}`;

          this.agenciaAtualSelect = this.agenciaAtual;

          sessionStorage.setItem(environment.localStorageKeys.CODIGO_AGENCIA_VIRTUAL, this.agenciaAtual.numeroUnidade);
        }
      },
      err => {
        console.log(err);
      },
      () => { }
    );
  }

  closeAllTabs(): any {
    this.router.navigate(["principal/"]);
  }

  // confirmChangeAgencia(): void {
  //   const agenciaNumeroNomeUnidade = this.agenciaAtualSelect.numeroNomeUnidade;
  //   this.flagLoadingAgencia = true;
  //   this.exibirModalAgencia = false;
  //   this.modalService.open(ModalConfirmComponent, {
  //     message: `Atenção! Serão finalizadas todas as telas de atendimento. Confirme a alteração da Unidade de Contratação para a agência ${agenciaNumeroNomeUnidade}?`,
  //     type: "info",
  //     confirmar: () => {
  //       this.mudarAgencia();
  //       this.flagLoadingAgencia = false;
  //       this.agenciaAtual = this.agenciaAtualSelect;
  //       this.closeAllTabs();
  //     },
  //     cancelar: () => {
  //       this.agenciaAtualSelect = this.agenciaAtual;
  //       this.flagLoadingAgencia = false;
  //       this.exibirModalAgencia = true;
  //     }
  //   });
  // }

  private controleAcessoInteragencia() {

  }

  setTheme(tema: string) {
    this.styleService.setGlobalTheme(tema);
  }

  setFontSize(size: string) {
    this.styleService.setFontSize(size);
  }

  setDefaultTheme() {
    this.styleService.setDefaultStyle();
  }

}
