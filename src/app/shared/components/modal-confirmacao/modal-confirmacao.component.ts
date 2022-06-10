import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ValidaSenhaContaService } from "../valida-senha-conta/valida-senha-conta.service";

export interface ModalConfirmacaoOptions {
  options?: any,
  header?: string,
  confirmar?: any,
  cancelar?: any,
  message?: string,
  type?: string,
  textoConfirmar?: string,
  textoCancelar?: string,
  modalComInput?: boolean
};

@Component({
  selector: "app-modal-confirmacao",
  templateUrl: "./modal-confirmacao.component.html",
  styleUrls: ["./modal-confirmacao.component.css"]
})
export class ModalConfirmacaoComponent implements OnDestroy {
  @Input()
  IMyDpOptions;

  @Input()
  header: string;

  @Input()
  showIcone = true;

  @Input()
  showBotaoCancelar = true;

  @Input()
  confirmar: any;

  @Input()
  cancelar: any;

  @Input()
  message: string;

  @Input()
  type = "info";

  @Input()
  textoConfirmar = "Confirmar";

  @Input()
  textoCancelar = "Cancelar";

  @Input()
  modalComInput: boolean;

  valor: FormControl;

  constructor(
    private validacaoSenhaService: ValidaSenhaContaService
  ) {
    //super();
    this.validacaoSenhaService.setIsModalConfirmacaoAberto(true);
  }

  ngOnDestroy(): void {
    this.validacaoSenhaService.setIsModalConfirmacaoAberto(false);
  }

}
