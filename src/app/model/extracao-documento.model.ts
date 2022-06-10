import { Dado } from "./dado.model";

export class ExtracaoDocumento {
  cpfCliente: number;
  id: string;
  formato: string;
  link: string;
  dados: Dado[];

  constructor() {
    this.dados = new Array<Dado>();
  }
}
