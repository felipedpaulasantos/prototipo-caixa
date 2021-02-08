import { Component, OnInit, ViewChild } from "@angular/core";
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
  dtConfig = DatatableConfig.CONFIG_FILTRO;

  coresVariaveis: any[] = [];

  placeholder: string;

  constructor(
    private styleService: StyleService
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
  }

  ngOnInit() {
    this.styleService.currentGlobalStyle$.subscribe(tema => {
      this.coresVariaveis = [
        {
          nome: "Principal",
          variavel: "--cxPrincipal",
          classe: "principal",
          valor: this.styleService.getCssVariableValue("--cxPrincipal"),
          utilizacao: "Ações principais"
        }, {
          nome: "Secundário",
          variavel: "--cxSecundario",
          classe: "secundario",
          valor: this.styleService.getCssVariableValue("--cxSecundario"),
          utilizacao: "Ações acessórias"
        }, {
          nome: "Base",
          variavel: "--cxBase",
          classe: "base",
          valor: this.styleService.getCssVariableValue("--cxBase"),
          utilizacao: "Cor base do tema"
        }, {
          nome: "Contraste",
          variavel: "--cxContrast",
          classe: "contrast",
          valor: this.styleService.getCssVariableValue("--cxContrast"),
          utilizacao: "Cor contraste do tema"
        }, {
          nome: "Cancel",
          variavel: "--cxCancel",
          classe: "cancel",
          valor: this.styleService.getCssVariableValue("--cxCancel"),
          utilizacao: "Cor de meio termo do tema"
        }, {
          nome: "Auxiliar",
          variavel: "--cxAux",
          classe: "aux",
          valor: this.styleService.getCssVariableValue("--cxAux"),
          utilizacao: "Cor auxiliar do tema"
        }, {
          nome: "Sucesso",
          variavel: "--cxSucesso",
          classe: "sucesso",
          valor: this.styleService.getCssVariableValue("--cxSucesso"),
          utilizacao: "Cor temática de sucesso"
        }, {
          nome: "Perigo",
          variavel: "--cxPerigo",
          classe: "perigo",
          valor: this.styleService.getCssVariableValue("--cxPerigo"),
          utilizacao: "Cor temática de erro"
        }, {
          nome: "Alerta",
          variavel: "--cxAlerta",
          classe: "alerta",
          valor: this.styleService.getCssVariableValue("--cxAlerta"),
          utilizacao: "Cor temática de alerta"
        }, {
          nome: "Info",
          variavel: "--cxInfo",
          classe: "info",
          valor: this.styleService.getCssVariableValue("--cxInfo"),
          utilizacao: "Cor temática de informação"
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
