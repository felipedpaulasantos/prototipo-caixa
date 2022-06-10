import {DadosConta} from "./../pessoa-fisica/dossie-digital/abertura-de-conta/model/dados-conta.model";
import {PessoaFisica} from "../pessoa-fisica/pessoa-fisica.model";
import {ConsultaRestricoesDocsPendentes} from "./consulta-restricoes-docs-pendentes.model";
import {DocumentoDigitalizado} from "./documento-digitalizado.model";
import {ParametrosConta} from "./parametros-conta.model";
import {ModalidadeConta} from "../pessoa-fisica/enum/modalidadeConta.enum";
import {ResponseResultadoContratacao} from "../pessoa-fisica/dossie-digital/resultado-contratacao/resultado-contratacao.model";
import {ResponseResultadoContratacaoConversao} from "../pessoa-fisica/dossie-digital/resultado-contratacao-conversao/resultado-contratacao-conversao.model";
import {VisualizaDocumento} from "./visualiza-documento.model";
import { RespostaConsultaClienteDossie } from "./resposta-consulta-cliente-dossie.model";
import { RetornoExtracaoDadosDoc } from "./retorno-extracao-dados-doc.model";
import { ConsultaDocsPendentes } from "./consulta-docs-pendentes.model";
import { ResultadoExtracao } from "./resultado-extracao.model";
import { ServicosConta } from "../pessoa-fisica/dossie-digital/abertura-de-conta/model/servicos-conta.model";
import { Cidadao } from "../governo-social/model/cliente.model";
import { Perfil } from "../pessoa-fisica/dossie-digital/abertura-de-conta/model/perfil-cliente.model";
import { MeioComunicacao } from "./meio-comunicacao.model";

export class DossieDto {
  pessoaFisica: PessoaFisica;
  titulares: Array<PessoaFisica>;
  parametrosConta: ParametrosConta;
  consultaDocsPendentes: ConsultaDocsPendentes;
  remoteAddress: string;
  resultadoExtracao: ResultadoExtracao;
  docsEscaneados: Array<DocumentoDigitalizado>;
  tipoDeConta: string;
  modalidade: any;
  conta: ServicosConta;
  cidadao: Cidadao;
  carteiraGRC: Perfil[];
  //
  retornoExtracaoDadosDoc: Array<RetornoExtracaoDadosDoc>;
  tipoDocumento: string;
  dadosConta: DadosConta;
  resultado: ResponseResultadoContratacao;
  resultadoConversao: ResponseResultadoContratacaoConversao;
  visualizaDocumento: VisualizaDocumento;
  // TO DO Verificar se com as novas implementacoes será necessario
  extracao: any
  titular: PessoaFisica;
  restricoes: Array<ConsultaRestricoesDocsPendentes>;
  consultaClienteDossie: RespostaConsultaClienteDossie;
  isSenhaCadastrada: boolean;
  isSenhaValidada: boolean;
  //
  cadastroSiiso: Cidadao;
  nis: string;
  meiosComunicacao: MeioComunicacao[];
  constructor() {
    this.titulares = new Array<PessoaFisica>();
    this.restricoes = new Array<ConsultaRestricoesDocsPendentes>();
    this.docsEscaneados = new Array<DocumentoDigitalizado>();
    this.carteiraGRC = [];
  }
}
