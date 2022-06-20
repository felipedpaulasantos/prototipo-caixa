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
        name: "Início",
        enabled: true,
        url: "/home",
        active: this.isRotaAtiva("/home"),
        iconClass: "fa fa-home",
        order: 1
      }
    ])
  }

  private montaItensMenu(): void {
    this.itemsGeral = [].concat(
      this.itemsAvulsos = this.montaItemsAvulsos(),
      this.itemsCusta = this.montaItemsCusta(),
      this.itemsExpediente = this.montaItemsExpediente(),
      this.itemsFase = this.montaItemsFase(),
      this.itemsRecurso = this.montaItemsRecurso()
    ).sort(this.sortFuncionalidadeFunction);
    this.menuService.setItemsMenu(this.itemsGeral);
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
