import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";

import { ComponentesInterface } from "../componentes-interface";
import { ToastrService } from "ngx-toastr";
import { DatatableSettings, DatatableConfig, DatatableDefaultButtonsList } from "src/app/guia-caixa/constants/datatable-definitions";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-tabelas",
  templateUrl: "./tabelas.component.html",
  styleUrls: ["./tabelas.component.scss"],
  host: { "(window:scroll)": "onScroll($event)" }
})
export class TabelasComponent extends ComponentesInterface implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    public toastr: ToastrService,
    public fb: FormBuilder
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

  @ViewChild("scrollElement") scrollElement;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  sectionOffset = 0;
  currentSection = "painelTabelaDatatable";

  rows = [];
  dtCompleteOptions: DatatableSettings = {};
  dtCustomOptions: DatatableSettings = {};
  dtSimpleOptions: DatatableSettings = {};

  config: DataTables.Settings = DatatableConfig.CONFIG_COMPLETA;
  configCompleta = DatatableConfig.CONFIG_COMPLETA;
  configCompletaSemBotoes = DatatableConfig.CONFIG_COMPLETA_SEM_BOTOES;
  configFilter = DatatableConfig.CONFIG_FILTRO;
  configInfo = DatatableConfig.CONFIG_INFO_PAGINACAO;
  configSimples = DatatableConfig.CONFIG_SIMPLES;
  dtTrigger: Subject<any> = new Subject();

  filterPosition = "";

  cols = 0;

  htmlCodeDatatable = `				<div class="table-responsive">
  <table datatable class="table table-caixa">
    <thead>
      <tr>
        <th>Coluna 1</th>
        <th>Coluna 2</th>
        <th>Coluna 3</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let row of rows">
        <td>Linha {{ row }}</td>
        <td>Linha {{ row  }}</td>
        <td>Linha {{ row }}</td>
      </tr>
    </tbody>
  </table>
</div>`.trim();
  tsCodeDatatable = `import { Component } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent {

  rows = [];

  constructor() {
    for (let index = 1; index <= 15; index++) {
      this.rows[index - 1] = index;
    }
  }

}
`.trimRight();

  htmlCodeDatatableCustom = `				<div class="table-responsive">
  <h5 class="header-caixa">Personalizada</h5>
  <table datatable [dtOptions]="dtCustomOptions" class="table table-caixa">
    <thead>
      <tr>
        <th>Coluna 1</th>
        <th>Coluna 2</th>
        <th>Coluna 3</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let row of rows | slice:0:5; let i = index">
        <td>Linha {{ row }}</td>
        <td>Linha {{ row  }}</td>
        <td>Linha {{ row }}</td>
      </tr>
    </tbody>
  </table>

  <hr class="my-5">

  <h5 class="header-caixa">Completa</h5>
  <table datatable [dtOptions]="dtCompleteOptions" class="table table-caixa">
    <thead>
      <tr>
        <th>Coluna 1</th>
        <th>Coluna 2</th>
        <th>Coluna 3</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let row of rows | slice:0:5; let i = index">
        <td>Linha {{ row }}</td>
        <td>Linha {{ row  }}</td>
        <td>Linha {{ row }}</td>
      </tr>
    </tbody>
  </table>
</div>`.trim();
  tsCodeDatatableCustom = `import { Component } from '@angular/core';
import { DatatableConfig, DatatableSettings } from 'src/app/shared/constants/datatable-definitions';

  @Component({
    selector: 'app-tabelas',
    templateUrl: './tabelas.component.html',
    styleUrls: ['./tabelas.component.scss']
  })
  export class TabelasComponent {

  rows = [];
  dtCompleteOptions: DatatableSettings = {};
  dtCustomOptions: DatatableSettings = {};

  constructor() {
    for (let index = 1; index <= 15; index++) {
      this.rows[index - 1] = index;
    }
  }

  ngOnInit() {
    this.dtCompleteOptions = DatatableConfig.CONFIG_COMPLETA;
    this.dtCustomOptions = DatatableConfig.getDatatableConfig({
      buttons: [DatatableConfig.DEFAULT_BUTTONS.EXCEL],
      showInfo: true,
      showFilter: true,
      showPagination: true,
      menuLength: [5, 10, 50]
    });
  }

}
`.trimRight();

  htmlCodeTabelasSimples = `				<div class="table-responsive">
<table class="table table-caixa">
  <thead>
    <tr>
      <th>Coluna 1</th>
      <th>Coluna 2</th>
      <th>Coluna 3</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let item of rows | slice:0:5; let i = index">
      <td>Linha {{ i }}</td>
      <td>Linha {{ i }}</td>
      <td>Linha {{ i }}</td>
    </tr>
  </tbody>
</table>
</div>`.trim();
  tsCodeTabelasSimples = `import { Component } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent {

rows = [];

constructor() {
  for (let index = 1; index <= 15; index++) {
    this.rows[index - 1] = index;
  }
}

}
`.trimRight();

  ngOnInit() {
    this.dtSimpleOptions = DatatableConfig.CONFIG_SIMPLES;
    this.dtCompleteOptions = DatatableConfig.CONFIG_COMPLETA;
    this.dtCustomOptions = DatatableConfig.getDatatableConfig({
      buttons: [DatatableConfig.DEFAULT_BUTTONS.EXCEL],
      showInfo: true,
      showFilter: true,
      showPagination: true,
      menuLength: [5, 10, 50]
    });
    for (let index = 0; index < 100; index++) {
      const element = `Linha ${index + 1}`;
      this.rows.push(element);
    }
    this.rows = [].concat(this.rows);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    if (this.datatableElement && this.datatableElement.dtInstance) {
      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
    }
  }



  ngAfterViewInit(): void {
    console.log("CONFIG", this.config);
    this.dtTrigger.next();
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {

      const table = dtInstance["context"][0]["nTable"];
      const thead = $(table).children("thead")[0];
      const tfoot = $(table).children("tfoot")[0];

      console.log("TABLE", table);
      console.log("THEAD", thead);
      console.log("TFOOT", tfoot);

      this.drawColumnFilters(dtInstance, table, thead, tfoot);
    });
  }

  updateConfig(newConfig: DatatableConfig) {
    console.log("NEW CONFIG", newConfig);
    this.config = JSON.parse(JSON.stringify(newConfig));
    this.updateTable();
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
      case "columnFilter":
        this.config["columnFilter"] = value;
        break;
    }
    this.updateTable();
  }

  updateTable() {
    this.datatableElement.dtOptions = this.config;
    this.datatableElement.dtInstance.then((dtInstance) => {
      dtInstance.destroy();
      this.ngAfterViewInit();
    });
  }

  drawColumnFilters(dtInstance: DataTables.Api, table, thead, tfoot) {

    if (!this.config["columnFilter"]) {
      dtInstance.columns().every(function () {
        $(this.footer()).remove();
      });

    } else if (!tfoot) {
      let tfootHtml = "";
      for (let index = 0; index < dtInstance.columns()[0].length; index++) {
        tfootHtml += `<td></td>`;
      }
      tfootHtml = `<tfoot><tr>${tfootHtml}</tr></tfoot>`;
      $(tfootHtml).insertAfter(thead);
    }

    if (tfoot && this.filterPosition === "top") {
      $(tfoot).addClass("d-table-row-group");
    } else if (tfoot && this.filterPosition === "bottom") {
      $(tfoot).removeClass("d-table-row-group");
    }


    if (this.config["columnFilter"] === "input") {
      dtInstance.columns().every(function () {
        const column = this;
        const input = $(`<input class='form-control' placeholder='Filtro'>`)
          .appendTo($(column.footer()).empty())
          .on("keyup change", function () {
            if (column.search() !== this["value"]) {
              column
                .search(this["value"])
                .draw();
            }
          });
      });
    }

    if (this.config["columnFilter"] === "select") {
      dtInstance.columns().every(function () {
        const column = this;
        const select = $(`<select class='custom-select'><option value=\"\">Filtro</option></select>`)
          .appendTo($(column.footer()).empty())
          .on("change", function () {
            const val = $.fn.dataTable.util.escapeRegex(
              String($(this).val())
            );
            column
              .search(val ? "^" + val + "$" : "", true, false)
              .draw();
          });
        column.data().unique().sort().each(function (d, j) {
          select.append("<option value=\"" + d + "\">" + d + "</option>");
        });
      });
    }
  }

  getTableConfig() {
    if (this.formDTConfig.get("showButtons").value) {
      this.formDTConfig.get("buttons").setValue(DatatableDefaultButtonsList);
    } else {
      this.formDTConfig.get("buttons").setValue([]);
    }
    const newConfig = DatatableConfig.getDatatableConfig(this.formDTConfig.value);
    this.config = JSON.parse(JSON.stringify(newConfig));
    this.updateTable();
  }

  printConfig(): any {
    const configPrint = JSON.parse(JSON.stringify(this.config));
    configPrint["language"] = null;
    return configPrint;
  }

}
