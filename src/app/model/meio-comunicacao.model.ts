export class CheckableItem<T> {
  public checked: boolean;
  public item: T;
  public index: number;

  constructor(checked: boolean, item: T) {
      this.checked = checked;
      this.item = item;
  }
}

export enum TipoMeioComunicacao {
  TELEFONE = "1",
  EMAIL = "2",
  TELEX = "3",
  CANAL_VOZ = "4",
  INTRANET = "5"
}

export enum TipoTelefone {
  COMUM = "1",
  FAX = "2",
  PABX = "3",
  CELULAR = "4"
}

export class MeioComunicacao {
  sequencial: string;
  coComunicacao: string;
  icComprovacao: string;
  icCorrespondencia: string;
  nuFinalidade: string;
  nuTpComunicacao: TipoMeioComunicacao;
  nuTpTel: TipoTelefone;
  prefixo: string;
  dtApuracao: string;
  tpOperacao: string;
  contato: string;
}
