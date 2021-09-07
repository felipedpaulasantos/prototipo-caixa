import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, Renderer2, ViewChild, ElementRef, ChangeDetectorRef, ContentChild } from "@angular/core";
import { TabelaExtratoDirective } from "./tabela-extrato.directive";

@Component({
  selector: "cx-extrato",
  templateUrl: "./extrato.component.html",
  styleUrls: ["./extrato.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtratoComponent implements OnInit, AfterViewInit {

  @ViewChild("novoExtrato", { static: false })
  novoExtrato: ElementRef;

  @ContentChild(TabelaExtratoDirective, { read: TabelaExtratoDirective, static: true })
  tabelaExtrato: TabelaExtratoDirective;

  readonly ATRIBUTO_AGRUPADOR = "data-agrupador";
  readonly DIAS_SEMANA = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

  newTable: string;
  listaComObjetosSeparadores = [];
  trHeader;
  showOriginalTable = true;

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.getTableCellsSeparador();
  }

  getTableCellsSeparador() {

    const novaTabela = this.tabelaExtrato.elementRef.nativeElement;

    /* Captura os 'td' com atributo 'data-separador' */
    const listaTdSeparador = novaTabela.querySelectorAll(`td[${this.ATRIBUTO_AGRUPADOR}]`);
    console.log("LISTA TD SEPARADOR", listaTdSeparador);

    /* Captura o 'conteúdo' destes 'td' em outro array */
    const listaTdSeparadorConteudo = [];
    listaTdSeparador.forEach(td => listaTdSeparadorConteudo.push(td.innerHTML));
    console.log("LISTA TD CONTEUDO", listaTdSeparadorConteudo);

    /* Cria um set com o array anterior para filtrar os valores e eliminar duplicatas */
    const setConteudo = new Set(listaTdSeparadorConteudo);
    console.log("SET TD CONTEUDO", setConteudo);
    const listaConteudoUnique = [...setConteudo];

    /* Cria uma lista com o set anterior e ordena */
    listaConteudoUnique.sort(function (a, b) {
      return (a < b) ? 1 : ((a > b) ? -1 : 0);
    });
    console.log("LISTA CONTEUDO UNIQUE", listaConteudoUnique);

    /* Cria uma lista com objetos, onde a propriedade do objeto é o valor da lista, e seu conteúdo é um array, onde ficarão as 'tr' */
    const listaComObjetosSeparadores = listaConteudoUnique.map(valor => {
      const obj: any = {};
      obj[valor] = [];
      obj.valor = () => Object.keys(obj)[0];
      return obj;
    });
    console.log("LISTA OBJETOS SEPARADORES", listaComObjetosSeparadores);

    /* Captura uma lista com os 'tr' */
    const listaTr = novaTabela.querySelectorAll("tr");
    this.trHeader = listaTr[0];
    console.log("LISTA TR", listaTr);
    console.log("TR HEADER", this.trHeader);

    /* Popular os objetosSeparadores com as 'tr' correspondentes */
    listaTr.forEach(tr => {
      console.log("TR", tr);
      const tdSeparador = tr.querySelector(`[${this.ATRIBUTO_AGRUPADOR}]`);
      if (!tdSeparador) { return; }
      const conteudoTdSeparador = tdSeparador.textContent;
      const objSeparador = listaComObjetosSeparadores.find(obj => obj[conteudoTdSeparador]);
      if (!objSeparador) {
        return;
      }
      objSeparador[conteudoTdSeparador].push(tr);
    });

    listaComObjetosSeparadores.forEach((objSeparador, index) => {
      console.log("FOR EACH OBJ SEPARADOR", objSeparador);
      const atributoSeparador = Object.keys(objSeparador)[0];
      const arrayTr = objSeparador[atributoSeparador] as Array<any>;
      arrayTr.sort((a, b) => {
        a = a.firstChild.textContent;
        b = b.firstChild.textContent;
        return (a < b) ? -1 : ((a > b) ? 1 : 0);
      });
      const newTbody = this.renderer.createElement("tbody");
      arrayTr.forEach((tr) => {
        this.renderer.appendChild(newTbody, tr);
      });
      const newTable = this.renderer.createElement("table");
      // this.renderNewTable(index, newTable, newTbody, atributoSeparador, this.trHeader);
    });

    this.listaComObjetosSeparadores = listaComObjetosSeparadores;
    this.showOriginalTable = false;
    this.cdr.detectChanges();
    console.log("LISTA OBJETOS SEPARADORES", listaComObjetosSeparadores);
  }

  renderNewTable(index: number, newTable: any, newTbody: any, atributoSeparador: string, header): void {
    const titulo = this.renderer.createElement("h4");
    this.renderer.addClass(titulo, "titulo");
    this.renderer.addClass(titulo, "mb-2");
    this.renderer.setProperty(titulo, "innerHTML", atributoSeparador);

    this.renderer.addClass(newTable, "table");
    this.renderer.appendChild(newTable, newTbody);
    if (this.novoExtrato) {
      this.renderer.appendChild(this.novoExtrato.nativeElement, titulo);
      this.renderer.appendChild(this.novoExtrato.nativeElement, newTable);
    }
  }

  getValorSeparadorFormatado(separador: any) {
    const data = Object.keys(separador)[0];
    const dataSeparador = new Date(data);
    const hoje = new Date();

    const ontem = new Date();
    ontem.setDate(hoje.getDate() - 1);

    console.log("DATA SEPARADOR", dataSeparador.toDateString());
    console.log("HOJE", hoje.toDateString());
    console.log("ONTEM", ontem.toDateString());

    if (dataSeparador.toDateString() === hoje.toDateString()) {
      return `HOJE (${dataSeparador.toLocaleDateString()}, ${this.DIAS_SEMANA[dataSeparador.getDay()]})`;
    } else if (ontem.toDateString() === dataSeparador.toDateString()) {
      return `ONTEM (${dataSeparador.toLocaleDateString()}, ${this.DIAS_SEMANA[dataSeparador.getDay()]})`;
    } else {
      return `${dataSeparador.toLocaleDateString()} (${this.DIAS_SEMANA[dataSeparador.getDay()]})`;
    }
  }
}
