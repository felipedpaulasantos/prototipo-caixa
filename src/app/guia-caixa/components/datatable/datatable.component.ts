import { Component, OnInit, AfterViewInit, ContentChild, Input, ChangeDetectionStrategy } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { DataTableColumnFilterPosition, DataTableColumnFilterType, DataTableConfig, DataTableSettings, dtLanguageDefinitionPt } from "./datatable-definitions";

@Component({
  selector: "cx-datatable",
  templateUrl: "./datatable.component.html",
  styleUrls: ["./datatable.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements OnInit, AfterViewInit {

  private readonly TOP_FILTER_CLASS = "d-table-row-group";
  private readonly FILTER_INPUT_CLASS = "form-control";
  private readonly FILTER_SELECT_CLASS = "custom-select";

  @ContentChild(DataTableDirective, { read: DataTableDirective, static: true })
  dtElement: DataTableDirective;

  @Input()
  config: DataTables.Settings = DataTableConfig.DEFAULT_CONFIG;

  @Input()
  columnFilterType: DataTableColumnFilterType | string = DataTableColumnFilterType.INPUT;

  @Input()
  columnFilterPosition: DataTableColumnFilterPosition | string = DataTableColumnFilterPosition.TOP;

  @Input()
  trigger: Subject<any> = new Subject();

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
    this.trigger.subscribe(() => this.reloadTable());
  }

  ngAfterViewInit(): void {
    this.drawTable(true);
  }

  private drawTable(isInitialDraw = false): void {
    this.dtElement.dtTrigger.next();
    this.tableElement = this.dtElement["el"];
    this.theadElement = this.tableElement.nativeElement.querySelector("thead");
    this.tfootElement = this.tableElement.nativeElement.querySelector("tfoot");
    this.tbodyElement = this.tableElement.nativeElement.querySelector("tbody");

    if (!this.dtElement.dtInstance) { return; }
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      this.drawColumnFilters(dtInstance, this.theadElement, this.tfootElement, this.tbodyElement, isInitialDraw);
    });
  }

  public reloadTable(): void {
    if (!this.dtElement.dtInstance) { return; }
    this.dtElement.dtOptions = this.config;
    this.dtElement.dtInstance.then((dtInstance) => {
      dtInstance.destroy();
      this.drawTable();
    });
  }

  public setConfig(newConfig: DataTableSettings): void {
    this.config = newConfig;
    this.reloadTable();
  }

  public setFilterColumnPosition(position: string): void {
    this.columnFilterPosition = position;
    this.reloadTable();
  }

  private setDefaultLanguage(): void {
    $.extend($.fn.dataTable.defaults, {
      language: dtLanguageDefinitionPt
    });
  }

  private drawColumnFilters(dtInstance: DataTables.Api, thead, tfoot, tbody, isInitialDraw): void {

    const columnFilter = this.config["columnFilter"];

    if (!columnFilter) {
      dtInstance.columns().every(function () {
        $(this.footer()).remove();
      });
    } else if (!tfoot) {
      tfoot = this.drawFooter(dtInstance, thead, tbody);
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

    if (isInitialDraw) {
      this.reloadTable();
    }
  }

  private drawFooter(dtInstance: DataTables.Api, thead: any, tbody: any): any {
    let tfootHtml = "";
    for (let index = 0; index < dtInstance.columns()[0].length; index++) {
      tfootHtml += `<td></td>`;
    }
    tfootHtml = `<tfoot><tr>${tfootHtml}</tr></tfoot>`;
    $(tfootHtml).insertAfter(thead);
    this.tfootElement = this.tableElement.nativeElement.querySelector("tfoot");
    return this.tfootElement;
  }

  private drawInputColumnFilter(dtInstance: DataTables.Api): void {
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
