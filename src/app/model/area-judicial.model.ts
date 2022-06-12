export interface AreaJudicial {
	nome: string,
	codigo: number
}

export enum AreaJudicialEnum {
		"ADMINISTRATIVO" = 1,
		"FEITOS DIVERSOS" = 2,
		"RECUPERAÇÃO DE CRÉDITOS" = 3,
		"RECURSOS" = 4,
		"TRABALHISTA" = 5,
		"HABITACIONAL" = 6,
		"CONTENCIOSO ADM" = 7
}

export const AreaJudicialArray = Object.keys(AreaJudicialEnum).map((area) => {
	let areaJudicial: AreaJudicial;
	if (!isNaN(Number(area))) {
		areaJudicial = {
			nome: AreaJudicialEnum[area],
			codigo: Number(area)
		};
	}
	return areaJudicial;
}).filter(areaJudicial => areaJudicial !== undefined);