import { Component, OnInit, AfterViewInit, ContentChild, Input, ChangeDetectionStrategy } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { DatatableConfig, DatatableSettings, dtLanguageDefinitionPt } from "../../constants/datatable-definitions";
import { DataTableColumnFilterPosition, DataTableColumnFilterType } from "./datatable-constants";

@Component({
  selector: "cx-datatable",
  templateUrl: "./datatable.component.html",
  styleUrls: ["./datatable.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatableComponent implements OnInit, AfterViewInit {

  private readonly TOP_FILTER_CLASS = "d-table-row-group";
  private readonly FILTER_INPUT_CLASS = "form-control";
  private readonly FILTER_SELECT_CLASS = "custom-select";

  @ContentChild(DataTableDirective, { read: DataTableDirective, static: true })
  dtElement: DataTableDirective;

  @Input()
  config: DataTables.Settings = DatatableConfig.CONFIG_COMPLETA;

  @Input()
  columnFilterType: DataTableColumnFilterType | string;

  @Input()
  columnFilterPosition: DataTableColumnFilterPosition | string;

  private tableElement: any;
  private theadElement: any;
  private tfootElement: any;
  private tbodyElement: any;

  constructor() {}

  ngOnInit(): void {
    this.setDefaultLanguage();
    if (!this.dtElement.dtTrigger) {this.dtElement.dtTrigger = new Subject(); }
    this.config["columnFilter"] = this.columnFilterType;
    this.dtElement.dtOptions = this.config;
  }

  ngAfterViewInit(): void {
    this.dtElement.dtTrigger.next();
    this.tableElement = this.dtElement["el"];
    this.theadElement = this.tableElement.nativeElement.querySelector("thead");
    this.tfootElement = this.tableElement.nativeElement.querySelector("tfoot");
    this.tbodyElement = this.tableElement.nativeElement.querySelector("tbody");

    if (!this.dtElement.dtInstance) { return; }
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      this.drawColumnFilters(dtInstance, this.theadElement, this.tfootElement, this.tbodyElement);
    });
  }

  reloadTable() {
    if (!this.dtElement.dtInstance) { return; }
    this.dtElement.dtOptions = this.config;
    this.dtElement.dtInstance.then((dtInstance) => {
      dtInstance.destroy();
      this.ngAfterViewInit();
    });
  }

  setConfig(newConfig: DatatableSettings) {
    this.config = newConfig;
    this.reloadTable();
  }

  setFilterColumnPosition(position: string) {
    this.columnFilterPosition = position;
    this.reloadTable();
  }

  private setDefaultLanguage() {
    $.extend($.fn.dataTable.defaults, {
      language: dtLanguageDefinitionPt
    });
  }

  private drawColumnFilters(dtInstance: DataTables.Api, thead, tfoot, tbody) {

    const columnFilter = this.config["columnFilter"];

    if (!columnFilter) {
      dtInstance.columns().every(function () {
        $(this.footer()).remove();
      });
    } else if (!tfoot) {
      this.drawFooter(dtInstance, thead, tbody);
    }

    if (tfoot && (this.columnFilterPosition === DataTableColumnFilterPosition.TOP || !this.columnFilterPosition)) {
      $(tfoot).addClass(this.TOP_FILTER_CLASS);
    } else if (tfoot && this.columnFilterPosition === DataTableColumnFilterPosition.BOTTOM) {
      $(tfoot).removeClass(this.TOP_FILTER_CLASS);
    }

    if (columnFilter === DataTableColumnFilterType.INPUT) {
      this.drawInputColumnFilter(dtInstance);
    }

    if (columnFilter === DataTableColumnFilterType.SELECT) {
      this.drawSelectColumnFilter(dtInstance);
    }

  }

  private drawFooter(dtInstance: DataTables.Api, thead: any, tbody: any) {
    let tfootHtml = "";
    for (let index = 0; index < dtInstance.columns()[0].length; index++) {
      tfootHtml += `<td></td>`;
    }
    tfootHtml = `<tfoot><tr>${tfootHtml}</tr></tfoot>`;
    $(tfootHtml).insertAfter(thead);
  }

  private drawInputColumnFilter(dtInstance: DataTables.Api) {
    const that = this;
    dtInstance.columns().every(function () {
      const column = this;
      const columnText = column.header().innerHTML;
      $(`<input class='${that.FILTER_INPUT_CLASS}' placeholder='Filtre ${columnText}'>`)
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

  private drawSelectColumnFilter(dtInstance: DataTables.Api): void {
    const that = this;
    dtInstance.columns().every(function () {
      const column = this;
      const columnText = column.header().innerHTML;
      const select = $(`<select class='${that.FILTER_SELECT_CLASS}'><option value=\"\">Filtre ${columnText}</option></select>`)
        .appendTo($(column.footer()).empty())
        .on("change", function () {
          const val = $.fn.dataTable.util.escapeRegex(
            String($(this).val())
          );
          column
            .search(val ? "^" + val + "$" : "", true, false)
            .draw();
        });
      column.data().unique().sort().each(function (d) {
        select.append("<option value=\"" + d + "\">" + d + "</option>");
      });
    });
  }

}
