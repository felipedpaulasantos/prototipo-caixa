import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import {ModalConfirmComponent} from "./shared/components/modal/modal-confirm/modal-confirm.component";


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
 }

 @Injectable({
   providedIn: "root",
 })
 export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  observer: any;
  tipo: string;
  mensagem: string;

  constructor() {}

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return new Observable<boolean>(observer => {
      const canDeactivate = component && component.canDeactivate
        ? component.canDeactivate()
        : true;

      this.observer = observer;

      if (canDeactivate) {
        observer.next(true);
        return;
      }

      if (currentState.url.includes("/comercial/roteiro-negocial/cheque-especial/contratar")) {
        if (nextState.url.includes("/comercial/")) {
          this.tipo = "warning";
          this.mensagem = "Deseja realmente cancelar a contratação do Cheque Especial CAIXA?";
          this.exibirModalConfirmacao();
          return;
        }
      } else {
        this.tipo = "info";
        this.mensagem = "Os dados informados serão perdidos. Deseja continuar?";
        this.exibirModalConfirmacao();
      }
    });
  }

  exibirModalConfirmacao(): void {
    // this.modalService.open(ModalConfirmComponent, {
    //   message: this.mensagem,
    //   type: this.tipo,
    //   cancelar: () => {
    //     this.observer.next(false);
    //   },
    //   confirmar: () => {
    //     this.observer.next(true);
    //   }
    // });
  }
}
