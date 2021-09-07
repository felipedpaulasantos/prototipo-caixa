import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, Renderer2, ViewChild, ElementRef, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "cx-extrato",
  templateUrl: "./extrato.component.html",
  styleUrls: ["./extrato.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtratoComponent implements OnInit, AfterViewInit {

  @ViewChild("novoExtrato", { static: false })
  novoExtrato: ElementRef;

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
    /* Captura os 'td' com atributo 'data-separador' */
    const listaTdSeparador = document.querySelectorAll("td[data-separador]");
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
    listaConteudoUnique.sort(function(a, b) {
      return (a < b) ? -1 : ((a > b) ? 1 : 0);
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
    const listaTr = document.querySelectorAll("tr");
    this.trHeader = listaTr[0];
    console.log("LISTA TR", listaTr);
    console.log("TR HEADER", this.trHeader);

    /* Popular os objetosSeparadores com as 'tr' correspondentes */
    listaTr.forEach(tr => {
      console.log("TR", tr);
      const data = tr.firstChild.textContent;
      const objSeparador = listaComObjetosSeparadores.find(obj => obj[data]);
      if (!objSeparador) {
        return;
      }
      objSeparador[data].push(tr);
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
    this.cdr.markForCheck();
    this.showOriginalTable = false;
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
}
