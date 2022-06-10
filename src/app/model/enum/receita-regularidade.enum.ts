/*
  https://www.gov.br/conecta/catalogo/apis/cadastro-base-do-cidadao-cbc-cpf/swagger_view#section/Campos-Retornados
*/
export enum ReceitaRegularidadePF {
  "REGULAR" = 0,
  "SUSPENSA" = 2,
  "TITULAR_FALECIDO" = 3,
  "PENDENTE_DE_REGULARIZACAO" = 4,
  "CANCELADA_POR_MULTIPLICIDADE" = 5,
  "NULA" = 8,
  "CANCELADA_DE_OFICIO" = 9
}

export enum ReceitaRegularidadePJ {
  ATIVA = "ATIVA",
  SUSPENSA = "SUSPENSA",
  INAPTA = "INAPTA",
  NULA = "NULA",
  BAIXADA = "BAIXADA"
}
