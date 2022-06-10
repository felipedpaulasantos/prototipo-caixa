import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Profissao} from "../model/profissao.model";

@Injectable({
  providedIn: "root"
})
export class DominioSicliService {

  constructor(private httpClient: HttpClient) {}

  public listarProfissoes(tipo: string): Observable<Profissao[]> {
    return this.httpClient.get<Profissao[]>(`${environment.COMERCIAL_API}/cadastro/profissoes/${tipo}`);
  }

  public listarProfissoesAtivas(tipo: string): Observable<Profissao[]> {
    return this.httpClient.get<Profissao[]>(`${environment.COMERCIAL_API}/cadastro/profissoes-ativas/${tipo}`);
  }

}
