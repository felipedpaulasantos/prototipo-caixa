import { Ambiente, getAPI, getKEYCLOAK_ROOT_URL, getSCANNER_API } from "./environment.model";

declare var require: any;
const ambiente: Ambiente = Ambiente.PRD;
const API = getAPI(ambiente);
export const environment = {
  VERSION: require("../../package.json").version,
  production: true,
  ssoConfig: {
    url: getKEYCLOAK_ROOT_URL(ambiente),
    realm: "intranet",
    clientId: "cli-web-pnc"
  },
  BUSCA_API: `${API}/sipnc-busca/api`,
  DOSSIE_API: `${API}/sipnc-dossiedigital/api`,
  SOCIAL_API: `${API}/sipnc-governosocial/api`,
  COMERCIAL_API: `${API}/sipnc-comercial/api`,
  INVESTIMENTO_API: `${API}/sipnc-investimentos/api`,
  SCANNER_API: getSCANNER_API(ambiente),
  testing: false,
  ambiente: Ambiente.PRD,
  localStorageKeys : {
    CODIGO_AGENCIA_VIRTUAL: "codigo-agencia-virtual"
  },
  codigosTokenClaims : {
    CODIGO_AGENCIA : "co-unidade"
  }
};
