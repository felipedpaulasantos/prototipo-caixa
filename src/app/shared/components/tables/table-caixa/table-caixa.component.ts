import { Component, Input, Renderer2, OnInit, ViewChild, ElementRef, AfterViewInit, ContentChild } from '@angular/core';
import { DatatableInitOptions } from 'src/app/shared/services/datatable-service/datatable-definitions';
import { TableCaixaDirective } from './table-caixa.directive';

@Component({
  selector: 'cx-table-caixa',
  templateUrl: './table-caixa.component.html',
  styleUrls: ['./table-caixa.component.css']
})
export class TableCaixaComponent implements OnInit, AfterViewInit {

  tableSelectorClass = ".table";

  constructor(
/*     private dt: DataTableService */
  ) {}

  @ContentChild(TableCaixaDirective, { read: TableCaixaDirective, static: true }) table: TableCaixaDirective;

  initOptions: DatatableInitOptions = {};

  @Input() showButtons = false;
  @Input() showInfo = false;
  @Input() showFilter = false;
  @Input() showPagination = false;
  @Input() showAll = false;

  tableId = "";

  ngOnInit() {}

  ngAfterViewInit(): void {
    if (this.table) {
      this.tableId = this.table.element.nativeElement.id;
    }

    if (this.showAll) { this.showButtons = this.showInfo = this.showFilter = this.showPagination = true; }

    this.initOptions = {
      showButtons: this.showButtons,
      showInfo: this.showInfo,
      showFilter: this.showFilter,
      showPagination: this.showPagination
    };
    if (this.tableId) {
/*       this.dt.initializeById("#" + this.tableId, this.initOptions); */
    } else {
/*       this.dt.initializeByClass(this.tableSelectorClass, this.initOptions); */
    }
  }

}
