import { ValidaSenhaContaRequest } from "../../../model/valida-senha-conta.model";

export class Telefone {
  id: number;
  value: string
}

export enum TipoValidacaoSelecionada {
  SENHA = "senha",
  TOKEN = "token"
}

export enum TipoValidacaoSenha {
  COMUM = "comum",
  PIX = "pix"
}

export interface ValidacaoSenha {
  senhaValidada: boolean;
  validaSenhaContaRequest?: ValidaSenhaContaRequest;
}


export interface TokenValidacaoRequest {
  codigo: string;
  documento: string;
  token: string;
}

export interface ValidacaoToken {
  tokenValidado: boolean;
  tokenValidacaoRequest?: TokenValidacaoRequest;
}
