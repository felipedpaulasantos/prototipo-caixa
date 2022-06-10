export const TIPO_DOCUMENTO_IDENTIFICACAO: any[] = [
  { valor: "CNH" },
  { valor: "RG - DOCUMENTO DE IDENTIDADE"}
];

export const TIPO_DOCUMENTO_RENDA: any[] = [
  { valor: "DEMONSTRATIVO PAGAMENTO"},
  { valor: "CONTRACHEQUE / HOLERITE"}
];

export const TIPO_DOCUMENTO_ENDERECO: any[] = [
  { valor: "DOCUMENTO DE CONCESSIONARIA"}
];

export const TIPO_DOCUMENTO_DADOS_DECLARADOS = "DADOS DECLARADOS";
export const TIPO_DOCUMENTO_CARTAO_ASSINATURA = "CARTÃO DE ASSINATURA";

export class TiposDocumento {
  public tipoDocumentoIdentificacao = TIPO_DOCUMENTO_IDENTIFICACAO[0].valor;
  public tipoDocumentoRenda = TIPO_DOCUMENTO_RENDA[0].valor;
  public tipoDocumentoEndereco = TIPO_DOCUMENTO_ENDERECO[0].valor;

  constructor(init?: Partial<TiposDocumento[]>) {
    Object.assign(this, init);
  }
}

export function isDocumentoIdentificacao(tipoDocumento: string): boolean {
  return TIPO_DOCUMENTO_IDENTIFICACAO.some(tipo => tipo.valor === tipoDocumento)
}
export function isDocumentoEndereco(tipoDocumento: string): boolean {
  return TIPO_DOCUMENTO_ENDERECO.some(tipo => tipo.valor === tipoDocumento)
}
export function isDocumentoRenda(tipoDocumento: string): boolean {
  return TIPO_DOCUMENTO_RENDA.some(tipo => tipo.valor === tipoDocumento)
}
export function isDadosDeclarados(tipoDocumento: string): boolean {
  return TIPO_DOCUMENTO_DADOS_DECLARADOS === tipoDocumento
}
export function isCartaoAssinatura(tipoDocumento: string): boolean {
  return TIPO_DOCUMENTO_CARTAO_ASSINATURA === tipoDocumento
}
