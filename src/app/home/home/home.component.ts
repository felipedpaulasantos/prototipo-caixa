import { AccordionMenuItem } from './../../shared/caixa-components/accordion/types/accordion-menu-item';
import { MenuLateralService } from './../../menu-lateral-fixo/menu-lateral-fixo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemsMenu: AccordionMenuItem[] = [];
  rows: any[] = [];

  constructor(
    private menuService: MenuLateralService
  ) { }

  ngOnInit(): void {
    this.menuService.itemsMenu$.subscribe(items => this.itemsMenu = items);
    this.rows = this.groupColumns(this.itemsMenu);
  }

  groupColumns(itemsMenu: AccordionMenuItem[]): any[] {
    const filteredResources = itemsMenu.filter(item => {
      return (item.enabled) && (item.submenu) && (item.name != "Início");
    });

    filteredResources.map(item => item.url = item.submenu[0].url);

    const newRows = [];
    for (let index = 0; index < filteredResources.length; index += 3) {
      newRows.push(filteredResources.slice(index, index + 3));
    }
    return newRows;
  }

}
