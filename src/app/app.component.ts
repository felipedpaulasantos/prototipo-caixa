import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd, RouterOutlet } from '@angular/router';
import { switchMap, map, filter } from 'rxjs/operators';

import { Account } from './account/account';
import { fadeInAnimation } from './shared/animations/simple-fade.animation';
import { AuthenticationService } from './authentication/authentication.service';
import { UserService } from './authentication/users/user.service';
import { SideMenuService } from './menu/side-menu/side-menu.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { StyleService } from './shared/services/style.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation]
})
export class AppComponent implements OnInit {

  public constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService,
    private spinner: NgxSpinnerService,
    private titleService: Title,
    public menuService: SideMenuService,
    public userService: UserService,
    public styleService: StyleService
  ) {
    // this.authService.initSSO();
  }

  isMenuAberto = false;
  account: Account;
  hasAccount = true;

  ngOnInit(): void {
    this.setPageTitleAsRoute();

    this.menuService.isAberto$.subscribe(isAberto => {
      this.isMenuAberto = isAberto;
    });
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
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
