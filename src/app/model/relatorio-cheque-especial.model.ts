export class RelatorioChequeEspecial {

  agencia: string;
  operacao: string;
  conta: string;
  dvConta: string;
  limiteCredito: string;
  txJurosEfetivaMensal: string;
  txJurosEfetivaAnual: string;
  custoEfetivoMensal: string;
  custoEfetivoAnual: string;
  garantiaPerc: string;
  garantiaValor: string;
  qtdCpfCnpjConta: string;
  titulares: DadosTitularidade[];
  tipoAssinatura: string;
  localidade: string;
  iofAliquotaBasica: string;
  iofAliquotaAdicional: string;
  adesaoAdep: string;
  cancelamentoAdesaoAdep: string;
  localUf: string;
  cpfProcuradorOuRepresentante: string;
  nomeProcuradorOuRepresentante: string;

  constructor() {}
}

export class DadosTitularidade {

  titularidade: string;
  nomeReduzido: string;
  tipoPessoa: string;
  cocli: string;
  cpf: string;
  cnpj: string;
  identidade: DadosIdentidade;
  tipoAssinatura: string;
  constructor() {}
}

export class DadosIdentidade {

  numero: string;
  orgaoEmissor: string;
  dataExpedicao: string;
  constructor() {}
}
