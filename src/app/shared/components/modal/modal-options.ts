export enum ModalSize {
  NORMAL = '',
  PEQUENO = "modal-sm",
  GRANDE = 'modal-lg',
  MAIOR = 'modal-xl'
}

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
