import { Dado } from "./dado.model"

export class ResultadoExtracao {
  identificadorSiecm: string;
  indentificadorDocumento: number;
  tipoDocumento: string;
  dataHoraCaptura: string;
  matriculaCaptura: string;
  origemDocumento: string;
  dataHoraEnvioExtracao: string;
  dataHoraRetornoExtracao: string;
  dataHoraEnvioAutenticidade: string;
  dataHoraRetornoAutenticidade: string;
  indiceAvaliacaoAutenticidade: number;
  codigoRejeicao: string;
  atributos: Dado[];
  codigoHttp: string;
  mensagem:  string;
  detalhe: string;
}
