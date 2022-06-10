import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MenuItemComponent } from "./menu-item/menu-item.component";
import { AccordionComponent } from "./accordion.component";

@NgModule({
  declarations: [MenuItemComponent, AccordionComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuItemComponent, AccordionComponent]
})
export class AccordionModule { }
