import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, Type, Injector, OnDestroy, ComponentRef, ElementRef, HostListener, ChangeDetectorRef } from "@angular/core";
import { Router, NavigationEnd, ActivatedRoute, ChildActivationEnd } from "@angular/router";
import {Subscription} from "rxjs";
import {filter, mergeMap, map, take, tap} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";

import {MenuLateralService} from "./menu-lateral-fixo.service";
import { StyleService } from "../service/style.service";
import { GlobalThemes } from "../model/global-style.model";
import { environment } from "../../environments/environment";

const MENU_ROUTE_PROPERTY = "menuLateral";
const MOBILE_BREAKPOINT = 991.9;

@Component({
  selector: "app-menu-lateral-fixo",
  templateUrl: "./menu-lateral-fixo.component.html",
  styleUrls: ["./menu-lateral-fixo.component.scss"]
})
export class MenuLateralFixoComponent implements OnInit, OnDestroy {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private menuLateralService: MenuLateralService,
    private router: Router,
    private route: ActivatedRoute,
    public menuService: MenuLateralService,
    private cdr: ChangeDetectorRef,
    private styleService: StyleService
  ) {}

  public version: string = environment.VERSION;

  username = "";

  @ViewChild("menuLateral", { read: ElementRef, static: false })
  menuLateral: ElementRef;

  @ViewChild("menuDinamico", { read: ViewContainerRef, static: false })
  menuDinamicoRef: ViewContainerRef;

  larguraTela: number;

  logoSource: string;

  componenteParaInjetar: Type<Component>;
  injectorDoComponenteParaInjetar: Injector;
  contextoSubscription: Subscription;

  componenteInjetadoRef: ComponentRef<Component>;
  injectorComponenteInjetado: Injector;

  ngOnInit() {
/*     this.contextoSubscription = this.menuLateralService.contextoInjecao$.subscribe(contexto => {
      this.componentFactoryResolver = contexto.resolver;
      this.injectorDoComponenteParaInjetar = contexto.injector;
      this.componenteParaInjetar = contexto.componenteParaInjetar;

      this.verificaContextoRotaAtual();
      this.verificaContextoMudancaRota();
    }); */

    this.verificaMudancaRotaFechaSeMobile();

    this.menuLateralService.limparMenuDinamico$.subscribe(limpar => {
      if (limpar) { this.clearComponent(); }
    });

    this.menuLateralService.injetarComponente$.subscribe(injetar => {
      if (injetar) { this.injetarComponente(); }
    })

    this.styleService.currentGlobalStyle$.subscribe((theme: GlobalThemes) => {
      if (theme && theme.value) {
        this.logoSource = theme.value.theme.cxLogoLateral;
      }
    });

    this.larguraTela = window.innerWidth;
    this.fecharSeMobile();
    this.abrirSeDesktop();
    this.recuperaUsername();
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.larguraTela = window.innerWidth;
    this.fecharSeMobile();
  }

  fecharSeMobile() {
    if (this.isMobile()) {
      this.menuService.fechar();
      this.cdr.markForCheck();
    };
  }

  abrirSeDesktop() {
    if (!this.isMobile()) {
      this.menuService.abrir()
      this.cdr.markForCheck();
    };
  }

  isMobile(): boolean {
    return this.larguraTela < MOBILE_BREAKPOINT;
  }

  verificaMudancaRotaFechaSeMobile() {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.fecharSeMobile();
      }
    });
  }

  /* Verifica na mudança de rota se há informação de menu para a nova rota acessada */
  verificaContextoMudancaRota() {
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd),
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

  /* Verifica se há informação de menu para a rota atual */
  verificaContextoRotaAtual() {
    this.router.events.pipe(
      filter(event => event instanceof ChildActivationEnd),
      take(1),
    ).subscribe(data => {
      if (data
        && data["snapshot"]
        && data["snapshot"]["data"]
        && data["snapshot"]["data"][MENU_ROUTE_PROPERTY]) {
          this.componenteParaInjetar = data["snapshot"]["data"][MENU_ROUTE_PROPERTY];
          this.injetarComponente();
      } else {
        this.clearComponent();
      }
    })
  };

  injetarComponente() {
    if (!this.componenteParaInjetar) {
      this.clearComponent();
    }

    if (!this.injectorDoComponenteParaInjetar || !this.componentFactoryResolver) {
      return;
    }

    /* Não injetar o mesmo componente repetidas vezes */
    if (this.componenteInjetadoRef && this.componenteInjetadoRef.componentType
      && (this.componenteParaInjetar.toString() === this.componenteInjetadoRef.componentType.toString())) {
        return;
    }

    this.clearComponent();

    const component = this.componenteParaInjetar;
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(component);

    this.injectorComponenteInjetado = Injector.create(
      [{provide: component, useValue: component}],
      this.injectorDoComponenteParaInjetar
    );

    this.componenteInjetadoRef = this.menuDinamicoRef.createComponent(
      childComponent, 0, this.injectorComponenteInjetado
    );

    this.componenteInjetadoRef.changeDetectorRef.detectChanges();
  }

  clearComponent() {
    this.menuDinamicoRef.clear();
    if (this.componenteInjetadoRef) {
      this.componenteInjetadoRef.destroy();
      this.componenteInjetadoRef = null;
    };
  }

  clearContext() {
    this.componentFactoryResolver = null;
    this.injectorDoComponenteParaInjetar = null;
  }

  ngOnDestroy() {
    this.contextoSubscription.unsubscribe();
    this.clearComponent();
  }

  recuperaUsername() {
    // this.keycloakService.getTokens().then((tokens: Tokens) => {
    //   if (tokens.accessToken !== undefined && tokens.accessToken !== "") {
    //     const decoded = new JwtHelperService().decodeToken(tokens.accessToken);
    //     this.username = decoded["given_name"];
    //   }
    // });
  }

}
