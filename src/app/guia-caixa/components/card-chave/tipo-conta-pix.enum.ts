export enum TipoContaPix {
  CACC = "CACC",
  SLRY = "SLRY",
  SVGS  = "SVGS"
}

export const TipoContaPixMensagem = {
  [TipoContaPix.CACC]: "Conta Corrente",
  [TipoContaPix.SLRY]: "Conta Salário",
  [TipoContaPix.SVGS]: "Conta Poupança",
};
