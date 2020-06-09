import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComponentesComponent } from './componentes.component';
import { CardsComponent } from './cards/cards.component';
import { BotoesComponent } from './botoes/botoes.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { TabelasComponent } from './tabelas/tabelas.component';

const routes: Routes = [
  {
    path: "",
    component: ComponentesComponent,
    // canActivate: [AuthGuard],
    data: {
      title: "Componentes",
      breadcrumb: "Componentes"
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
    path: "mensagens",
    component: MensagensComponent,
    data: {
      title: "Mensagens",
      breadcrumb: "Mensagens",
      animation: "Mensagens"
    }
  },
  {
    path: "formularios",
    component: FormulariosComponent,
    data: {
      title: "Formulários",
      breadcrumb: "Formulários",
      animation: "Formulários"
    }
  },
  {
    path: "tabelas",
    component: TabelasComponent,
    data: {
      title: "Tabelas",
      breadcrumb: "Tabelas",
      animation: "Tabelas"
    }
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule {}
