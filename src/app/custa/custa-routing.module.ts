import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InserirCustaComponent } from './inserir-custa/inserir-custa.component';
import { CustaComponent } from './custa.component';
import { ExcluirCustaComponent } from "./excluir-custa/excluir-custa.component";


const routes: Routes = [
  { path: "",
    component: CustaComponent,
    children: [
      { path: "excluir",
        component: ExcluirCustaComponent
      },
      { path: "inserir",
        component: InserirCustaComponent
      },
      { path: "**", redirectTo: "" }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustaRoutingModule { }
