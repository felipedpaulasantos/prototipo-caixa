import { loremIpsumPlaceHolder } from '../guia-caixa/constants/constants';

export const textosCores = {
	primary: `
	Coloque o texto aqui, podendo utilizar <b>HTML</b> se desejado.<br>
	Pule linhas e use classes <span class="text-principal">normalmente</span>.<br class="my-3">
	${loremIpsumPlaceHolder}
	`,

	secondary: loremIpsumPlaceHolder,

	success: loremIpsumPlaceHolder + "<br class="my-3">" + loremIpsumPlaceHolder,

	danger: loremIpsumPlaceHolder,

	info: loremIpsumPlaceHolder + "<br class="my-3">" + loremIpsumPlaceHolder,

	warning: loremIpsumPlaceHolder,

	apoio: loremIpsumPlaceHolder + "<br class="my-3">" + loremIpsumPlaceHolder,

	aux: loremIpsumPlaceHolder + "<br class="my-3">" + loremIpsumPlaceHolder,

	light: loremIpsumPlaceHolder,

	dark: loremIpsumPlaceHolder

};
