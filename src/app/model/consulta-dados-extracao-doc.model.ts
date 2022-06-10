export class ConsultaDadosExtracaoDoc {
  idCliente: number;
  mimetype: string;
  binario: string;
  tipoDocumento: string;
  cpfCnpj?: number;
  tipoPessoa?: number;

constructor(idCliente: number, mimetype: string, binario: string, tipoDocumento: string, cpfCnpj?: number, tipoPessoa?: number) {
      this.idCliente = idCliente;
      this.mimetype = mimetype;
      this.binario = binario;
      this.tipoDocumento = tipoDocumento;
      this.cpfCnpj = cpfCnpj;
      this.tipoPessoa = tipoPessoa;
  }
}

export class ConsultaDadosCartaoAssinaturaExtracaoDoc {
    mimetype: string;
    binario: string;
    idCliente: number

    constructor(mimetype: string, binario: string, idCliente: number) {
    this.mimetype = mimetype;
    this.binario = binario;
    this.idCliente = idCliente;
  }
}
