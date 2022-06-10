import { PesquisaCadastral } from "./pesquisa-cadastral.model";
import { DocumentoDigitalizado } from "./documento-digitalizado.model";
import { ExtracaoDocumento } from "./extracao-documento.model";

export class ConsultaRestricoesDocsPendentes {
  cpfCliente: number;
  documentosPendentes: string[];
  documentosUtilizados: Array<DocumentoDigitalizado>;
  pesquisaCadastral: PesquisaCadastral;
  extracao: ExtracaoDocumento;
  autorizado: boolean;

  constructor() {
    this.documentosPendentes = new Array<string>();
    this.documentosUtilizados = new Array<DocumentoDigitalizado>();
  }
}
