import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BotoesComponent } from "./botoes/botoes.component";
import { CardsComponent } from "./cards/cards.component";

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
  {
    path: "cards",
    component: CardsComponent,
    data: {
      title: "Cards",
      breadcrumb: "Cards",
      animation: "Cards"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesBasicosRoutingModule { }
