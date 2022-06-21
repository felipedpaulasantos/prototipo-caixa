import { ConsultarExpedienteComponent } from './consultar-expediente/consultar-expediente.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ExpedienteComponent } from "./expediente.component";
import { ExtinguirExpedienteComponent } from "./extinguir-expediente/extinguir-expediente.component";
import { InserirExpedienteComponent } from "./inserir-expediente/inserir-expediente.component";
import { ExcluirExpedienteComponent } from "./excluir-expediente/excluir-expediente.component";
import { ReativarExpedienteComponent } from "./reativar-expediente/reativar-expediente.component";


const routes: Routes = [
  { path: "",
    component: ExpedienteComponent,
    children: [
      { path: "consultar",
        component: ConsultarExpedienteComponent
      },
      { path: "extinguir",
        component: ExtinguirExpedienteComponent
      },
      { path: "inserir",
        component: InserirExpedienteComponent
      },
      { path: "excluir",
        component: ExcluirExpedienteComponent
      },
      { path: "reativar",
        component: ReativarExpedienteComponent
      },
      { path: "**", redirectTo: "" }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpedienteRoutingModule { }
