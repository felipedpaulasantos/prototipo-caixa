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

  menusOLD: AccordionMenu[] = [
    {
      name: 'Início',
      iconClass: 'fas fa-lg fa-home',
      url: '/home',
      active: false
    },
    {
      name: 'Layout',
      iconClass: 'fas fa-lg fa-layer-group',
      url: '/layout',
      active: false
    },
    {
      name: 'Componentes',
      iconClass: 'fas fa-lg fa-toolbox',
      url: '/componentes',
      active: false,
      submenu: [
        {
          name: 'Botões',
          iconClass: 'fa fa-lg fa-dot-circle',
          url: '/componentes/botoes',
          active: false
        },
        {
          name: 'Cards',
          iconClass: 'fa fa-lg fa-clipboard',
          url: '/componentes/cards',
          active: false
        },
        {
          name: 'Inputs',
          iconClass: 'fa fa-lg fa-keyboard',
          url: '/componentes/inputs',
          active: false
        },
        {
          name: 'Mensagens',
          iconClass: 'fa fa-lg fa-comment',
          url: '/componentes/mensagens',
          active: false
        },
        {
          name: 'Select',
          iconClass: 'fa fa-lg fa-hand-pointer',
          url: '/componentes/select',
          active: false
        },
        {
          name: 'Tabelas',
          iconClass: 'fa fa-lg fa-table',
          url: '/componentes/tabelas',
          active: false
        }
      ]
    },
    {
      name: 'Tipografia',
      iconClass: 'fas fa-lg fa-font',
      url: '/tipografia',
      active: false
    },
    {
      name: 'Cores',
      iconClass: 'fas fa-lg fa-palette',
      url: '/cores',
      active: false
    },
    {
      name: 'Chat',
      iconClass: 'fas fa-lg fa-comment',
      url: '/chat',
      active: false
    }
  ];

  menus: AccordionMenu[] = [
    {
      name: "Home",
      iconClass: "fas fa-lg fa-home",
      url: "/home"
    },
    {
      name: "Pessoa Física/Jurídica",
      iconClass: "fa fa-lg fa-user-tie",
      url: "/home",
      submenu: [
        {
          name: "Cadastro",
          iconClass: "fa fa-lg fa-file-medical",
          url: "/home"
        },
        {
          name: "Contratos",
          iconClass: "fa fa-lg fa-file-alt",
          url: "/home"
        },        {
          name: "Assinatura Eletrônica",
          iconClass: "fa fa-lg fa-file-signature",
          url: "/home"
        },
        {
          name: "SMS",
          iconClass: "fa fa-lg fa-mobile-alt",
          url: "/home"
        },
        {
          name: "Saque Aniversário - Antecipação",
          iconClass: "fa fa-lg fa-birthday-cake",
          url: "/home"
        },
      ]
    },
    {
      name: "Serviços ao Cidadão",
      iconClass: "fa fa-lg fa-user-friends",
      url: "/home",
      submenu: [
        {
          name: "Resumo do Cidadão",
          iconClass: "fa fa-lg fa-id-badge",
          url: "/home"
        },
        {
          name: "Cadastro NIS",
          iconClass: "fa fa-lg fa-file-medical",
          url: "/home"
        },        {
          name: "Cartões Sociais",
          iconClass: "fa fa-lg fa-credit-card",
          url: "/home"
        },
        {
          name: "FGTS",
          iconClass: "fa fa-lg fa-landmark",
          url: "/home"
        },
        {
          name: "Saque Emergencial - MP 946/20",
          iconClass: "fa fa-lg fa-dollar-sign",
          url: "/home"
        },
      ]
    },
    {
      name: "Investimentos",
      iconClass: "fa fa-lg fa-chart-line",
      url: "/home"
    },
    {
      name: "Dossiê Digital",
      iconClass: "fa fa-lg fa-cloud-download-alt",
      url: "/home"
    },
  ];

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
