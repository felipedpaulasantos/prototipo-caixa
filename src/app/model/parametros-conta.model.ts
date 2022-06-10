import { ModalidadeConta } from "../pessoa-fisica/enum/modalidadeConta.enum";

export class ParametrosConta {
  constructor(public modalidade: ModalidadeConta, public tipoConta: string) {}
}
