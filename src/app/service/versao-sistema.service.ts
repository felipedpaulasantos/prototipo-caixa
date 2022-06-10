import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class VersaoSistemaService {

  public versions$ = new BehaviorSubject<any>(null);

  constructor(
    private httpClient: HttpClient
  ) {}

  public consultaVersoes(): Observable<any> {
    return this.httpClient.get<any>(`${environment.BUSCA_API}/versao`);
  }

}
