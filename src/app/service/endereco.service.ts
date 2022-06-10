import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Cep, Localidade} from "../model/cep.model";
import {UF} from "../model/uf.model";

@Injectable({
  providedIn: "root"
})
export class EnderecoService {

  constructor(private httpClient: HttpClient) {}

  public consultarCep(cep: string): Observable<Cep> {
    return this.httpClient.get<Cep>(`${environment.COMERCIAL_API}/cadastro/localidade/cep/${cep}`);
  }

  public listarUf(): Observable<UF[]> {
    return this.httpClient.get<UF[]>(`${environment.COMERCIAL_API}/cadastro/localidade/uf`);
  }

  public listarMunicipios(localidade: string): Observable<Localidade[]> {
    return this.httpClient.get<Localidade[]>(`${environment.COMERCIAL_API}/cadastro/localidade/${localidade}/municipios`);
  }

}
