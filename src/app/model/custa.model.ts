import { AssuntoCusta } from "./assunto.model";

export interface CustaApiExcluirRequest {
	base: string;
	coExpediente: string;
	coExpedienteRecurso?: string;
	coMatricula: string;
	idCusta: number;
}

export interface CustaApiExcluirResponse {
	dados: Array<any>;
	idCusta: string;
	mensagem: string;
	sucesso: string;
}

export interface CustaApiExcluirResponse200 {
	dados: Array<any>;
	idCusta: string;
	mensagem: string;
	sucesso: string;
}

export interface CustaApiExcluirResponse204 {
	error: string;
	message: string;
	path: string;
	status: number;
	timestamp: Date
}

export interface CustaApiExcluirResponse400 {
	campos: Array<string>;
	codigo: number;
}


export interface CustaApiInserirRequest {
	assuntos: Array<AssuntoCusta>;
	base: string;
	coAnalitico?: number;
	coExpediente: string;
	coExpedienteRecurso?: string;
	coMatricula: string;
	deCusta?: string;
	dtFixacao: Date;
	icTipoCusta: boolean;
	idCodCusta: number;
	idCusta?: number;
	nuAgencia?: number;
	nuBanco?: number;
	nuConta?: number;
	nuDespesa: number;
	nuOperacao?: number;
	vrCusta: number;
}

export interface CustaApiInserirResponse200 {
	dados: Array<any>;
	idCusta: string;
	mensagem: string;
	sucesso: string;
}

export interface CustaApiInserirResponse204 {
	error: string;
	message: string;
	path: string;
	status: number;
	timestamp: Date
}

export interface CustaApiInserirResponse400 {
	campos: Array<string>;
	codigo: number;
}