import { ComprovanteResidencia } from "./comprovante-residencia.model";
import { removeMaskString } from "../shared/utils/utils";

export class EnderecoDossie {
  cep: string;
  tipoLogradouro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  nomeMunicipio: string;
  uf: string;
  finalidade: string;
  tipoEndereco: string;
  correspondencia: string;
  mesReferencia: number;
  anoReferencia: number;
  cidade: string;

  constructor(comprovante?: ComprovanteResidencia) {
    if (comprovante) {
      this.cep = removeMaskString(comprovante.cep);
      this.tipoLogradouro = comprovante.tipoLogradouro;
      this.logradouro = comprovante.endereco;
      this.numero = comprovante.numero;
      this.complemento = comprovante.complemento;
      this.bairro = comprovante.bairro;
      this.nomeMunicipio = comprovante.municipio;
      this.uf = comprovante.uf;
      this.finalidade = comprovante.finalidade;
      this.tipoEndereco = comprovante.tipoEndereco;
      this.correspondencia = comprovante.correspondecia
      this.complemento = comprovante.complemento;
      const mesAnoReferenciaArray = comprovante.mesAnoReferencia.split("/");
      this.mesReferencia = Number.parseInt(mesAnoReferenciaArray[0], 10);
      this.anoReferencia = Number.parseInt(mesAnoReferenciaArray[1], 10);
    }
  }
}
