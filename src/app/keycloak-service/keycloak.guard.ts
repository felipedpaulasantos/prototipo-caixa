import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { FuncionalidadeRestricao } from "../model/controle-acesso-funcionalidade.model";
import { KeycloakService } from "./keycloak.service";
import { URL_IGNORED } from "./../model/controle-acesso-funcionalidade.model";

@Injectable()
export class KeycloakGuard implements CanActivate {

  funcionalidades: FuncionalidadeRestricao[];

  constructor(
    private keycloakService: KeycloakService
  ) {
      this.getFuncionalidadeRestricao();
  }

  getFuncionalidadeRestricao() { }

  hasFuncionalidadePermissaoPorRota(rota: string): boolean {
    if (URL_IGNORED.some( url => rota.includes(url) )) {
      return true;
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.keycloakService.authenticated()) { }
    this.keycloakService.login({ redirectUri: state.url });
    return false;
  }
}
