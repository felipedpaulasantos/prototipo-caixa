import {AvaliacaoSiric} from "./avaliacao-siric.model";
import {Proposta} from "./proposta.model";

export class AvaliacaoRisco {
  avaliacoesSiric: AvaliacaoSiric[];
  propostasAvaliacao: Proposta[];
  mensagemErrorPropostas: string;

  constructor() {
    this.avaliacoesSiric = [];
    this.propostasAvaliacao = [];
  }
}
