import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef, Renderer2 } from "@angular/core";
import { AccordionMenuItem } from "../../shared/caixa-components/accordion/types/accordion-menu-item";
import { Subscription } from "rxjs";
import { ControleAcessoFuncionalidade, FuncionalidadeRestricao, Funcionalidade } from "../../model/controle-acesso-funcionalidade.model";
import { objIsNotEmpty, notEmpty, isEmpty } from "../../shared/utils/utils";
import { NavigationEnd, Router } from "@angular/router";
import { MenuLateralService } from "../menu-lateral-fixo.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-menu-lateral-unico",
  templateUrl: "./menu-lateral-unico.component.html",
  styleUrls: ["./menu-lateral-unico.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuLateralUnicoComponent implements OnInit {

  @ViewChild("inputSearch", { read: ElementRef, static: false })
  inputSearch: ElementRef;

  funcionalidades: FuncionalidadeRestricao[];

  subscription = new Subscription();

  isClientePF: boolean;
  isClientePJ: boolean;

  isConsultaAlternativaCPF: boolean;
  isMenuSocialLimitado: boolean;
  isMenuNovoClienteSicli: boolean;

  itemsAvulsos: AccordionMenuItem[] = [];
  itemsComercial: AccordionMenuItem[] = [];
  itemsSocial: AccordionMenuItem[] = [];
  itemsInvestimento: AccordionMenuItem[] = [];
  itemsDeterminacaoJudicial: AccordionMenuItem[] = [];
  itemsDossie: AccordionMenuItem[] = [];
  itemsTrilha: AccordionMenuItem[] = [];
  itemsConfiguracao: AccordionMenuItem[] = [];
  itemsGeral: AccordionMenuItem[] = [];

  itemsCusta: AccordionMenuItem[] = [];
  itemsFase: AccordionMenuItem[] = [];
  itemsExpediente: AccordionMenuItem[] = [];
  itemsRecurso: AccordionMenuItem[] = [];

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private menuService: MenuLateralService
  ) { }

  ngOnInit() {
    this.consultarMenuPermissao();
    this.consultarMudancaRota();
    this.consultarMudancaCliente();
  }

  private consultarMenuPermissao(): void {

  }

  private consultarMudancaRota(): void {
    this.subscription.add(this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.clearInputSearch();
        this.montaItensMenu();
      }
    }));
  }

  private consultarMudancaCliente(): void {

  }

  public isRotaAtiva(rota: string, exact = false): boolean {
    return this.router.isActive(rota, exact);
  }

  public isAnyRotaAtiva(rotas: string[]): boolean {
    return rotas.some((rota: string) => this.isRotaAtiva(rota));
  }

  get ehClienteNovo(): boolean {
    return true;
  }

  get ehClienteNovoPJ(): boolean {
    return true;
  }

  private setIsMenuSocialLimitado(): void {
    if (isEmpty(this.funcionalidades)) { return; }
  }

  private setIsMenuCadastroNovoClienteSicli(): void {

  }

  public getFuncionalidadePermissao(funcionalidade: Funcionalidade): boolean {
    return true;
  }

  public getAnyFuncionalidadePermissao(funcionalidades: Funcionalidade[]): boolean {
    return funcionalidades.some((funcionalidade) => this.getFuncionalidadePermissao(funcionalidade));
  }

  private sortFuncionalidadeFunction(funcA: AccordionMenuItem, funcB: AccordionMenuItem): number {
    return (funcA.order || 0) - (funcB.order || 0);
  }

  private montaItemsCusta(): AccordionMenuItem[] {
    return [].concat([
      {
        name: "Custa",
        enabled: true,
        active: this.isRotaAtiva("/custa"),
        iconClass: "fa fa-dollar-sign",
        order: 1,
        submenu: [
          {
            name: "Inserir Custa",
            url: "/custa/inserir",
            enabled: true,
            active: this.isRotaAtiva("/custa/inserir", true)
          },
          {
            name: "Excluir Custa",
            url: "/custa/excluir",
            enabled: true,
            active: this.isRotaAtiva("/custa/excluir", true)
          }
        ]
      }
    ]);
  }

  private montaItemsExpediente(): AccordionMenuItem[] {
    return [].concat([
      {
        name: "Expediente",
        enabled: true,
        active: this.isRotaAtiva("/expediente"),
        iconClass: "fa fa-balance-scale",
        order: 2,
        submenu: [
          {
            name: "Inserir Expediente",
            url: "/expediente/inserir",
            enabled: true,
            active: this.isRotaAtiva("/expediente/inserir", true)
          },
          {
            name: "Excluir Expediente",
            url: "/expediente/excluir",
            enabled: true,
            active: this.isRotaAtiva("/expediente/excluir", true)
          },
          {
            name: "Extinguir Expediente",
            url: "/expediente/extinguir",
            enabled: true,
            active: this.isRotaAtiva("/expediente/extinguir", true)
          },
          {
            name: "Reativar Expediente",
            url: "/expediente/reativar",
            enabled: true,
            active: this.isRotaAtiva("/expediente/Reativar", true)
          }
        ]
      }
    ]);
  }

  private montaItemsFase(): AccordionMenuItem[] {
    return [].concat([
      {
        name: "Fase",
        enabled: true,
        active: this.isRotaAtiva("/fase"),
        iconClass: "fa fa-shoe-prints",
        order: 3,
        submenu: [
          {
            name: "Consultar parâmetros de fase",
            url: "/fase/consultar",
            enabled: true,
            active: this.isRotaAtiva("/fase/consultar", true)
          },
          {
            name: "Inserir e alterar fase",
            url: "/fase/inserir",
            enabled: true,
            active: this.isRotaAtiva("/fase/inserir", true)
          }
        ]
      }
    ]);
  }

  private montaItemsRecurso(): AccordionMenuItem[] {
    return [].concat([
      {
        name: "Recurso",
        enabled: true,
        active: this.isRotaAtiva("/recurso"),
        iconClass: "fa fa-hand-paper",
        order: 4,
        submenu: [
          {
            name: "Inserir Recurso",
            url: "/recurso/inserir",
            enabled: true,
            active: this.isRotaAtiva("/recurso/inserir", true)
          }
        ]
      }
    ]);
  }

  private montaItemsAvulsos(): AccordionMenuItem[] {
    return [].concat([
      {
        name: "Painel de Atendimento",
        enabled: true,
        url: "/principal",
        active: this.isRotaAtiva("/principal"),
        iconClass: "fa fa-desktop",
        order: 1
      }, {
        name: "Autorização",
        enabled: true,
        url: "/autorizacao-gerencial",
        active: this.isRotaAtiva("/autorizacao-gerencial"),
        iconClass: "fa fa-ban",
        order: 6
      },
    ])
  }

  private montaItemsComercial(): AccordionMenuItem[] {
    return [].concat([
      {
        name: "Pessoa Física / Jurídica",
        enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial) || this.isMenuNovoClienteSicli,
        active: this.isRotaAtiva("/comercial"),
        iconClass: "fa fa-user-tie",
        order: 2,
        submenu: [
          {
            name: "Resumo",
            url: "/comercial/resumo",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_resumo),
            active: this.isRotaAtiva("/comercial/resumo")
          },
          {
            name: "Cadastro",
            url: "/comercial/cadastro",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_cadastro) || this.isMenuNovoClienteSicli,
            active: this.isRotaAtiva("/comercial/cadastro")
          },
          {
            name: "Contratos",
            url: "/comercial/contratos",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_contratos),
            active: this.isRotaAtiva("/comercial/contratos")
          },
          {
            name: "Avaliação de Risco",
            url: "/comercial/roteiro-negocial/avaliacao-risco",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_avaliacaoRisco),
            active: this.isRotaAtiva("/comercial/roteiro-negocial/avaliacao-risco")
          },
          {
            name: "Contas",
            enabled: this.getAnyFuncionalidadePermissao([
              Funcionalidade.comercial_aberturaConta,
              Funcionalidade.comercial_produtosCliente,
              Funcionalidade.comercial_extratoConta
            ]),
            active: this.isAnyRotaAtiva(["/comercial/abertura-conta", "/comercial/manutencao-conta", "/comercial/roteiro-negocial/extrato-conta", "/comercial/credito-salario"]),
            iconClass: "fa fa-credit-card",
            submenu: [
              {
                name: "Abertura",
                url: "/comercial/abertura-conta/dados-gerais-conta",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_aberturaConta),
                active: this.isRotaAtiva("/comercial/abertura-conta/dados-gerais-conta")
              },
              {
                name: "Manutenção",
                url: "/comercial/manutencao-conta",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_produtosCliente),
                active: this.isRotaAtiva("/comercial/manutencao-conta")
              },
              {
                name: "Extrato",
                url: "/comercial/roteiro-negocial/extrato-conta",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_extratoConta),
                active: this.isRotaAtiva("/comercial/roteiro-negocial/extrato-conta")
              },
              {
                name: "Crédito Salário",
                url: "/comercial/credito-salario",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_creditoSalario),
                active: this.isRotaAtiva("/comercial/credito-salario")
              },
            ]
          },
          {
            name: "Serviços para Conta",
            enabled: this.getAnyFuncionalidadePermissao([
              Funcionalidade.comercial_adesaoSMS,
              Funcionalidade.comercial_assinaturaEletronica,
              Funcionalidade.comercial_senhaConta,
              Funcionalidade.comercial_debitoAutomatico,
              Funcionalidade.comercial_cestaServicos
            ]),
            active: this.isAnyRotaAtiva([
              "/comercial/roteiro-negocial/sms", "/comercial/roteiro-negocial/assinatura-eletronica", "/comercial/roteiro-negocial/senha-conta",
              "/comercial/roteiro-negocial/debito-automatico", "/comercial/roteiro-negocial/cesta-servico"
            ]),
            iconClass: "fa fa-toolbox",
            submenu: [
              {
                name: "SMS",
                url: "/comercial/roteiro-negocial/sms",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_adesaoSMS),
                active: this.isRotaAtiva("/comercial/roteiro-negocial/sms")
              },
              {
                name: "Assinatura Eletrônica",
                url: "/comercial/roteiro-negocial/assinatura-eletronica",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_assinaturaEletronica),
                active: this.isRotaAtiva("/comercial/roteiro-negocial/assinatura-eletronica")
              },
              {
                name: "Senha da Conta",
                url: "/comercial/roteiro-negocial/senha-conta",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_senhaConta),
                active: this.isRotaAtiva("/comercial/roteiro-negocial/senha-conta")
              },
              {
                name: "Débito Automático",
                url: "/comercial/roteiro-negocial/debito-automatico",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_debitoAutomatico),
                active: this.isRotaAtiva("/comercial/roteiro-negocial/debito-automatico")
              },
              {
                name: "Cesta de Serviços",
                url: "/comercial/roteiro-negocial/cesta-servico",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_cestaServicos),
                active: this.isRotaAtiva("/comercial/roteiro-negocial/cesta-servico")
              }
            ]
          },
          {
            name: "Crédito",
            enabled: this.getAnyFuncionalidadePermissao([
              Funcionalidade.comercial_antecipacaoSaqueAniversario,
              Funcionalidade.comercial_creditoDiretoCaixa,
              Funcionalidade.comercial_creditoConsignado,
              Funcionalidade.comercial_chequeEspecial,
              Funcionalidade.comercial_cartaoCredito
            ]),
            active: this.isAnyRotaAtiva([
              "/comercial/saque-aniversario/antecipacao", "/comercial/credito-direto-caixa/selecao-credito", "/comercial/credito-consignado",
              "/comercial/roteiro-negocial/cheque-especial", "/comercial/roteiro-negocial/cartao-credito"
            ]),
            iconClass: "fa fa-dollar-sign",
            submenu: [
              {
                name: "Antecipação Saque Aniversário FGTS",
                url: "/comercial/saque-aniversario/antecipacao",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_antecipacaoSaqueAniversario),
                active: this.isRotaAtiva("/comercial/saque-aniversario/antecipacao")
              },
              {
                name: this.isClientePF ? "CDC - Crédito Direto Caixa" : "GiroCAIXA",
                url: "/comercial/credito-direto-caixa/selecao-credito",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_creditoDiretoCaixa),
                active: this.isRotaAtiva("/comercial/credito-direto-caixa/selecao-credito")
              },
              {
                name: "Crédito Consignado INSS",
                url: "/comercial/credito-consignado",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_creditoConsignado),
                active: this.isRotaAtiva("/comercial/credito-consignado")
              },
              {
                name: this.isClientePF === true ? "Cheque Especial" : "Cheque Empresa",
                url: "/comercial/roteiro-negocial/cheque-especial",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_chequeEspecial),
                active: this.isRotaAtiva("/comercial/roteiro-negocial/cheque-especial")
              },
              {
                name: "Cartão de Crédito",
                url: "/comercial/roteiro-negocial/cartao-credito",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_cartaoCredito),
                active: this.isRotaAtiva("/comercial/roteiro-negocial/cartao-credito")
              }
            ]
          },
          {
            name: "PIX",
            enabled: this.getAnyFuncionalidadePermissao([
              Funcionalidade.comercial_pix,
              Funcionalidade.comercial_pixAlterarLimite,
              Funcionalidade.comercial_pixExtrato
            ]),
            active: this.isAnyRotaAtiva(["/comercial/pix-chave/listar", "/comercial/pix-limite"]),
            iconClass: "fa fa-expand-arrows-alt",
            submenu: [
              {
                name: "Extrato",
                url: "/comercial/pix-extrato",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_pixExtrato),
                active: this.isRotaAtiva("/comercial/pix-extrato")
              },
              {
                name: "Chaves",
                url: "/comercial/pix-chave/listar",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_pix),
                active: this.isRotaAtiva("/comercial/pix-chave/listar")
              },
              {
                name: "Limites",
                url: "/comercial/pix-limite/consulta-dados",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_pixAlterarLimite),
                active: this.isRotaAtiva("/comercial/pix-limite/consulta-dados")
              }
            ]
          },
          {
            name: "Agenda de Recebíveis",
            enabled: this.getAnyFuncionalidadePermissao([
              Funcionalidade.comercial_agendaRecebivel
            ]),
            active: this.isAnyRotaAtiva([
              "/comercial/agenda-recebivel/gerenciar-agenda",
              "/comercial/agenda-recebivel/incluir-recebivel",
              "/comercial/agenda-recebivel/consultar-recebivel"
            ]),
            iconClass: "fa fa-calendar-alt",
            submenu: [
              {
                name: "Gerenciar",
                url: "/comercial/agenda-recebivel/gerenciar-agenda",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_agendaRecebivel),
                active: this.isRotaAtiva("/comercial/agenda-recebivel/gerenciar-agenda")
              },
              {
                name: "Incluir",
                url: "/comercial/agenda-recebivel/incluir-recebivel",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_agendaRecebivel),
                active: this.isRotaAtiva("/comercial/agenda-recebivel/incluir-recebivel")
              },
              {
                name: "Consultar",
                url: "/comercial/agenda-recebivel/consultar-recebivel",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_agendaRecebivel),
                active: this.isRotaAtiva("/comercial/agenda-recebivel/consultar-recebivel")
              }
            ]
          },
          {
            name: "Gestão de Limites",
            enabled: this.getAnyFuncionalidadePermissao([
              Funcionalidade.comercial_pixGestaoLimite
            ]),
            active: this.isAnyRotaAtiva(["/comercial/pix-gestao-limite/limite-diario"]),
            iconClass: "fa fa-arrows-alt",
            submenu: [
              {
                name: "PIX",
                url: "/comercial/pix-gestao-limite/limite-diario",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.comercial_pixGestaoLimite),
                active: this.isRotaAtiva("/comercial/pix-gestao-limite/limite-diario")
              }
            ]
          }
        ]
      }
    ]);
  }

  private montaItemsSocial(): AccordionMenuItem[] {
    return [].concat([
      {
        name: "Serviços ao Cidadão",
        enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial) && this.isClientePF,
        active: this.isRotaAtiva("/govsocial"),
        iconClass: "fa fa-users",
        order: 3,
        submenu: [
          {
            name: "Resumo",
            url: "/govsocial/resumo",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_resumo),
            active: this.isRotaAtiva("/govsocial/resumo"),
          },
          {
            name: "Cadastro",
            url: "/govsocial/cadastro",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_cadastro) && !this.isMenuSocialLimitado,
            active: this.isRotaAtiva("/govsocial/cadastro"),
          },
          {
            name: "Cartões Sociais",
            url: "/govsocial/cartao-social",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_cartaoSocial) && !this.isMenuSocialLimitado,
            active: this.isRotaAtiva("/govsocial/cartao-social"),
          },
          {
            name: "Senha Cidadão",
            url: "/govsocial/senha-cidadao",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_senhaCidadao) && !this.isMenuSocialLimitado,
            active: this.isRotaAtiva("/govsocial/senha-cidadao"),
          },
          {
            name: "Identificação Positiva",
            url: "/govsocial/identificacao-positiva",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_identificacaoPositiva),
            active: this.isRotaAtiva("/govsocial/identificacao-positiva"),
          },
          {
            name: "FGTS",
            enabled: this.getAnyFuncionalidadePermissao([
              Funcionalidade.govsocial_fgts, Funcionalidade.govsocial_sistematicaSaqueFgts, Funcionalidade.govsocial_servicoFgts,
              Funcionalidade.govsocial_saqueEmergencial94620, Funcionalidade.govsocial_saqueAniversario, Funcionalidade.govsocial_saqueImediato
            ]) && !this.isMenuSocialLimitado,
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
                enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_fgts) && !this.isMenuSocialLimitado,
                active: this.isRotaAtiva("/govsocial/fgts")
              },
              {
                name: "Saque Aniversário FGTS",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_sistematicaSaqueFgts) && !this.isMenuSocialLimitado,
                active: this.isAnyRotaAtiva([
                  "/govsocial/sistematica-saque-fgts/modalidade-saque",
                  "/govsocial/sistematica-saque-fgts/historico-operacoes",
                  "/govsocial/sistematica-saque-fgts/garantias-contratadas"
                ]),
                iconClass: "fa fa-birthday-cake",
                submenu: [
                  {
                    name: "Modalidade",
                    url: "/govsocial/sistematica-saque-fgts/modalidade-saque",
                    enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_sistematicaSaqueFgts) && !this.isMenuSocialLimitado,
                    active: this.isRotaAtiva("/govsocial/sistematica-saque-fgts/modalidade-saque")
                  },
                  {
                    name: "Histórico",
                    url: "/govsocial/sistematica-saque-fgts/historico-operacoes",
                    enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_sistematicaSaqueFgts) && !this.isMenuSocialLimitado,
                    active: this.isRotaAtiva("/govsocial/sistematica-saque-fgts/historico-operacoes")
                  },
                  {
                    name: "Garantias",
                    url: "/govsocial/sistematica-saque-fgts/garantias-contratadas",
                    enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_sistematicaSaqueFgts) && !this.isMenuSocialLimitado,
                    active: this.isRotaAtiva("/govsocial/sistematica-saque-fgts/garantias-contratadas")
                  },
                ]
              },
              {
                name: "Serviços FGTS",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_servicoFgts) && !this.isMenuSocialLimitado,
                active: this.isAnyRotaAtiva(["/govsocial/servico-fgts/autorizacao-if", "/govsocial/servico-fgts/vinculacao-conta"]),
                iconClass: "fa fa-users-cog",
                submenu: [
                  {
                    name: "Autorização",
                    url: "/govsocial/servico-fgts/autorizacao-if",
                    enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_servicoFgts) && !this.isMenuSocialLimitado,
                    active: this.isRotaAtiva("/govsocial/servico-fgts/autorizacao-if")
                  },
                  {
                    name: "Vinculação",
                    url: "/govsocial/servico-fgts/vinculacao-conta",
                    enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_servicoFgts) && !this.isMenuSocialLimitado,
                    active: this.isRotaAtiva("/govsocial/servico-fgts/vinculacao-conta")
                  },
                ]
              },
              {
                name: "Saque Emergencial - MP 946/20",
                url: "/govsocial/saque-emergencial",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_saqueEmergencial94620) && !this.isMenuSocialLimitado,
                active: this.isRotaAtiva("/govsocial/saque-emergencial")
              },
              {
                name: "Saque Aniversário",
                url: "/govsocial/saque-aniversario",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_saqueAniversario) && !this.isMenuSocialLimitado,
                active: this.isRotaAtiva("/govsocial/saque-aniversario")
              },
              {
                name: "Saque Imediato - MP 889/19",
                url: "/govsocial/saque-imediato",
                enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_saqueImediato) && !this.isMenuSocialLimitado,
                active: this.isRotaAtiva("/govsocial/saque-imediato")
              },
            ]
          },
          {
            name: "Abono Salarial",
            url: "/govsocial/pis",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_pis) && !this.isMenuSocialLimitado,
            active: this.isRotaAtiva("/govsocial/pis")
          },
          {
            name: "Benefícios Sociais",
            url: "/govsocial/beneficios-sociais",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_beneficiosSociais) && !this.isMenuSocialLimitado,
            active: this.isRotaAtiva("/govsocial/beneficios-sociais")
          },
          {
            name: "Seguro desemprego",
            url: "/govsocial/seguro-desemprego",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_seguroDesemprego) && !this.isMenuSocialLimitado,
            active: this.isRotaAtiva("/govsocial/seguro-desemprego")
          },
          {
            name: "INSS",
            url: "/govsocial/inss",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_inss),
            active: this.isRotaAtiva("/govsocial/inss")
          },
          {
            name: "Portfólio de Acessos",
            url: "/govsocial/portifolio",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_portifolio) && !this.isMenuSocialLimitado,
            active: this.isRotaAtiva("/govsocial/portifolio")
          },
          {
            name: "Poupança CAIXA Fácil",
            url: "/govsocial/poupanca-caixa-facil",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.govsocial_poupancaCaixaFacil) && !this.isMenuSocialLimitado,
            active: this.isRotaAtiva("/govsocial/poupanca-caixa-facil")
          },
        ]
      }
    ]);
  }

  private montaItemsInvestimento(): AccordionMenuItem[] {
    return [].concat([
      {
        name: "Investimentos",
        enabled: this.getFuncionalidadePermissao(Funcionalidade.investimentos),
        active: this.isRotaAtiva("/investimento"),
        iconClass: "fa fa-chart-bar",
        order: 4,
        submenu: [
          {
            name: "Resumo Cliente",
            url: "/investimento/resumo",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.investimentos_resumo),
            active: this.isRotaAtiva("/investimento/resumo", true)
          },
          {
            name: "Consulta Analítica",
            url: "/investimento/resumo/consulta-analitica",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.investimentos_consultaAnalitica),
            active: this.isRotaAtiva("/investimento/resumo/consulta-analitica")
          },
          {
            name: "Oferta FMP",
            url: "/investimento/oferta-fmp",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.investimentos_ofertaFmp),
            active: this.isRotaAtiva("/investimento/oferta-fmp")
          }
        ]
      }
    ]);
  }

  private montaItemsDeterminacaoJudicial(): AccordionMenuItem[] {
    return [].concat([
      {
        name: "Determinação Judicial",
        enabled: this.getFuncionalidadePermissao(Funcionalidade.determinacao_judicial),
        active: this.isRotaAtiva("/judicial"),
        iconClass: "fa fa-gavel",
        order: 5,
        submenu: [
          {
            name: "Abertura de Conta PJ",
            url: "/judicial/abertura-conta-pj",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.determinacao_judicial_aberturaConta),
            active: this.isRotaAtiva("/judicial/abertura-conta-pj", true)
          },
          {
            name: "Manutenção de Conta PJ",
            url: "/judicial/manutencao-conta-pj",
            enabled: this.getFuncionalidadePermissao(Funcionalidade.determinacao_judicial_manutencaoConta),
            active: this.isRotaAtiva("/judicial/manutencao-conta-pj")
          }
        ]
      }
    ]);
  }

  private montaItemsDossie(): AccordionMenuItem[] {
    return [].concat([
      {
        name: "Dossiê Digital",
        enabled: this.getFuncionalidadePermissao(Funcionalidade.dossiedigital) && this.isClientePF,
        active: this.isRotaAtiva("/dossiedigital"),
        iconClass: "fa fa-cloud-upload-alt",
        order: 6,
        submenu: [
          {
            name: "Dossiê Digital",
            url: "/dossiedigital/dossie-digital",
            enabled: true,
            active: this.isRotaAtiva("/dossiedigital/dossie-digital")
          },
          {
            name: "Avaliação de Risco",
            url: "/dossiedigital/avaliacao-risco",
            enabled: true,
            active: this.isRotaAtiva("/dossiedigital/avaliacao-risco")
          },
          {
            name: "Abertura de Conta",
            url: "/dossiedigital/abertura-de-conta",
            enabled: true,
            active: this.isRotaAtiva("/dossiedigital/abertura-de-conta")
          }
        ]
      }
    ]);
  }

  private montaItemsConfiguracao(): AccordionMenuItem[] {
    return [].concat([
      {
        name: "Administrativo",
        enabled: true,
        active: this.isRotaAtiva("/configuracao"),
        iconClass: "fa fa-building",
        order: 7,
        submenu: [
          {
            name: "Configuração do Menu",
            url: "/configuracao/configuracao-do-modulo",
            enabled: true,
            active: this.isRotaAtiva("/configuracao/configuracao-do-modulo")
          },
          {
            name: "Serviço de Mensageria",
            url: "/configuracao/servico-mensageria",
            enabled: true,
            active: this.isRotaAtiva("/configuracao/servico-mensageria")
          }
        ]
      }
    ]);
  }

  private montaItemsTrilha(): AccordionMenuItem[] {
    return [].concat([
      {
        name: "Trilha de Auditoria",
        enabled: true,
        active: this.isRotaAtiva("/trilha-auditoria"),
        iconClass: "fa fa-tasks",
        order: 8,
        submenu: [
          {
            name: "Analítica",
            url: "/trilha-auditoria/analitica",
            enabled: true,
            active: this.isRotaAtiva("/trilha-auditoria/analitica")
          },
          {
            name: "Sintética",
            url: "/trilha-auditoria/sintetica",
            enabled: true,
            active: this.isRotaAtiva("/trilha-auditoria/sintetica")
          }
        ]
      }
    ]);
  }

  private montaItensMenu(): void {
    // this.setIsMenuSocialLimitado();
    // this.setIsMenuCadastroNovoClienteSicli();
    // this.itemsGeral = [].concat(
    //   this.itemsAvulsos = this.montaItemsAvulsos(),
    //   this.itemsComercial = this.montaItemsComercial(),
    //   this.itemsSocial = this.montaItemsSocial(),
    //   this.itemsInvestimento = this.montaItemsInvestimento(),
    //   this.itemsDeterminacaoJudicial = this.montaItemsDeterminacaoJudicial(),
    //   this.itemsDossie = this.montaItemsDossie(),
    //   this.itemsConfiguracao = this.montaItemsConfiguracao(),
    //   this.itemsTrilha = this.montaItemsTrilha()
    // ).sort(this.sortFuncionalidadeFunction);
    // this.cdr.markForCheck();

    this.itemsGeral = [].concat(
      this.itemsCusta = this.montaItemsCusta(),
      this.itemsExpediente = this.montaItemsExpediente(),
      this.itemsFase = this.montaItemsFase(),
      this.itemsRecurso = this.montaItemsRecurso()
    ).sort(this.sortFuncionalidadeFunction);
    this.cdr.markForCheck();
  }

  public openSearch() {
    this.menuService.abrir();
    setTimeout(() => {
      this.inputSearch.nativeElement.focus();
    }, 0);
  }

  public filterMenu(ev) {
    this.montaItensMenu();
    const text: string = ev.target.value.trim();

    const menuFiltrado = this.itemsGeral.filter(function f(menu) {
      const nameLowerCase = menu.name.toLowerCase();
      const menuAtendeCondicao = (nameLowerCase.includes(text.toLowerCase()) ||
        (menu.url && menu.url.includes(text))) ||
        (menu.submenu && (menu.submenu = menu.submenu.filter(f)).length);
      if (text && menuAtendeCondicao && menu.submenu) { menu.active = true; }
      return menuAtendeCondicao;
    });

    this.itemsGeral = JSON.parse(JSON.stringify(menuFiltrado));
  }

  private clearInputSearch() {
    if (this.inputSearch) {
      this.renderer.setValue(this.inputSearch.nativeElement, "");
    }
  }

}
