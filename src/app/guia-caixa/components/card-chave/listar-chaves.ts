export interface VinculoChave  {
  name:            string;
  tipoChave:       string;
  chave?:          string;
  contaVinculada?: string;
  criadaEm?:       string;
  situacao?:       string;
  agencia?:        string;
  participante:    string;
  produto:         string;
  tipoConta:       string;
  comprovante:    ComprovanteChavePix;
}


export interface ComprovanteChavePix {
  nome: string;
  cpfCnpj: string;
  tipoChave: string;
  valorChave: string;
  banco: string;
  tipoConta: string;
  agencia: string;
  numeroConta: string;
}

export class CardChave {
  titulo?:          string;
  tipo?:            string;
  valor?:           string;
  valorFormatado?:  string;
  acao?:            string;
  selecionado?:     boolean;
  utilizada?:       boolean;
  icone?:           string;
  showCheck?:       boolean;
  showTitulo?:      boolean;
  leftLabels?:      string[];
  rightLabels?:     string[];
  removerCol?:      boolean;
  idCriacao?:       string;
  showArrowRight?:      boolean;

  constructor(tipo: string, valor: string, acao: string, utilizada: boolean, showCheck: boolean ) {
    this.tipo = tipo;
    this.valor = valor;
    this.valorFormatado = valor;
    this.acao = acao;
    this.selecionado = false;
    this.utilizada = utilizada;
    this.icone = "";
    this.showCheck = showCheck;
    this.showTitulo = true;
    this.leftLabels = [];
    this.rightLabels = [];
    this.removerCol = false;
    this.idCriacao = "";
    this.showArrowRight = false;
}
}


