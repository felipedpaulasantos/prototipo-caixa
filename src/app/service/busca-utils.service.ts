import { Biometria } from "../shared/components/perfil-cliente/perfil-cliente.model";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { KeycloakService } from "../keycloak-service/keycloak.service";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Ocupacao } from "../model/ocupacao.model";
import { ResponseEstadoCivil } from "../model/response-estado-civil.model";
import { ResponseNivelInstrucao } from "../model/response-nivel-instrucao.model";
import { BuscaTipoDocumento } from "../model/busca-tipo-documento.model";
import { BuscaPaises } from "../model/busca-paises.model";
import { Busca } from "../model/busca.model";
import { Agencia } from "../model/agencia.model";
import { Patrimonio } from "../model/patrimonio.model";
import {
  MeioComunicacao,
  TipoMeioComunicacao
} from "../model/meio-comunicacao.model";
import { DeclaracaoProposito } from "../model/declaracao-proposito.model";
import { Profissao } from "../model/profissao.model";

@Injectable()
export class BuscaUtilsService {
  constructor(
    private httpclient: HttpClient,
    private router: Router,
    private keycloak: KeycloakService
  ) {}
  public getListEstadoCivil(): Observable<ResponseEstadoCivil> {
    return this.httpclient.get<ResponseEstadoCivil>(
      `${environment.BUSCA_API}/estado-civil`
    );
  }
  public getListFinalidade(): Observable<Array<Busca>> {
    return this.httpclient.get<Array<Busca>>(
      `${environment.BUSCA_API}/finalidade`
    );
  }
  public getListGrauInstrucao(): Observable<ResponseNivelInstrucao> {
    return this.httpclient.get<ResponseNivelInstrucao>(
      `${environment.BUSCA_API}/grau-instrucao`
    );
  }
  public getListDocTipos(): Observable<Array<BuscaTipoDocumento>> {
    return this.httpclient.get<Array<BuscaTipoDocumento>>(
      `${environment.BUSCA_API}/documentos/tipos`
    );
  }
  public getListPais(): Observable<Array<BuscaPaises>> {
    return this.httpclient.get<Array<BuscaPaises>>(
      `${environment.BUSCA_API}/enderecos/pais`
    );
  }

  public getOcupacoes(): Observable<Ocupacao[]> {
    return this.httpclient.get<Ocupacao[]>(
      `${environment.BUSCA_API}/ocupacoes`
    );
  }

  public getMeiosComunicacao(): Observable<TipoMeioComunicacao[]> {
    return this.httpclient.get<TipoMeioComunicacao[]>(
      `${environment.BUSCA_API}/meios-comunicacao`
    );
  }

  public getInformacoespatrimoniais(): Observable<Patrimonio[]> {
    return this.httpclient.get<Patrimonio[]>(
      `${environment.BUSCA_API}/informacoes-patrimoniais`
    );
  }

  public getDeclaracoesProposito(): Observable<DeclaracaoProposito[]> {
    return this.httpclient.get<DeclaracaoProposito[]>(
      `${environment.DOSSIE_API}/dossiedigital/declaracoes-proposito`
    );
  }

  public getAgencia(): Observable<Agencia> {
    return this.httpclient.get<Agencia>(`${environment.BUSCA_API}/agencias`);
  }

  public getAgenciaById(agencia: any): Observable<any> {
    return this.httpclient.get<any>(`${environment.BUSCA_API}/agencias/${agencia}`);
  }

  public getSrDired(unidade): Observable<any> {
    return this.httpclient.get<Agencia>(`${environment.BUSCA_API}/agencias/srDired/${unidade}`);
  }

  public getResumoBiometria(cpf: any): Observable<Biometria> {
    return this.httpclient.get<Biometria>(`${environment.BUSCA_API}/biometria/${cpf}`);
  }
}
