import { MotivoDesconto } from "./motivo-desconto.model";

export class CestaServico {
  constructor() {}

  numero: number;
  numeroSidec: number;
  descricao: string;
  motivos: MotivoDesconto[];
  tooltip: string;
}
