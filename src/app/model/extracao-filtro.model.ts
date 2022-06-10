export class ExtracaoFiltro {
  cpfCliente: number;
  formato: string;
  imagem: string;
  tipoDocumento: string;

  constructor(
    cpf: number,
    formato: string,
    imagem: string,
    tipoDocumento: string
  ) {
    this.cpfCliente = cpf;
    this.formato = formato;
    this.imagem = imagem;
    this.tipoDocumento = tipoDocumento;
  }
}
