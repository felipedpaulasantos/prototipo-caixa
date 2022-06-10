export interface Conta {
    agencia: number;
    produto: number;
    numero: number;
    dv: number;
}

export interface ValidaSenhaContaRequest {
    conta: Conta;
    titularidade: number;
    pan: string;
    senha: string;
    flagIdentificacaoPositiva: string;
    tipoCliente: number;
    cpfCnpj: string;
}

export interface Negocial {
    origem: string;
    codigo: string;
    mensagem: string;
}

export interface Integracao {
    codigo: string;
    mensagem: string;
    excecao: any;
}

export interface ValidaSenhaContaResponse {
    nsu: string;
    negocial: Negocial[];
    integracao: Integracao;
}
