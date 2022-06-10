export class ConsultaDocsPendentes {
  cpfs: number[];
  modalidade: number;
  operacao: string;
  idCliente: number;

  constructor(_cpfs: number[], _modalidade: number, _operacao: string,  idCliente: number) {
    this.cpfs = _cpfs;
    this.modalidade = _modalidade;
    this.operacao = _operacao;
    this.idCliente = idCliente;
  }
}
