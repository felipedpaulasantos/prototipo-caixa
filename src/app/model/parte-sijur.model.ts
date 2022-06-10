import { ContratoRecursoSijur } from "./contrato-sijur.model";

export interface ParteExpedienteSijur {
	acao?: string;
	cpfcnpjcei?: string;
	matricula?: number;
	nome?: string;
	situacao?: number;
	tipopessoa?: number;
}

export interface ParteRecursoSijur {
	condicaoParte: number;
	contratos?: Array<ContratoRecursoSijur>;
	cpf_cgc: string;
	matricula?: number;
	nomeParte: string;
	tipoPessoa: string;
}