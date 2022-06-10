export class AssinaturaDto {
  constructor(
    public cpfCliente: string,
    public email: string,
    public dataNascimento: string,
    public senha: string,
    public nome: string
  ) {}
}
