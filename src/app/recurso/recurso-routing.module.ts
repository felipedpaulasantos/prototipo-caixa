import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecursoComponent } from "./recurso.component";
import { InserirRecursoComponent } from "./inserir-recurso/inserir-recurso.component";


const routes: Routes = [
  { path: "",
    component: RecursoComponent,
    //canActivate: [KeycloakGuard],
    children: [
      { path: "inserir",
        component: InserirRecursoComponent,
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
export class RecursoRoutingModule { }
