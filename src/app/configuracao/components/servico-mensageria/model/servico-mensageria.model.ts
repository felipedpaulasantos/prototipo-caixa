export class Mensagem {
    // funcionalidade: Funcionalidade;
    numero: number;
    nome: string;
    formato: number;
    conteudo: string;
    ambienteNacional: number;
    ambientePiloto: number;
    ambientePrePiloto: number;
    numeroFuncionalidade: number;
    nomeFuncionalidade?: string;
    posicaoMensagem: number;
    inicioExibicao: string;
    fimExibicao: string;
    situacao?: SituacaoMensagem;
}


export class Publicacao {
    mensagem: number
    ambiente: number;
    funcionalidade: number;
    comportamento: number;
    posicao: number;
    inicioExibicao: string;
    fimExibicao: string;
}


export class MensageriaResponse {
    erro: boolean;
    mensagem: string;
}


export class Funcionalidade {
    numeroFuncionalidade: number;
    numeroCategoria: number;
    nomeFuncionalidade: string;
    descricaoFuncionalidade: string;
}


export enum ModoTelaEnum {
    LISTAGEM = 1,
    CADASTRO = 2,
    EDICAO = 3,
    COMPROVANTE = 4
}


export enum SituacaoMensagem {
    AGENDADO = 1,
    ATIVO = 2,
    SEM_EXPIRACAO = 3,
    EXPIRADO = 4
}


export enum PosicaoExibicao {
    POPUP = 1,
    HEADER = 2,
    TOAST = 3
}

export interface ComprovanteMensageria {
    titulo: string;
    pagina: string;
    ambiente: string;
    modelo: string;
    periodo: string;
    conteudo: string;
    mensagem?: string;
    sucesso?: boolean;
}
