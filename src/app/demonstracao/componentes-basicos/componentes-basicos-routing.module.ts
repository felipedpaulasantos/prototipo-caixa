import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentesBasicosComponent } from './componentes-basicos.component';

const routes: Routes = [{ path: '', component: ComponentesBasicosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesBasicosRoutingModule { }
