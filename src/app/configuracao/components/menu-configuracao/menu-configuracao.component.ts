import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { ControleAcessoFuncionalidadeService } from "../../../service/controle-acesso-funcionalidade.service";
import { ControleAcessoFuncionalidade, FuncionalidadeRestricao } from "../../../model/controle-acesso-funcionalidade.model";
import { objIsNotEmpty, notEmpty } from "../../../shared/utils/utils";
import { AccordionMenuItem } from "../../../shared/caixa-components/accordion/types/accordion-menu-item";
import { Subscription } from "rxjs";

// import { environment } from "src/environments/environment";

@Component({
  selector: "app-menu-configuracao",
  templateUrl: "./menu-configuracao.component.html",
  styleUrls: ["./menu-configuracao.component.css"]
})
export class MenuConfiguracaoComponent implements OnInit, OnDestroy {

  funcionalidades: FuncionalidadeRestricao[];
  items: AccordionMenuItem[] = [];
  subscription = new Subscription();

  constructor(public router: Router,
    private controleAcesso: ControleAcessoFuncionalidadeService) { }

 ngOnInit() {
   this.consultarMenuPermissao();
   this.consultarMudancaRota();
 }

 consultarMudancaRota() {
   this.subscription.add(this.router.events.subscribe(ev => {
     if (ev instanceof NavigationEnd) { this.montaItensMenu() }
   }));
 }

 consultarMenuPermissao() {
   this.subscription.add(this.controleAcesso.controleAcessoFuncionalidade$
     .subscribe(
       (controleAcessoFuncionalidade: ControleAcessoFuncionalidade) => {
         if (objIsNotEmpty(controleAcessoFuncionalidade)
           && notEmpty(controleAcessoFuncionalidade.funcionalidades)) {
             this.funcionalidades = controleAcessoFuncionalidade.funcionalidades;
             this.montaItensMenu();
         }
       },
       (error: any) => {
         console.log("Error ao buscar permissões para o menu", error);
       }
   ));
 }

  public isRotaAtiva(rota: string): boolean {
    if (rota === "configuracao-do-modulo") {
      return this.router.isActive("/configuracao/configuracao-do-modulo", true);
    } else {
      return this.router.isActive(rota, true);
    }
  }

  montaItensMenu() {
    this.items = [].concat([
      {
        name: "Configuração do Menu",
        url: "/configuracao/configuracao-do-modulo",
        enabled: true,
        active: this.isRotaAtiva("/configuracao/configuracao-do-modulo"),
        iconClass: "fa fa-layer-group"
      },
      {
        name: "Serviço de Mensageria",
        url: "/configuracao/servico-mensageria",
        enabled: true,
        active: this.isRotaAtiva("/configuracao/servico-mensageria"),
        iconClass: "fa fa-comment"
      }
    ]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
