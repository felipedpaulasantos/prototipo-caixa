import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComponentesComponent } from "./componentes.component";
import { CardsComponent } from "./cards/cards.component";
import { BotoesComponent } from "./botoes/botoes.component";
import { MensagensComponent } from "./mensagens/mensagens.component";
import { TabelasComponent } from "./tabelas/tabelas.component";
import { InputsComponent } from "./inputs/inputs.component";
import { SelectComponent } from "./select/select.component";
import { StepperOrientation } from "src/app/guia-caixa/components/stepper/stepper-orientation";
import { StepperDemonstracaoComponent } from "./stepper-demonstracao/stepper-demonstracao.component";
import { TabberDemonstracaoComponent } from "./tabber-demonstracao/tabber-demonstracao.component";


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
    path: "inputs",
    component: InputsComponent,
    data: {
      title: "Inputs",
      breadcrumb: "Inputs",
      animation: "Inputs"
    }
  },
  {
    path: "select",
    component: SelectComponent,
    data: {
      title: "Select",
      breadcrumb: "Select",
      animation: "Select"
    }
  },
  {
    path: "stepper",
    component: StepperDemonstracaoComponent,
    data: {
      title: "Stepper",
      breadcrumb: "Stepper",
      animation: "Stepper"
    }
  },
  {
    path: "tabber",
    component: TabberDemonstracaoComponent,
    data: {
      title: "Tabber",
      breadcrumb: "Tabber",
      animation: "Tabber"
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
