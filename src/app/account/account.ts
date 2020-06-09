interface ServiceParameter {
  name?: string;
  endpoint?: string;
  storeReceivedMessages?: boolean | string;
  storeSentMessages?: boolean | string;
  updateErrors?: boolean | string;
  updateStatus?: boolean | string;
}

export class Account {

  constructor(
    public id?: number,
    public description?: string,
    public endpoint?: string,
    public status?: string,
    public user?: string,
    public serviceParameters?: ServiceParameter
  ) {}

  getTelefoneFormatado() {
    const telefone = String(this.id);
    const codigoPais = telefone.slice(0, 2);
    const is0800 = telefone.slice(2, 4) === "08";
    let ddd: string, numero1: string, numero2: string, numeroFormatado: string;

    if (!is0800) {
      ddd = telefone.slice(2, 4);
      numero1 = telefone.slice(telefone.length - 9, telefone.length - 4);
      numero2 = telefone.slice(telefone.length - 4, telefone.length);
      numeroFormatado = `${codigoPais} (${ddd}) ${numero1}-${numero2}`;
    } else {
      ddd = telefone.slice(2, 6);
      numero1 = telefone.slice(telefone.length - 7, telefone.length - 4);
      numero2 = telefone.slice(telefone.length - 4, telefone.length);
      numeroFormatado = `${codigoPais} ${ddd}-${numero1}-${numero2}`;
    }
    return numeroFormatado;
  }

}
