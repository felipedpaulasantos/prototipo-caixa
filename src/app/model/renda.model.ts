import { ComprovanteRenda } from "./comprovante-renda.model";

export class Renda {
  tipoFontePagadora: string;
  cpfCnpjFontePagadora: string;

  constructor(comprovante?: ComprovanteRenda) {
    if (comprovante) {
      this.tipoFontePagadora = comprovante.tipoFontePagadora;
      this.cpfCnpjFontePagadora = comprovante.cpfCnpjFontePagadora;
    }
  }
}
