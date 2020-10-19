import {
  Component, Input, ComponentFactoryResolver, ChangeDetectorRef,
  ViewChild, ElementRef, ViewContainerRef, Type, ComponentRef,
  Injector, OnInit, OnDestroy, HostListener
} from '@angular/core';
import { SideMenuService } from './side-menu.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, tap, map, mergeMap } from 'rxjs/operators';
import { AccordionConfig } from 'src/app/shared/components/accordion/types/accordion-config';
import { AccordionMenu } from 'src/app/shared/components/accordion/types/accordion-menu';
import { StyleService, Tema } from 'src/app/guia-caixa/services/style.service';
import { ToastrService } from 'ngx-toastr';
import { url } from 'inspector';

const MENU_ROUTE_PROPERTY = "menuLateral";
const MOBILE_BREAKPOINT = 991.9;

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnDestroy {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private menuService: SideMenuService,
    public styleService: StyleService,
    private toastr: ToastrService
  ) { }

  @Input() tema: Tema;
  options: AccordionConfig = { multi: false };

  menus: AccordionMenu[] = [
    {
      name: 'Início',
      iconClass: 'fas fa-lg fa-home',
      url: '/home',
      isLink: true
    },
    {
      name: 'Layout',
      iconClass: 'fas fa-lg fa-layer-group',
      url: '/layout',
      isLink: true
    },
    {
      name: 'Componentes',
      url: "componentes",
      iconClass: 'fas fa-lg fa-toolbox',
      isLink: false,
      submenu: [
        {
          name: 'Botões',
          iconClass: 'fa fa-lg fa-dot-circle',
          url: '/componentes/botoes',
          isLink: true,
          active: false
        },
        {
          name: 'Cards',
          iconClass: 'fa fa-lg fa-clipboard',
          url: '/componentes/cards',
          isLink: true
        },
        {
          name: 'Inputs',
          iconClass: 'fa fa-lg fa-keyboard',
          url: '/componentes/inputs',
          isLink: true
        },
        {
          name: 'Mensagens',
          iconClass: 'fa fa-lg fa-comment',
          url: '/componentes/mensagens',
          isLink: true
        },
        {
          name: 'Select',
          iconClass: 'fa fa-lg fa-hand-pointer',
          url: '/componentes/select',
          isLink: true
        },
        {
          name: 'Tabelas',
          iconClass: 'fa fa-lg fa-table',
          url: '/componentes/tabelas',
          isLink: true
        }
      ]
    },
    {
      name: 'Tipografia',
      iconClass: 'fas fa-lg fa-font',
      url: '/tipografia',
      isLink: true
    },
    {
      name: 'Cores',
      iconClass: 'fas fa-lg fa-palette',
      url: '/cores',
      isLink: true
    },
    {
      name: 'Chat',
      iconClass: 'fas fa-lg fa-comment',
      url: '/chat',
      isLink: true
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
      iconClass: "fa fa-lg fa-cloud-download-alt",
      url: "/layout",
      isLink: true
    },
  ]; */

  @ViewChild("menuLateral", { read: ElementRef })
  menuLateral: ElementRef;

  @ViewChild("menuTarget", { read: ViewContainerRef })
  menuTargetRef: ViewContainerRef;

  larguraTela: number;
  isAberto: boolean;

  componenteParaInjetar: any;
  injectorComponentParaInjetar: Injector;

  componentRef: ComponentRef<Component>;
  component: Type<Component>;
  refInjector: Injector;
  resolverSub: Subscription;

  ngOnInit() {
    this.larguraTela = window.innerWidth;

    this.menuService.isAberto$.subscribe((isAberto: boolean) => {
      this.isAberto = isAberto;
    });

    this.verificarContextoMudancaRota();
    this.fecharSeMobile();
    this.abrirSeDesktop();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.larguraTela = window.innerWidth;
    this.fecharSeMobile();
    this.abrirSeDesktop();
  }

  fecharSeMobile() {
    if (this.larguraTela <= MOBILE_BREAKPOINT) {
      this.menuService.fechar();
    }
  }

  abrirSeDesktop() {
    if (this.larguraTela > MOBILE_BREAKPOINT) {
      this.menuService.abrir();
    }
  }

  /* Verifica na mudança de rota se há informação de menu para a nova rota acessada */
  verificarContextoMudancaRota() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap(() => this.fecharSeMobile()),
        map(() => {
          let route = this.route.firstChild;
          let child = route;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
              route = child;
            } else {
              child = null;
            }
          }
          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        if (data && data[MENU_ROUTE_PROPERTY]) {
          this.componenteParaInjetar = data[MENU_ROUTE_PROPERTY];
          this.injetarComponente();
        } else {
          this.clearComponent();
        }
      });
  }

  injetarComponente() {

    /* Verifica se o componente a injetar já foi recebido,
      seja pelo receberContexto(), ou pela mudança de rota
    */
    if (!this.componenteParaInjetar) {
      this.clearComponent();
      return console.error("Não há componente a ser injetado.");
    }

    if (
      this.componentRef &&
      this.componentRef.componentType &&
      this.componenteParaInjetar.toString() ===
      this.componentRef.componentType.toString()
    ) { return; }

    this.clearComponent();

    const factoryComponenteInjetado = this.componentFactoryResolver.resolveComponentFactory(
      this.componenteParaInjetar
    );

    // tslint:disable-next-line: deprecation
    const injetorComponenteInjetado = Injector.create(
      [{ provide: this.componenteParaInjetar, useValue: this.componenteParaInjetar }],
      this.injectorComponentParaInjetar
    );

    this.componentRef = this.menuTargetRef.createComponent(
      factoryComponenteInjetado,
      0,
      injetorComponenteInjetado
    );

    this.componentRef.changeDetectorRef.detectChanges();
  }

  clearComponent() {
    this.menuTargetRef.clear();
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  ngOnDestroy() {
    this.resolverSub.unsubscribe();
    this.clearComponent();
  }

}
