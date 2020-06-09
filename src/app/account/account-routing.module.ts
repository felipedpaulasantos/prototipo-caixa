import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AccountProfileComponent } from "./account-profile/account-profile.component";
import { AccountActivationComponent } from "./account-activation/account-activation.component";
import { AccountSelectComponent } from "./account-select/account-select.component";
import { AuthGuard } from "../authentication/guards/auth-guard";

const routes: Routes = [
  {
    path: "",
    component: AccountSelectComponent,
    // canActivate: [AuthGuard],
    data: {
      title: "Contas",
      breadcrumb: "Contas"
    }
  },
  {
    path: ":id",
    component: AccountProfileComponent,
    /*     outlet: 'accountOutlet', */
    data: {
      title: "Detalhamento",
      breadcrumb: "Detalhamento",
      animation: "Detalhamento"
    }
  },
  {
    path: "ativacao",
    component: AccountActivationComponent,
    data: {
      title: "Contas - Ativação",
      breadcrumb: "Ativação"
    }
  },
  {
    path: "**",
    redirectTo: "contas",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
