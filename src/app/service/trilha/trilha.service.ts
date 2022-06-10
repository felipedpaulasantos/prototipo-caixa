import { CpfNisService } from "./../../governo-social/pesquisa-cpf-nis/cpf-nis.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Trilha } from "../../governo-social/model/trilha.model";
import { BehaviorSubject, Observable } from "rxjs";
import {
  KeycloakService,
  Tokens
} from "../../keycloak-service/keycloak.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Cidadao } from "../../governo-social/model/cliente.model";

@Injectable({
  providedIn: "root"
})
export class TrilhaService {
  public cidadao: Cidadao[];
  private infoDiredSrUn: any;
  private unidade: any;
  private objectTrilha: Trilha;
  public sharedTrilha;
  public unidadeShared;
  public infoDiredSrUnShared;
  constructor(
    private cidShared: CpfNisService,
    private http: HttpClient,
    private keycloakService: KeycloakService
  ) {
    this.sharedTrilha = new BehaviorSubject<any>(this.objectTrilha);
    this.unidadeShared = new BehaviorSubject<any>(this.unidade);
    this.infoDiredSrUnShared = new BehaviorSubject<any>(this.infoDiredSrUn);

    this.getCidShared();
    this.keycloakService.getTokens().then((tokens: Tokens) => {
      if (tokens.accessToken !== undefined && tokens.accessToken !== "") {
        const decoded = new JwtHelperService().decodeToken(tokens.accessToken);
        this.unidadeShared.next(sessionStorage.getItem(environment.localStorageKeys.CODIGO_AGENCIA_VIRTUAL));
      }
    });
  }
  public getSired(unidade: any): Observable<any> {
    this.attObjectTrilha(undefined, false);
    if (unidade !== undefined && unidade !== null) {
      return this.http.get<any>(
        `${environment.BUSCA_API}/agencias/srDired/${unidade}`
      );
    } else {
      return;
    }
  }
  public getCidShared() {
    this.cidShared.listaCidadao$
      .asObservable()
      .subscribe((cidadao: Cidadao[]) => {
        this.cidadao = cidadao;
      });
  }
  public attObjectTrilha(info?: Trilha, saveTrilha?: boolean) {
    let dataNext = new Trilha();
    this.infoDiredSrUnShared.subscribe((data: any) => {
      if (
        info === undefined &&
        saveTrilha !== undefined &&
        saveTrilha === false
      ) {
        dataNext = {};
        this.sharedTrilha.next(dataNext);
      } else if (saveTrilha === true) {
        dataNext = new Trilha();
        if (data.dired !== undefined && data.sr !== undefined) {
          dataNext.infoConsulta.dired = data.dired;
          dataNext.infoConsulta.sr = data.sr;
        }
        if (info.infoConsulta !== undefined && info.infoConsulta !== null) {
          // dataNext.infoConsulta.numeroDocumento = info.infoConsulta.numeroDocumento;
          switch (dataNext.infoConsulta.tipoDocumento) {
            case 2: {
              const nisStr = String(this.cidadao[0].documentos.nis);
              const nisTrilha = nisStr.split("-").join("");
              const nisTrilhaR = nisTrilha.split(".").join("");
              const nisConvertNumber = Number(nisTrilhaR);
              dataNext.infoConsulta.numeroDocumento = nisConvertNumber;
              break;
            }
            case 1: {
              const cpfStr = String(this.cidadao[0].documentos.cpf);
              const cpfTrilha = cpfStr.split("-").join("");
              const cpfTrilhaR = cpfTrilha.split(".").join("");
              const cpfConvertNumber = Number(cpfTrilhaR);
              dataNext.infoConsulta.numeroDocumento = cpfConvertNumber;
              break;
            }
          }
          dataNext.infoConsulta.tipoDocumento = info.infoConsulta.tipoDocumento;
          dataNext.infoConsulta.tipoFuncionalidade =
            info.infoConsulta.tipoFuncionalidade;
        }
        if (dataNext !== undefined && dataNext !== null) {
          this.sharedTrilha.next(dataNext);
        }
      }
    });
  }
}
