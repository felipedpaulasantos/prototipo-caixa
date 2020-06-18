import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DatatableConfig, DatatableSettings } from 'src/app/shared/constants/datatable-definitions';
import { defaultCipherList } from 'constants';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtTrigger: Subject<any> = new Subject();

  rows = [];
  dtCompleteOptions: DatatableSettings = {};
  dtCustomOptions: DatatableSettings = {};
  dtSimpleOptions: DatatableSettings = {};

  constructor() {
    for (let index = 0; index < 15; index++) {
      this.rows[index] = index;
    }
  }

  ngOnInit() {
    this.dtCompleteOptions = DatatableConfig.CONFIG_COMPLETA;
    this.dtCustomOptions = DatatableConfig.getDatatableConfig({
      buttons: [DatatableConfig.DEFAULT_BUTTONS.EXCEL],
      showLength: true,
      showInfo: true,
      showPagination: true,
      menuLength: [50, 100]
    });
    this.dtSimpleOptions = DatatableConfig.CONFIG_SIMPLES;
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
