// tslint:disable-next-line:max-line-length
import { Component, OnInit, AfterViewInit, Renderer2, ViewChild, ElementRef, ChangeDetectorRef, ContentChild, DoCheck, ChangeDetectionStrategy } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Console } from "console";
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
  listaComObjetosAgrupadores = [];
  trHeader;
  showOriginalTable = true;

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    console.log("ON INIT");
  }

  ngAfterViewInit(): void {
    console.log("AFTER VIEW INIT");
    this.getTableCellsAgrupador();
  }

  public reload() {
    setTimeout(() => {
      this.getTableCellsAgrupador();
    }, 0);
  }

  public getTableCellsAgrupador() {
    console.log("==========================================");
    const novaTabela = this.tabelaExtrato.elementRef.nativeElement;

    console.log("NOVA TABELA", novaTabela);

    /* Captura os 'td' com atributo 'data-agrupador' */
    const listaTeste = novaTabela.querySelectorAll(`td`);
    console.log("LISTA TESTE", listaTeste);
    const listaTdAgrupador = novaTabela.querySelectorAll(`td[${this.ATRIBUTO_AGRUPADOR}]`);
    console.log("LISTA TD AGRUPADOR", listaTdAgrupador);
    if (!listaTdAgrupador || listaTdAgrupador.length < 1) { return; }


    /* Captura o 'conteúdo' destes 'td' em outro array */
    const listaTdAgrupadorConteudo = [];
    listaTdAgrupador.forEach(td => listaTdAgrupadorConteudo.push(td.innerHTML));
    console.log("LISTA TD CONTEUDO", listaTdAgrupadorConteudo);

    /* Cria um set com o array anterior para filtrar os valores e eliminar duplicatas */
    const setConteudo = new Set(listaTdAgrupadorConteudo);
    console.log("SET TD CONTEUDO", setConteudo);
    const listaConteudoUnique = [...setConteudo];

    /* Cria uma lista com o set anterior e ordena */
    listaConteudoUnique.sort(function (a, b) {
      return (a < b) ? 1 : ((a > b) ? -1 : 0);
    });
    console.log("LISTA CONTEUDO UNIQUE", listaConteudoUnique);

    /* Cria uma lista com objetos, onde a propriedade do objeto é o valor da lista, e seu conteúdo é um array, onde ficarão as 'tr' */
    const listaComObjetosAgrupadores = listaConteudoUnique.map(valor => {
      const obj: any = {};
      obj[valor] = [];
      obj.valor = () => Object.keys(obj)[0];
      return obj;
    });
    console.log("LISTA OBJETOS AGRUPADORES", listaComObjetosAgrupadores);

    /* Captura uma lista com os 'tr' */
    const listaTr = novaTabela.querySelectorAll("tr");
    this.trHeader = listaTr[0];
    console.log("TR HEADER", this.trHeader);
    console.log("LISTA TR", listaTr);
    const thAgrupador = this.trHeader.querySelector(`[${this.ATRIBUTO_AGRUPADOR}]`);
    this.renderer.setStyle(thAgrupador, "display", "none");
    console.log("TR HEADER", this.trHeader);

    /* Popular os objetosAgrupadores com as 'tr' correspondentes */
    listaTr.forEach(tr => {
      console.log("TR", tr);
      const tdAgrupador = tr.querySelector(`[${this.ATRIBUTO_AGRUPADOR}]`);
      if (!tdAgrupador) { return; }
      const conteudoTdAgrupador = tdAgrupador.textContent;
      const objAgrupador = listaComObjetosAgrupadores.find(obj => obj[conteudoTdAgrupador]);
      if (!objAgrupador) {
        return;
      }
      objAgrupador[conteudoTdAgrupador].push(tr);
      this.renderer.setStyle(tdAgrupador, "display", "none");
    });

    listaComObjetosAgrupadores.forEach((objAgrupador, index) => {
      console.log("FOR EACH OBJ AGRUPADOR", objAgrupador);
      const atributoAgrupador = Object.keys(objAgrupador)[0];
      const arrayTr = objAgrupador[atributoAgrupador] as Array<any>;
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
      const isFirst = (index === 0);
      const isLast = (index === listaComObjetosAgrupadores.length - 1);
      this.renderNewTable(newTable, newTbody, objAgrupador, this.trHeader, isFirst, isLast);
    });

    this.listaComObjetosAgrupadores = listaComObjetosAgrupadores;
    this.showOriginalTable = false;
    this.cdr.detectChanges();
    console.log("LISTA OBJETOS AGRUPADORES", listaComObjetosAgrupadores);
  }

  renderNewTable(newTable: any, newTbody: any, objAgrupador: any, header, isFirst: boolean, isLast: boolean): void {

    if (isFirst) {
      const newThead = this.renderer.createElement("thead");
      this.renderer.appendChild(newThead, header);
      this.renderer.appendChild(newTable, newThead);
    }

    this.getValorAgrupadorFormatado(objAgrupador);

    /* Cria título */
    const titulo = this.renderer.createElement("h5");
    const subtituloPrincipal = this.renderer.createElement("span");
    const subtituloComplementar = this.renderer.createElement("span");

    this.renderer.addClass(titulo, "subtitulo");
    this.renderer.addClass(titulo, "mb-2");
    this.renderer.addClass(subtituloPrincipal, "text-accent");
    this.renderer.addClass(subtituloComplementar, "text-aux");

    this.renderer.setProperty(subtituloPrincipal, "innerHTML", objAgrupador.dataFormatada.principal);
    this.renderer.setProperty(subtituloComplementar, "innerHTML", `, (${objAgrupador.dataFormatada.complementar})`);

    this.renderer.appendChild(titulo, subtituloPrincipal);
    this.renderer.appendChild(titulo, subtituloComplementar);

    /* Cria card */
    const card = this.renderer.createElement("div");
    this.renderer.addClass(card, "card");
    if (!isLast) {
      this.renderer.addClass(card, "mb-4");
    }
    const cardBody = this.renderer.createElement("div");
    this.renderer.addClass(card, "card-body");
    this.renderer.appendChild(card, cardBody);

    this.renderer.addClass(newTable, "table");
    this.renderer.addClass(newTable, "table-striped");
    this.renderer.addClass(newTable, "mb-0");
    this.renderer.appendChild(newTable, newTbody);
    if (this.novoExtrato) {
      this.renderer.appendChild(this.novoExtrato.nativeElement, titulo);
      this.renderer.appendChild(this.novoExtrato.nativeElement, card);
      this.renderer.appendChild(cardBody, newTable);
    }
  }

  getValorAgrupadorFormatado(agrupador: any): any {
    const data = Object.keys(agrupador)[0];
    const dataAgrupador = new Date(data);
    const hoje = new Date();

    const ontem = new Date();
    ontem.setDate(hoje.getDate() - 1);

    console.log("DATA AGRUPADOR", dataAgrupador.toDateString());
    console.log("HOJE", hoje.toDateString());
    console.log("ONTEM", ontem.toDateString());

    const dataFormatada = {
      principal: "",
      complementar: ""
    };

    if (dataAgrupador.toDateString() === hoje.toDateString()) {
      dataFormatada.principal = "HOJE";
      dataFormatada.complementar = `${dataAgrupador.toLocaleDateString()}, ${this.DIAS_SEMANA[dataAgrupador.getDay()]}`;
    } else if (ontem.toDateString() === dataAgrupador.toDateString()) {
      dataFormatada.principal = "ONTEM";
      dataFormatada.complementar = `${dataAgrupador.toLocaleDateString()}, ${this.DIAS_SEMANA[dataAgrupador.getDay()]}`;
    } else {
      dataFormatada.principal = dataAgrupador.toLocaleDateString();
      dataFormatada.complementar = this.DIAS_SEMANA[dataAgrupador.getDay()];
    }
    agrupador.dataFormatada = dataFormatada;
  }
}
