export class DocumentoDigitalizado {


  constructor(
    public tipo: string,
    public identificador: string,
    public link: string,
    public identificadorSiecm?: string,
    public isAjustado?: boolean
  ) { }
}
