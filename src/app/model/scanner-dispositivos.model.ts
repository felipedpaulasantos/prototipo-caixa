export const SCANNER_CONFIG = "SCANNER_CONFIG"

export const RESOLUCOES: any[] = [
  { codigo: "200", descricao: "200 DPI"},
  { codigo: "300", descricao: "300 DPI"},
  { codigo: "400", descricao: "400 DPI" },
  { codigo: "600", descricao: "600 DPI" }
];

export const CORES: any[] = [
  { codigo: "BINARY", descricao: "Preto e Branco"},
  { codigo: "RGB", descricao: "Colorido"}
]

export const FORMATOS: any[] = [
{ codigo: "JPG", descricao: "JPG"},
{ codigo: "JPEG", descricao: "JPEG"},
{ codigo: "PDF", descricao: "PDF"},
]

export const FRENTE_VERSO: any[] = [
{ codigo: "on", descricao: "SIM"},
{ codigo: "off", descricao: "NÃO"},
]

export const DIGITALIZACAO_CONTINUA: any[] = [
{ codigo: "-1", descricao: "SIM"},
{ codigo: "1", descricao: "NÃO"},
]

export const PROTOCOLOS: any[] = [
{ codigo: "http://", descricao: "http"},
{ codigo: "https://", descricao: "https"},
]

export const HOSTS: any[] = [
{ codigo: "localhost:5127", descricao: "localhost:5127"},
{ codigo: "localhost:5128", descricao: "localhost:5128"},
]

export class Scanner {
  public resolucao = RESOLUCOES[1].codigo;
  public dispositivo = "0"
  public cor = CORES[1].codigo;
  public formato = FORMATOS[1].codigo;
  public frenteVerso = FRENTE_VERSO[0].codigo;
  public digitalizacaoContinua = DIGITALIZACAO_CONTINUA[1].codigo
  public protocolo = PROTOCOLOS[1].codigo
  public host = HOSTS[0].codigo

  constructor(init?: Partial<Scanner[]>) {
    Object.assign(this, init);
  }

}
