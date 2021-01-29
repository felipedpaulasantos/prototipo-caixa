export interface GlobalThemeVariables {
   cxBodyBgColor: string;
   cxBodyTextColor: string;
   cxShadowCaixa: string;
   cxShadowCaixaSm: string;
   cxShadowCaixaLg: string;
   cxPrincipal: string;
   cxSecundario: string;
   cxAux: string;
   cxCancel: string;
   cxSucesso: string;
   cxPerigo: string;
   cxAlerta: string;
   cxInfo: string;
   cxBase: string;
   cxContrast: string;
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
   cxBodyBgColor: "--white",
   cxBodyTextColor: "--grafite",
   cxShadowCaixa: "--cxShadowCaixaDark",
   cxShadowCaixaSm: "--cxShadowCaixaDarkSm",
   cxShadowCaixaLg: "--cxShadowCaixaDarkLg",
   cxPrincipal: "--secondary",
   cxSecundario: "--primary",
   cxAux: "--grafite",
   cxCancel: "--cinza",
   cxSucesso: "--success",
   cxPerigo: "--danger",
   cxAlerta: "--warning",
   cxInfo: "--info",
   cxBase: "--cinza-lighter",
   cxContrast: "--grafite-dark",
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
   cxBodyBgColor: "--grafite-dark",
   cxBodyTextColor: "--white",
   cxShadowCaixa: "--cxShadowCaixaLight",
   cxShadowCaixaSm: "--cxShadowCaixaLightSm",
   cxShadowCaixaLg: "--cxShadowCaixaLightLg",
   cxPrincipal: "--secondary",
   cxSecundario: "--ceu",
   cxAux: "--cinza",
   cxCancel: "--grafite-light",
   cxSucesso: "--success-lighter",
   cxPerigo: "--goiaba",
   cxAlerta: "--warning-lighter",
   cxInfo: "--info-light",
   cxBase: "--grafite-dark",
   cxContrast: "--cinza-lighter",
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

   static readonly darkTheme = new GlobalThemes(
      "Tema Escuro", { name: "darkTheme", className: "tema-escuro", theme: darkTheme }
   );

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
