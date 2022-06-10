export const TIPO_PESSOA = {
    FISICA: {
        codigo: "1",
        nome: "Fisica"
    },
    JURIDICA: {
        codigo: "2",
        nome: "Jurídica"
    }
}

export const TIPO_RENDA = {
    FORMAL: {
        codigo: "F",
        nome: "Formal"
    },
    INFORMAL: {
        codigo: "I",
        nome: "Informal"
    }
}

export const CARACTERISTICA_RENDA = {
    SEM_RENDA: {
        codigo: "2",
        nome: "Sem Renda"
    },
    DECLARADA: {
        codigo: "3",
        nome: "Declarada"
    },
    COMPROVADA: {
        codigo: "6",
        nome: "Comprovada"
    }
}

export const TIPOS_IMOVEL = [
    { codigo: "1", id: "CASA", nome: "Casa" },
    { codigo: "2", id: "TERRE", nome: "Terreno" },
    { codigo: "3", id: "SITIO", nome: "Sítio" },
    { codigo: "4", id: "CHACA", nome: "Chácara" },
    { codigo: "5", id: "APTO", nome: "Apartamento" },
    { codigo: "6", id: "LOJA", nome: "Loja" },
    { codigo: "7", id: "S COM", nome: "Sala Comercial" },
    { codigo: "8", id: "FAZEN", nome: "Fazenda" },
    { codigo: "9", id: "PREDI", nome: "Prédio" },
    { codigo: "10", id: "OUTRO", nome: "Outros Tipos Imóveis" }
]

export const TIPOS_OCUPACAO_IMOVEL = [
    { codigo: "1", id: "PROP/QUITADA", nome: "PROP/QUITADA" },
    { codigo: "2", id: "P FINANC CEF", nome: "P FINANC CEF" },
    { codigo: "3", id: "P FINANC OUTROS", nome: "P FINANC OUTROS" },
    { codigo: "4", id: "ALUGADA", nome: "ALUGADA" },
    { codigo: "5", id: "C/PARENTES/PAIS", nome: "C/PARENTES/PAIS" },
    { codigo: "6", id: "CED/FUNCIONAL", nome: "CED/FUNCIONAL" },
    { codigo: "7", id: "NAO INFORMADO", nome: "NÃO INFORMADO" },
    { codigo: "8", id: "OUTROS", nome: "OUTROS" }
]

export const COMPROVANTE_RENDA_INFORMAL = [
  { codigo: 1, descricao: "CONCESSIONARIAS - Contas Água, Energia ou Telefone"},
  { codigo: 2, descricao: "SAUDE - Previdência, Consórcio, Seguro ou Plano de Saúde"},
  { codigo: 3, descricao: "FINANCEIROS - Fatura Cartão/Extrato Conta Corrente"},
  { codigo: 4, descricao: "LAZER / CONSUMO - Internet/TV a Cabo/Assinatura Revista/Jornais"}
]

export const COMPROVANTE_RENDA_FORMAL = [
  {
    codigo: 1,
    codigoSiric: "64522568",
    descAbreviada: "Auxilio Acidente",
    descricao: "Auxilio Acidente"
  },
  {
    codigo: 2,
    codigoSiric: "64522568",
    descAbreviada: "Aux. Doença e Maternidade",
    descricao: "Auxílio Doença e Maternidade"
  },
  {
    codigo: 3,
    codigoSiric: "64522050",
    descAbreviada: "CTPS",
    descricao: "Carteira de Trabalho (CTPS)"
  },
  {
    codigo: 4,
    codigoSiric: "65220851",
    descAbreviada: "Comp. Rec. no Exterior",
    descricao: "Comprovante de Recebimento no Exterior"
  },
  {
    codigo: 5,
    codigoSiric: "64522009",
    descAbreviada: "Contracheque",
    descricao: "Contracheque/Hollerith"
  },
  {
    codigo: 6,
    codigoSiric: "64522097",
    descAbreviada: "Contr Aluguel",
    descricao: "Contrato de Aluguel/Arrendamento"
  },
  {
    codigo: 7,
    codigoSiric: "64522120",
    descAbreviada: "Contrato de Estágio",
    descricao: "Contrato de Estágio"
  },
  {
    codigo: 8,
    codigoSiric: "64522154",
    descAbreviada: "Contr Prest Serv",
    descricao: "Contrato de Prestação De Serviços"
  },
  {
    codigo: 9,
    codigoSiric: "64522237",
    descAbreviada: "Contribuição INSS",
    descricao: "Contribuição INSS"
  },
  {
    codigo: 10,
    codigoSiric: "79352449",
    descAbreviada: "Decl. Apt. PRONAF (DAP)",
    descricao: "Declaração de Aptidão ao PRONAF (DAP)"
  },
  {
    codigo: 11,
    codigoSiric: "64522325",
    descAbreviada: "Decl.Assoc.Coop.Sindicato",
    descricao: "Declaração de Associação/Cooperativa/Sindicato"
  },
  {
    codigo: 12,
    codigoSiric: "64524568",
    descAbreviada: "Decl IRPF",
    descricao: "Declaração de Imposto de Renda PF"
  },
  {
    codigo: 13,
    codigoSiric: "64522404",
    descAbreviada: "Decl Fonte Pag",
    descricao: "Declaração/Demonstrativo Fonte Pagadora"
  },
  {
    codigo: 14,
    codigoSiric: "64522404",
    descAbreviada: "Decl Org Previdenc",
    descricao: "Declaração/Demonstrativo Órgão Previdenciário"
  },
  {
    codigo: 15,
    codigoSiric: "64524328",
    descAbreviada: "DECORE",
    descricao: "DECORE"
  },
  {
    codigo: 16,
    codigoSiric: "64522451",
    descAbreviada: "DECORE com DARF",
    descricao: "DECORE com DARF"
  },
  {
    codigo: 17,
    codigoSiric: "64522484",
    descAbreviada: "Ext. Aplic. Finan./Poupa",
    descricao: "Extrato de Aplicação Financeira/Poupança"
  },
  {
    codigo: 18,
    codigoSiric: "64522568",
    descAbreviada: "Ext. Benef. Previden.",
    descricao: "Extrato de Benefício Previdenciário"
  },
  {
    codigo: 19,
    codigoSiric: "64522614",
    descAbreviada: "Ext. C. Salar./Cta Aposen",
    descricao: "Extrato de Conta Salário/Conta Aposentadoria"
  },
  {
    codigo: 20,
    codigoSiric: "64522635",
    descAbreviada: "Extrato FGTS",
    descricao: "Extrato FGTS"
  },
  {
    codigo: 21,
    codigoSiric: "64522681",
    descAbreviada: "N.Fisc.Venda (Ativ.Rural)",
    descricao: "Notas Fiscais de Vendas (Atividade Rural)"
  },
  {
    codigo: 22,
    codigoSiric: "65129926",
    descAbreviada: "RPA",
    descricao: "Recibo Pagamento Autônomo (RPA)"
  },
  {
    codigo: 23,
    codigoSiric: "65130033",
    descAbreviada: "Sentença Judicial",
    descricao: "Sentença Judicial"
  },
  {
    codigo: 24,
    codigoSiric: "65129980",
    descAbreviada: "Recolh ISS",
    descricao: "Recolhimento ISS"
  },
  {
    codigo: 25,
    codigoSiric: "118444943",
    descAbreviada: "Rec.Pag.Prod/Trab Rural",
    descricao: "Recibo de Pgto ao Produtor/ Trabalhador Rural"
  },
]

export const ORGOES_EMISSORES = {
    RGI: [
        {
          codigo: "10",
          sigla: "SSP",
          nome: "SECRETARIA DE SEGURANÇA PÚBLICA"
        },
        {
          codigo: "81",
          sigla: "OTOE",
          nome: "OUTRO TIPO DE ÓRGÃO EMISSOR"
        },
        {
          codigo: "88",
          sigla: "SDS",
          nome: "SECRETARIA DEFESA SOCIAL"
        },
        {
          codigo: "90",
          sigla: "P.CIVIL",
          nome: "POLICIA CIVIL"
        },
        {
          codigo: "91",
          sigla: "SECC",
          nome: "SECRETARIA DE ESTADO DA CASA CIVIL"
        }
    ],
    CTPS: [
        {
          codigo: "14",
          sigla: "CTPS",
          nome: "OUTRO TIPO DE ORGÃO EMISSOR CARTEIRA DE TRABALHO"
        },
        {
          codigo: "99",
          sigla: "MTE",
          nome: "MINISTÉRIO DO TRABALHO"
        }
    ],
    CERT_NASC: [
        {
          codigo: "12",
          sigla: "CERT NASC",
          nome: "OUTRO TIPO ORGÃO EMISSOR CERTIDÃO DE NASCIMENTO"
        },
        {
          codigo: "13",
          sigla: "CRC",
          nome: "CARTÓRIO DE REGISTRO CIVIL"
        }
    ],
    PASSAPORTE: [
        {
          codigo: "44",
          sigla: "DPF",
          nome: "POLÍCIA FEDERAL"
        },
        {
          codigo: "82",
          sigla: "OEE",
          nome: "ORGÃO EMISSOR ESTRANGEIRO"
        }
    ],
    CNH: [
        {
          codigo: "83",
          sigla: "DETRAN",
          nome: "ORGÃO DE TRANSITO"
        }
    ],
    NIS: [
        {
            codigo: "10",
            sigla: "SSP",
            nome: "SECRETARIA DE SEGURANÇA PÚBLICA"
        },
        {
          codigo: "81",
          sigla: "OTOE",
          nome: "OUTRO TIPO DE ORGÃO EMISSOR"
        }
    ]
}

export const LISTA_ESTADO_CIVIL = [
  { id: "0", nome: "Não informado" },
  { id: "1", nome: "Solteiro (a)" },
  { id: "3", nome: "Divorciado (a)" },
  { id: "4", nome: "Separado (a) Judicialmente" },
  { id: "5", nome: "Viúvo (a)" },
  { id: "6", nome: "Com União Estável" },
  { id: "7", nome: "Casado (a) com comunhão total de bens" },
  { id: "8", nome: "Casado (a) sem comunhão de bens" },
  { id: "9", nome: "Casado (a) com comunhão parcial de bens" }
];

export const FINALIDADE_PJ = [
  { id: "1", nome: "Com fins lucrativos" },
  { id: "2", nome: "Sem fins lucrativos" },
];

export const REGIME_TRIBUTARIO_PJ = [
  {id: "01", nome: "Isento/Imune" },
  {id: "05", nome: "Simples Nacional" },
  {id: "03", nome: "Lucro Real" },
  {id: "02", nome: "Lucro Presumido" },
  // {id: "10", nome: "Não Informado" }
];

export const TIPO_ESTABELECIMENTO_PJ = [
  {id: "M", nome: "Matriz" },
  {id: "F", nome: "Filial" },
  {id: "I", nome: "Ignorado" }
];

export const TIPO_DOCUMENTO_CONTA_ADESAO_SMS = {
  PF: {
    SIDEC : [1, 13],
    NSGD : [3701, 1288]
  },
  PJ: {
    SIDEC: [3, 13, 22],
    NSGD: [1292, 146, 3702]
  }
}
export const VINCULO_COMPOSICAO_SOCIETARIA = [
  { id: "1", nome: "Sócio" },
  { id: "2", nome: "Administrador" },
  { id: "3", nome: "Sócio/Administrador" },
]

export enum TipoContaPF {
  CORRENTE = 1,
  POUPANCA = 13,
  DEPOSITO_FIANCA = 19,
  CAIXA_FACIL = 23,
  SALARIO = 37,
  POUPANCA_NSGD = 1288,
  SALARIO_NSGD = 3700,
  CORRENTE_NSGD = 3701,
  CORRENTE_ENCERRADA_SALDO = 1369,
  POUPANCA_ENCERRADA_SALDO = 1367
}

export enum TipoContaPJ {
  CORRENTE_PRIVADA = 3,
  CORRENTE_PUBLICA = 6,
  DEPOSITO_ENTIDADE_FINANCEIRA = 7,
  POUPANCA_PUBLICA = 13,
  CONVENIO_INSTITUICAO_FINANCEIRA = 17,
  CHEQUE_ADMINISTRATIVO_PRONTO_PAGAMENTO = 20,
  POUPANCA_PRIVADA = 22,
  DEPOSITO_REVENDEDOR_LOTERICO = 43,
  CHEQUE_ORDEM_PAGAMENTO = 93,
  POUPANCA_SEM_FINS_LUCRATIVOS = 146,
  CORRENTE_NSGD = 1292,
  POUPANCA_PUBLICA_NSGD_CONDOMINIO_EDILICIO = 1388,
  POUPANCA_NSGD = 3702,
  DEPOSITO_REVENDEDOR_LOTERICO_NSGD= 4995
}

export const TIPOS_CONTA_CORRENTE_PF = [
  TipoContaPF.CORRENTE, TipoContaPF.CORRENTE_NSGD, TipoContaPF.CORRENTE_ENCERRADA_SALDO
];

export const TIPOS_CONTA_POUPANCA_PF = [
  TipoContaPF.POUPANCA, TipoContaPF.POUPANCA_NSGD, TipoContaPF.POUPANCA_ENCERRADA_SALDO
];

export const TIPOS_CONTA_CORRENTE_PJ = [
  TipoContaPJ.CORRENTE_PRIVADA, TipoContaPJ.CORRENTE_PUBLICA, TipoContaPJ.CORRENTE_NSGD
];

export const TIPOS_CONTA_POUPANCA_PJ = [
  TipoContaPJ.POUPANCA_PRIVADA, TipoContaPJ.POUPANCA_PUBLICA, TipoContaPJ.POUPANCA_NSGD, TipoContaPJ.POUPANCA_SEM_FINS_LUCRATIVOS
];

export const TIPOS_CONTA_PF = [].concat(TIPOS_CONTA_CORRENTE_PF, TIPOS_CONTA_POUPANCA_PF);
export const TIPOS_CONTA_PJ = [].concat(TIPOS_CONTA_CORRENTE_PJ, TIPOS_CONTA_POUPANCA_PJ);

export const TIPOS_CONTA_SIDEC = [
  TipoContaPF.CORRENTE,
  TipoContaPF.POUPANCA,
  TipoContaPF.CAIXA_FACIL,
  TipoContaPF.SALARIO,
  TipoContaPF.DEPOSITO_FIANCA,
  TipoContaPJ.CORRENTE_PRIVADA,
  TipoContaPJ.CORRENTE_PUBLICA,
  TipoContaPJ.POUPANCA_PUBLICA,
  TipoContaPJ.CONVENIO_INSTITUICAO_FINANCEIRA,
  TipoContaPJ.POUPANCA_PRIVADA,
  TipoContaPJ.DEPOSITO_ENTIDADE_FINANCEIRA,
  TipoContaPJ.DEPOSITO_REVENDEDOR_LOTERICO,
  TipoContaPJ.CHEQUE_ORDEM_PAGAMENTO,
  TipoContaPJ.POUPANCA_SEM_FINS_LUCRATIVOS
];

export const TIPOS_CONTA_NSGD = [
  TipoContaPF.POUPANCA_NSGD,
  TipoContaPF.SALARIO_NSGD,
  TipoContaPF.CORRENTE_NSGD,
  TipoContaPF.CORRENTE_ENCERRADA_SALDO,
  TipoContaPF.POUPANCA_ENCERRADA_SALDO,
  TipoContaPJ.CORRENTE_NSGD,
  TipoContaPJ.POUPANCA_NSGD,
  TipoContaPJ.POUPANCA_PUBLICA_NSGD_CONDOMINIO_EDILICIO,
  TipoContaPJ.DEPOSITO_REVENDEDOR_LOTERICO_NSGD
];

export const UF: any[] = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espirito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "TO", nome: "Tocantins" }
];

export const CRYPTO_PARAMS = {
  algorithm: "aes-128-gcm",
  key: "3a92ef8bfc26731d",
  iv: "1a74e99684de17e4",
  input_encoding: "utf8",
  output_encoding: "base64"
}

export const QTDE_MAXIMA_CLIENTES = 5;
