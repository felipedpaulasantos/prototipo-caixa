import { TIPO_PESSOA } from "../shared/utils/constants";

export enum Ambiente {
    LOCAL, DES, TQS, HMP, PRD
}

export enum Amplitude {
    NACIONAL = 1,
    PILOTO = 2,
    PREPILOTO = 3
}

export enum Categoria {
    MODULO = 1,
    MENU = 2,
    SUBMENU = 3,
    FUNCIONALIDADE = 4
}

export enum Comportamento {
    INATIVO = "INATIVO",
    ATIVO = "ATIVO",
    ATIVO_PF = "ATIVO_PF",
    ATIVO_PJ = "ATIVO_PJ"
}

export enum Funcionalidade {
    /* MODULO */
    comercial,
    govsocial,
    investimentos,
    dossiedigital,
    autorizacaoGerencial,
    interagencia,
    configuracao,
    /* MENU - SERVIÇO AO CIDADÃO */
    govsocial_resumo,
    govsocial_cadastro,
    govsocial_cartaoSocial,
    govsocial_identificacaoPositiva,
    govsocial_fgts,
    govsocial_sistematicaSaqueFgts,
    govsocial_saqueAniversario,
    govsocial_saqueImediato,
    govsocial_saqueEmergencial94620,
    govsocial_pis,
    govsocial_beneficiosSociais,
    govsocial_seguroDesemprego,
    govsocial_inss,
    govsocial_portifolio,
    govsocial_poupancaCaixaFacil,
    govsocial_servicoFgts,
    govsocial_senhaCidadao,
    /* MENU - PESSOA FISICA / JURIDICA */
    comercial_resumo,
    comercial_cadastro,
    comercial_contratos,
    comercial_assinaturaEletronica,
    comercial_adesaoSMS,
    comercial_senhaConta,
    comercial_debitoAutomatico,
    comercial_extratoConta,
    comercial_produtosCliente,
    comercial_antecipacaoSaqueAniversario,
    comercial_creditoConsignado,
    comercial_chequeEspecial,
    comercial_pix,
    comercial_creditoDiretoCaixa,
    comercial_avaliacaoRisco,
    comercial_cestaServicos,
    comercial_cartaoCredito,
    comercial_aberturaConta,
    comercial_agendaRecebivel,
    comercial_pixAlterarLimite,
    comercial_pixExtrato,
    comercial_creditoSalario,
    comercial_pixGestaoLimite,
    /* MENU - INVESTIMENTOS */
    investimentos_resumo,
    investimentos_consultaAnalitica,
    investimentos_ofertaFmp,
    /* FUNCIONALIDADES - INVESTIMENTOS */
    investimentos_ofertaFmp_validacaoSenha,
    investimentos_ofertaFmp_validacaoToken,
    /* FUNCIONALIDADES - SERVIÇO AO CIDADÃO */
    govsocial_cartaoSocial_rastreamentoCartao,
    govsocial_pis_emitirGuiaPis,
    govsocial_pis_cancelarGuiaPis,
    govsocial_inss_consultaAlternativaCPF,
    govsocial_sistematicaSaqueFgts_validacaoSenha,
    govsocial_sistematicaSaqueFgts_validacaoToken,
    govsocial_senhaCidadao_desbloqueioSenha,
    govsocial_senhaCidadao_bloqueioSenha,
    govsocial_senhaCidadao_cadastroSenha,
    /* FUNCIONALIDADES - PESSOA FISICA / JURIDICA */
    comercial_contratos_posicaoDivida,
    comercial_creditoDiretoCaixa_validacaoSenha,
    comercial_creditoDiretoCaixa_validacaoToken,
    comercial_creditoConsignado_validacaoSenha,
    comercial_creditoConsignado_validacaoToken,
    comercial_pix_validacaoSenha,
    comercial_pix_validacaoToken,
    comercial_agendaRecebivel_validacaoSenha,
    comercial_agendaRecebivel_validacaoToken,
    comercial_pixAlterarLimite_validacaoSenha,
    comercial_pixAlterarLimite_validacaoToken,
    comercial_avaliacaoRisco_chequeAzul,
    comercial_avaliacaoRisco_chequeAzulNsgd,
    comercial_avaliacaoRisco_cdc,
    comercial_avaliacaoRisco_cartaoDeCredito,
    comercial_antecipacaoSaqueAniversario_validacaoToken,
    comercial_antecipacaoSaqueAniversario_validacaoSenha,
    comercial_perfilCliente_siabm,
    comercial_creditoConsignado_contratacao,
    comercial_creditoConsignado_renovacao,
    comercial_assinaturaEletronica_validacaoToken,
    comercial_assinaturaEletronica_validacaoSenha,
    comercial_sms_validacaoToken,
    comercial_sms_validacaoSenha,
    comercial_pix_portabilidade,
    comercial_pix_reivindicacao,
    comercial_debitoAutomatico_validacaoSenha,
    comercial_debitoAutomatico_validacaoToken,
    comercial_creditoConsignado_taxaCustomizada,
    comercial_avaliacaoRisco_convenente,
    comercial_debitoAutomatico_excluir_lancamento_futuro,
    comercial_creditoSalario_prospeccao,
    comercial_creditoSalario_retencao,
    comercial_creditoSalario_prospeccao_validacaoSenha,
    comercial_creditoSalario_prospeccao_validacaoToken,
    comercial_creditoSalario_retencao_validacaoSenha,
    comercial_creditoSalario_retencao_validacaoToken,
    comercial_pixGestaoLimite_validacaoSenha,
    comercial_pixGestaoLimite_validacaoToken,
    /* FUNCIONALIDADE - DETERMINACAO JUDICIAL */
    determinacao_judicial,
    determinacao_judicial_aberturaConta,
    determinacao_judicial_manutencaoConta,
}

export const URL_IGNORED = [
    "/principal",
    "/configuracao/",
    "/dossiedigital/",
    "/trilha-auditoria/",
    "/detalhamento-pesquisas-cadastrais"
];


export enum FuncionalidadeNumeroEnum {
  RESUMO_CLIENTE = 16,
  CADASTRO = 17,
  MANUTENCAO_DE_CONTAS = 18,
  CONTRATOS = 19,
  ASSINATURA_ELETRONICA = 20,
  SMS = 21,
  DEBITO_AUTOMATICO = 22,
  EXTRATO = 23,
  SENHA_DA_CONTA = 24,
  CREDITO_CONSIGNADO_INSS = 26,
  PIX = 27,
  CHEQUE_ESPECIAL = 28,
  CREDITO_DIRETO_CAIXA_CDC = 39,
  ANALISE_DE_RISCO = 41,
  CARTAO_DE_CREDITO = 43,
  AGENDA_DE_RECEBIVEIS = 46,
  Pix_ALTERAR_LIMITE = 47,
  ANTECIPACAO_DE_SAQUE_ANIVERSARIO_FGTS = 25,
  CESTA_DE_SERVICO = 42,
  ABERTURA_DE_CONTA = 45,
  ABERTURA_DETERMINACAO_JUDICIAL = 119,
}

export class FuncionalidadeMenuInterface {

  private constructor(
    public readonly isLink: boolean,
    public readonly url: string,
    public readonly icon: string,
    public readonly order: number,
    public readonly tipoCliente: string[]
  ) {}

  /* MODULO */
  static readonly comercial = new FuncionalidadeMenuInterface(false, "/comercial", "fas fa-user-tie", 2, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);
  static readonly govsocial = new FuncionalidadeMenuInterface(false, "/govsocial", "fa fa-users", 3, [TIPO_PESSOA.FISICA.codigo]);
  static readonly investimentos = new FuncionalidadeMenuInterface(false, "/investimento", "fa fa-chart-line", 4, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);
  static readonly autorizacaoGerencial = new FuncionalidadeMenuInterface(true, "/autorizacao-gerencial", "fa fa-ban", 5, []);
  static readonly dossiedigital = new FuncionalidadeMenuInterface(false, "/dossiedigital", "fa fa-cloud-upload-alt", 9, [TIPO_PESSOA.FISICA.codigo]);

  /* MENU SERVIÇO AO CIDADÃO */
  static readonly govsocial_resumo = new FuncionalidadeMenuInterface(true, "/govsocial/resumo", "fa fa-file-alt", 0, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_cadastro = new FuncionalidadeMenuInterface(true, "/govsocial/cadastro", "fas fa-pencil-alt", 1, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_cartaoSocial = new FuncionalidadeMenuInterface(false, "/govsocial/cartao-social", "fa fa-credit-card", 2, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_identificacaoPositiva = new FuncionalidadeMenuInterface(true, "/govsocial/identificacao-positiva", "fa fa-id-badge", 3, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_fgts = new FuncionalidadeMenuInterface(true, "/govsocial/fgts", "fas fa-landmark", 4, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_sistematicaSaqueFgts = new FuncionalidadeMenuInterface(true, "/govsocial/sistematica-saque-fgts", "fas fa-funnel-dollar", 5, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_saqueImediato = new FuncionalidadeMenuInterface(true, "/govsocial/saque-imediato", "fa fa-clock", 6, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_pis = new FuncionalidadeMenuInterface(true, "/govsocial/pis", "fas fa-school", 7, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_beneficiosSociais = new FuncionalidadeMenuInterface(true, "/govsocial/beneficios-sociais", "fas fa-user-shield", 8, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_seguroDesemprego = new FuncionalidadeMenuInterface(true, "/govsocial/seguro-desemprego", "fa fa-suitcase", 9, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_inss = new FuncionalidadeMenuInterface(false, "/govsocial/inss", "fas fa-book-reader", 10, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_poupancaCaixaFacil = new FuncionalidadeMenuInterface(true, "/govsocial/poupanca-caixa-facil", "fas fa-piggy-bank", 11, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_servicoFgts = new FuncionalidadeMenuInterface(true, "/govsocial/servico-fgts", "fa fa-user-cog", 15, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_saqueAniversario = new FuncionalidadeMenuInterface(true, "/govsocial/saque-aniversario", "fa fa-birthday-cake", 12, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_saqueEmergencial94620 = new FuncionalidadeMenuInterface(true, "/govsocial/saque-emergencial", "fa fa-business-time", 13, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_portifolio = new FuncionalidadeMenuInterface(true, "/govsocial/", "fa fa-folder-open", 14, [TIPO_PESSOA.FISICA.codigo]);

  /* MENU PESSOA FISICA / JURIDICA */
  static readonly comercial_resumo = new FuncionalidadeMenuInterface(true, "/comercial/resumo", "fa fa-file-alt", 0, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);
  static readonly comercial_cadastro = new FuncionalidadeMenuInterface(true, "/comercial/cadastro", "fas fa-pencil-alt", 1, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);
  static readonly comercial_produtosCliente = new FuncionalidadeMenuInterface(true, "/comercial/manutencao-conta", "fas fa-boxes", 2, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);
  static readonly comercial_contratos = new FuncionalidadeMenuInterface(false, "/comercial/contratos", "fas fa-file-contract", 3, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);
  static readonly comercial_assinaturaEletronica = new FuncionalidadeMenuInterface(true, "/comercial/roteiro-negocial/assinatura-eletronica", "fas fa-file-signature", 4, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);
  static readonly comercial_adesaoSMS = new FuncionalidadeMenuInterface(true, "/comercial/roteiro-negocial/sms", "fas fa-mobile-alt", 5, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);
  static readonly comercial_debitoAutomatico = new FuncionalidadeMenuInterface(true, "/comercial/roteiro-negocial/debito-automatico", "fas fa-coins", 6, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);
  static readonly comercial_extratoConta = new FuncionalidadeMenuInterface(true, "/comercial/roteiro-negocial/extrato-conta", "fas fa-file-invoice-dollar", 7, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);
  static readonly comercial_senhaConta = new FuncionalidadeMenuInterface(true, "/comercial/roteiro-negocial/senha-conta", "fa fa-lock", 8, [TIPO_PESSOA.FISICA.codigo]);
  static readonly comercial_cestaServicos = new FuncionalidadeMenuInterface(true, "/comercial/roteiro-negocial/cesta-servico/listar", "fa fa-shopping-basket", 9, [TIPO_PESSOA.FISICA.codigo]);
  static readonly comercial_antecipacaoSaqueAniversario = new FuncionalidadeMenuInterface(true, "/comercial/saque-aniversario/antecipacao", "fa fa-birthday-cake", 10, [TIPO_PESSOA.FISICA.codigo]);
  static readonly comercial_creditoDiretoCaixa = new FuncionalidadeMenuInterface(true, "/comercial/credito-direto-caixa", "fas fa-hand-holding-usd", 11, [TIPO_PESSOA.FISICA.codigo]);
  static readonly comercial_creditoConsignado = new FuncionalidadeMenuInterface(true, "/comercial/credito-consignado/beneficio-inss", "fas fa-wallet", 12, [TIPO_PESSOA.FISICA.codigo]);
  static readonly comercial_pix = new FuncionalidadeMenuInterface(true, "/comercial/pix/listar", "fas fa-expand-arrows-alt", 13, [TIPO_PESSOA.FISICA.codigo]);
  static readonly comercial_chequeEspecial = new FuncionalidadeMenuInterface(true, "/comercial/roteiro-negocial/cheque-especial/listar", "fas fa-receipt", 14, [TIPO_PESSOA.FISICA.codigo]);
  static readonly comercial_avaliacaoRisco = new FuncionalidadeMenuInterface(true, "/comercial/roteiro-negocial/avaliacao-risco", "fa fa-exclamation", 15, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);
  static readonly comercial_cartaoCredito = new FuncionalidadeMenuInterface(true, "/comercial/roteiro-negocial/cartao-credito", "fa fa-credit-card", 16, [TIPO_PESSOA.FISICA.codigo]);

  /* MENU INVESTIMENTOS */
  static readonly investimentos_resumo = new FuncionalidadeMenuInterface(true, "/investimento/resumo", "fa fa-file-alt", 0, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);
  static readonly investimentos_consultaAnalitica = new FuncionalidadeMenuInterface(true, "/investimento/resumo/consulta-analitica", "fa fa-chart-pie", 1, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);

  /* FUNCIONALIDADES */
  static readonly govsocial_cartaoSocial_senhaCidadao = new FuncionalidadeMenuInterface(true, "/govsocial/cartao-social", "fa fa-key", 0, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_cartaoSocial_rastreamentoCartao = new FuncionalidadeMenuInterface(true, "/govsocial/cartao-social", "fa fa-credit-card", 0, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_pis_emitirGuiaPis = new FuncionalidadeMenuInterface(true, "/govsocial/pis", "fas fa-file-download", 0, [TIPO_PESSOA.FISICA.codigo]);
  static readonly govsocial_pis_cancelarGuiaPis = new FuncionalidadeMenuInterface(true, "/govsocial/pis", "fa fa-file-excel", 0, [TIPO_PESSOA.FISICA.codigo]);
  static readonly comercial_contratos_posicaoDivida = new FuncionalidadeMenuInterface(true, "/comercial/contratos", "fa fa-calendar-check", 0, [TIPO_PESSOA.FISICA.codigo, TIPO_PESSOA.JURIDICA.codigo]);
  static readonly govsocial_inss_consultaAlternativaCPF = new FuncionalidadeMenuInterface(true, "/govsocial/inss", "fa fa-key", 0, [TIPO_PESSOA.FISICA.codigo]);

}

export class FuncionalidadeMenuItem {
  numeroFuncionalidade: number;
  siglaFuncionalidade: string;
  nomeFuncionalidade: string;
  numeroCategoria: number;
  siglaCategoria: string;
  numeroFuncionalidadeSuperior: number;
  level: number;
  isAcessoLiberado: boolean;

  icon: string;
  isLink: boolean;
  url: string;
  order: number;
  tipoCliente: string[];
  submenu?: FuncionalidadeMenuItem[]
}

export const URL_FUNCIONALIDADE = new Map<number, string>([
    [Funcionalidade.comercial, "/comercial"],
    [Funcionalidade.comercial_cadastro, "/comercial/cadastro"],
    [Funcionalidade.comercial_resumo, "/comercial/resumo"],
    [Funcionalidade.comercial_aberturaConta, "/comercial/abertura-conta"],
    [Funcionalidade.comercial_assinaturaEletronica, "/comercial/roteiro-negocial/assinatura-eletronica"],
    [Funcionalidade.comercial_adesaoSMS, "/comercial/roteiro-negocial/sms"],
    [Funcionalidade.comercial_extratoConta, "/comercial/roteiro-negocial/extrato-conta"],
    [Funcionalidade.comercial_senhaConta, "/comercial/roteiro-negocial/senha-conta"],
    [Funcionalidade.comercial_pixAlterarLimite, "/comercial/pix-limite"],
    [Funcionalidade.comercial_pixExtrato, "/comercial/pix-extrato"],
    [Funcionalidade.comercial_avaliacaoRisco, "/comercial/roteiro-negocial/avaliacao-risco"],
    [Funcionalidade.comercial_agendaRecebivel, "/comercial/agenda-recebivel"],
    [Funcionalidade.comercial_debitoAutomatico, "/comercial/roteiro-negocial/debito-automatico"],
    [Funcionalidade.comercial_cestaServicos, "/comercial/roteiro-negocial/cesta-servico"],
    [Funcionalidade.comercial_creditoDiretoCaixa, "/comercial/credito-direto-caixa"],
    [Funcionalidade.comercial_creditoConsignado, "/comercial/credito-consignado"],
    [Funcionalidade.comercial_pix, "/comercial/pix-chave"],
    [Funcionalidade.comercial_antecipacaoSaqueAniversario, "/comercial/saque-aniversario"],
    [Funcionalidade.comercial_chequeEspecial, "/comercial/roteiro-negocial/cheque-especial"],
    [Funcionalidade.comercial_cartaoCredito, "/comercial/roteiro-negocial/cartao-credito"],
    [Funcionalidade.comercial_produtosCliente, "/comercial/manutencao-conta"],
    [Funcionalidade.comercial_contratos, "/comercial/contratos"],
    [Funcionalidade.comercial_creditoSalario, "/comercial/credito-salario"],
    [Funcionalidade.comercial_pixGestaoLimite, "/comercial/pix-gestao-limite"],
    [Funcionalidade.govsocial, "/govsocial"],
    [Funcionalidade.govsocial_resumo, "/govsocial/resumo"],
    [Funcionalidade.govsocial_cadastro, "/govsocial/cadastro"],
    [Funcionalidade.govsocial_cartaoSocial, "/govsocial/cartao-social"],
    [Funcionalidade.govsocial_identificacaoPositiva, "/govsocial/identificacao-positiva"],
    [Funcionalidade.govsocial_fgts, "/govsocial/fgts"],
    [Funcionalidade.govsocial_sistematicaSaqueFgts, "/govsocial/sistematica-saque-fgts"],
    [Funcionalidade.govsocial_saqueAniversario, "/govsocial/saque-aniversario"],
    [Funcionalidade.govsocial_saqueImediato, "/govsocial/saque-imediato"],
    [Funcionalidade.govsocial_saqueEmergencial94620, "/govsocial/saque-emergencial"],
    [Funcionalidade.govsocial_pis, "/govsocial/pis"],
    [Funcionalidade.govsocial_beneficiosSociais, "/govsocial/beneficios-sociais"],
    [Funcionalidade.govsocial_seguroDesemprego, "/govsocial/seguro-desemprego"],
    [Funcionalidade.govsocial_inss, "/govsocial/inss"],
    [Funcionalidade.govsocial_portifolio, "/govsocial/portifolio"],
    [Funcionalidade.govsocial_poupancaCaixaFacil, "/govsocial/poupanca-caixa-facil"],
    [Funcionalidade.govsocial_servicoFgts, "/govsocial/servico-fgts"],
    [Funcionalidade.govsocial_senhaCidadao, "/govsocial/senha-cidadao"],
    [Funcionalidade.dossiedigital, "/dossiedigital"],
    [Funcionalidade.investimentos, "/investimento"],
    [Funcionalidade.investimentos_resumo, "/investimento/resumo"],
    [Funcionalidade.investimentos_consultaAnalitica, "/investimento/resumo/consulta-analitica"],
    [Funcionalidade.investimentos_ofertaFmp, "/investimento/oferta-fmp"],
    [Funcionalidade.autorizacaoGerencial, "/autorizacao-gerencial"],
    [Funcionalidade.determinacao_judicial, "/judicial"],
    [Funcionalidade.determinacao_judicial_aberturaConta, "/judicial/abertura-conta"],
    [Funcionalidade.determinacao_judicial_manutencaoConta, "/judicial/manutencao-conta-pj"],
]);

export interface FuncionalidadeRestricao {
    sequencia: number;
    numeroFuncionalidade: number;
    siglaFuncionalidade: string;
    nomeFuncionalidade: string;
    numeroCategoria: number;
    siglaCategoria: string;
    numeroFuncionalidadeSuperior: number;
    numeroComportamento: number;
    nomeComportamento: string;
    siglaComportamento: string;
    urlFuncionalidade?: string;
}

export interface ControleAcessoFuncionalidade {
    funcionalidades: FuncionalidadeRestricao[];
}
