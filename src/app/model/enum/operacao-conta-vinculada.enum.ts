export class OperacaoContaVinculadaEnum {
    private constructor(
        public readonly njur: string,
        public readonly operacao: number,
        public readonly descricao: string,
    ) { }

    // Operações 008
    static readonly EMPRESA_PUBLICA_FEDERAL_ESTADUAL_MUNICIPAL = new OperacaoContaVinculadaEnum(
        "2011", 8, "EMPRESA PÚBLICA FEDERAL/ESTADUAL/MUNICIPAL"
    );

    static readonly SOCIEDADE_DE_ECONOMIA_MISTA_FEDERAL_ESTADUAL_MUNICIPAL = new OperacaoContaVinculadaEnum(
        "2038", 8, "SOCIEDADE DE ECONOMIA MISTA FEDERAL/ESTADUAL/MUNICIPAL"
    );

    // Operações 010
    static readonly Orgao_Publico_do_Poder_Executivo_Federal = new OperacaoContaVinculadaEnum(
        "1015", 10, "Órgão Público do Poder Executivo Federal"
    );

    static readonly Orgao_Publico_do_Poder_Executivo_Estadual_ou_do_Distrito_Federal = new OperacaoContaVinculadaEnum(
        "1023", 10, "Órgão Público do Poder Executivo Estadual ou do Distrito Federal"
    );

    static readonly Orgao_Publico_do_Poder_Executivo_Municipal = new OperacaoContaVinculadaEnum(
        "1031", 10, "Órgão Público do Poder Executivo Municipal"
    );

    static readonly Orgao_Publico_do_Poder_Legislativo_Federal = new OperacaoContaVinculadaEnum(
        "1040", 10, "Órgão Público do Poder Legislativo Federal"
    );

    static readonly Orgao_Publico_do_Poder_Legislativo_Estadual_ou_do_Distrito_Federal = new OperacaoContaVinculadaEnum(
        "1058", 10, "Órgão_Público_do_Poder_Legislativo_Estadual_ou_do_Distrito_Federal"
    );

    static readonly Orgao_Publico_do_Poder_Legislativo_Municipal = new OperacaoContaVinculadaEnum(
        "1066", 10, "Órgão_Público_do_Poder_Legislativo_Municipal"
    );

    static readonly Orgao_Publico_do_Poder_Judiciário_Federal = new OperacaoContaVinculadaEnum(
        "1074", 10, "Órgão_Público_do_Poder_Judiciário_Federal"
    );

    static readonly Orgao_Publico_do_Poder_Judiciário_Estadual = new OperacaoContaVinculadaEnum(
        "1082", 10, "Órgão_Público_do_Poder_Judiciário_Federal"
    );

    static readonly Autarquia_Federal = new OperacaoContaVinculadaEnum(
        "1104", 10, "Autarquia_Federal"
    );

    static readonly Autarquia_Municipal = new OperacaoContaVinculadaEnum(
        "1120", 10, "Autarquia_Municipal"
    );

    static readonly Fundaçao_Publica_de_Direito_Publico_Federal = new OperacaoContaVinculadaEnum(
        "1139", 10, "Fundação_Pública_de_Direito_Público_Federal"
    );

    static readonly Fundaçao_Publica_de_Direito_Publico_Estadual_ou_do_Distrito_Federal = new OperacaoContaVinculadaEnum(
        "1147", 10, "Fundação_Pública_de_Direito_Público_Estadual_ou_do_Distrito_Federal"
    );

    static readonly Fundaçao_Publica_de_Direito_Publico_Municipal = new OperacaoContaVinculadaEnum(
        "1155", 10, "Fundação_Pública_de_Direito_Público_Municipal"
    );


    static readonly Orgao_Publico_Autônomo_Federal = new OperacaoContaVinculadaEnum(
        "1163", 10, "Orgão_Público_Autônomo_Federal"
    );

    static readonly Orgão_Publico_Autônomo_Estadual_ou_do_Distrito_Federal = new OperacaoContaVinculadaEnum(
        "1171", 10, "Orgão_Público_Autônomo_Estadual_ou_do_Distrito_Federal"
    );


    static readonly Orgao_Publico_Autônomo_Municipal = new OperacaoContaVinculadaEnum(
        "1180", 10, "Orgão_Público_Autônomo_Municipal"
    );

    static readonly Comissao_Polinacional_Federal = new OperacaoContaVinculadaEnum(
        "1198", 10, "Comissão_Polinacional_Federal"
    );

    static readonly Consórcio_Publico_de_Direito_Publico_Federal_Estadual_Municipal_Associação_Publica = new OperacaoContaVinculadaEnum(
        "1210", 10, "Consórcio_Público_de_Direito_Público_Federal_(Associação_Pública)"
    );

    static readonly Estado_ou_Distrito_Federal = new OperacaoContaVinculadaEnum(
        "1236", 10, "Estado_ou_Distrito_Federal"
    );

    static readonly Município = new OperacaoContaVinculadaEnum(
        "1244", 10, "Município"
    );

    static readonly Fundaçao_Publica_de_Direito_Privado_Federal = new OperacaoContaVinculadaEnum(
        "1252", 10, "Fundação_Pública_de_Direito_Privado_Federal"
    );

    static readonly Fundaçao_Publica_de_Direito_Privado_Estadual_ou_do_Distrito_Federal = new OperacaoContaVinculadaEnum(
        "1260", 10, "Fundação_Pública_de_Direito_Privado_Estadual_ou_do_Distrito_Federal"
    );

    static readonly Fundaçao_Publica_de_Direito_Privado_Municipal = new OperacaoContaVinculadaEnum(
        "1279", 10, "Fundação_Pública_de_Direito_Privado_Municipal"
    );

    static readonly Fundo_Publico_da_Administraçao_Indireta_Federal = new OperacaoContaVinculadaEnum(
        "1287", 10, "Fundo_Público_da_Administração_Indireta_Federal"
    );

    static readonly Fundo_Publico_da_Administraçao_Indireta_Estadual_ou_do_Distrito_Federal = new OperacaoContaVinculadaEnum(
        "1295", 10, "Fundo_Público_da_Administração_Indireta_Estadual_ou_do_Distrito_Federal"
    );

    static readonly Fundo_Publico_da_Administraçao_Indireta_Municipal = new OperacaoContaVinculadaEnum(
        "1309", 10, "Fundo_Público_da_Administração_Indireta_Municipal"
    );

    static readonly Fundo_Publico_da_Administraçao_Direta_Federal = new OperacaoContaVinculadaEnum(
        "1317", 10, "Fundo_Público_da_Administração_Direta_Federal"
    );

    static readonly Fundo_Publico_da_Administraçao_Direta_Estadual_ou_do_Distrito_Federal = new OperacaoContaVinculadaEnum(
        "1325", 10, "Fundo_Público_da_Administração_Direta_Estadual_ou_do_Distrito_Federal"
    );

    static readonly Fundo_Publico_da_Administraçao_Direta_Municipal = new OperacaoContaVinculadaEnum(
        "1333", 10, "Fundo_Público_da_Administração_Direta_Municipal"
    );

    static readonly Uniao = new OperacaoContaVinculadaEnum(
        "1341", 10, "União"
    );

    static getOperacoes(): OperacaoContaVinculadaEnum[] {
        const operacoes: OperacaoContaVinculadaEnum[] = [];
        Object.getOwnPropertyNames(OperacaoContaVinculadaEnum).forEach((op: any) => {
            if (OperacaoContaVinculadaEnum[op] instanceof OperacaoContaVinculadaEnum) {
                const operacao = OperacaoContaVinculadaEnum[op];
                operacoes.push(operacao);
            }
        });
        return operacoes;
    }
}
