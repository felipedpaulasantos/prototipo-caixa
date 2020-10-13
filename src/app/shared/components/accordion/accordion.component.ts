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
              } /* else {
                submenu.active = false;
                this.cdr.detectChanges();
              } */
            });
          }
        });
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

    console.log(index, isSubmenu, submenuIndex);

    if (!this.config.multi) {
      this.menus.filter(
        (menu, i) => i !== index && menu.active
      ).forEach(menu => menu.active = !menu.active);
    }

    if (isSubmenu) {
      const submenus = this.menus[index].submenu;
      submenus.filter(
        (submenu, i) => i !== submenuIndex && submenu.active
      ).forEach(submenu => submenu.active = !submenu.active);
      this.menus[index].submenu[submenuIndex].active = !this.menus[index].submenu[submenuIndex].active;

    } else {
      this.menus[index].active = !this.menus[index].active;
    }
  }

  activate(menu: AccordionMenu) {
    menu.url ? this.navigate(menu.url) : this.callAction(menu);
  }

  private navigate(url: string) {
    this.router.navigateByUrl(url).then(msg => console.log("Routing", msg));
  }

  private callAction(menu: AccordionMenu) {
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
