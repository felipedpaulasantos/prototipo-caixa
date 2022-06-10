export class Dado {
  chave: string;
  valor: string;
  percentualAlteracao: number;
}

export class DadoAtualizar {
  chave: string;
  valor: string;

  constructor(chave: string, valor: string) {
    this.chave = chave;
    this.valor = valor;
  }
}
