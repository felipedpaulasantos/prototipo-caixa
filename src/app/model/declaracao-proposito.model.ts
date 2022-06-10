export class DeclaracaoProposito {
  constructor(
    public codigo: string,
    public descricao: string,
    public selected: boolean
  ) {
    this.selected = true;
  }
}
