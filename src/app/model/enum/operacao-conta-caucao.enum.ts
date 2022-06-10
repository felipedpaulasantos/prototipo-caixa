export class OperacaoContaCaucaoEnum {
    private constructor(
        public readonly njur: string,
        public readonly operacao: number,
        public readonly descricao: string,
    ) { }

    // Operações 008
    static readonly EMPRESA_PUBLICA_FEDERAL_ESTADUAL_MUNICIPAL = new OperacaoContaCaucaoEnum(
        "2011", 8, "EMPRESA PÚBLICA FEDERAL/ESTADUAL/MUNICIPAL"
    );

    static readonly SOCIEDADE_DE_ECONOMIA_MISTA_FEDERAL_ESTADUAL_MUNICIPAL = new OperacaoContaCaucaoEnum(
        "2038", 8, "SOCIEDADE DE ECONOMIA_MISTA FEDERAL/ESTADUAL/MUNICIPAL"
    );

    static readonly Órgão_Público_do_Poder_Executivo_Estadual_ou_do_Distrito_Federal = new OperacaoContaCaucaoEnum(
        "1023", 8, "Órgão Público do Poder Executivo Estadual ou do Distrito_Federal"
    );

    static readonly Órgão_Público_do_Poder_Executivo_Municipal = new OperacaoContaCaucaoEnum(
        "1031", 8, "Órgão_Público_do_Poder_Executivo_Municipal"
    );

    static readonly Órgão_Público_do_Poder_Legislativo_Estadual_ou_do_Distrito_Federal = new OperacaoContaCaucaoEnum(
        "1058", 8, "Órgão_Público_do_Poder_Legislativo_Estadual_ou_do_Distrito_Federal"
    );

    static readonly Órgão_Público_do_Poder_Legislativo_Municipal = new OperacaoContaCaucaoEnum(
        "1066", 8, "Órgão_Público_do_Poder_Legislativo_Municipal"
    );

    static readonly Órgão_Público_do_Poder_Judiciário_Estadual = new OperacaoContaCaucaoEnum(
        "1082", 8, "Órgão_Público_do_Poder_Judiciário_Estadual"
    );

    static readonly Autarquia_Estadual_ou_DF = new OperacaoContaCaucaoEnum(
        "1112", 8, "Autarquia_Estadual_ou_DF"
    );

    static readonly Autarquia_Municipal = new OperacaoContaCaucaoEnum(
        "1120", 8, "Autarquia_Municipal"
    );

    static readonly Fundação_Pública_de_Direito_Público_Federal = new OperacaoContaCaucaoEnum(
        "1139", 8, "Fundação_Pública_de_Direito_Público_Federal"
    );

    static readonly Fundação_Pública_de_Direito_Público_Estadual_ou_do_Distrito_Federal = new OperacaoContaCaucaoEnum(
        "1147", 8, "Fundação_Pública_de_Direito_Público_Estadual_ou_do_Distrito_Federal"
    );

    static readonly Fundação_Pública_de_Direito_Público_Municipal = new OperacaoContaCaucaoEnum(
        "1155", 8, "Fundação_Pública_de_Direito_Público_Municipal"
    );

    static readonly Órgão_Público_Autônomo_Estadual_ou_do_Distrito_Federal = new OperacaoContaCaucaoEnum(
        "1171", 8, "Órgão_Público_Autônomo_Estadual_ou_do_Distrito_Federal"
    );

    static readonly Órgão_Público_Autônomo_Municipal = new OperacaoContaCaucaoEnum(
        "1180", 8, "Órgão_Público_Autônomo_Municipal"
    );

    static readonly Comissão_Polinacional_Federal = new OperacaoContaCaucaoEnum(
        "1198", 8, "Comissão_Polinacional_Federal"
    );

    static readonly Consórcio_Público_de_Direito_Público_Federal_Estadual_Municipal_Associação_Pública = new OperacaoContaCaucaoEnum(
        "1210", 8, "Consórcio_Público_de_Direito_Público_Federal_Estadual_Municipal_Associação_Pública"
    );

    static readonly Estado_ou_Distrito_Federal = new OperacaoContaCaucaoEnum(
        "1236", 8, "Estado_ou_Distrito_Federal"
    );

    static readonly Município = new OperacaoContaCaucaoEnum(
        "1244", 8, "Município"
    );

    static readonly Fundação_Pública_de_Direito_Privado_Federal = new OperacaoContaCaucaoEnum(
        "1252", 8, "Fundação_Pública_de_Direito_Privado_Federal"
    );

    static readonly Fundação_Pública_de_Direito_Privado_Estadual_ou_do_Distrito_Federal = new OperacaoContaCaucaoEnum(
        "1260", 8, "Fundação_Pública_de_Direito_Privado_Estadual_ou_do_Distrito_Federal"
    );

    static readonly Fundação_Pública_de_Direito_Privado_Municipal = new OperacaoContaCaucaoEnum(
        "1279", 8, "Fundação_Pública_de_Direito_Privado_Municipal"
    );

    static readonly Fundo_Público_da_Administração_Indireta_Federal = new OperacaoContaCaucaoEnum(
        "1287", 8, "Fundo_Público_da_Administração_Indireta_Federal"
    );

    static readonly Fundo_Público_da_Administração_Indireta_Estadual_ou_do_Distrito_Federal = new OperacaoContaCaucaoEnum(
        "1295", 8, "Fundo_Público_da_Administração_Indireta_Estadual_ou_do_Distrito_Federal"
    );

    static readonly Fundo_Público_da_Administração_Indireta_Municipal = new OperacaoContaCaucaoEnum(
        "1309", 8, "Fundo_Público_da_Administração_Indireta_Municipal"
    );

    static readonly Fundo_Público_da_Administração_Direta_Federal = new OperacaoContaCaucaoEnum(
        "1317", 8, "Fundo_Público_da_Administração_Direta_Federal"
    );

    static readonly Fundo_Público_da_Administração_Direta_Estadual_ou_do_Distrito_Federal = new OperacaoContaCaucaoEnum(
        "1325", 8, "Fundo_Público_da_Administração_Direta_Estadual_ou_do_Distrito_Federal"
    );


    static readonly Fundo_Público_da_Administração_Direta_Municipal = new OperacaoContaCaucaoEnum(
        "1333", 8, "Fundo_Público_da_Administração_Direta_Municipal"
    );

    static readonly União = new OperacaoContaCaucaoEnum(
        "1341", 8, "União"
    );

    static readonly ENTIDADE_PRIVADA_SEM_FINS_LUCRATIVOS = new OperacaoContaCaucaoEnum(
        "0", 8, "ENTIDADE_PRIVADA_SEM_FINS_LUCRATIVOS"
    );

    static readonly ENTIDADE_PRIVADA_COM_FINS_LUCRATIVOS = new OperacaoContaCaucaoEnum(
        "0", 8, "ENTIDADE_PRIVADA_COM_FINS_LUCRATIVOS"
    );

    static readonly CONSÓRCIO_PÚBLICO_DE_DIREITO_PRIVADO = new OperacaoContaCaucaoEnum(
        "1228", 8, "CONSÓRCIO_PÚBLICO_DE_DIREITO_PRIVADO"
    );

    static readonly SOCIEDADE_ANÔNIMA_ABERTA = new OperacaoContaCaucaoEnum(
        "2046", 8, "SOCIEDADE_ANÔNIMA_ABERTA"
    );

    static readonly SOCIEDADE_ANÔNIMA_FECHADA = new OperacaoContaCaucaoEnum(
        "2054", 8, "SOCIEDADE_ANÔNIMA_FECHADA"
    );

    static readonly SOCIEDADE_EMPRESÁRIA_LIMITADA = new OperacaoContaCaucaoEnum(
        "2062", 8, "SOCIEDADE_EMPRESÁRIA_LIMITADA"
    );

    static readonly SOCIEDADE_EMPRESÁRIA_EM_NOME_COLETIVO = new OperacaoContaCaucaoEnum(
        "2070", 8, "SOCIEDADE_EMPRESÁRIA_EM_NOME_COLETIVO"
    );

    static readonly SOCIEDADE_EMPRESÁRIA_EM_COMANDITA_SIMPLES = new OperacaoContaCaucaoEnum(
        "2089", 8, "SOCIEDADE_EMPRESÁRIA_EM_COMANDITA_SIMPLES"
    );

    static readonly SOCIEDADE_EM_CONTA_DE_PARTICIPAÇÃO = new OperacaoContaCaucaoEnum(
        "2127", 8, "SOCIEDADE_EM_CONTA_DE_PARTICIPAÇÃO"
    );

    static readonly EMPRESÁRIO_INDIVIDUAL = new OperacaoContaCaucaoEnum(
        "2135", 8, "EMPRESÁRIO_-_INDIVIDUAL"
    );

    static readonly COOPERATIVA = new OperacaoContaCaucaoEnum(
        "2143", 8, "COOPERATIVA"
    );

    static readonly CONSÓRCIO_DE_SOCIEDADES = new OperacaoContaCaucaoEnum(
        "2151", 8, "CONSÓRCIO_DE_SOCIEDADES"
    );

    static readonly GRUPO_DE_SOCIEDADES = new OperacaoContaCaucaoEnum(
        "2160", 8, "GRUPO_DE_SOCIEDADES"
    );

    static readonly ESTABELECIMENTO_NO_BRASIL_DE_SOCIEDADE_ESTRANGEIRA = new OperacaoContaCaucaoEnum(
        "2178", 8, "ESTABELECIMENTO_NO_BRASIL_DE_SOCIEDADE_ESTRANGEIRA"
    );

    static readonly ESTABELECIMENTO_NO_BRASIL_DE_EMPRESA_BINACIONAL_ARGENTINO_BRASILEIRA = new OperacaoContaCaucaoEnum(
        "2194", 8, "ESTABELECIMENTO_NO_BRASIL_DE_EMPRESA_BINACIONAL_ARGENTINO-BRASILEIRA"
    );

    static readonly CLUBE_FUNDO_DE_INVESTIMENTO = new OperacaoContaCaucaoEnum(
        "2224", 8, "CLUBE/FUNDO_DE_INVESTIMENTO-BRASILEIRA"
    );

    static readonly SOCIEDADE_SIMPLES_PURA_ADVOGADOS = new OperacaoContaCaucaoEnum(
        "2232", 8, "SOCIEDADE_SIMPLES_PURA_-_ADVOGADOS"
    );

    static readonly SOCIEDADE_SIMPLES_LIMITADA = new OperacaoContaCaucaoEnum(
        "2240", 8, "SOCIEDADE_SIMPLES_LIMITADA"
    );

    static readonly SOCIEDADE_SIMPLES_EM_NOME_COLETIVO = new OperacaoContaCaucaoEnum(
        "2259", 8, "SOCIEDADE_SIMPLES_EM_NOME_COLETIVO"
    );

    static readonly SOCIEDADE_SIMPLES_EM_COMANDITA_SIMPLES = new OperacaoContaCaucaoEnum(
        "2267", 8, "SOCIEDADE_SIMPLES_EM_COMANDITA_SIMPLES"
    );

    static readonly ENTIDADE_BINACIONAL = new OperacaoContaCaucaoEnum(
        "2275", 8, "ENTIDADE_BINACIONAL"
    );

    static readonly CONSÓRCIO_DE_EMPREGADORES = new OperacaoContaCaucaoEnum(
        "2283", 8, "CONSÓRCIO_DE_EMPREGADORES"
    );

    static readonly CONSÓRCIO_SIMPLES = new OperacaoContaCaucaoEnum(
        "2291", 8, "CONSÓRCIO_SIMPLES"
    );

    static readonly EMPRESA_INDIVIDUAL_DE_RESPONSABILIDADE_LIMITADA_DE_NATUREZA_EMPRESÁRIA = new OperacaoContaCaucaoEnum(
        "2305", 8, "EMPRESA_INDIVIDUAL_DE_RESPONSABILIDADE_LIMITADA_(DE_NATUREZA_EMPRESÁRIA)"
    );

    static readonly EMPRESA_INDIVIDUAL_DE_RESPONSABILIDADE_LIMITADA_DE_NATUREZA_SIMPLES = new OperacaoContaCaucaoEnum(
        "2313", 8, "EMPRESA_INDIVIDUAL_DE_RESPONSABILIDADE_LIMITADA_(DE_NATUREZA_SIMPLES)"
    );

    static readonly SOCIEDADE_UNIPESSOAL_DE_ADVOGADOS = new OperacaoContaCaucaoEnum(
        "2321", 8, "SOCIEDADE_UNIPESSOAL_DE_ADVOGADOS"
    );

    static readonly COOPERATIVAS_DE_CONSUMO = new OperacaoContaCaucaoEnum(
        "2330", 8, "COOPERATIVAS_DE_CONSUMO"
    );

    static readonly ASSOCIAÇÃO = new OperacaoContaCaucaoEnum(
        "3026", 8, "ASSOCIAÇÃO"
    );

    static readonly SERVIÇO_NOTARIAL_E_REGISTRAL_CARTÓRIO = new OperacaoContaCaucaoEnum(
        "3034", 8, "SERVIÇO_NOTARIAL_E_REGISTRAL_-_CARTÓRIO"
    );

    static readonly FUNDAÇÃO_PRIVADA = new OperacaoContaCaucaoEnum(
        "3069", 8, "FUNDAÇÃO_PRIVADA"
    );

    static readonly SERVIÇO_SOCIAL_AUTÔNOMO = new OperacaoContaCaucaoEnum(
        "3077", 8, "SERVIÇO_SOCIAL_AUTÔNOMO"
    );

    static readonly CONDOMÍNIO_EDILÍCIO = new OperacaoContaCaucaoEnum(
        "3085", 8, "CONDOMÍNIO_EDILÍCIO"
    );

    static readonly COMISSÃO_DE_CONCILIAÇÃO_PRÉVIA = new OperacaoContaCaucaoEnum(
        "3107", 8, "COMISSÃO_DE_CONCILIAÇÃO_PRÉVIA"
    );

    static readonly ENTIDADE_DE_MEDIAÇÃO_E_ARBITRAGEM = new OperacaoContaCaucaoEnum(
        "3115", 8, "ENTIDADE_DE_MEDIAÇÃO_E_ARBITRAGEM"
    );

    static readonly ENTIDADE_SINDICAL = new OperacaoContaCaucaoEnum(
        "3131", 8, "ENTIDADE_SINDICAL"
    );

    static readonly ESTABELECIMENTO_NO_BRASIL_DE_FUNDAÇÃO_OU_ASSOCIAÇÃO_ESTRANGEIRAS = new OperacaoContaCaucaoEnum(
        "3204", 8, "ESTABELECIMENTO_NO_BRASIL_DE_FUNDAÇÃO_OU_ASSOCIAÇÃO_ESTRANGEIRAS"
    );

    static readonly ORGANIZÃO_RELIGIOSA = new OperacaoContaCaucaoEnum(
        "3220", 8, "ORGANIZÃO_RELIGIOSA"
    );

    static readonly COMUNIDADE_INDIGENA = new OperacaoContaCaucaoEnum(
        "3239", 8, "COMUNIDADE_INDIGENA"
    );

    static readonly FUNDO_PRIVADO = new OperacaoContaCaucaoEnum(
        "3247", 8, "FUNDO_PRIVADO"
    );

    static readonly Órgão_de_Direção_Nacional_de_Partido_Político = new OperacaoContaCaucaoEnum(
        "3255", 8, "Órgão_de_Direção_Nacional_de_Partido_Político"
    );

    static readonly Órgão_de_Direção_Regional_de_Partido_Político = new OperacaoContaCaucaoEnum(
        "3263", 8, "Órgão_de_Direção_Regional_de_Partido_Político"
    );

    static readonly Orgao_de_Direcao_Local_de_Partido_Politico = new OperacaoContaCaucaoEnum(
        "3271", 8, "Orgao_de_Direcao_Local_de_Partido_Politico"
    );

    static readonly Comitê_Financeiro_de_Partido_Político = new OperacaoContaCaucaoEnum(
        "3280", 8, "Comitê_Financeiro_de_Partido_Político"
    );

    static readonly ORGANIZAÇÃO_SOCIAL_OS = new OperacaoContaCaucaoEnum(
        "3301", 8, "ORGANIZAÇÃO_SOCIAL_(OS)"
    );

    static readonly OUTRAS_FORMAS_DE_ASSOCIAÇÃO = new OperacaoContaCaucaoEnum(
        "3999", 8, "OUTRAS_FORMAS_DE_ASSOCIAÇÃO"
    );

    static readonly EMPRESA_INDIVIDUAL_IMOBILIÁRIA = new OperacaoContaCaucaoEnum(
        "4014", 8, "EMPRESA_INDIVIDUAL_IMOBILIÁRIA"
    );

    static readonly CONTRIBUINTE_INDIVIDUAL = new OperacaoContaCaucaoEnum(
        "4081", 8, "CONTRIBUINTE_INDIVIDUAL"
    );

    static readonly CANDIDATO_A_CARGO_POLÍTICO_ELETIVO = new OperacaoContaCaucaoEnum(
        "4090", 8, "CANDIDATO_A_CARGO_POLÍTICO_ELETIVO"
    );

    static readonly PRODUTOR_RURAL_PESSOA__FÍSICA = new OperacaoContaCaucaoEnum(
        "4120", 8, "PRODUTOR_RURAL_(PESSOA__FÍSICA)"
    );
    // Operação 010

    static readonly Órgão_Público_do_Poder_Executivo_Federal = new OperacaoContaCaucaoEnum(
        "1015", 10, "Órgão_Público_do_Poder_Executivo_Federal"
    );

    static readonly Órgão_Público_do_Poder_Legislativo_Federal = new OperacaoContaCaucaoEnum(
        "1040", 10, "Órgão_Público_do_Poder_Legislativo_Federal"
    );

    static readonly Órgão_Público_do_Poder_Judiciário_Federal = new OperacaoContaCaucaoEnum(
        "1074", 10, "Órgão_Público_do_Poder_Judiciário_Federal"
    );

    static readonly Autarquia_Federal = new OperacaoContaCaucaoEnum(
        "1104", 10, "Autarquia_Federal"
    );

    static readonly Órgão_Público_Autônomo_Federal = new OperacaoContaCaucaoEnum(
        "1163", 10, "Órgão_Público_Autônomo_Federal"
    );

    static getOperacoes(): OperacaoContaCaucaoEnum[] {
        const operacoes: OperacaoContaCaucaoEnum[] = [];
        Object.getOwnPropertyNames(OperacaoContaCaucaoEnum).forEach((op: any) => {
            if (OperacaoContaCaucaoEnum[op] instanceof OperacaoContaCaucaoEnum) {
                const operacao = OperacaoContaCaucaoEnum[op];
                operacoes.push(operacao);
            }
        });
        return operacoes;
    }
}
