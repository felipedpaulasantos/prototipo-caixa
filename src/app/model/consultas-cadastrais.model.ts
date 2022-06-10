import { ConsultasCadastraisEnum } from "./enum/consulta-cadastral.enum";

export enum ConsultaCadastralStatus {
  SUCESSO = "SUCESSO",
  ERRO_IMPEDITIVO = "ERRO_IMPEDITIVO",
  ERRO_NAO_IMPEDITIVO = "ERRO_NAO_IMPEDITIVO",
  NAO_CONSULTADO = "NAO_CONSULTADO",
  TIMEOUT = "TIMEOUT",
  LOADING = "LOADING"
}

export interface ConsultaCadastral {
  tipo: ConsultasCadastraisEnum[],
  status: ConsultaCadastralStatus,
  titulo: string,
  mensagem: string,
  visivel: boolean,
  colapsado: boolean
}

export interface ConsultasCadastrais {
  consultaSicli: ConsultaCadastral;
  consultaReceita: ConsultaCadastral;
  consultaSipes: ConsultaCadastral;
}
