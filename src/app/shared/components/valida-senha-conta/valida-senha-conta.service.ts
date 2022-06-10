import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ValidaSenhaContaService {

  constructor() { }

  /**
   * Identifica se o modal de confirmação da transação está aberto
   * É utilizado na diretiva appDisableButton para desabilitar um botão enquanto o modal estiver aberto
  */
  private isModalConfirmacaoOpenSource = new BehaviorSubject<boolean>(false);
  public isModalConfirmacaoOpen$ = this.isModalConfirmacaoOpenSource.asObservable();

  public setIsModalConfirmacaoAberto(isOpen: boolean): void {
    this.isModalConfirmacaoOpenSource.next(isOpen);
  }

}
