import { RelatorioAssinaturaEletronicaConta } from "./relatorio-assinatura-conta.model";

export class RelatorioAssinaturaEletronica {

  listaRelatorioAssinaturaEletronicaContas: RelatorioAssinaturaEletronicaConta[];
  nomeClienteProcuradorRepresentante: string;
  cpfClienteProcuradorRepresentante: string;
  local: string;

  constrcutor() {
    this.listaRelatorioAssinaturaEletronicaContas = new Array<RelatorioAssinaturaEletronicaConta>()
  }
}
