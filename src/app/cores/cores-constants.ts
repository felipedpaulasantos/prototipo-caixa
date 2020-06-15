import { loremIpsumPlaceHolder } from '../shared/constants/constants';

export const textosCores = {
	primary: `
	Coloque o texto aqui, podendo utilizar <b>HTML</b> se desejado.<br>
	Pule linhas e use classes <span class="text-primary">normalmente</span>.<br><br>
	${loremIpsumPlaceHolder}
	`,

	secondary: loremIpsumPlaceHolder,

	success: loremIpsumPlaceHolder + "<br><br>" + loremIpsumPlaceHolder,

	danger: loremIpsumPlaceHolder,

	info: loremIpsumPlaceHolder + "<br><br>" + loremIpsumPlaceHolder,

	warning: loremIpsumPlaceHolder,

	apoio: loremIpsumPlaceHolder + "<br><br>" + loremIpsumPlaceHolder,

	aux: loremIpsumPlaceHolder + "<br><br>" + loremIpsumPlaceHolder,

	light: loremIpsumPlaceHolder,

	dark: loremIpsumPlaceHolder

};
