import { DadosDeclarados } from "./dados-declarados.model";
import { ComprovanteResidencia } from "./comprovante-residencia.model";
import { ComprovanteRenda } from "./comprovante-renda.model";
import { Cnh } from "./cnh.model";
import { CarteiraIdentidade } from "./carteira-identidade.model";
import { CartaoAssinatura } from "./cartao-assinatura.model";
import { SafeResourceUrl } from "@angular/platform-browser";

export class VisualizaDocumento {
  carteiraIdentidade: CarteiraIdentidade;
  cnh: Cnh;
  comprovanteRenda: ComprovanteRenda;
  comprovanteResidencia: ComprovanteResidencia;
  dadosDeclarados: DadosDeclarados;
  cartaoAssinatura: CartaoAssinatura;
  linkDocumento: string;
  safeurl: SafeResourceUrl;

}
