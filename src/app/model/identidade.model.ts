import { Cnh } from "./cnh.model";
import { CarteiraIdentidade } from "./carteira-identidade.model";
import {strToDate} from "../shared/utils/utils";
import { TipoDocumentoDossie } from "../pessoa-fisica/enum/tipo-documento-dossie.enum";

export class Identidade {
  numero: string;
  orgaoEmissor: string;
  uf: string;
  dataEmissao: Date;
  dataPrimeiraHabilitacao: Date;
  tpDocumento: TipoDocumentoDossie;

  constructor(documento?: any) {
    if (documento) {
      if (documento instanceof Cnh) {
        this.numero = documento.numeroRegistro;
        this.orgaoEmissor = documento.emissor;
        this.uf = documento.ufExpedicao;
        this.dataEmissao = strToDate(documento.dataEmissao);
        this.tpDocumento = TipoDocumentoDossie.CNH
        this.dataPrimeiraHabilitacao = strToDate(documento.dataPrimeiraHabilitacao)
      } else if (documento instanceof CarteiraIdentidade) {
        this.numero = documento.numeroRegistro;
        this.orgaoEmissor = documento.emissor;
        this.uf = documento.ufEmissor;
        this.dataEmissao = strToDate(documento.dataEmissao);
        this.tpDocumento = TipoDocumentoDossie.RG
      }
    }
  }
}
