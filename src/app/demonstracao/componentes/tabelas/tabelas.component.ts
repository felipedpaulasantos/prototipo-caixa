import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";

import { ComponentesInterface } from "../componentes-interface";
import { ToastrService } from "ngx-toastr";
import { DataTableSettings, DataTableConfig, DatatableDefaultButtonsList } from "src/app/guia-caixa/components/datatable/datatable-definitions";
import { FormBuilder } from "@angular/forms";
import { DataTableComponent } from "src/app/guia-caixa/components/datatable/datatable.component";

import { RandomDataFood } from "src/app/shared/model/random-data-food";
import { RandomDataService } from "src/app/demonstracao/componentes/tabelas/random-data.service";
import { NgxSpinnerService } from "ngx-spinner";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";

@Component({
  selector: "app-tabelas",
  templateUrl: "./tabelas.component.html",
  styleUrls: ["./tabelas.component.scss"],
  host: { "(window:scroll)": "onScroll($event)" }
})
export class TabelasComponent extends ComponentesInterface implements OnInit, OnDestroy {

  constructor (
    public toastr: ToastrService,
    public fb: FormBuilder,
    public randomDataService: RandomDataService,
    public spinner: NgxSpinnerService
  ) {
    super(toastr);
  }

  formDTConfig = this.fb.group({
    buttons: true,
    searching: true,
    showFilter: true,
    showLength: true,
    showButtons: true,
    showTable: true,
    showInfo: true,
    showProcessing: true,
    showPagination: true
  });

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  @ViewChild("tabela")
  table: DataTableComponent;

  @ViewChild("tabela2")
  table2: DataTableComponent;

  @ViewChild("scrollElement") scrollElement;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  sectionOffset = 0;
  currentSection = "painelTabelaDatatable";

  rows = [];
  dtCompleteOptions: DataTableSettings = {};
  dtCustomOptions: DataTableSettings = {};
  dtSimpleOptions: DataTableSettings = {};

  config: DataTables.Settings = DataTableConfig.COMPLETE_SETTINGS;
  configCompleta = DataTableConfig.COMPLETE_SETTINGS;
  configCompletaSemBotoes = DataTableConfig.COMPLETE_NO_BUTTON_SETTINGS;
  configFilter = DataTableConfig.FILTER_SETTINGS;
  configInfo = DataTableConfig.PAGINATION_INFO_SETTINGS;
  configSimples = DataTableConfig.SIMPLE_SETTINGS;
  dtTrigger: Subject<any> = new Subject();

  navItems: CodeFixedNavItem[] = [
    { id: "painelDatatable", name: "Configuração" },
    { id: "painelDatatableFiltros", name: "Filtros por coluna" },
    { id: "painelDatatableReinicializacao", name: "Reinicialização" }
  ];

  filterPosition = "";

  cols = 0;

  trigger = new Subject();

  showTable = true;

  codeDataFilterInput = `<th data-filter="input">Título</th>`;
  codeDataFilterSelect = `<th data-filter="select">Título</th>`;
  codeDataFilterAllColumns = `<cx-datatable columnFilterPosition="bottom" columnFilterType="select">...</cx-datatable>`;
  codeHtmlTemplateString = `<cx-datatable #tabelaExemplo>...</cx-datatable>`;
  codeTsTemplateString = `import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent {

  @ViewChild("tabelaExemplo", { static: true })
  datatable: DataTableComponent;

  dadosDaTabela = [];

  constructor() {}

  ngOnInit() {
    this.service.subscribe((resultado: any[]) => {
      this.dadosDaTabela = resultado;
      if (this.datatable) {
        this.datatable.reloadTable();
      }
    });
  }

}
`.trim();

  htmlCodeDatatable = `						<cx-datatable [settings]="configCompleta" [trigger]="dtTrigger">
  <table datatable class="table">
    <thead>
      <tr>
        <th>Prato</th>
        <th>Ingrediente</th>
        <th>Medida</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let row of rows">
        <td>{{ row.dish }}</td>
        <td>{{ row.ingredient }}</td>
        <td>{{ row.measurement }}</td>
      </tr>
    </tbody>
  </table>
</cx-datatable>`.trim();

  tsCodeDatatable = `import { Component } from '@angular/core';
import { DataTableConfig } from "~datatable-definitions";
import { RandomDataService } from "~random-data.service";

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent {

  configCompleta = DataTableConfig.COMPLETE_SETTINGS;

  constructor (
    public randomDataService: RandomDataService
  ) {}

  rows = [];
  dtTrigger: Subject<any> = new Subject();

  ngOnInit() {
    this.randomDataService.getFoodData(100).subscribe((foodArray: RandomDataFood[]) => {
      this.rows = foodArray;
      this.dtTrigger.next();
    });
  }

}
`.trimRight();

  htmlCodeDatatableFilter = `						<cx-datatable [settings]="configInfo" [trigger]="dtTrigger" columnFilterPosition="top">
  <table datatable class="table">
    <thead>
      <tr>
        <th data-filter="input">Prato</th>
        <th>Ingrediente</th>
        <th data-filter="select">Medida</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let row of rows.slice(0, 10)">
        <td>{{ row.dish }}</td>
        <td>{{ row.ingredient }}</td>
        <td>{{ row.measurement }}</td>
      </tr>
    </tbody>
  </table>
</cx-datatable>`.trim();

  tsCodeDatatableFilter = `import { Component } from '@angular/core';
import { DataTableConfig } from "~datatable-definitions";
import { RandomDataService } from "~random-data.service";

  @Component({
    selector: 'app-tabelas',
    templateUrl: './tabelas.component.html',
    styleUrls: ['./tabelas.component.scss']
  })
  export class TabelasComponent {

    configSimples = DataTableConfig.SIMPLE_SETTINGS;

    constructor (
      public randomDataService: RandomDataService
    ) {}

    rows = [];
    dtTrigger: Subject<any> = new Subject();

    ngOnInit() {
      this.randomDataService.getFoodData(100).subscribe((foodArray: RandomDataFood[]) => {
        this.rows = foodArray;
        this.dtTrigger.next();
      });
    }

  }
`.trimRight();

  ngOnInit() {
    this.dtSimpleOptions = DataTableConfig.SIMPLE_SETTINGS;
    this.dtCompleteOptions = DataTableConfig.COMPLETE_SETTINGS;
    this.dtCustomOptions = DataTableConfig.getDataTableSettings({
      buttons: [DataTableConfig.DEFAULT_BUTTONS.EXCEL],
      showInfo: true,
      showFilter: true,
      showPagination: true,
      menuLength: [5, 10, 50]
    });

    this.fetchData();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  updateConfig(newConfig: DataTableConfig) {
    this.config = JSON.parse(JSON.stringify(newConfig));
  }

  updateConfigOption(option: string, value: boolean) {
    switch (option) {
      case "buttons":
        this.config["buttons"] = value ? DatatableDefaultButtonsList : [];
        break;
      case "filter":
        this.config.searching = value;
        break;
      case "pagination":
        this.config.paging = value;
        break;
      case "length":
        this.config.lengthChange = value;
        break;
      case "columnFilterType":
        this.config["columnFilterType"] = value;
        break;
    }
    this.table.updateSettings(this.config);
  }

  getTableConfig() {
    if (this.formDTConfig.get("showButtons").value) {
      this.formDTConfig.get("buttons").setValue(DatatableDefaultButtonsList);
    } else {
      this.formDTConfig.get("buttons").setValue([]);
    }
    const newConfig = DataTableConfig.getDataTableSettings(this.formDTConfig.value);
    this.config = JSON.parse(JSON.stringify(newConfig));
    this.table.updateSettings(this.config);
  }

  printConfig(): any {
    const configPrint = JSON.parse(JSON.stringify(this.config));
    configPrint["language"] = null;
    return configPrint;
  }

  setFilterPosition(position: string) {
    this.table.updateFilterColumnPosition(position);
  }

  fetchData() {
    this.spinner.show("global");
    this.randomDataService.getFoodData(100).subscribe((foodArray: RandomDataFood[]) => {
      this.rows = foodArray;
/*       if (this.table) {
        this.table.reloadTable();
      } */
      this.dtTrigger.next();
      this.spinner.hide("global");
    });
  }

  atualizar() {
    // this.getTableConfig();
    this.config = DataTableConfig.PAGINATION_INFO_SETTINGS;
    this.table.reloadTable();
  }

}
