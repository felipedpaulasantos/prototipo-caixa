import { TipoCartaoCredito } from "./tipo-cartao-credito.model";
import { BandeiraCartaoCredito } from "./bandeira-cartao-credito.model";
import { ModalidadeCartaoCredito } from "./modalidade-cartao-credito.model";
import { EnderecoDossie } from "./endereco.model";

export class AvaliacaoCartaoCredito {
  constructor() {}

  acaoVenda: number;
  codAutorizacaoSiric: number;
  agenciaResponsavel: number;
  enderecoResidencial: EnderecoDossie;
  enderecoComercial: EnderecoDossie;
  dddResidencial: number;
  telefoneResidencial: number;
  dddCelular: number;
  celular: number;
  dddComercial: number;
  telefoneComercial: number;
  email: string;

  tiposCartaoDisponivel: TipoCartaoCredito[];
  lmtDisponivelContratacao: number;
  bandeiras: BandeiraCartaoCredito[];
  diasDeVencimento: number[];
  valoresDisponiveis: number[];
  modalidade: ModalidadeCartaoCredito;
}
