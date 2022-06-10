import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KeycloakGuard } from "../keycloak-service/keycloak.guard";

import { FaseComponent } from "./fase.component";
import { ConsultarFaseComponent } from "./consultar-fase/consultar-fase.component";
import { InserirFaseComponent } from "./inserir-fase/inserir-fase.component";

const routes: Routes = [
  { path: "",
    component: FaseComponent,
    //canActivate: [KeycloakGuard],
    children: [
      { path: "consultar",
        component: ConsultarFaseComponent,
        //canActivate: [KeycloakGuard]
      },
      { path: "inserir",
        component: InserirFaseComponent,
        //canActivate: [KeycloakGuard]
      },
      { path: "**", redirectTo: "" }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaseRoutingModule { }
