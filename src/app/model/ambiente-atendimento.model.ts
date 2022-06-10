import { Atendimento } from "./atendimento-model";

export class SessaoAtendimento {

  ambienteAtendimento: AmbienteAtendimento;
  guiche: Guiche;
  horarioAberturaSessao: SessaoAtendimentoHorarioAbertura;

  get isAtendimentoEmAndamento() {
    return this.guiche && this.guiche.atendimento && this.guiche.atendimento.senha
  }
}

export class SessaoAtendimentoHorarioAbertura {
  horarioAberturaSessaoString: string;
  horarioAberturaSessaoStringFormatado: string;
  horarioAberturaSessaoDate: Date;
}

export class AmbienteAtendimento {
  nomeAmbiente: string;
  guiches: Guiche[];
}

export class Guiche {
  atendimento: Atendimento;
  codigoGuiche: number;
  numeroGuiche: number;
  interFace: string;
  terminal: string;
  unidade: number;
  nomeAmbiente: string;
  tipo: string;
  carteiras: string;
  servicos: Servico[];
  usuario: string;
  agencia: string;
  quantidadeCliente: number;
}

export class Servico {
  grupo: string;
  segmento: string;
  servico: string;
  prioridade: number;
}

export class GuicheLogout {
  guiche: string;
}

export class GuicheFinalizar {
  guiche: string;
  senha: string;
}

export class GuicheChamar {
  guiche: string;
  senha: string;
}

export class ResponseSenhaUltimo {
  senha: string;
}
