import { Ocorrencia } from "./ocorrencia.model";
import { Sicow } from "../pessoa-fisica/dossie-digital/pesquisa-cadastral/model/model.sicow";
import { Sinad } from "../pessoa-fisica/dossie-digital/pesquisa-cadastral/model/model.sinad";
import { Cadin } from "../pessoa-fisica/dossie-digital/pesquisa-cadastral/model/model.cadin";
import { Serasa } from "../pessoa-fisica/dossie-digital/pesquisa-cadastral/model/model.serasa";
import { Siccf } from "../pessoa-fisica/dossie-digital/pesquisa-cadastral/model/model-siccf";
import { Spc } from "../pessoa-fisica/dossie-digital/pesquisa-cadastral/model/model.spc";

export class PesquisaCadastral {
  ocorrencias: Ocorrencia[];
  sinad: Sinad = new Sinad();
  cadin: Cadin = new Cadin();
  serasa: Serasa = new Serasa();
  siccf: Siccf = new Siccf();
  spc: Spc = new Spc();
  sicow: Sicow = new Sicow();

  constructor() {
    this.ocorrencias = new Array<Ocorrencia>();
  }
}
