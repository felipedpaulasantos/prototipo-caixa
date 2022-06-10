import { Component, OnChanges } from "@angular/core";
import { Router } from "@angular/router";
import {MenuLateralService} from "../menu-lateral-fixo/menu-lateral-fixo.service";
import { ControleAcessoService } from "../service/controle-acesso.service";

@Component({
  selector: "app-menu-principal",
  templateUrl: "./menu-principal.component.html",
  styleUrls: ["./menu-principal.component.css"]
})
export class MenuPrincipalComponent implements OnChanges {
  viewMessage: boolean;
  returnMessage: any;

  isComercial: boolean;
  isGovSocial: boolean;
  isInvestimentos: boolean;
  isDossieDigital: boolean;
  isAutorizacaoGerencial: boolean;
  isTrilhaAuditoria: boolean;
  isDeterminacaoJudicial: boolean;

  constructor(
    private router: Router,
    private menuService: MenuLateralService,
    private controleAcessoService: ControleAcessoService,
  ) {
    this.viewMessage = false;
    this.ngOnChanges();
  }

  ngOnChanges() {
    this.setMenuPrincipalPermissao();
  }

  setMenuPrincipalPermissao() {
  }

  redirecionar(rota: string) {
    if (!this.router.isActive(rota, false)) {
      this.router.navigate([rota]);
    }
  }

  isRotaAtiva(rota: string) {
    return this.router.isActive(rota, false);
  }

  fecharMenulateral() {
    this.menuService.fechar();
  }
}
