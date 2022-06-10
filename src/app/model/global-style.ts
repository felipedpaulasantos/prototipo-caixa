export interface GlobalTheme {
  bodyBgColor: string;
  bodyTextColor: string;
  shadowCaixa: string,
  shadowCaixaSm: string,
  shadowCaixaLg: string,
  principal: string;
  secundario: string;
  aux: string;
  cancel: string;
  sucesso: string;
  perigo: string;
  alerta: string;
  info: string;
  base: string;
  contrast: string;
  transparentBase025: string;
  transparentBase050: string;
  transparentBase075: string;
  transparentBase25: string;
  transparentBase50: string;
  transparentBase75: string;
  transparentContrast025: string;
  transparentContrast050: string;
  transparentContrast075: string;
  transparentContrast25: string;
  transparentContrast50: string;
  transparentContrast75: string;
}

export const lightTheme: GlobalTheme = {
  bodyBgColor: "--white",
  bodyTextColor: "--grafite",
  shadowCaixa: "--shadow-caixa-dark",
  shadowCaixaSm: "--shadow-caixa-dark-sm",
  shadowCaixaLg: "--shadow-caixa-dark-lg",
  principal: "--secondary",
  secundario: "--primary",
  aux: "--grafite",
  cancel: "--cinza",
  sucesso: "--success",
  perigo: "--danger",
  alerta: "--warning",
  info: "--info",
  base: "--cinza-lighter",
  contrast: "--grafite-dark",
  transparentBase025: "rgba(255, 255, 255, 0.025)",
  transparentBase050: "rgba(255, 255, 255, 0.025)",
  transparentBase075: "rgba(255, 255, 255, 0.025)",
  transparentBase25: "rgba(255, 255, 255, 0.025)",
  transparentBase50: "rgba(255, 255, 255, 0.025)",
  transparentBase75: "rgba(255, 255, 255, 0.025)",
  transparentContrast025: "rgba(0, 0, 0, 0.025)",
  transparentContrast050: "rgba(0, 0, 0, 0.05)",
  transparentContrast075: "rgba(0, 0, 0, 0.075)",
  transparentContrast25: "rgba(0, 0, 0, 0.25)",
  transparentContrast50: "rgba(0, 0, 0, 0.5)",
  transparentContrast75: "rgba(0, 0, 0, 0.75)"
}

export const darkTheme: GlobalTheme = {
  bodyBgColor: "--grafite-dark",
  bodyTextColor: "--white",
  shadowCaixa: "--shadow-caixa-light",
  shadowCaixaSm: "--shadow-caixa-light-sm",
  shadowCaixaLg: "--shadow-caixa-light-lg",
  principal: "--secondary",
  secundario: "--ceu",
  aux: "--cinza",
  cancel: "--grafite-light",
  sucesso: "--success-lighter",
  perigo: "--goiaba",
  alerta: "--warning-lighter",
  info: "--info-light",
  base: "--grafite-dark",
  contrast: "--cinza-lighter",
  transparentBase025: "rgba(0, 0, 0, 0.025)",
  transparentBase050: "rgba(0, 0, 0, 0.05)",
  transparentBase075: "rgba(0, 0, 0, 0.075)",
  transparentBase25: "rgba(0, 0, 0, 0.25)",
  transparentBase50: "rgba(0, 0, 0, 0.5)",
  transparentBase75: "rgba(0, 0, 0, 0.75)",
  transparentContrast025: "rgba(255, 255, 255, 0.025)",
  transparentContrast050: "rgba(255, 255, 255, 0.05)",
  transparentContrast075: "rgba(255, 255, 255, 0.075)",
  transparentContrast25: "rgba(255, 255, 255, 0.25)",
  transparentContrast50: "rgba(255, 255, 255, 0.5)",
  transparentContrast75: "rgba(255, 255, 255, 0.75)"
}

export class GlobalThemes {

  private constructor (
    public readonly themeName: string,
    public readonly className: string,
    public readonly theme: GlobalTheme
  ) { }

  static readonly lightTheme = new GlobalThemes("lightTheme", "tema-claro", lightTheme);
  static readonly darkTheme = new GlobalThemes("darkTheme", "tema-escuro", darkTheme);

}
