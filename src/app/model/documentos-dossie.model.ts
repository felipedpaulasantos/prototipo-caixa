import { TipoDocumentoDossie } from "./tipo-documento-dossie.model";

export class DocumentosDossie {

    codigoDocumento: number;
    tipoDocumento: TipoDocumentoDossie;
    identificadorSiecm: string;
    objectStore: string;
    dataHoraCaptura: string;
    matriculaCaptura: string;
    dataHoraValidade: string;
    dossieDigital: boolean;
    origemDocumento: string;
    analiseOutsourcing: boolean;
    mimetype: string;

}
