export interface GlobalThemeMainVariables {
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
   cxPrincipal: string;
   cxPrincipalDark: string;
   cxPrincipalDarker: string;
   cxPrincipalLight: string;
   cxPrincipalLighter: string;
   cxDestaque: string;
   cxDestaqueDark: string;
   cxDestaqueDarker: string;
   cxDestaqueLight: string;
   cxDestaqueLighter: string;
   cxAux: string;
   cxAuxDark: string;
   cxAuxDarker: string;
   cxAuxLight: string;
   cxAuxLighter: string;
   cxCancel: string;
   cxCancelDark: string;
   cxCancelDarker: string;
   cxCancelLight: string;
   cxCancelLighter: string;
}
export interface GlobalThemeBaseVariables {
   cxSucesso: string;
   cxSucessoContrast: string;
   cxSucessoInvert: string;
   cxSucessoInvertContrast: string;
   cxPerigo: string;
   cxPerigoContrast: string;
   cxPerigoInvert: string;
   cxPerigoInvertContrast: string;
   cxAlerta: string;
   cxAlertaContrast: string;
   cxAlertaInvert: string;
   cxAlertaInvertContrast: string;
   cxInfo: string;
   cxInfoContrast: string;
   cxInfoInvert: string;
   cxInfoInvertContrast: string;
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

export interface GlobalThemeVariables extends GlobalThemeMainVariables, GlobalThemeBaseVariables {}

const baseLightTheme: GlobalThemeBaseVariables = {
   cxSucesso: "--success",
   cxSucessoContrast: "--cinza-lighter",
   cxSucessoInvert: "--success-lighter",
   cxSucessoInvertContrast: "--cinza-lighter",
   cxPerigo: "--danger",
   cxPerigoContrast: "--white",
   cxPerigoInvert: "--danger-lighter",
   cxPerigoInvertContrast: "--grafite-dark",
   cxAlerta: "--warning",
   cxAlertaContrast: "--grafite-dark",
   cxAlertaInvert: "--warning-lighter",
   cxAlertaInvertContrast: "--grafite-dark",
   cxInfo: "--info",
   cxInfoContrast: "--white",
   cxInfoInvert: "--info-lighter",
   cxInfoInvertContrast: "--white",
   cxBase: "--cinza-lighter",
   cxFundo: "--polar",
   cxContraste: "--grafite-dark",
   cxTransparentBase025: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase050: "rgba(255, 255, 255, 0.05)",
   cxTransparentBase075: "rgba(255, 255, 255, 0.075)",
   cxTransparentBase25: "rgba(255, 255, 255, 0.25)",
   cxTransparentBase50: "rgba(255, 255, 255, 0.5)",
   cxTransparentBase75: "rgba(255, 255, 255, 0.75)",
   cxTransparentContrast025: "rgba(0, 0, 0, 0.025)",
   cxTransparentContrast050: "rgba(0, 0, 0, 0.05)",
   cxTransparentContrast075: "rgba(0, 0, 0, 0.075)",
   cxTransparentContrast25: "rgba(0, 0, 0, 0.25)",
   cxTransparentContrast50: "rgba(0, 0, 0, 0.5)",
   cxTransparentContrast75: "rgba(0, 0, 0, 0.75)"
};

const baseDarkTheme: GlobalThemeBaseVariables = {
   cxSucesso: "--success",
   cxSucessoContrast: "--cinza-lighter",
   cxSucessoInvert: "--success-lighter",
   cxSucessoInvertContrast: "--cinza-lighter",
   cxPerigo: "--danger",
   cxPerigoContrast: "--white",
   cxPerigoInvert: "--danger-lighter",
   cxPerigoInvertContrast: "--grafite-dark",
   cxAlerta: "--warning",
   cxAlertaContrast: "--grafite-dark",
   cxAlertaInvert: "--warning-lighter",
   cxAlertaInvertContrast: "--grafite-dark",
   cxInfo: "--info",
   cxInfoContrast: "--white",
   cxInfoInvert: "--info-lighter",
   cxInfoInvertContrast: "--white",
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

/* Light blue theme */
const lightTheme: GlobalThemeMainVariables = {
   cxHeaderBgColor: "--primary",
   cxHeaderTextColor: "--white",
   cxSidemenuBgColor: "--white",
   cxSidemenuTextColor: "--grafite",
   cxSidemenuActiveBgColor: "--primary",
   cxSidemenuActiveTextColor: "--white",
   cxBodyBgColor: "--polar",
   cxBodyTextColor: "--grafite",
   cxShadowCaixa: "--cxShadowCaixaDark",
   cxShadowCaixaSm: "--cxShadowCaixaDarkSm",
   cxShadowCaixaLg: "--cxShadowCaixaDarkLg",
   cxPrincipal: "--secondary",
   cxPrincipalDark: "--secondary-dark",
   cxPrincipalDarker: "--secondary-darker",
   cxPrincipalLight: "--secondary-light",
   cxPrincipalLighter: "--secondary-lighter",
   cxDestaque: "--primary",
   cxDestaqueDark: "--primary-dark",
   cxDestaqueDarker: "--primary-darker",
   cxDestaqueLight: "--primary-light",
   cxDestaqueLighter: "--primary-lighter",
   cxAux: "--grafite-light",
   cxAuxDark: "--grafite",
   cxAuxDarker: "--grafite-dark",
   cxAuxLight: "--grafite-lighter",
   cxAuxLighter: "--cancel-darker",
   cxCancel: "--cinza",
   cxCancelDark: "--cinza-dark",
   cxCancelDarker: "--cinza-darker",
   cxCancelLight: "--cinza-light",
   cxCancelLighter: "--cinza-lighter",
};
export const blueLightTheme: GlobalThemeVariables = Object.assign(lightTheme, baseLightTheme);

/* Dark lightblue theme */
const darkTheme: GlobalThemeMainVariables = {
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
   cxPrincipal: "--secondary",
   cxPrincipalDark: "--secondary-dark",
   cxPrincipalDarker: "--secondary-darker",
   cxPrincipalLight: "--secondary-light",
   cxPrincipalLighter: "--secondary-lighter",
   cxDestaque: "--ceu",
   cxDestaqueDark: "--ceu-dark",
   cxDestaqueDarker: "--ceu-darker",
   cxDestaqueLight: "--ceu-light",
   cxDestaqueLighter: "--ceu-lighter",
   cxAux: "--cinza",
   cxAuxDark: "--cinza-dark",
   cxAuxDarker: "--cinza-darker",
   cxAuxLight: "--cinza-light",
   cxAuxLighter: "--cinza-lighter",
   cxCancel: "--grafite-light",
   cxCancelDark: "--grafite",
   cxCancelDarker: "--grafite-dark",
   cxCancelLight: "--grafite-lighter",
   cxCancelLighter: "--cancel-darker",
};
export const blueDarkTheme: GlobalThemeVariables = Object.assign(darkTheme, baseDarkTheme);


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
      "Tema Claro", { name: "lightTheme", className: "tema-claro", theme: blueLightTheme }
   );

/*    static readonly lightBlueTheme = new GlobalThemes(
      "Tema Cinza", { name: "lightBlueTheme", className: "tema-claro", theme: lightBlueTheme }
   );

   static readonly purpleTheme = new GlobalThemes(
      "Tema Roxo", { name: "purpleTheme", className: "tema-claro", theme: purpleTheme }
   ); */

   static readonly darkTheme = new GlobalThemes(
      "Tema Escuro (experimental)", { name: "darkTheme", className: "tema-escuro", theme: blueDarkTheme }
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
