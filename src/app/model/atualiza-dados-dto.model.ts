import { Dado, DadoAtualizar } from "./dado.model";

export class AtualizaDadosDto {
  idCliente: number;
  identificador: number;
  dados: DadoAtualizar[];

  constructor() {
    this.dados = new Array<DadoAtualizar>();
  }
}
