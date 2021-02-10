import { Component, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { DataTableDirective } from "angular-datatables";
import { DatatableComponent } from "src/app/guia-caixa/components/datatable/datatable.component";
import { loremIpsumPlaceHolder, BootstrapTheme } from "src/app/guia-caixa/constants/constants";
import { DatatableConfig } from "src/app/guia-caixa/constants/datatable-definitions";
import { StyleService } from "src/app/shared/services/style.service";


@Component({
  selector: "app-cores",
  templateUrl: "./cores.component.html",
  styleUrls: ["./cores.component.scss"]
})
export class CoresComponent implements OnInit {

  @ViewChild("table", { static: true })
  table: DatatableComponent;

  cores: any[] = [];
  coresGradiente: any[] = [];
  dtConfig = DatatableConfig.FILTER_CONFIG;

  coresVariaveis: any[] = [];

  placeholder: string;

  constructor(
    private styleService: StyleService,
    public domSanitizer: DomSanitizer
  ) {
    this.placeholder = loremIpsumPlaceHolder;

    /*     Object.getOwnPropertyNames(BootstrapTheme).forEach((theme: any) => {
          const tema = BootstrapTheme[theme].value;
          if (tema) {
            tema.titulo = tema.name;
            tema.texto = textosCores[tema.name];
            this.cores.push(tema);
          }
        }); */

    this.cores = BootstrapTheme.getTemas();
    this.coresGradiente = BootstrapTheme.getTemas();
    this.dtConfig.order = [[4, "asc"]];
  }

  ngOnInit() {
    this.styleService.currentGlobalStyle$.subscribe(tema => {
      this.coresVariaveis = [
        {
          nome: "Principal",
          variavel: "--cxPrincipal",
          classe: "principal",
          valor: this.styleService.getCssVariableValue("--cxPrincipal"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `01 - Ações principais: <br><br>
            <button class="btn btn-principal">Contratar</button>
            <button class="btn btn-principal">Salvar</button>`
          )
        }, {
          nome: "Secundário",
          variavel: "--cxSecundario",
          classe: "secundario",
          valor: this.styleService.getCssVariableValue("--cxSecundario"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `02 - Ações secundárias: <br><br>
            <button class="btn btn-secundario">Avançar</button>
            <button class="btn btn-outline-secundario">Adicionar</button>`
          )
        }, {
          nome: "Base",
          variavel: "--cxBase",
          classe: "base",
          valor: this.styleService.getCssVariableValue("--cxBase"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `03 - Cor base do tema, geralmente branco ou alguma cor bem escura <br><br>
            Cor de fundo para cards, painéis, tabelas etc.`
          )
        }, {
          nome: "Cancel",
          variavel: "--cxCancel",
          classe: "cancel",
          valor: this.styleService.getCssVariableValue("--cxCancel"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `04 - Cor intermediária do tema, mais próxima à cor base. Ações auxiliares relacionadas a cancelamento: <br><br>
             <button class="btn btn-cancel">Voltar</button>
             <button class="btn btn-cancel">Cancelar</button>`
          )
        }, {
          nome: "Auxiliar",
          variavel: "--cxAux",
          classe: "aux",
          valor: this.styleService.getCssVariableValue("--cxAux"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `05 - Cor intermediária do tema, mais próxima à cor de contraste. Ações auxiliares relacionadas a funcionalides de suporte: <br><br>
             <button class="btn btn-aux">Copiar</button>
             <button class="btn btn-outline-aux">Imprimir</button>`
          )
        }, {
          nome: "Contraste",
          variavel: "--cxContrast",
          classe: "contrast",
          valor: this.styleService.getCssVariableValue("--cxContrast"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `06 - Cor de contraste do tema, oposta à cor base. <br><br>
            Cor padrão do texto e de elementos que precisam contrastar ao máximo com a cor de fundo`
          )
        }, {
          nome: "Sucesso",
          variavel: "--cxSucesso",
          classe: "sucesso",
          valor: this.styleService.getCssVariableValue("--cxSucesso"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `07 - Cor temática de sucesso. <br><br>
            <div class="alert bg-sucesso text-white">
              <i class="fa fa-check-circle fa-lg mr-2"></i>
              Operação concluída com sucesso
            </div>`
          )
        }, {
          nome: "Perigo",
          variavel: "--cxPerigo",
          classe: "perigo",
          valor: this.styleService.getCssVariableValue("--cxPerigo"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `08 - Cor temática de erro. <br><br>
            <div class="alert bg-perigo text-base">
              <i class="fa fa-times-circle fa-lg mr-2"></i>
              Houve um erro ao efetuar esta ação
            </div>`
          )
        }, {
          nome: "Alerta",
          variavel: "--cxAlerta",
          classe: "alerta",
          valor: this.styleService.getCssVariableValue("--cxAlerta"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `09 - Cor temática de alerta. <br><br>
            <div class="alert bg-alerta">
              <i class="fa fa-exclamation-triangle fa-lg mr-2"></i>
              Não foi possível recuperar a informação
            </div>`
          )
        }, {
          nome: "Info",
          variavel: "--cxInfo",
          classe: "info",
          valor: this.styleService.getCssVariableValue("--cxInfo"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `10 - Cor temática de informação. <br><br>
            <div class="alert bg-info text-base">
              <i class="fa fa-info-circle fa-lg mr-2"></i>
              Não há pendências
            </div>`
          )
        }
      ];
      this.coresVariaveis = [].concat(this.coresVariaveis);
      if (this.table) {
        this.table.reloadTable();
      }
    });
  }

  copy(val: string) {
    const selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
  }

}
