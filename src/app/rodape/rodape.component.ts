import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment";
import { KeycloakService } from "../keycloak-service/keycloak.service";
import { getCurrentAddress, objIsNotEmpty } from "../shared/utils/utils";
import {MenuLateralService} from "../menu-lateral-fixo/menu-lateral-fixo.service";
import { VersaoSistemaService } from "../service/versao-sistema.service";

@Component({
  selector: "app-rodape",
  templateUrl: "./rodape.component.html",
  styleUrls: ["./rodape.component.css"]
})
export class RodapeComponent implements OnInit {

  public version: string = environment.VERSION;
  public ssoUrl: string = environment.ssoConfig.url;

  constructor(
    private versaoSistemaService: VersaoSistemaService,
    private keycloakService: KeycloakService,
    public menuService: MenuLateralService
  ) {}

  ngOnInit() {

  }

  redirectSso() {
    this.keycloakService.logout(getCurrentAddress());
  }

}
