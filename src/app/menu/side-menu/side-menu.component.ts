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
import { StyleService, Tema } from 'src/app/shared/services/style.service';

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
    public styleService: StyleService
  ) { }

  @Input() tema: Tema;
  options: AccordionConfig = { multi: false };

  menus: AccordionMenu[] = [
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
          name: 'Cards',
          url: '/componentes/cards',
          active: false
        },
        {
          name: 'Botões',
          url: '/componentes/botoes',
          active: false
        },
        {
          name: 'Mensagens',
          url: '/componentes/mensagens',
          active: false
        },
        {
          name: 'Inputs',
          url: '/componentes/inputs',
          active: false
        },
        {
          name: 'Select',
          url: '/componentes/select',
          active: false
        },
        {
          name: 'Tabelas',
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
    }
    /*     {
          name: 'Contas',
          iconClass: 'fas fa-lg fa-phone-alt',
          url: '/contas',
          active: false
        },
        {
          name: 'Relatórios',
          iconClass: 'fas fa-lg fa-chart-bar',
          url: '/relatorios',
          active: false
        } */
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

  @Input() resources = [
    {
      name: 'Início',
      url: '/home',
      icon: 'fas fa-home'
    },
    {
      name: 'Contas',
      url: '/contas',
      icon: 'fas fa-phone-alt'
    },
    {
      name: 'Ativação',
      url: '/ativacao',
      icon: 'fas fa-plus'
    },
    {
      name: 'Relatórios',
      url: '/relatorios',
      icon: 'far fa-chart-bar'
    }
  ];

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
