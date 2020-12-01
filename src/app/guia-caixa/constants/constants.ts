// tslint:disable-next-line: max-line-length
export const loremIpsumPlaceHolder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export interface ColorTheme {
	name: string;
	textColor: string;
}

export class BootstrapTheme {
  static readonly PRIMARY  = new BootstrapTheme(
		'PRIMARY', { name: "primary", textColor: "light" });
	static readonly SECONDARY  = new BootstrapTheme(
		'SECONDARY', { name: "secondary", textColor: "light" });
	static readonly SUCCESS  = new BootstrapTheme(
		'SUCCESS', { name: "success", textColor: "light" });
	static readonly DANGER  = new BootstrapTheme(
		'DANGER', { name: "danger", textColor: "light" });
	static readonly INFO  = new BootstrapTheme(
		'INFO', { name: "info", textColor: "light" });
	static readonly WARNING  = new BootstrapTheme(
		'WARNING', { name: "warning", textColor: "light" });
	static readonly APOIO  = new BootstrapTheme(
		'APOIO', { name: "apoio", textColor: "light" });
	static readonly AUX  = new BootstrapTheme(
		'AUX', { name: "aux", textColor: "light" });
	static readonly LIGHT  = new BootstrapTheme(
		'LIGHT', { name: "light", textColor: "dark" });
	static readonly DARK  = new BootstrapTheme(
		'DARK', { name: "dark", textColor: "light" });

	static getTemas() {
		const temas: ColorTheme[] = [];
		Object.getOwnPropertyNames(BootstrapTheme).forEach((theme: any) => {
			const tema = BootstrapTheme[theme].value;
			if (tema) {
				temas.push(tema);
			}
		});
		return temas;
	}

  // private to disallow creating other instances of this type
  private constructor(private readonly key: string, public readonly value: ColorTheme) {
  }

  toString() {
    return this.key;
  }
}

export class GradientTheme {
  static readonly PRIMARY  = new GradientTheme(
		'PRIMARY', { name: "gradient-primary", textColor: "light" });
	static readonly SECONDARY  = new GradientTheme(
		'SECONDARY', { name: "gradient-sky", textColor: "light" });
	static readonly SUCCESS  = new GradientTheme(
		'SUCCESS', { name: "gradient-success", textColor: "light" });
	static readonly DANGER  = new GradientTheme(
		'DANGER', { name: "gradient-aux", textColor: "light" });
	static readonly INFO  = new GradientTheme(
		'INFO', { name: "gradient-light", textColor: "dark" });
	static readonly WARNING  = new GradientTheme(
		'WARNING', { name: "gradient-dark", textColor: "light" });

	static getTemas() {
		const temas = [];
		Object.getOwnPropertyNames(GradientTheme).forEach((theme: any) => {
			const tema = GradientTheme[theme].value;
			if (tema) {
				temas.push(tema);
			}
		});
		return temas;
	}

  // private to disallow creating other instances of this type
  private constructor(private readonly key: string, public readonly value: ColorTheme) {
  }

  toString() {
    return this.key;
  }
}

export const LOGO_CAIXA_BRANCO_SRC = "assets/images/caixa-logo-x-branco.png";
export const LOGO_CAIXA_SRC = "assets/images/caixa-logo-x.png";
export const LOGO_COMPLETO_SRC = "assets/images/caixa-logo-completo.png";
export const LOGO_COMPLETO_BRANCO_SRC = "assets/images/caixa-logo-completo-branco.png";

export enum Meses {
  JAN = 0,
  FEV,
  MAR,
  ABR,
  MAI,
  JUN,
  JUL,
  AGO,
  SET,
  OUT,
  NOV,
  DEZ
}
