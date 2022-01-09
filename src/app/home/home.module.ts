import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NgxChartsModule } from "@swimlane/ngx-charts";
import { HomeComponent } from "./home.component";

@NgModule({
   declarations: [
      HomeComponent
   ],
   imports: [
      CommonModule,
      NgxChartsModule
   ]
})
export class HomeModule { }
