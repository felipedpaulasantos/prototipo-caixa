import { Component, OnInit, ViewChild } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { DataTableDirective } from "angular-datatables";
import { DataTableComponent } from "src/app/guia-caixa/components/datatable/datatable.component";
import { loremIpsumPlaceHolder, BootstrapTheme } from "src/app/guia-caixa/constants/constants";
import { DataTableConfig } from "src/app/guia-caixa/components/datatable/datatable-definitions";
import { StyleService } from "src/app/shared/services/style.service";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: "app-cores",
  templateUrl: "./cores.component.html",
  styleUrls: ["./cores.component.scss"]
})
export class CoresComponent implements OnInit {

  @ViewChild("tableTematicas", { static: true })
  tableTematicas: DataTableComponent;

  @ViewChild("tableConstantes", { static: true })
  tableConstantes: DataTableComponent;

  cores: any[] = [];
  coresGradiente: any[] = [];

  variavelCssExemplo = `.classe-exemplo {
    color: var(--base);
    background-color: var(--contraste);
}`;

  dtTematicasSettings = DataTableConfig.getDataTableSettings({
    showFilter: false,
    showInfo: true,
    paging: false,
    showPagination: false
  });

  dtConstantesSettings = DataTableConfig.getDataTableSettings({
    showFilter: false,
    showInfo: true,
    paging: false,
    showPagination: false
  });

  coresVariaveis: any[] = [];
  coresConstantes: any[] = [];

  placeholder: string;

  constructor(
    private styleService: StyleService,
    public domSanitizer: DomSanitizer,
    private toastr: ToastrService
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
    this.cores.forEach((cor, index) => {
      const corConstante = {
        name: cor.name,
        valor: this.styleService.getCssVariableValue(`--${cor.name}`),
        variavel: cor.name,
        ordem: index
      };
      this.coresConstantes.push(corConstante);
      if (this.tableConstantes) {
        this.tableConstantes.reloadTable();
      }
    });
    this.coresGradiente = BootstrapTheme.getTemas();
    this.dtConstantesSettings.order = [[3, "asc"]];
  }

  ngOnInit() {
    this.styleService.currentGlobalStyle$.subscribe(tema => {
      this.coresVariaveis = [
        {
          nome: "Principal",
          variavel: "--principal",
          classe: "principal",
          valor: this.styleService.getCssVariableValue("--principal"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `01 - Ações principais: <br>
            <button class="btn btn-principal">Contratar</button>
            <button class="btn btn-principal">Salvar</button>`
          )
        }, {
          nome: "Destaque",
          variavel: "--destaque",
          classe: "destaque",
          valor: this.styleService.getCssVariableValue("--destaque"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `02 - Ações secundárias: <br>
            <button class="btn btn-destaque">Avançar</button>
            <button class="btn btn-outline-destaque">Adicionar</button>`
          )
        }, {
          nome: "Base",
          variavel: "--base",
          classe: "base",
          valor: this.styleService.getCssVariableValue("--base"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `03 - Base do tema, geralmente branco ou alguma cor bem escura.`
          )
        }, {
          nome: "Fundo",
          variavel: "--fundo",
          classe: "fundo",
          valor: this.styleService.getCssVariableValue("--fundo"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `04 - Bastante próxima da base, utilizada no plano de fundo do conteúdo principal da página e outros elementos.`
          )
        }, {
          nome: "Cancel",
          variavel: "--cancel",
          classe: "cancel",
          valor: this.styleService.getCssVariableValue("--cancel"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `05 - Intermediária do tema, mais próxima à cor base. Ações auxiliares relacionadas a cancelamento: <br>
             <button class="btn btn-cancel">Voltar</button>
             <button class="btn btn-cancel">Cancelar</button>`
          )
        }, {
          nome: "Auxiliar",
          variavel: "--aux",
          classe: "aux",
          valor: this.styleService.getCssVariableValue("--aux"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `06 - Intermediária do tema, mais próxima à cor de contraste. Ações auxiliares relacionadas a funcionalides de suporte: <br>
             <button class="btn btn-aux">Copiar</button>
             <button class="btn btn-outline-aux">Imprimir</button>`
          )
        }, {
          nome: "Contraste",
          variavel: "--contraste",
          classe: "contraste",
          valor: this.styleService.getCssVariableValue("--contraste"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `07 - Contraste do tema, oposta à cor base. <br>
            Cor padrão do texto e de elementos que precisam contrastar ao máximo com a cor de fundo`
          )
        }, {
          nome: "Sucesso",
          variavel: "--success",
          classe: "success",
          valor: this.styleService.getCssVariableValue("--success"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `08 - Temática de sucesso. <br>
            <div class="alert bg-success text-white">
              <i class="fa fa-check-circle fa-lg mr-2"></i>
              Operação concluída com sucesso
            </div>`
          )
        }, {
          nome: "Perigo",
          variavel: "--danger",
          classe: "danger",
          valor: this.styleService.getCssVariableValue("--danger"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `09 - Temática de erro. <br>
            <div class="alert bg-danger text-base">
              <i class="fa fa-times-circle fa-lg mr-2"></i>
              Houve um erro ao efetuar esta ação
            </div>`
          )
        }, {
          nome: "Alerta",
          variavel: "--warning",
          classe: "warning",
          valor: this.styleService.getCssVariableValue("--warning"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `10 - Temática de alerta. <br>
            <div class="alert bg-warning">
              <i class="fa fa-exclamation-triangle fa-lg mr-2"></i>
              Não foi possível recuperar a informação
            </div>`
          )
        }, {
          nome: "Info",
          variavel: "--info",
          classe: "info",
          valor: this.styleService.getCssVariableValue("--info"),
          utilizacao: this.domSanitizer.bypassSecurityTrustHtml(
            `11 - Temática de informação. <br>
            <div class="alert bg-info text-base">
              <i class="fa fa-info-circle fa-lg mr-2"></i>
              Não há pendências
            </div>`
          )
        }
      ];
      this.coresVariaveis = [].concat(this.coresVariaveis);
      if (this.tableTematicas) {
        this.tableTematicas.reloadTable();
      }
      this.dtTematicasSettings.order = [[4, "asc"]];
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
    this.toastr.info("Conteúdo copiado", null, { positionClass: "toast-bottom-center" });
  }

}
