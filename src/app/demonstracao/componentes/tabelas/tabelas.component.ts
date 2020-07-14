import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { ComponentesInterface } from '../componentes-interface';
import { ToastrService } from 'ngx-toastr';
import { DatatableSettings, DatatableConfig } from 'src/app/guia-caixa/constants/datatable-definitions';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss'],
  host: { '(window:scroll)': 'onScroll($event)' }
})
export class TabelasComponent extends ComponentesInterface implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtTrigger: Subject<any> = new Subject();

  rows = [];
  dtCompleteOptions: DatatableSettings = {};
  dtCustomOptions: DatatableSettings = {};
  dtSimpleOptions: DatatableSettings = {};

  @ViewChild("scrollElement") scrollElement;
  spiedTags = ['APP-DOCUMENTACAO-TEMPLATE'];
  sectionOffset = 0;
  currentSection = "painelTabelaDatatable";

  constructor(
    public toastr: ToastrService
  ) {
    super(toastr);
  }

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
    for (let index = 1; index <= 15; index++) {
      this.rows[index - 1] = index;
    }
    this.dtSimpleOptions = DatatableConfig.CONFIG_SIMPLES;
    this.dtCompleteOptions = DatatableConfig.CONFIG_COMPLETA;
    this.dtCustomOptions = DatatableConfig.getDatatableConfig({
      buttons: [DatatableConfig.DEFAULT_BUTTONS.EXCEL],
      showInfo: true,
      showFilter: true,
      showPagination: true,
      menuLength: [5, 10, 50]
    });
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    if (this.dtElement && this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
    }
  }

}
