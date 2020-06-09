import { Injectable, ComponentFactoryResolver, Injector, Type, Component } from "@angular/core";
import { BehaviorSubject, Subject } from 'rxjs';
import { ContextoInjecaoComponente } from './contexto-injecao-componente';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor() { }

  private contextoInjecaoSource = new Subject<ContextoInjecaoComponente>();
  contextoInjecao$ = this.contextoInjecaoSource.asObservable();

  private abertoSource = new BehaviorSubject<boolean>(false);
  isAberto$ = this.abertoSource.asObservable();

  trocar() {
    this.abertoSource.next(!this.abertoSource.value);
  }

  abrir() {
    this.abertoSource.next(true);
  }

  fechar() {
    this.abertoSource.next(false);
  }

  receberContexto(resolver: ComponentFactoryResolver, injector: Injector, componenteParaInjetar?: any) {
    this.contextoInjecaoSource.next({
      resolver, injector, componenteParaInjetar
    });
  }

}
