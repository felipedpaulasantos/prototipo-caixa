// tslint:disable-next-line:max-line-length
import { Component, AfterViewInit, Renderer2, ViewChild, ElementRef, ChangeDetectorRef, ContentChild, ChangeDetectionStrategy } from "@angular/core";
import { AgrupamentoExtrato, AgrupamentoExtratoDataFormatada } from "src/app/shared/model/agrupamento-extrato.model";
import { TabelaExtratoDirective } from "./tabela-extrato.directive";

@Component({
  selector: "cx-extrato",
  templateUrl: "./extrato.component.html",
  styleUrls: ["./extrato.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtratoComponent implements AfterViewInit {

  private readonly ATRIBUTO_AGRUPADOR = "data-agrupador";
  private readonly DIAS_SEMANA = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

  private readonly TITULO_CLASSES: string[] = "subtitulo mb-2".split(" ");
  private readonly SUBTITULO_PRINCIPAL_CLASSES: string[] = "text-accent".split(" ");
  private readonly SUBTITULO_COMPLEMENTAR_CLASSES: string[] = "text-aux".split(" ");
  private readonly CARD_TABELA_CLASSES: string[] = "card".split(" ");
  private readonly CARD_ULTIMO_CLASSES: string[] = "mb-4".split(" ");
  private readonly CARD_BODY_CLASSES: string[] = "card-body".split(" ");
  private readonly TABELA_CLASSES: string[] = "table table-striped mb-0".split(" ");
  private readonly PAINEL_AGRUPAMENTO_CLASSES: string[] = "painel-agrupamento".split(" ");
  private readonly SEPARADOR_CLASSES: string[] = "separador-agrupamento".split(" ");

  @ViewChild("novoExtrato", { static: false })
  novoExtrato: ElementRef;

  @ContentChild(TabelaExtratoDirective, { read: TabelaExtratoDirective, static: true })
  tabelaExtrato: TabelaExtratoDirective;

  agrupamentosExtrato: AgrupamentoExtrato[] = [];
  trHeader: any;
  showOriginalTable = true;

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    this.initExtratoAgrupado();
  }

  public reload() {
    setTimeout(() => {
      this.initExtratoAgrupado();
    }, 0);
  }

  public initExtratoAgrupado() {
    if (!this.tabelaExtrato || !this.tabelaExtrato.elementRef) { return; }
    const novaTabela = this.tabelaExtrato.elementRef.nativeElement;

    /* Captura os 'td' com atributo 'data-agrupador' */
    const tdsComAtributoAgrupador: any[] = novaTabela.querySelectorAll(`td[${this.ATRIBUTO_AGRUPADOR}]`);
    if (!tdsComAtributoAgrupador || tdsComAtributoAgrupador.length < 1) { return; }

    /* Captura o 'conteúdo' destes 'td' em outro array */
    const conteudoTdsComAgrupador: any[] = [];
    tdsComAtributoAgrupador.forEach(td => conteudoTdsComAgrupador.push(td.innerHTML));

    /* Cria um set com o array anterior para filtrar os valores e eliminar duplicatas */
    const setConteudoTdsComAgrupador = new Set(conteudoTdsComAgrupador);

    /* Cria uma lista com o set anterior e ordena */
    const conteudoTdsComAgrupadorUnique = [...setConteudoTdsComAgrupador];
    conteudoTdsComAgrupadorUnique.sort(function (a, b) {
      return (a < b) ? 1 : ((a > b) ? -1 : 0);
    });

    /* Cria uma lista com objetos do tipo AgrupadorExtrato */
    const agrupamentosExtrato: AgrupamentoExtrato[] = conteudoTdsComAgrupadorUnique.map(valor => {
      return { valorAgrupador: valor, itensAgrupados: [], dataFormatada: null };
    });

    /* Captura uma lista com os 'tr' */
    const linhasTabela = novaTabela.querySelectorAll("tr");

    /* Captura a primeira linha, do header, o 'th' com atributo agrupador, e o oculta */
    this.trHeader = linhasTabela[0];
    const thAgrupador = this.trHeader.querySelector(`[${this.ATRIBUTO_AGRUPADOR}]`);
    this.renderer.setStyle(thAgrupador, "display", "none");

    /* Popular os objetosAgrupadores com as 'tr' correspondentes, e oculta o 'td' com o atributo agrupador */
    linhasTabela.forEach(linha => {
      const tdAgrupador = linha.querySelector(`[${this.ATRIBUTO_AGRUPADOR}]`);
      if (!tdAgrupador) { return; }
      const conteudoTdAgrupador = tdAgrupador.textContent;
      const objAgrupador = agrupamentosExtrato.find(agrupador => agrupador.valorAgrupador === conteudoTdAgrupador);
      if (!objAgrupador) {
        return;
      }
      objAgrupador.itensAgrupados.push(linha);
      this.renderer.setStyle(tdAgrupador, "display", "none");
    });


    agrupamentosExtrato.forEach((agrupador, index) => {
      const linhasDoAgrupamento = agrupador.itensAgrupados;
      linhasDoAgrupamento.sort((a, b) => {
        a = a.firstChild.textContent;
        b = b.firstChild.textContent;
        return (a < b) ? -1 : ((a > b) ? 1 : 0);
      });
      const newTbody = this.renderer.createElement("tbody");
      linhasDoAgrupamento.forEach((linha) => {
        this.renderer.appendChild(newTbody, linha);
      });
      const newTable = this.renderer.createElement("table");
      const isFirst = (index === 0);
      const isLast = (index === agrupamentosExtrato.length - 1);
      this.renderNewTable(newTable, newTbody, agrupador, this.trHeader, isFirst, isLast);
    });

    this.agrupamentosExtrato = agrupamentosExtrato;
    this.showOriginalTable = false;
  }

  renderNewTable(newTable: any, newTbody: any, agrupamento: AgrupamentoExtrato, header, isFirst: boolean, isLast: boolean): void {

    if (isFirst) {
      const newThead = this.renderer.createElement("thead");
      this.renderer.appendChild(newThead, header);
      this.renderer.appendChild(newTable, newThead);
    }

    /* Formata data do título */
    agrupamento = this.setDataFormatadaAgrupador(agrupamento);

    /* Cria título */
    const titulo = this.renderer.createElement("h5");
    const subtituloPrincipal = this.renderer.createElement("span");
    const subtituloComplementar = this.renderer.createElement("span");
    const separador = this.renderer.createElement("hr");

    this.TITULO_CLASSES.forEach(classe => this.renderer.addClass(titulo, classe));
    this.SUBTITULO_PRINCIPAL_CLASSES.forEach(classe => this.renderer.addClass(subtituloPrincipal, classe));
    this.SUBTITULO_COMPLEMENTAR_CLASSES.forEach(classe => this.renderer.addClass(subtituloComplementar, classe));
    this.SEPARADOR_CLASSES.forEach(classe => this.renderer.addClass(separador, classe));

    this.renderer.setProperty(subtituloPrincipal, "innerHTML", agrupamento.dataFormatada.principal);
    this.renderer.setProperty(subtituloComplementar, "innerHTML", `, (${agrupamento.dataFormatada.complementar})`);
    this.renderer.appendChild(titulo, subtituloPrincipal);
    this.renderer.appendChild(titulo, subtituloComplementar);
    this.renderer.appendChild(titulo, separador);

    /* Cria card */
    const card = this.renderer.createElement("div");
    this.CARD_TABELA_CLASSES.forEach(classe => this.renderer.addClass(card, classe));
    if (!isLast) {
      this.CARD_ULTIMO_CLASSES.forEach(classe => this.renderer.addClass(card, classe));
    }
    const cardBody = this.renderer.createElement("div");
    this.CARD_BODY_CLASSES.forEach(classe => this.renderer.addClass(cardBody, classe));
    this.renderer.appendChild(card, cardBody);

    /* Cria tabela */
    this.TABELA_CLASSES.forEach(classe => this.renderer.addClass(newTable, classe));
    this.renderer.appendChild(newTable, newTbody);

    /* Cria painel de agrupamento */
    const painelAgrupamento = this.renderer.createElement("div");
    this.renderer.setAttribute(painelAgrupamento, "data-valor-agrupador", agrupamento.valorAgrupador)
    this.PAINEL_AGRUPAMENTO_CLASSES.forEach(classe => this.renderer.addClass(painelAgrupamento, classe));

    if (this.novoExtrato) {
      this.renderer.appendChild(this.novoExtrato.nativeElement, painelAgrupamento);
      this.renderer.appendChild(painelAgrupamento, titulo);
      this.renderer.appendChild(painelAgrupamento, card);
      this.renderer.appendChild(cardBody, newTable);
    }
  }

  setDataFormatadaAgrupador(agrupamento: AgrupamentoExtrato): AgrupamentoExtrato {
    const data = agrupamento.valorAgrupador;
    const dataAgrupador = new Date(data);

    const hoje = new Date();

    const ontem = new Date();
    ontem.setDate(hoje.getDate() - 1);

    const dataFormatada: AgrupamentoExtratoDataFormatada = {
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
    agrupamento.dataFormatada = dataFormatada;
    return agrupamento;
  }
}
