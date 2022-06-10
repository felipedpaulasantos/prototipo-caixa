import { ProdutoContaNsgd } from "./produto-conta-nsgd.model";

export class ProdutoNsgd {
  flagSistemaConta: number;
  produto: ProdutoContaNsgd[];

  constructor() {
    this.produto = new Array<ProdutoContaNsgd>();
  }
}
