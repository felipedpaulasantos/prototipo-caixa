import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { Config } from 'protractor';
import { AccordionMenu } from './types/accordion-menu';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { SideMenuService } from 'src/app/menu/side-menu/side-menu.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnInit {

  constructor(
    private cdr: ChangeDetectorRef,
    private location: Location,
    private router: Router,
    public menuService: SideMenuService
  ) {}

  @Input() options;
  @Input() menus: AccordionMenu[];
  config: Config;
  url: string;

  ngOnInit() {
    this.config = this.mergeConfig(this.options);
    this.router.events.subscribe(ev => {

      if (ev instanceof NavigationEnd) {
        const loc = this.location.path();
        this.toggleByLocation(loc, this.menus);
      }

/*       if (ev instanceof NavigationEnd) {
        const loc = this.location.path();
        this.menus.forEach((menu, index) => {
          if (loc.includes(menu.url)) {
            if (!menu.active) {
              this.toggle(index);
              this.cdr.detectChanges();
            }
          }
          if (menu.submenu) {
            menu.submenu.forEach((submenu, subindex) => {
              if (loc.includes(submenu.url)) {
                if (!submenu.active) {
                  this.toggle(index, true, subindex);
                  this.cdr.detectChanges();
                }
              }
            });
          }
        });
      } */
    });
  }

  toggleByLocation(location: string, menus: AccordionMenu[], isSubmenu = false, topIndex = null) {
    this.toggleAllFalse(menus);
    menus.forEach((menu, index) => {

      if (!isSubmenu) {
        if (location.includes(menu.url)) {
          if (!menu.active) {
            this.toggle(index);
            this.cdr.detectChanges();
          }
        }
        if (menu.submenu) {
          this.toggleByLocation(location, menu.submenu, true, index);
        }
      }

      if (isSubmenu) {
        if (location.includes(menu.url)) {
          this.toggle(topIndex, true, index);
          this.cdr.detectChanges();
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

  toggle(index: number, isSubmenu = false, submenuIndex = null) {

    this.menus[index].active = true;

    if (!this.config.multi) {
      this.menus.filter(
        (menu, i) => i !== index && menu.active && !this.location.path().includes(menu.url)
      ).forEach(
        (menu) => menu.active = !menu.active);
    }

    if (isSubmenu) {
      const submenus = this.menus[index].submenu;
      submenus.filter(
        (submenu, i) => i !== submenuIndex && submenu.active
      ).forEach(
        (submenu) => submenu.active = !submenu.active);
      this.menus[index].submenu[submenuIndex].active = true;
    }
  }

  toggleAllFalse(menus: AccordionMenu[]) {
    menus.forEach(menu => {
      menu.active = false;
      if (menu.submenu) { this.toggleAllFalse(menu.submenu); }
    });
  }

  activate(menu: AccordionMenu, index: number = null) {
    menu.url ? this.navigate(menu.url) : this.callAction(menu, index);
  }

  private navigate(url: string) {
    this.router.navigateByUrl(url).then(msg => console.log("Routing", msg));
  }

  private callAction(menu: AccordionMenu, index: number) {
    this.toggle(index);
    if (!menu.onClick) { return; }
    menu.onClick.call(menu.onClick);
  }

  trocarMenuLateral(): void {
    this.menuService.trocar();
  }

  fecharMenulateral(): void {
    this.menuService.fechar();
  }

  abrirMenuLateral(): void {
    this.menuService.abrir();
  }

}
