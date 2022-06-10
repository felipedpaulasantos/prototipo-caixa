export interface FaseApiConsultarRequest {
	filtro?: string;
}

export interface FaseApiConsultarResponse200 {
	dados?: Array<any>;
	idCusta?: string;
	mensagem?: string;
	sucesso?: string;
}

export interface FaseApiConsultarResponse204 {
	error: string;
	message: string;
	path: string;
	status: number;
	timestamp: Date
}

export interface FaseApiConsultarResponse400 {
	campos: Array<string>;
	codigo: number;
}


export interface FaseApiInserirRequest {
	areaJudicial: string;
	ativo: string;
	coGrupoAssunto?: string;
	coOrigem: string;
	coRecurso?: string;
	documento?: string;
	faseAnterior?: string;
	icAcordo: string;
	icBem: string;
	icNovoAdvogado: string;
	icNovoCredenciado: string;
	instancia?: string;
	matricula: string;
	nomeFase: string;
	nuFase?: number;
	numeroAreaJudicial?: number;
	suspensao?: string;
	tipoProcesso: string;
	tiposAcao?: string;
	tribunal?: string;
}

export interface FaseApiInserirResponse200 {
	dados?: Array<any>;
	idCusta?: string;
	mensagem?: string;
	sucesso?: string;
}

export interface FaseApiInserirResponse204 {
	error: string;
	message: string;
	path: string;
	status: number;
	timestamp: Date
}

export interface FaseApiInserirResponse400 {
	campos: Array<string>;
	codigo: number;
}