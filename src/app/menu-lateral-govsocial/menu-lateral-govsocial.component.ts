import {Component, OnInit, ComponentFactoryResolver, Injector, OnDestroy} from "@angular/core";
import {Router, NavigationEnd} from "@angular/router";
import { environment } from "./../../environments/environment";
import { CpfNisService } from "../governo-social/pesquisa-cpf-nis/cpf-nis.service";
import { Cidadao } from "../governo-social/model/cliente.model";
import { notEmpty, objIsNotEmpty } from "./../shared/utils/utils";
import { ControleAcessoFuncionalidadeService } from "../service/controle-acesso-funcionalidade.service";
import { ControleAcessoFuncionalidade, Funcionalidade } from "../model/controle-acesso-funcionalidade.model";
import { AccordionMenuItem } from "../shared/caixa-components/accordion/types/accordion-menu-item";
import { Subscription } from "rxjs";
import { MenuItemComponent } from "../shared/caixa-components/accordion/menu-item/menu-item.component";

@Component({
  selector: "app-menu-lateral-govsocial",
  templateUrl: "./menu-lateral-govsocial.component.html",
  styleUrls: ["./menu-lateral-govsocial.component.css"]
})
export class MenuLateralGovsocialComponent implements OnInit, OnDestroy {

  listaCidadao: Cidadao[];
  isResumo: boolean;
  isCadastro: boolean;
  isCartaoSocial: boolean;
  isIdentificacaoPositiva: boolean;
  isFgts: boolean;
  isSistematicaSaqueFgts: boolean;
  isServicoFgts: boolean;
  isSaqueAniversario: boolean;
  isSaqueImediato: boolean;
  isSaqueEmergencial94620: boolean;
  isPis: boolean;
  isBeneficiosSociais: boolean;
  isSeguroDesemprego: boolean;
  isInss: boolean;
  isPortifolio: boolean;
  isPoupancaCaixaFacil: boolean;
  isConsultaAlternativaCPF: boolean;
  isSenhaCidadao: boolean;

  items: AccordionMenuItem[] = [];
  subscription = new Subscription();

  constructor(
    public router: Router,
    public controleAcesso: ControleAcessoFuncionalidadeService,
    public cpfNisService: CpfNisService
    ) {}

  ngOnInit() {
    this.consultarMudancaRota();
    this.consultarMudancaCliente();
  }

  consultarMudancaCliente() {
    this.subscription.add(this.cpfNisService.listaCidadao$
      .subscribe(
        (listaCidadao: Cidadao[]) => {
          this.listaCidadao = listaCidadao;
          this.setFuncionalidadePermissao();
        }
    ));
  }

  consultarMudancaRota() {
    this.subscription.add(this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) { this.montaItensMenu() }
    }));
  }

  setFuncionalidadePermissao(): void {

    this.controleAcesso.controleAcessoFuncionalidade$
      .subscribe(
        (controleAcessoFuncionalidade: ControleAcessoFuncionalidade) => {

          if (objIsNotEmpty(controleAcessoFuncionalidade)
            && notEmpty(controleAcessoFuncionalidade.funcionalidades)) {

              const funcionalidades = controleAcessoFuncionalidade.funcionalidades;
              this.isConsultaAlternativaCPF = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_inss_consultaAlternativaCPF);

              // Fluxo alternativo de consulta ao SIABE quando o CPF não constar no SIISO
              if (this.isConsultaAlternativaCPF) {
                if (notEmpty(this.listaCidadao)) {
                  if (objIsNotEmpty(this.listaCidadao[0].documentos.nis)) {
                    this.habilitarMenuLateral();
                  } else {
                    this.desabilitarMenuLateral();
                  }
                }
              } else {
                this.habilitarMenuLateral();
              }
          }

        },
        (error: any) => {
          console.log("Error ao buscar permissões para a funcionalide", error);
        }
      );

  }

  habilitarMenuLateral(): void {
    this.controleAcesso.controleAcessoFuncionalidade$
      .subscribe(
        (controleAcessoFuncionalidade: ControleAcessoFuncionalidade) => {
          if (objIsNotEmpty(controleAcessoFuncionalidade)
            && notEmpty(controleAcessoFuncionalidade.funcionalidades)) {
              const funcionalidades = controleAcessoFuncionalidade.funcionalidades;
              this.isResumo = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_resumo);
              this.isCadastro = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_cadastro);
              this.isCartaoSocial = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_cartaoSocial);
              this.isSenhaCidadao = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_senhaCidadao);
              this.isIdentificacaoPositiva = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_identificacaoPositiva);
              this.isFgts = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_fgts);
              this.isSistematicaSaqueFgts = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_sistematicaSaqueFgts);
              this.isServicoFgts = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_servicoFgts);
              this.isSaqueAniversario = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_saqueAniversario);
              this.isSaqueImediato = this.controleAcesso.getFuncionalidadePermissao(funcionalidades
                , Funcionalidade.govsocial_saqueImediato);
              this.isSaqueEmergencial94620 = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_saqueEmergencial94620);
              this.isPis = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_pis);
              this.isBeneficiosSociais = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_beneficiosSociais);
              this.isSeguroDesemprego = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_seguroDesemprego);
              this.isInss = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_inss);
              this.isPortifolio = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_portifolio);
              this.isPoupancaCaixaFacil = this.controleAcesso.getFuncionalidadePermissao(funcionalidades,
                 Funcionalidade.govsocial_poupancaCaixaFacil);
              this.montaItensMenu();
          }
        },
        (error: any) => {
          console.log("Error ao buscar permissões para o menu", error);
        }
      );
  }

  desabilitarMenuLateral(): void {
    this.isResumo = true;
    this.isCadastro = false;
    this.isCartaoSocial = false;
    this.isSenhaCidadao = false;
    this.isFgts = false;
    this.isSistematicaSaqueFgts = false;
    this.isSaqueAniversario = false;
    this.isSaqueImediato = false;
    this.isSaqueEmergencial94620 = false;
    this.isPis = false;
    this.isBeneficiosSociais = false;
    this.isSeguroDesemprego = false;
    this.isInss = true;
    this.isPortifolio = false;
    this.isPoupancaCaixaFacil = false;
    this.isServicoFgts = false;
    this.isIdentificacaoPositiva = true;
    this.montaItensMenu();
  }

  public redirecionaPara(rota: string) {
    console.log("this.router.url", this.router.url);
    this.router.navigate(["govsocial/" + rota]);
  }

  public isRotaAtiva(rota: string): boolean {
    return this.router.isActive(rota, true);
  }

  public isAnyRotaAtiva(rotas: string[]): boolean {
    return rotas.some(rota => this.isRotaAtiva(rota));
  }

  montaItensMenu() {
    this.items = [].concat([
      {
        name: "Resumo",
        url: "/govsocial/resumo",
        enabled: this.isResumo,
        active: this.isRotaAtiva("/govsocial/resumo"),
        iconClass: "fa fa-file-alt"
      },
      {
        name: "Cadastro",
        url: "/govsocial/cadastro",
        enabled: this.isCadastro,
        active: this.isRotaAtiva("/govsocial/cadastro"),
        iconClass: "fa fa-user-edit"
      },
      {
        name: "Cartões Sociais",
        url: "/govsocial/cartao-social",
        enabled: this.isCartaoSocial,
        active: this.isRotaAtiva("/govsocial/cartao-social"),
        iconClass: "fa fa-credit-card"
      },
      {
        name: "Senha Cidadão",
        url: "/govsocial/senha-cidadao",
        enabled: this.isSenhaCidadao,
        active: this.isRotaAtiva("/govsocial/senha-cidadao"),
        iconClass: "fa fa-key"
      },
      {
        name: "Identificação Positiva",
        url: "/govsocial/identificacao-positiva",
        enabled: this.isIdentificacaoPositiva,
        active: this.isRotaAtiva("/govsocial/identificacao-positiva"),
        iconClass: "fa fa-user-check"
      },
      {
        name: "FGTS",
        enabled: this.isFgts || this.isSistematicaSaqueFgts || this.isServicoFgts || this.isSaqueEmergencial94620 || this.isSaqueAniversario || this.isSaqueImediato,
        active: this.isAnyRotaAtiva([
          "/govsocial/fgts", "/govsocial/sistematica-saque-fgts/modalidade-saque", "/govsocial/sistematica-saque-fgts/historico-operacoes",
          "/govsocial/sistematica-saque-fgts/garantias-contratadas",
          "/govsocial/servico-fgts/autorizacao-if", "/govsocial/servico-fgts/vinculacao-conta",
          "/govsocial/saque-emergencial", "/govsocial/saque-aniversario", "/govsocial/saque-imediato"
        ]),
        iconClass: "fa fa-users",
        submenu: [
          {
            name: "Consulta",
            url: "/govsocial/fgts",
            enabled: this.isFgts,
            active: this.isRotaAtiva("/govsocial/fgts")
          },
          {
            name: "Saque Aniversário FGTS",
            enabled: this.isSistematicaSaqueFgts,
            active: this.isAnyRotaAtiva([
              "/govsocial/sistematica-saque-fgts/modalidade-saque",
              "/govsocial/sistematica-saque-fgts/historico-operacoes",
              "/govsocial/sistematica-saque-fgts/garantias-contratadas"
            ]),
            submenu: [
              {
                name: "Modalidade",
                url: "/govsocial/sistematica-saque-fgts/modalidade-saque",
                enabled: this.isSistematicaSaqueFgts,
                active: this.isRotaAtiva("/govsocial/sistematica-saque-fgts/modalidade-saque")
              },
              {
                name: "Histórico",
                url: "/govsocial/sistematica-saque-fgts/historico-operacoes",
                enabled: this.isSistematicaSaqueFgts,
                active: this.isRotaAtiva("/govsocial/sistematica-saque-fgts/historico-operacoes")
              },
              {
                name: "Garantias",
                url: "/govsocial/sistematica-saque-fgts/garantias-contratadas",
                enabled: this.isSistematicaSaqueFgts,
                active: this.isRotaAtiva("/govsocial/sistematica-saque-fgts/garantias-contratadas")
              },
            ]
          },
          {
            name: "Serviços FGTS",
            enabled: this.isServicoFgts,
            active: this.isAnyRotaAtiva(["/govsocial/servico-fgts/autorizacao-if", "/govsocial/servico-fgts/vinculacao-conta"]),
            submenu: [
              {
                name: "Autorização",
                url: "/govsocial/servico-fgts/autorizacao-if",
                enabled: this.isServicoFgts,
                active: this.isRotaAtiva("/govsocial/servico-fgts/autorizacao-if")
              },
              {
                name: "Vinculação",
                url: "/govsocial/servico-fgts/vinculacao-conta",
                enabled: this.isServicoFgts,
                active: this.isRotaAtiva("/govsocial/servico-fgts/vinculacao-conta")
              },
            ]
          },
          {
            name: "Saque Emergencial - MP 946/20",
            url: "/govsocial/saque-emergencial",
            enabled: this.isSaqueEmergencial94620,
            active: this.isRotaAtiva("/govsocial/saque-emergencial")
          },
          {
            name: "Saque Aniversário",
            url: "/govsocial/saque-aniversario",
            enabled: this.isSaqueAniversario,
            active: this.isRotaAtiva("/govsocial/saque-aniversario")
          },
          {
            name: "Saque Imediato - MP 889/19",
            url: "/govsocial/saque-imediato",
            enabled: this.isSaqueImediato,
            active: this.isRotaAtiva("/govsocial/saque-imediato")
          },
        ]
      },
      {
        name: "Abono Salarial",
        url: "/govsocial/pis",
        enabled: this.isPis,
        active: this.isRotaAtiva("/govsocial/pis"),
        iconClass: "fa fa-user-friends"
      },
      {
        name: "Benefícios Sociais",
        url: "/govsocial/beneficios-sociais",
        enabled: this.isBeneficiosSociais,
        active: this.isRotaAtiva("/govsocial/beneficios-sociais"),
        iconClass: "fa fa-user-shield"
      },
      {
        name: "Seguro desemprego",
        url: "/govsocial/seguro-desemprego",
        enabled: this.isSeguroDesemprego,
        active: this.isRotaAtiva("/govsocial/seguro-desemprego"),
        iconClass: "fa fa-user-tie"
      },
      {
        name: "INSS",
        url: "/govsocial/inss",
        enabled: this.isInss,
        active: this.isRotaAtiva("/govsocial/inss"),
        iconClass: "fas fa-user-plus"
      },
      {
        name: "Portfólio de Acessos",
        url: "/govsocial/portifolio",
        enabled: this.isPortifolio,
        active: this.isRotaAtiva("/govsocial/portifolio"),
        iconClass: "fa fa-book"
      },
      {
        name: "Poupança CAIXA Fácil",
        url: "/govsocial/poupanca-caixa-facil",
        enabled: this.isPoupancaCaixaFacil,
        active: this.isRotaAtiva("/govsocial/poupanca-caixa-facil"),
        iconClass: "fa fa-piggy-bank"
      },
    ]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
