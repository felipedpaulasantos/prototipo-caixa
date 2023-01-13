import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

import { HeaderComponent } from "./header/header.component";

import { SharedModule } from "../shared/shared.module";
import { FooterComponent } from "./footer/footer.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { SideMenuComponent } from "./sidemenu/sidemenu.component";



@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    PerfectScrollbarModule
  ],
  exports: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    BreadcrumbComponent
  ]
})
export class MenuModule { }
