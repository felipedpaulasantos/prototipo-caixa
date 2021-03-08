import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BotoesComponent } from "./botoes/botoes.component";

import { ComponentesBasicosComponent } from "./componentes-basicos.component";

const routes: Routes = [
  {
    path: "",
    component: ComponentesBasicosComponent,
    // canActivate: [AuthGuard],
    data: {
      title: "Componentes básicos",
      breadcrumb: "Componentes básicos"
    }
  },
  {
    path: "botoes",
    component: BotoesComponent,
    data: {
      title: "Botões",
      breadcrumb: "Botões",
      animation: "Botões"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesBasicosRoutingModule { }
