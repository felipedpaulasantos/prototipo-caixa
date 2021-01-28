export interface GlobalTheme {
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

export const lightTheme: GlobalTheme = {
   cxBodyBgColor: "--white",
   cxBodyTextColor: "--grafite",
   cxShadowCaixa: "--shadow-caixa-dark",
   cxShadowCaixaSm: "--shadow-caixa-dark-sm",
   cxShadowCaixaLg: "--shadow-caixa-dark-lg",
   cxPrincipal: "--secondary",
   cxSecundario: "--primary",
   cxAux: "--grafite",
   cxCancel: "--cinza",
   cxSucesso: "--success",
   cxPerigo: "--danger",
   cxAlerta: "--warning",
   cxInfo: "--cxInfo",
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

export const darkTheme: GlobalTheme = {
   cxBodyBgColor: "--grafite-dark",
   cxBodyTextColor: "--white",
   cxShadowCaixa: "--shadow-caixa-light",
   cxShadowCaixaSm: "--shadow-caixa-light-sm",
   cxShadowCaixaLg: "--shadow-caixa-light-lg",
   cxPrincipal: "--secondary",
   cxSecundario: "--ceu",
   cxAux: "--cinza",
   cxCancel: "--grafite-light",
   cxSucesso: "--success-lighter",
   cxPerigo: "--goiaba",
   cxAlerta: "--warning-lighter",
   cxInfo: "--cxInfo-light",
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

export class GlobalThemes {

   private constructor(
      public readonly themeName: string,
      public readonly className: string,
      public readonly theme: GlobalTheme
   ) { }

   static readonly lightTheme = new GlobalThemes("lightTheme", "tema-claro", lightTheme);
   static readonly darkTheme = new GlobalThemes("darkTheme", "tema-escuro", darkTheme);

}
