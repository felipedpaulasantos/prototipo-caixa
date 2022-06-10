import { ParteExpedienteSijur } from "./parte-sijur.model";
import { VinculoSijur } from "./vinculo-sijur.model";
import { ContratoExpedienteSijur } from "./contrato-sijur.model";

export interface ExpedienteApiExcluirRequest {
	base?: string;
	expediente: string;
	expedienteRecurso: string;
}

export interface ExpedienteApiExcluirResponse204 {
	error: string;
	message: string;
	path: string;
	status: number;
	timestamp: Date
}

export interface ExpedienteApiExcluirResponse400 {
	campos: Array<string>;
	codigo: number;
}


export interface ExpedienteApiExtinguirRequest {
	base?: string;
	caixa?: string;
	expediente: string;
	matricula: string;
	motivo?: string;
	recurso: string;
	tipo: number;
}

export interface ExpedienteApiExtinguirResponse200 {
	dados: Array<any>;
	idCusta: string;
	mensagem: string;
	sucesso: string;
}

export interface ExpedienteApiExtinguirResponse204 {
	error: string;
	message: string;
	path: string;
	status: number;
	timestamp: Date
}

export interface ExpedienteApiExtinguirResponse400 {
	campos: Array<string>;
	codigo: number;
}


export interface ExpedienteApiReativarRequest {
	base?: string;
	caixa?: string;
	expediente: string;
	matricula: string;
	motivo?: string;
	recurso: string;
	tipo: number;
}

export interface ExpedienteApiReativarResponse200 {
	dados: Array<any>;
	idCusta: string;
	mensagem: string;
	sucesso: string;
}

export interface ExpedienteApiReativarResponse204 {
	error: string;
	message: string;
	path: string;
	status: number;
	timestamp: Date
}

export interface ExpedienteApiReativarResponse400 {
	campos: Array<string>;
	codigo: number;
}


export interface ExpedienteApiInserirRequest {
	acao?: number;
	advogado?: string;
	advogadocontra?: string;
	areajudicial?: string;
	assunto?: string;
	base?: string;
	carteira?: number;
	centrocusto?: number;
	comarca?: number;
	contrato?: Array<ContratoExpedienteSijur>;
	credenciado?: string;
	dtcausa?: Date;
	dtfato?: Date;
	dtvre?: Date;
	expediente?: string;
	foro?: string;
	grupoassunto?: number;
	matricula?: string;
	observacao?: string;
	operacao?: string;
	parte?: Array<ParteExpedienteSijur>;
	processo: string;
	ranque?: number;
	situacao?: number;
	terceirizado?: boolean;
	unidadeacompanhamento?: string;
	unidadesubsidio?: number;
	vara?: number;
	vinculo?: Array<VinculoSijur>
	vlrcausa?: number;
	vlrvre?: number;
}

export interface ExpedienteApiInserirResponse200 {}

export interface ExpedienteApiInserirResponse204 {
	error: string;
	message: string;
	path: string;
	status: number;
	timestamp: Date
}

export interface ExpedienteApiInserirResponse400 {
	campos: Array<string>;
	codigo: number;
}