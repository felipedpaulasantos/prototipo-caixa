import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { KeycloakService, Tokens } from "../../app/keycloak-service/keycloak.service";

@Injectable()
export class ControleAcessoService {

  private roles: string[] = [];

  constructor(
    private keycloakService: KeycloakService) {
    this.keycloakService.getTokens().then((tokens: Tokens) => {
      const decoded = new JwtHelperService().decodeToken(tokens.accessToken);
      this.roles = decoded["realm_access"].roles;
    });
  }

  public hasRole(role: string): boolean {
    if (this.roles) {
      return this.roles.includes(role);
    }
  }

  public getRoles() {
    return new Promise<any>((resolve, reject) => {
      this.keycloakService.getTokens().then((tokens: Tokens) => {
        const decoded = new JwtHelperService().decodeToken(tokens.accessToken);
        this.roles = decoded["realm_access"].roles;
        resolve(this.roles)
      }
      );

    })

  }

}
