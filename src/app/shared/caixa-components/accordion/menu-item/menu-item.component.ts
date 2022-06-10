import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { AccordionMenuItem } from "../types/accordion-menu-item";

@Component({
  selector: "app-menu-item",
  templateUrl: "./menu-item.component.html",
  changeDetection: ChangeDetectionStrategy.Default
})
export class MenuItemComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  @Input()
  menus: AccordionMenuItem[] = [];

  @Input()
  parentRef: any;

  @Output()
  activateMenu = new EventEmitter<AccordionMenuItem>();

  ngOnInit(): void {
  }

  activate(menu: AccordionMenuItem) {
    if (menu.url) {
      this.navigate(menu.url);
    } else {
      menu.active = !menu.active;
    }
  }

  collapse(menu: AccordionMenuItem) {
    menu.active = !menu.active;
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

}
