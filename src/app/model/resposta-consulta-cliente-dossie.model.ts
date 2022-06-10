import { ProdutosHabilitadosDossie } from "./produtos-habilitados-dossie.model";
import { DocumentosDossie } from "./documentos-dossie.model";
import { PendenciasCadastroDossie } from "./pendencias-cadastro-dossie.model";

export class RespostaConsultaClienteDossie {
  constructor() {}

     codigoCliente: number;
     nome: string;
     email: string;
     dataHoraApuracaoNivel: string;
     tipoPessoa: string;
     documentos: DocumentosDossie[];
     produtosHabilitados: ProdutosHabilitadosDossie[];
     pendenciasCadastro: PendenciasCadastroDossie[];
     cpf: string;
     dataNascimento: string;
     nomeMae: string;
     idade: number
     nomeReduzido: string;
     segmento: string;
}
