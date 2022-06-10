import { Senha } from "./senha.model";

export class PrevisaoChamada {
  public codigoGuiche: string;
  public senhas: Senha[];

  constructor() {
    this.senhas = new Array<Senha>();
  }
}
