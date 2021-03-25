import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";

import { ComponentesInterface } from "../componentes-interface";
import { ToastrService } from "ngx-toastr";
import { DataTableSettings, DataTableConfig, DatatableDefaultButtonsList, DataTableButtons } from "src/app/guia-caixa/components/datatable/datatable-definitions";
import { FormBuilder } from "@angular/forms";
import { DataTableComponent } from "src/app/guia-caixa/components/datatable/datatable.component";

import { RandomDataFood } from "src/app/shared/model/random-data-food";
import { RandomDataService } from "src/app/demonstracao/componentes/datatable-demonstracao/random-data.service";
import { NgxSpinnerService } from "ngx-spinner";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";

@Component({
  selector: "app-tabelas",
  templateUrl: "./datatable-demonstracao.component.html",
  styleUrls: ["./datatable-demonstracao.component.scss"],
  host: { "(window:scroll)": "onScroll($event)" }
})
export class DatatableDemonstracaoComponent extends ComponentesInterface implements OnInit, OnDestroy {

  constructor (
    public toastr: ToastrService,
    public fb: FormBuilder,
    public randomDataService: RandomDataService,
    public spinner: NgxSpinnerService,
    private cdr: ChangeDetectorRef
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
    showPagination: true,
    columnFilterType: "",
    columnFilterPosition: ""
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

  settings: DataTableSettings = DataTableConfig.DEFAULT_SETTINGS;
  settingsPadrao = DataTableConfig.DEFAULT_SETTINGS;
  settingsCompleta = DataTableConfig.COMPLETE_SETTINGS;
  settingsCompletaSemBotoes = DataTableConfig.COMPLETE_NO_BUTTON_SETTINGS;
  settingsFilter = DataTableConfig.FILTER_SETTINGS;
  settingsInfo = DataTableConfig.PAGINATION_INFO_SETTINGS;
  settingsSimples = DataTableConfig.SIMPLE_SETTINGS;
  settingsCustom = DataTableConfig.getDataTableSettings({
    showInfo: true,
    showPagination: true,
    showLength: true,
    menuLength: [5, 10, 15]
  });
  settingsComTodosBotoes = DataTableConfig.getDataTableSettings({
    buttons: [
      DataTableButtons.EXCEL.button,
      DataTableButtons.PRINT.button,
/*       DataTableButtons.COPY.button,
      DataTableButtons.COLVIS.button */
    ],
    showButtons: true,
    showFilter: true,
    showInfo: true,
    showLength: true,
    showPagination: true,
    showProcessing: true
  });
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

  codeDescricao = `<cx-datatable>
  <table datatable class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Coluna 1</th>
        <th>Coluna 2</th>
        <th>Coluna 3</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let linha of linhas">
        <td>{{ linha.dado1 }}</td>
        <td>{{ linha.dado2 }}</td>
        <td>{{ linha.dado3 }}</td>
      </tr>
    </tbody>
  </table>
</cx-datatable>`;

  codeTsTemplateString = `import { Component, ViewChild } from '@angular/core';
import { DadosTabelaService } from '~dados-tabela.service.ts';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent {

  @ViewChild("tabelaExemplo", { static: true })
  datatable: DataTableComponent;

  dadosDaTabela = [];

  constructor(private service: DadosTabelaService) {}

  ngOnInit() {
    this.service.subscribe((response: any[]) => {
      this.dadosDaTabela = response;
      if (this.datatable) {
        this.datatable.reloadTable();
      }
    });
  }

}
`.trim();

  htmlCodeDatatable = `						<cx-datatable [settings]="settingsCompleta" [trigger]="dtTrigger">
  <table datatable class="table table-striped table-hover">
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
import { RandomDataService, RandomDataFood } from "~random-data.service";

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent {

  /* Exemplo de configuração pré-definida */
  settingsCompleta = DataTableConfig.COMPLETE_SETTINGS;

  /* Exemplo de configuração customizada */
  settingsCustom = DataTableConfig.getDataTableSettings({
    showInfo: true,
    showPagination: true,
    showLength: true,
    menuLength: [5, 10, 15]
  });

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

  htmlCodeDatatableFilter = `						<cx-datatable [settings]="settingsCustom" [trigger]="dtTrigger" columnFilterPosition="top">
  <table datatable class="table table-striped table-hover">
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
import { RandomDataService, RandomDataFood } from "~random-data.service";

  @Component({
    selector: 'app-tabelas',
    templateUrl: './tabelas.component.html',
    styleUrls: ['./tabelas.component.scss']
  })
  export class TabelasComponent {

    settingsCustom = DataTableConfig.getDataTableSettings({
      showInfo: true,
      showPagination: true,
      showLength: true,
      menuLength: [5, 10, 15]
    });

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

  updateSettings(newConfig: DataTableConfig) {
    this.settings = JSON.parse(JSON.stringify(newConfig));
    this.cdr.detectChanges();
    this.table.updateSettings(this.settings);
    this.formDTConfig.get("columnFilterType").setValue(this.settings.columnFilterType);
    this.formDTConfig.get("columnFilterPosition").setValue(this.settings.columnFilterPosition);
  }

  updateConfigOption(option: string, value: any) {
    switch (option) {
      case "buttons":
        this.settings["buttons"] = value ? DatatableDefaultButtonsList : [];
        break;
      case "filter":
        this.settings.searching = value;
        break;
      case "pagination":
        this.settings.paging = value;
        break;
      case "length":
        this.settings.lengthChange = value;
        break;
      case "columnFilterType":
        this.settings.columnFilterType = value;
        break;
    }
    this.table.updateSettings(this.settings);
  }

  getTableConfig() {
    if (this.formDTConfig.get("showButtons").value) {
      this.formDTConfig.get("buttons").setValue(DatatableDefaultButtonsList);
    } else {
      this.formDTConfig.get("buttons").setValue([]);
    }
    const newConfig = DataTableConfig.getDataTableSettings(this.formDTConfig.value);
    this.settings = JSON.parse(JSON.stringify(newConfig));
    this.table.updateSettings(this.settings);
  }

  hasProperty(prop: string) {
    return this.settings.dom.toLowerCase().includes(prop);
  }

  printConfig(): any {
    const configPrint = JSON.parse(JSON.stringify(this.settings));
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
    this.settings = DataTableConfig.PAGINATION_INFO_SETTINGS;
    this.table.reloadTable();
  }

}
