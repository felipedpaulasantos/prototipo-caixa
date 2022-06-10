import {Injectable, ComponentFactoryResolver, Injector} from "@angular/core";
import {Subject, BehaviorSubject, Observable} from "rxjs";
import {ContextoInjecaoComponente} from "./contexto-injecao-componente";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ComboTransacao} from "../model/combo-transacao.model";


@Injectable()
export class MenuLateralService {

  private contextoInjecaoSource = new Subject<ContextoInjecaoComponente>();
  contextoInjecao$ = this.contextoInjecaoSource.asObservable();

  private abertoSource = new BehaviorSubject<boolean>(false);
  isAberto$ = this.abertoSource.asObservable();

  private limparMenuDinamicoSource = new BehaviorSubject<boolean>(false);
  limparMenuDinamico$ = this.limparMenuDinamicoSource.asObservable();

  private injetarComponenteSource = new BehaviorSubject<boolean>(false);
  injetarComponente$ = this.injetarComponenteSource.asObservable();

  constructor(private http: HttpClient) {}

  trocar() {
    this.abertoSource.next(!this.abertoSource.value);
  }

  abrir() {
    this.abertoSource.next(true);
  }

  fechar() {
    this.abertoSource.next(false);
  }

  /* Limpa o conteúdo do menu lateral */
  limpar() {
    this.limparMenuDinamicoSource.next(true);
    this.limparMenuDinamicoSource.next(false);
  }

  injetar() {
    this.injetarComponenteSource.next(true);
    this.injetarComponenteSource.next(false);
  }

  receberContexto(componentFactoryResolver: ComponentFactoryResolver, injector: Injector, componenteParaInjetar?: any) {
    this.contextoInjecaoSource.next({ resolver: componentFactoryResolver, injector: injector, componenteParaInjetar: componenteParaInjetar});
  }

  public carregarListaAgencias(): Observable<ComboTransacao> {
    return this.http.get<ComboTransacao>(`${environment.BUSCA_API}/agencias/lista-unidade/pv?numUnidade=0&tpPesquisa=t`);
  }

  public buscarAgencia(agencia: any): Observable<any> {
    return this.http.get<any>(
      `${environment.BUSCA_API}/agencias/${agencia}`
    );
  }

}
