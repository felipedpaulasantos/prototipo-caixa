import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [
    TopMenuComponent,
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
    TopMenuComponent,
    SideMenuComponent,
    FooterComponent,
    BreadcrumbComponent
  ]
})
export class MenuModule { }
