export enum AmbienteMenuEnum {
    NACIONAL = 1,
    PILOTO = 2,
    PREPILOTO = 3
}

export enum ComportamentoMenuEnum {
    INATIVO = 1,
    ATIVO = 2,
    ATIVO_PF = 3,
    ATIVO_PJ = 4
}

export enum CategoriaMenuEnum {
    MODULO = "MODULO",
    MENU = "MENU",
    SUBMENU = "SUBMENU",
    FUNCIONALIDADE = "FUNCIONALIDADE"
}

export enum CategoriaLancamentoFuturoTab {
    LANCAMENTO = "LANCAMENTO",
    CADASTRAR = "CADASTRAR",
    CONSULTAR = "CONSULTAR",
}

export enum ActionButton {
    ATIVAR_PF = 1,
    INATIVAR_PF = 2,
    ATIVAR_PJ = 3,
    INATIVAR_PJ = 4
}

export class Funcionalidade {
    numeroFuncionalidade: number;
    nomeCategoria: string
    nomeFuncionalidade: string;
    siglaFuncionalidade: string;
    numeroFuncionalidadeSuperior: number;
    level: number;
    nacional: number;
    piloto: number;
    prePiloto: number;
}

export class FuncionalidadeRequest {
    funcionalidade: number
    ambiente: number;
    comportamento: number;
}
