export class Localidade {
    codigo: number;
    nome: string;
    tipo: string;
}

export class TipoLogradouro {
    tipo: string;
    sigla: string;
}

export class Cep {
    erros: {};
    cep: string;
    localidade: Localidade;
    codigoLogradouro: string;
    logradouro: string;
    complemento: string;
    limiteInferior: string;
    limiteSuperior: string;
    codigoBairro: string;
    bairro: string;
    uf: string;
    codigoTreco: string;
    tipoLogradouro: TipoLogradouro
}
