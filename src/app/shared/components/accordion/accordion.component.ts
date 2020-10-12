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
  isMenuAberto: boolean;

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
        });
      }
    });

    this.menuService.isAberto$.subscribe(isAberto => {
      this.isMenuAberto = isAberto;
      console.log(isAberto);
    });
  }

  mergeConfig(options: Config) {

    const config = {
      // selector: '#accordion',
      multi: true
    };

    return { ...config, ...options };
  }

  toggle(index: number, isSubmenu = false, submenuIndex = null, submenuDiv = null) {

    if (isSubmenu) {
/*       console.log("=====================================");
      console.log("ANTES DE TROCAR", index, submenuIndex);
      console.log(this.menus[index].submenu[submenuIndex].active); */
    }

    if (!this.config.multi) {
      this.menus.filter(
        (menu, i) => i !== index && menu.active
      ).forEach(menu => menu.active = !menu.active);
    }



    if (isSubmenu) {
      this.menus[index].submenu[submenuIndex].active = !this.menus[index].submenu[submenuIndex].active;
/*       console.log("DEPOIS DE TROCAR", index, submenuIndex);
      console.log(this.menus[index].submenu[submenuIndex].active);
      console.log("====================================="); */
    } else {
      this.menus[index].active = !this.menus[index].active;
    }
  }

  activate(menu: AccordionMenu) {
    menu.url ? this.navigate(menu.url) : this.callAction(menu);
  }

  private navigate(url: string) {
    this.router.navigate([url]);
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
