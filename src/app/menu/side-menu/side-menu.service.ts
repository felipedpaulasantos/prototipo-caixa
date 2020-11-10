import { Injectable, ComponentFactoryResolver, Injector, Type, Component } from "@angular/core";
import { BehaviorSubject, Subject } from 'rxjs';
import { AccordionMenu } from 'src/app/shared/components/accordion/types/accordion-menu';
import { ContextoInjecaoComponente } from './contexto-injecao-componente';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor() { }

  private menus: AccordionMenu[] = [
    {
      name: 'Início',
      iconClass: 'fas fa-lg fa-home',
      url: '/home',
      isLink: true,
      enabled: true
    },
    {
      name: 'Layout',
      iconClass: 'fas fa-lg fa-layer-group',
      url: '/layout',
      isLink: true,
      enabled: true
    },
    {
      name: 'Componentes',
      url: "componentes",
      iconClass: 'fas fa-lg fa-toolbox',
      isLink: false,
      enabled: true,
      submenu: [
        {
          name: 'Botões',
          iconClass: 'fa fa-lg fa-dot-circle',
          url: '/componentes/botoes',
          isLink: true,
          active: false,
          enabled: true
        },
        {
          name: 'Cards',
          iconClass: 'fa fa-lg fa-clipboard',
          url: '/componentes/cards',
          isLink: false,
          enabled: true,
          submenu: [{
            name: 'Teste',
            iconClass: 'fa fa-lg fa-clipboard',
            url: '/componentes/cards',
            isLink: true,
            enabled: true
          }]
        },
        {
          name: 'Inputs',
          iconClass: 'fa fa-lg fa-keyboard',
          url: '/componentes/inputs',
          isLink: true,
          enabled: true
        },
        {
          name: 'Mensagens',
          iconClass: 'fa fa-lg fa-comment',
          url: '/componentes/mensagens',
          isLink: true,
          enabled: true
        },
        {
          name: 'Select',
          iconClass: 'fa fa-lg fa-hand-pointer',
          url: '/componentes/select',
          isLink: true,
          enabled: true
        },
        {
          name: 'Tabelas',
          iconClass: 'fa fa-lg fa-table',
          url: '/componentes/tabelas',
          isLink: true,
          enabled: true
        }
      ]
    },
    {
      name: 'Tipografia',
      iconClass: 'fas fa-lg fa-font',
      url: '/tipografia',
      isLink: true,
      enabled: true
    },
    {
      name: 'Cores',
      iconClass: 'fas fa-lg fa-palette',
      url: '/cores',
      isLink: true,
      enabled: true
    },
    {
      name: 'Chat',
      iconClass: 'fas fa-lg fa-comment',
      url: '/chat',
      isLink: true,
      enabled: true
    },
    {
      name: 'Configuração do Menu',
      iconClass: 'fas fa-lg fa-cog',
      url: '/config-menu',
      isLink: true,
      enabled: true
    }
  ];

/*    menus: AccordionMenu[] = [
    {
      name: "Home",
      iconClass: "fas fa-lg fa-home",
      url: "/home",
      isLink: true
    }, {
      name: "Pessoa Física/Jurídica",
      iconClass: "fa fa-lg fa-user-tie",
      url: "/pessoafisica",
      isLink: false,
      submenu: [
        {
          name: "Cadastro",
          iconClass: "fa fa-lg fa-file-medical",
          url: "/cores",
          isLink: true
        }, {
          name: "Contratos",
          iconClass: "fa fa-lg fa-file-alt",
          url: "/cores",
          isLink: true
        }, {
          name: "Assinatura Eletrônica",
          iconClass: "fa fa-lg fa-file-signature",
          url: "/cores",
          isLink: true
        }, {
          name: "SMS",
          iconClass: "fa fa-lg fa-mobile-alt",
          url: "/cores",
          isLink: true
        }, {
          name: "Saque Aniversário - Antecipação",
          iconClass: "fa fa-lg fa-birthday-cake",
          url: "/cores",
          isLink: true
        },
      ]
    }, {
      name: "Serviços ao Cidadão",
      url: "/servicosaocidadao",
      iconClass: "fa fa-lg fa-user-friends",
      isLink: false,
      submenu: [
        {
          name: "Resumo do Cidadão",
          iconClass: "fa fa-lg fa-id-badge",
          url: "/componentes/inputs",
          isLink: true
        }, {
          name: "Cadastro NIS",
          iconClass: "fa fa-lg fa-file-medical",
          url: "/componentes/select",
          isLink: true
        }, {
          name: "Cartões Sociais",
          url: "servicosaocidadao/cartoes",
          iconClass: "fa fa-lg fa-credit-card",
          isLink: false,
          submenu: [
            {
              name: "Teste",
              url: "/componentes/inputs",
              isLink: true
            }, {
              name: "Teste 2",
              url: "/componentes/botoes",
              isLink: true
            }
          ]
        }, {
          name: "FGTS",
          iconClass: "fa fa-lg fa-landmark",
          url: "/componentes/cards",
          isLink: true
        }, {
          name: "Saque Emergencial - MP 946/20",
          url: "/componentes/mensagens",
          iconClass: "fa fa-lg fa-dollar-sign",
          isLink: true
        },
      ]
    }, {
      name: "Investimentos",
      iconClass: "fa fa-lg fa-chart-line",
      url: "/chat",
      isLink: true
    }, {
      name: "Dossiê Digital",
      iconClass: "fa fa-lg fa-cloud-upload-alt",
      url: "/layout",
      isLink: true
    },
  ]; */

  private contextoInjecaoSource = new Subject<ContextoInjecaoComponente>();
  contextoInjecao$ = this.contextoInjecaoSource.asObservable();

  private abertoSource = new BehaviorSubject<boolean>(false);
  isAberto$ = this.abertoSource.asObservable();

  private menuItemsSource = new BehaviorSubject<AccordionMenu[]>(this.menus);
  menuItems$ = this.menuItemsSource.asObservable();

  public trocar() {
    this.abertoSource.next(!this.abertoSource.value);
  }

  public abrir() {
    this.abertoSource.next(true);
  }

  public fechar() {
    this.abertoSource.next(false);
  }

  public receberContexto(resolver: ComponentFactoryResolver, injector: Injector, componenteParaInjetar?: any) {
    this.contextoInjecaoSource.next({
      resolver, injector, componenteParaInjetar
    });
  }

  public updateMenu(menu: AccordionMenu[]): void {
    this.menuItemsSource.next(menu);
  }

  public inserirItemMenu(menuItem: AccordionMenu, parentMenuItemName?: string): void {
    if (!parentMenuItemName) {
      const newMenuItems = this.menuItemsSource.value;
      newMenuItems.push(menuItem);
      this.menuItemsSource.next(newMenuItems);
    } else {
      const menuItems = this.menuItemsSource.value;
      const parentMenu = menuItems.filter(item => item.name === parentMenuItemName)[0];
      parentMenu.submenu.push(menuItem);
    }
  }

}
