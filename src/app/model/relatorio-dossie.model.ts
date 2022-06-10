import { RelatorioAssinaturaEletronica } from "./relatorio-assinatura-eletronica.model"
import { RelatorioTermoAdesaoSMS } from "./relatorio-adesao-sms.model"
import { RelatorioChequeEspecial } from "./relatorio-cheque-especial.model";

export class RelatorioPoupancaDossie {
  assinaturaEletronica: RelatorioAssinaturaEletronica;
  termoAdesaoSMS: RelatorioTermoAdesaoSMS;
  chequeEspecial: RelatorioChequeEspecial;

  constrcutor() {
    this.assinaturaEletronica = new RelatorioAssinaturaEletronica();
    this.termoAdesaoSMS = new RelatorioTermoAdesaoSMS();
    this.chequeEspecial = new RelatorioChequeEspecial();
  }
}
