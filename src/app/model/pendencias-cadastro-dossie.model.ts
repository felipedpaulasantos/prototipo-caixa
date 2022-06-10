import { TipoDocumentoDossie } from "./tipo-documento-dossie.model";
import { FuncaoDocumentalDossie } from "./funcao-documental-dossie.model";

export class PendenciasCadastroDossie {
  tipoDocumentoPendente: TipoDocumentoDossie;
  funcaoDocumental: FuncaoDocumentalDossie;
  identificadorComposicaoDocumental: number;
}
