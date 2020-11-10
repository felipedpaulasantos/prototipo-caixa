import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DatatableConfig } from 'src/app/guia-caixa/constants/datatable-definitions';
import { SideMenuService } from 'src/app/menu/side-menu/side-menu.service';
import { AccordionMenu } from 'src/app/shared/components/accordion/types/accordion-menu';

@Component({
  selector: 'app-config-menu',
  templateUrl: './config-menu.component.html',
  styleUrls: ['./config-menu.component.scss']
})
export class ConfigMenuComponent implements OnInit {

  constructor(
    private menuService: SideMenuService,
    private cdr: ChangeDetectorRef
  ) { }

  menus: AccordionMenu[];
  config = DatatableConfig.getDatatableConfig({
    showPagination: true,
    showFilter: true,
    showInfo: true
  });

  ngOnInit(): void {
    this.menuService.menuItems$.subscribe(menus => {
      this.menus = menus;
    });
  }

  updateMenu(menus: AccordionMenu[]) {
    this.menuService.updateMenu(menus);
  }

}
