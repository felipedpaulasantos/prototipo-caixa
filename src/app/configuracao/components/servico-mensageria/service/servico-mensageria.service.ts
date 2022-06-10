import { Mensagem, MensageriaResponse, Publicacao, Funcionalidade } from "../model/servico-mensageria.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ServicoMensageriaService {

  messageEmitted$: BehaviorSubject<Mensagem> = new BehaviorSubject<Mensagem>(null);

  constructor(private http: HttpClient) {}

  public listarMensagens(): Observable<Array<Mensagem>> {
    return this.http.get<Array<Mensagem>>(`${environment.COMERCIAL_API}/mensageria/mensagem`);
  }

  public excluirMensagem(numeroMensagem: number): Observable<MensageriaResponse> {
    return this.http.delete<MensageriaResponse>(`${environment.COMERCIAL_API}/mensageria/mensagem/${numeroMensagem}`);
  }

  public alterarMensagem(mensagem: Mensagem): Observable<MensageriaResponse> {
    return this.http.put<MensageriaResponse>(`${environment.COMERCIAL_API}/mensageria/mensagem`, mensagem);
  }

  public incluirMensagem(mensagem: Mensagem): Observable<MensageriaResponse> {
    return this.http.post<MensageriaResponse>(`${environment.COMERCIAL_API}/mensageria/mensagem`, mensagem);
  }

  public alterarPublicacao(publicacao: Publicacao): Observable<MensageriaResponse> {
    return this.http.put<MensageriaResponse>(`${environment.COMERCIAL_API}/mensageria/publicacao`, publicacao);
  }

  public listarFuncionalidades(): Observable<Array<Funcionalidade>> {
    return this.http.get<Array<Funcionalidade>>(`${environment.COMERCIAL_API}/mensageria/funcionalidade`);
  }

  public carregarMensagens(ambiente: number): Observable<Array<Mensagem>> {
    return this.http.get<Array<Mensagem>>(`${environment.COMERCIAL_API}/mensageria/mensagem/ambiente/${ambiente}`);
  }

  public emitirMensagem(msg: Mensagem) {
    this.messageEmitted$.next(msg);
  }

}
