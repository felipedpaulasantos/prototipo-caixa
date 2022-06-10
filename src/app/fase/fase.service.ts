import { FaseApiConsultarResponse200, FaseApiConsultarResponse204, FaseApiConsultarResponse400, FaseApiInserirResponse200, FaseApiInserirRequest } from './../model/fase.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FaseService {

  constructor(
    private httpClient: HttpClient
  ) {}

  public consultarFase(): Observable<FaseApiConsultarResponse200> {
    const response: FaseApiConsultarResponse200 = { mensagem: "Fase consultada com sucesso" };
    return of(response);
    const url = `${environment}/fase/consultar`;
    return this.httpClient.get<FaseApiConsultarResponse200>(url);
  }

  public inserirFase(request: FaseApiInserirRequest): Observable<FaseApiInserirResponse200> {
    const response: FaseApiInserirResponse200 = { mensagem: "Fase consultada com sucesso" };
    return of(response);
    const url = `${environment}/fase/consultar`;
    return this.httpClient.post<FaseApiInserirResponse200>(url, request);
  }
}
