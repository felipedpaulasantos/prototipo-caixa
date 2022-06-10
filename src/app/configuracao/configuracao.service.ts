import { CategoriaMenuEnum, FuncionalidadeRequest } from "./configuracao.model";
import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConfiguracaoService {

  private activeTab: BehaviorSubject<CategoriaMenuEnum> = new BehaviorSubject<CategoriaMenuEnum>(CategoriaMenuEnum.MODULO);

  constructor(private http: HttpClient) {}

  public carregarListaMenus(): Observable<any> {
    return this.http.get<any>(`${environment.BUSCA_API}/menus`);
  }

  public alterarVisualizacaoMenu(request: FuncionalidadeRequest): Observable<any> {
    return this.http.post<any>(`${environment.BUSCA_API}/menus/alterar`, request);
  }

  setActiveTab(activeTab: CategoriaMenuEnum) {
    this.activeTab.next(activeTab);
  }

  getActiveTab(): Observable<CategoriaMenuEnum> {
    return this.activeTab.asObservable();
  }

}
