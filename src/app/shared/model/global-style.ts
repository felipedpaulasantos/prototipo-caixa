export interface GlobalThemeVariables {
   cxHeaderBgColor: string;
   cxHeaderTextColor: string;
   cxSidemenuBgColor: string;
   cxSidemenuTextColor: string;
   cxSidemenuActiveBgColor: string;
   cxSidemenuActiveTextColor: string;
   cxBodyBgColor: string;
   cxBodyTextColor: string;
   cxShadowCaixa: string;
   cxShadowCaixaSm: string;
   cxShadowCaixaLg: string;
   cxDestaque: string;
   cxPrincipal: string;
   cxAux: string;
   cxCancel: string;
   cxSucesso: string;
   cxSucessoContrast: string;
   cxPerigo: string;
   cxPerigoContrast: string;
   cxAlerta: string;
   cxAlertaContrast: string;
   cxInfo: string;
   cxInfoContrast: string;
   cxBase: string;
   cxFundo: string;
   cxContraste: string;
   cxTransparentBase025: string;
   cxTransparentBase050: string;
   cxTransparentBase075: string;
   cxTransparentBase25: string;
   cxTransparentBase50: string;
   cxTransparentBase75: string;
   cxTransparentContrast025: string;
   cxTransparentContrast050: string;
   cxTransparentContrast075: string;
   cxTransparentContrast25: string;
   cxTransparentContrast50: string;
   cxTransparentContrast75: string;
}

export const lightTheme: GlobalThemeVariables = {
   cxHeaderBgColor: "--primary",
   cxHeaderTextColor: "--cinza-lighter",
   cxSidemenuBgColor: "--cinza-lighter",
   cxSidemenuTextColor: "--grafite",
   cxSidemenuActiveBgColor: "--primary",
   cxSidemenuActiveTextColor: "--white",
   cxBodyBgColor: "--polar",
   cxBodyTextColor: "--grafite",
   cxShadowCaixa: "--cxShadowCaixaDark",
   cxShadowCaixaSm: "--cxShadowCaixaDarkSm",
   cxShadowCaixaLg: "--cxShadowCaixaDarkLg",
   cxDestaque: "--secondary",
   cxPrincipal: "--primary",
   cxAux: "--grafite-light",
   cxCancel: "--cinza",
   cxSucesso: "--success",
   cxSucessoContrast: "--success-lighter",
   cxPerigo: "--danger",
   cxPerigoContrast: "--goiaba-light",
   cxAlerta: "--warning",
   cxAlertaContrast: "--warning-lighter",
   cxInfo: "--info",
   cxInfoContrast: "--info-lighter",
   cxBase: "--cinza-lighter",
   cxFundo: "--polar",
   cxContraste: "--grafite-dark",
   cxTransparentBase025: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase050: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase075: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase25: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase50: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase75: "rgba(255, 255, 255, 0.025)",
   cxTransparentContrast025: "rgba(0, 0, 0, 0.025)",
   cxTransparentContrast050: "rgba(0, 0, 0, 0.05)",
   cxTransparentContrast075: "rgba(0, 0, 0, 0.075)",
   cxTransparentContrast25: "rgba(0, 0, 0, 0.25)",
   cxTransparentContrast50: "rgba(0, 0, 0, 0.5)",
   cxTransparentContrast75: "rgba(0, 0, 0, 0.75)"
};

export const darkTheme: GlobalThemeVariables = {
   cxHeaderBgColor: "--grafite-darker",
   cxHeaderTextColor: "--cinza-lighter",
   cxSidemenuBgColor: "--grafite-darker",
   cxSidemenuTextColor: "--cinza-lighter",
   cxSidemenuActiveBgColor: "--ceu",
   cxSidemenuActiveTextColor: "--white",
   cxBodyBgColor: "--grafite-dark",
   cxBodyTextColor: "--white",
   cxShadowCaixa: "--cxShadowCaixaLight",
   cxShadowCaixaSm: "--cxShadowCaixaLightSm",
   cxShadowCaixaLg: "--cxShadowCaixaLightLg",
   cxDestaque: "--secondary",
   cxPrincipal: "--ceu",
   cxAux: "--cinza",
   cxCancel: "--grafite-light",
   cxSucesso: "--success-lighter",
   cxSucessoContrast: "--success",
   cxPerigo: "--goiaba",
   cxPerigoContrast: "--danger",
   cxAlerta: "--warning-lighter",
   cxAlertaContrast: "--warning",
   cxInfo: "--info-lighter",
   cxInfoContrast: "--info",
   cxBase: "--grafite-darker",
   cxFundo: "--grafite-dark",
   cxContraste: "--cinza-lighter",
   cxTransparentBase025: "rgba(0, 0, 0, 0.025)",
   cxTransparentBase050: "rgba(0, 0, 0, 0.05)",
   cxTransparentBase075: "rgba(0, 0, 0, 0.075)",
   cxTransparentBase25: "rgba(0, 0, 0, 0.25)",
   cxTransparentBase50: "rgba(0, 0, 0, 0.5)",
   cxTransparentBase75: "rgba(0, 0, 0, 0.75)",
   cxTransparentContrast025: "rgba(255, 255, 255, 0.025)",
   cxTransparentContrast050: "rgba(255, 255, 255, 0.05)",
   cxTransparentContrast075: "rgba(255, 255, 255, 0.075)",
   cxTransparentContrast25: "rgba(255, 255, 255, 0.25)",
   cxTransparentContrast50: "rgba(255, 255, 255, 0.5)",
   cxTransparentContrast75: "rgba(255, 255, 255, 0.75)"
};

export const darkThemeInverted: GlobalThemeVariables = {
   cxHeaderBgColor: "--grafite-dark",
   cxHeaderTextColor: "--white",
   cxSidemenuBgColor: "--grafite-dark",
   cxSidemenuTextColor: "--white",
   cxSidemenuActiveBgColor: "--ceu",
   cxSidemenuActiveTextColor: "--white",
   cxBodyBgColor: "--grafite-darker",
   cxBodyTextColor: "--white",
   cxShadowCaixa: "--cxShadowCaixaLight",
   cxShadowCaixaSm: "--cxShadowCaixaLightSm",
   cxShadowCaixaLg: "--cxShadowCaixaLightLg",
   cxDestaque: "--secondary",
   cxPrincipal: "--ceu",
   cxAux: "--cinza",
   cxCancel: "--grafite-light",
   cxSucesso: "--success-lighter",
   cxSucessoContrast: "--success",
   cxPerigo: "--goiaba",
   cxPerigoContrast: "--danger",
   cxAlerta: "--warning-lighter",
   cxAlertaContrast: "--warning",
   cxInfo: "--info-lighter",
   cxInfoContrast: "--info",
   cxBase: "--grafite-dark",
   cxFundo: "--grafite-dark",
   cxContraste: "--cinza-lighter",
   cxTransparentBase025: "rgba(0, 0, 0, 0.025)",
   cxTransparentBase050: "rgba(0, 0, 0, 0.05)",
   cxTransparentBase075: "rgba(0, 0, 0, 0.075)",
   cxTransparentBase25: "rgba(0, 0, 0, 0.25)",
   cxTransparentBase50: "rgba(0, 0, 0, 0.5)",
   cxTransparentBase75: "rgba(0, 0, 0, 0.75)",
   cxTransparentContrast025: "rgba(255, 255, 255, 0.025)",
   cxTransparentContrast050: "rgba(255, 255, 255, 0.05)",
   cxTransparentContrast075: "rgba(255, 255, 255, 0.075)",
   cxTransparentContrast25: "rgba(255, 255, 255, 0.25)",
   cxTransparentContrast50: "rgba(255, 255, 255, 0.5)",
   cxTransparentContrast75: "rgba(255, 255, 255, 0.75)"
};

export const lightBlueTheme: GlobalThemeVariables = {
   cxHeaderBgColor: "--primary",
   cxHeaderTextColor: "--cinza-lighter",
   cxSidemenuBgColor: "--primary",
   cxSidemenuTextColor: "--white",
   cxSidemenuActiveBgColor: "--white",
   cxSidemenuActiveTextColor: "--primary",
   cxBodyBgColor: "--cinza-light",
   cxBodyTextColor: "--grafite",
   cxShadowCaixa: "--cxShadowCaixaDark",
   cxShadowCaixaSm: "--cxShadowCaixaDarkSm",
   cxShadowCaixaLg: "--cxShadowCaixaDarkLg",
   cxDestaque: "--secondary",
   cxPrincipal: "--primary",
   cxAux: "--grafite",
   cxCancel: "--cinza",
   cxSucesso: "--success",
   cxSucessoContrast: "--success-lighter",
   cxPerigo: "--danger",
   cxPerigoContrast: "--goiaba-light",
   cxAlerta: "--warning",
   cxAlertaContrast: "--warning-lighter",
   cxInfo: "--info",
   cxInfoContrast: "--info-lighter",
   cxBase: "--cinza-lighter",
   cxFundo: "--polar",
   cxContraste: "--grafite-dark",
   cxTransparentBase025: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase050: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase075: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase25: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase50: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase75: "rgba(255, 255, 255, 0.025)",
   cxTransparentContrast025: "rgba(0, 0, 0, 0.025)",
   cxTransparentContrast050: "rgba(0, 0, 0, 0.05)",
   cxTransparentContrast075: "rgba(0, 0, 0, 0.075)",
   cxTransparentContrast25: "rgba(0, 0, 0, 0.25)",
   cxTransparentContrast50: "rgba(0, 0, 0, 0.5)",
   cxTransparentContrast75: "rgba(0, 0, 0, 0.75)"
};

export const purpleTheme: GlobalThemeVariables = {
   cxHeaderBgColor: "--uva-darker",
   cxHeaderTextColor: "--cinza-lighter",
   cxSidemenuBgColor: "--uva-darker",
   cxSidemenuTextColor: "--white",
   cxSidemenuActiveBgColor: "--white",
   cxSidemenuActiveTextColor: "--uva-darker",
   cxBodyBgColor: "--cinza-light",
   cxBodyTextColor: "--grafite",
   cxShadowCaixa: "--cxShadowCaixaDark",
   cxShadowCaixaSm: "--cxShadowCaixaDarkSm",
   cxShadowCaixaLg: "--cxShadowCaixaDarkLg",
   cxDestaque: "--secondary",
   cxPrincipal: "--uva-darker",
   cxAux: "--grafite",
   cxCancel: "--cinza",
   cxSucesso: "--success",
   cxSucessoContrast: "--success-lighter",
   cxPerigo: "--danger",
   cxPerigoContrast: "--goiaba-light",
   cxAlerta: "--warning",
   cxAlertaContrast: "--warning-lighter",
   cxInfo: "--info",
   cxInfoContrast: "--info-lighter",
   cxBase: "--cinza-lighter",
   cxFundo: "--polar",
   cxContraste: "--grafite-dark",
   cxTransparentBase025: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase050: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase075: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase25: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase50: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase75: "rgba(255, 255, 255, 0.025)",
   cxTransparentContrast025: "rgba(0, 0, 0, 0.025)",
   cxTransparentContrast050: "rgba(0, 0, 0, 0.05)",
   cxTransparentContrast075: "rgba(0, 0, 0, 0.075)",
   cxTransparentContrast25: "rgba(0, 0, 0, 0.25)",
   cxTransparentContrast50: "rgba(0, 0, 0, 0.5)",
   cxTransparentContrast75: "rgba(0, 0, 0, 0.75)"
};

export interface GlobalTheme {
   name: string;
   className: string;
   theme: GlobalThemeVariables;
}

export class GlobalThemes {

   private constructor(
      public readonly key: string,
      public readonly value: GlobalTheme
   ) { }

   static readonly lightTheme = new GlobalThemes(
      "Tema Claro", { name: "lightTheme", className: "tema-claro", theme: lightTheme }
   );

/*    static readonly lightBlueTheme = new GlobalThemes(
      "Tema Cinza", { name: "lightBlueTheme", className: "tema-claro", theme: lightBlueTheme }
   );

   static readonly purpleTheme = new GlobalThemes(
      "Tema Roxo", { name: "purpleTheme", className: "tema-claro", theme: purpleTheme }
   ); */

   static readonly darkTheme = new GlobalThemes(
      "Tema Escuro (experimental)", { name: "darkTheme", className: "tema-escuro", theme: darkTheme }
   );

/*    static readonly darkThemeInverted = new GlobalThemes(
      "Tema Escuro Invertido", { name: "darkThemeInverted", className: "tema-escuro", theme: darkThemeInverted }
   ); */

   static getThemes(): GlobalThemes[] {
		const temas: GlobalThemes[] = [];
		Object.getOwnPropertyNames(GlobalThemes).forEach((theme: any) => {
         const tema = GlobalThemes[theme];
			if (tema && tema.value) {
				temas.push(tema);
			}
		});
		return temas;
   }

   toString(): string {
      return this.key;
   }
}
