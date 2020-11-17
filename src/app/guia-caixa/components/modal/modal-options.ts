export enum ModalSize {
  NORMAL = '',
  PEQUENO = "modal-sm",
  GRANDE = 'modal-lg',
  MAIOR = 'modal-xl'
}

export const defaultModalOptions: ModalOptions = {
  titulo: "",
  mensagem: "",
  btOkTexto: "Ok",
  btCancelarTexto: "Fechar",
  showCancelar: false,
  classTitulo: "header-principal-caixa",
  btnOkClass: 'btn btn-primary btn-caixa',
  btnCancelarClass: 'btn btn-secondary btn-caixa',
  modalBodyClass: "",
  modalHeaderClass: "",
  modalFooterClass: "",
  centralizado: false,
  tamanho: ModalSize.NORMAL
};

export interface ModalOptions {
  titulo?: string;
  mensagem?: string;
  btOkTexto?: string;
  btCancelarTexto?: string;
  showCancelar?: boolean;
  classTitulo?: string;
  btnOkClass?: string;
  btnCancelarClass?: string;
  centralizado?: boolean;
  tamanho?: ModalSize;
  modalHeaderClass?: string;
  modalBodyClass?: string;
  modalFooterClass?: string;
}
