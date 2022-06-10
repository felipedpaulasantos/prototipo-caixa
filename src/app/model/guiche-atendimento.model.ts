import { Atendimento } from "./atendimento-model";

export class GuicheAtendimento {
  codigoGuiche: number;
  nomeAmbiente: string;
  numeroGuiche: number;
  quantidadeCliente = 0;
  atendimento: Atendimento;
  usuario: string;
}
