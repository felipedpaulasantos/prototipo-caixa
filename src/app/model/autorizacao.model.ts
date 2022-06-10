import { Conta } from "../governo-social/model/beneficios-sociais.model";
import { CadastroChequeEspecial } from "../comercial/roteiro-negocial/cheque-especial/model/contrato-cheque-especial.model";

export class RequestAutorizacaoCartaoCredito {

  cpfCnpj: string;
  bandeira: string;
  tipoDocumento: number;
  produto: string;
  acaoVenda: string;
  numeroControleSicac: string;
  matriculaGerente: string;

  public constructor () { }
}

export class RequestAutorizacaoCartaoCreditoPessoaFisica extends RequestAutorizacaoCartaoCredito {
  pv: string;

  public constructor () { super() }
}
export class RequestAutorizacaoCartaoCreditoPessoaJuridica extends RequestAutorizacaoCartaoCredito {
  unidade: string;

  public constructor () { super() }
}

export interface SolicitacaoCartaoCredito {
    cnpj: string;
    cpf: string;
    tipoProduto: number;
    bandeira: number;
    variante: number;
    acaoVenda: number;
    tipoCartao: number;
    valorLimiteContratado: number;
    canalVendaContratado: number;
    cpfVendedor: number;
    dataDigitacao: string;
    situacao: number;
    numeroPropostaSistemaOrigem: number;
    numeroSequencialControleSicac: number;
    varianteElo: string;
    valorLimiteAluguelContratado: number;
    flagSeguroPpr: string;
    flagAvaliacaoEmergencial: string;
    flagPessoaFisica: boolean;
    descricaoBandeira: string;
    descricaoVariante: string;
    descricaoTipoCartao: string;
    descricaoModalidade: string;
}

export interface RequestAutorizarRecusarSolicitacaoCartao {
  cpfCnpj: string;
  tipoDocumento: number;
  pv: string;
  bandeira: string;
  produto: string;
  acaoVenda: string;
  numeroControleSicac: string;
  matriculaGerente: string;
  unidade: number;
}

export class RetornoSolicitacaoChequeEspecial {
  solicitacoesChequeEspecialConsulta: SolicitacaoChequeEspecial[];
  erros: string[];
  public constructor() {}
}

export interface SolicitacaoChequeEspecial {
  numeroSolicitacao: number;
  matriculaEmpregado: string;
  cpfCnpj: number;
  valorAutorizado: number;
  limite: number;
  codigoAvaliacao: string;
  dataAvaliacao: string;
  dataValidadeAvaliacao: string;
  conta: string;
  dv: string;
  cocli: number;
  unidade: number;
  produto: number;
  tipoPessoaCliente: number;
}

export interface RetornoAutorizacaoCartaoCredito {
  numeroCartao: number;
  numeroCartaoCreditoChpras: number;
  numeroSequencialPropostaSicac: number;
}


export interface RequestAutorizacaoChequeEspecial extends CadastroChequeEspecial {
  numeroSolicitacao: string;
}
