import { TipoCartaoCredito } from "./tipo-cartao-credito.model";
import { VarianteCartaoCredito } from "./variante-cartao-credito.model";
import { AvaliacaoCartaoCredito } from "./avaliacao-cartao-credito.model";

export class BandeiraCartaoCredito {
  constructor() {}

  tipoCartao: TipoCartaoCredito;
  variantes: VarianteCartaoCredito[];
  vencimentos: number[];

  avaliacao: AvaliacaoCartaoCredito;
}
