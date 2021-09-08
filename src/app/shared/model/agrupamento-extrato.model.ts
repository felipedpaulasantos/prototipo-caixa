export interface AgrupamentoExtrato {
   valorAgrupador: string;
   itensAgrupados: any[];
   dataFormatada: AgrupamentoExtratoDataFormatada;
}

export interface AgrupamentoExtratoDataFormatada {
   principal: string;
   complementar: string;
}
