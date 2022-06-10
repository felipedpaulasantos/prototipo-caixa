import { AssuntoRecurso } from "./assunto.model";
import { AdvogadoContrario } from "./advogado.model";
import { ParteRecursoSijur } from "./parte-sijur.model";

export interface RecursoApiInserirRequest {
	advogadoCredenciado?: string;
	advogadoTerceirizado: number;
	assuntos?: Array<AssuntoRecurso>;
	base: string;
	codExpediente?: string;
	codExpedienteRecurso?: string;
	comarca: number;
	dataCausa?: Date;
	descricaoLivre?: string;
	empregado?: number;
	foro: number;
	listaAdvogadoContrario?: Array<AdvogadoContrario>;
	matricula: string;
	numeroGrupoAssunto?: number;
	numeroUnidadeJuridica: string;
	observacao?: string;
	operacoes?: Array<OperacaoRecurso>;
	partes?: Array<ParteRecursoSijur>;
	posicaoCef: number;
	processoTexto: string;
	processoTextoAnterior?: string;
	recurso: number;
	relator: number;
	situacaoProcesso?: number;
	turma?: number;
	valorCausa?: number;
}

export interface RecursoApiInserirResponse200 {}

export interface RecursoApiInserirResponse204 {
	error: string;
	message: string;
	path: string;
	status: number;
	timestamp: Date
}

export interface RecursoApiInserirResponse400 {
	campos: Array<string>;
	codigo: number;
}

export interface OperacaoRecurso {
	numeroOperacao?: number;
}