import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DatatableConfig, DatatableSettings, dtLanguageDefinitionPt } from 'src/app/shared/constants/datatable-definitions';
import { ComponentesInterface } from '../componentes-interface';
import { ToastrService } from 'ngx-toastr';

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
/*   dtCompleteOptions: DatatableSettings = {};
  dtCustomOptions: DatatableSettings = {};
  dtSimpleOptions: DatatableSettings = {}; */

  @ViewChild("scrollElement") scrollElement;
  spiedTags = ['APP-DOCUMENTACAO-TEMPLATE'];
  sectionOffset = 0;
  currentSection = "painelTabelasSimples";

  constructor(
    public toastr: ToastrService
  ) {
    super(toastr);
  }

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

  ngOnInit() {
    
    $.extend($.fn.dataTable.defaults, {
      language: dtLanguageDefinitionPt
  });

    for (let index = 1; index <= 15; index++) {
      this.rows[index - 1] = index;
    }
/*     this.dtCompleteOptions = DatatableConfig.CONFIG_COMPLETA;
    this.dtCustomOptions = DatatableConfig.getDatatableConfig({
      buttons: [DatatableConfig.DEFAULT_BUTTONS.EXCEL],
      showLength: true,
      showInfo: true,
      showPagination: true,
      menuLength: [50, 100]
    });
    this.dtSimpleOptions = DatatableConfig.CONFIG_SIMPLES; */
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
