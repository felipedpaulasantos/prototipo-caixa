import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute, NavigationEnd, RouterOutlet } from "@angular/router";
import { switchMap, map, filter } from "rxjs/operators";

import { fadeInAnimation } from "./shared/animations/simple-fade.animation";
import { UserService } from "./authentication/users/user.service";
import { SideMenuService } from "./menu/side-menu/side-menu.service";
import { GuiaCaixaStyleService } from "./guia-caixa/services/style-guia-caixa.service";
import { DataTableConfig } from "./guia-caixa/constants/datatable-definitions";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeInAnimation]
})
export class AppComponent implements OnInit {

  public constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    public menuService: SideMenuService,
    public userService: UserService,
    public styleService: GuiaCaixaStyleService
  ) {
    // this.authService.initSSO();
  }

  isMenuAberto = false;
  account: Account;
  hasAccount = true;
  temaGlobal;

  ngOnInit(): void {
    this.setPageTitleAsRoute();
    this.menuService.isAberto$.subscribe(isAberto => {
      this.isMenuAberto = isAberto;
    });
    this.styleService.globalTheme$.subscribe(tema => this.temaGlobal = tema);
  }

  updateAccount(account: Account) {
    if (account) {
      this.account = account;
      this.hasAccount = true;
    } else {
      this.hasAccount = false;
    }
  }

  setPageTitleAsRoute() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .pipe(map(() => this.activatedRoute))
    .pipe(map(route => {
      while (route.firstChild) { route = route.firstChild; }
      return route;
    }))
    .pipe(switchMap(route => route.data))
    .subscribe(event => this.titleService.setTitle(event.title));
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData["animation"];
  }
}
