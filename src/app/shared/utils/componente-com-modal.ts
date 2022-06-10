
import { ModalAlertaComponent } from "../components/modal-alerta/modal-alerta.component";
import { ModalConfirmacaoComponent } from "../components/modal-confirmacao/modal-confirmacao.component";
import { ModalErrorComponent } from "../components/modal-erro/modal-erro.component";

export class ComponenteComModal {

  public constructor () {

  }

  exibirModalConfirmacao(cabecalho: string, mensagem: string, callbackConfirmar, callbackCancelar = null, labelConfirmarButton: string = "Sim", labelCancelarButton: string = "Não") {

    // this.modalService.open(ModalConfirmacaoComponent, {
    //   header: cabecalho,
    //   message: mensagem,
    //   type: "info",
    //   textoConfirmar: labelConfirmarButton,
    //   textoCancelar: labelCancelarButton,
    //   confirmar: () => {
    //     if (callbackConfirmar) {
    //       callbackConfirmar();
    //     }

    //   },
    //   cancelar: () => {
    //     if (callbackCancelar) {
    //       callbackCancelar();
    //     }
    //   }
    // });
  }

  exibirModalErro(cabecalho: string, msg: string) {

    // this.modalService.open(ModalErrorComponent, {
    //   header: cabecalho,
    //   message: msg,
    //   type: "info",
    // });
  }

  exibirModalSucessso(cabecalho: string, msg: string, callbackOnClose: any = null) {

    // this.modalService.open(ModalAlertaComponent, {
    //   header: cabecalho,
    //   message: msg,
    //   type: "sucess",
    //   options: {
    //     complete: () => {
    //       if (callbackOnClose) {
    //         callbackOnClose();
    //       }
    //     }
    //   }

    // });
  }
}
