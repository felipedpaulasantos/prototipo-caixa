// tslint:disable-next-line: max-line-length
export const loremIpsumPlaceHolder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export interface ColorTheme {
	name: string;
	textColor: string;
	lightest: boolean;
	light: boolean;
	dark: boolean;
	darkest: boolean;
}

export class BootstrapTheme {
  static readonly PRIMARY  = new BootstrapTheme(
		'PRIMARY', { name: "primary", textColor: "light", lightest: false, light: true, dark: true, darkest: false });
	static readonly SECONDARY  = new BootstrapTheme(
		'SECONDARY', { name: "secondary", textColor: "light", lightest: false, light: true, dark: true, darkest: false });
	static readonly SUCCESS  = new BootstrapTheme(
		'SUCCESS', { name: "success", textColor: "light", lightest: false, light: true, dark: true, darkest: false });
	static readonly DANGER  = new BootstrapTheme(
		'DANGER', { name: "danger", textColor: "light", lightest: false, light: true, dark: true, darkest: false });
	static readonly INFO  = new BootstrapTheme(
		'INFO', { name: "info", textColor: "light", lightest: false, light: true, dark: true, darkest: false });
	static readonly WARNING  = new BootstrapTheme(
		'WARNING', { name: "warning", textColor: "light", lightest: false, light: true, dark: true, darkest: false });
	static readonly APOIO  = new BootstrapTheme(
		'APOIO', { name: "apoio", textColor: "light", lightest: false, light: true, dark: true, darkest: false });
	static readonly AUX  = new BootstrapTheme(
		'AUX', { name: "aux", textColor: "light", lightest: false, light: true, dark: true, darkest: false });
	static readonly LIGHT  = new BootstrapTheme(
		'LIGHT', { name: "light", textColor: "dark", lightest: true, light: false, dark: true, darkest: true });
	static readonly DARK  = new BootstrapTheme(
		'DARK', { name: "dark", textColor: "light", lightest: false, light: true, dark: false, darkest: true });

  // private to disallow creating other instances of this type
  private constructor(private readonly key: string, public readonly value: ColorTheme) {
  }

  toString() {
    return this.key;
  }
}

export const LOGO_CAIXA_BRANCO_SRC = "assets/images/caixa-logo-x-branco.png";
export const LOGO_CAIXA_SRC = "assets/images/caixa-logo-x.png";
