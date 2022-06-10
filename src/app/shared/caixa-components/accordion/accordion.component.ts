import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { Config } from "protractor";
import { AccordionMenuItem } from "./types/accordion-menu-item";
import { Router, NavigationEnd } from "@angular/router";
import { Location } from "@angular/common";
import { Subscription } from "rxjs";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  changeDetection: ChangeDetectionStrategy.Default
})
export class AccordionComponent implements OnInit, OnDestroy {

  constructor(
    private cdr: ChangeDetectorRef,
    private location: Location,
    private router: Router
  ) {}

  @Input() options;
  @Input() menus: AccordionMenuItem[];
  config: Config;
  url: string;
  subscription = new Subscription();

  ngOnInit() {
    this.config = this.mergeConfig(this.options);
/*     this.subscription.add(this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.toggleAllFalse(this.menus);
        this.toggleActiveByLocation(this.location.path(), this.menus);
        console.log("MENUS", this.menus);
        this.menus = [].concat(this.menus);
        this.cdr.detectChanges();
      }
    })); */
  }

  toggleActiveByLocation(location: string, menus: AccordionMenuItem[]) {
    menus.forEach((menu) => {
      if (location.includes(menu.url)) {
        menu.active = true;
        if (menu.submenu) {
          this.toggleActiveByLocation(location, menu.submenu);
        }
      }
    });
  }

  mergeConfig(options: Config) {
    const config = {
      // selector: '#accordion',
      multi: true
    };
    return { ...config, ...options };
  }

  toggleAllFalse(menus: AccordionMenuItem[]) {
    menus.forEach(menu => {
      menu.active = false;
      if (menu.submenu) { this.toggleAllFalse(menu.submenu); }
    });
  }

  activate(menu: AccordionMenuItem) {

    if (menu.url) {
      this.navigate(menu.url);
    } else {
      menu.active = !menu.active;
    }
  }

  private navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
