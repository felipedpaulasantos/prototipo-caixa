import { RelatorioAssinaturaEletronica } from "./relatorio-assinatura-eletronica.model"
import { RelatorioTermoAdesaoSMS } from "./relatorio-adesao-sms.model"

export class RelatorioConversaoDossie {
  assinaturaEletronica: RelatorioAssinaturaEletronica;
  termoAdesaoSMS: RelatorioTermoAdesaoSMS;
  hasDicasDeSeguranca: boolean;

  constrcutor() {
    this.assinaturaEletronica = new RelatorioAssinaturaEletronica();
    this.termoAdesaoSMS = new RelatorioTermoAdesaoSMS();
  }
}
