import { AvaliacaoSiric } from "./avaliacao-siric.model";

export class AvaliacaoRiscoProdutos {

  constructor() {}

  chequeAzul?: AvaliacaoSiric;
  chequeEmpresa?: AvaliacaoSiric;
  cdc?: AvaliacaoSiric;
  cartaoCredito?: AvaliacaoSiric;
  erroConsulta?: string;
  [key: string]: any
}
