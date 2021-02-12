import { Component, OnInit, AfterViewInit, ContentChild, Input, ChangeDetectionStrategy, ElementRef } from "@angular/core";
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
  settings: DataTables.Settings = DataTableConfig.DEFAULT_SETTINGS;

  @Input()
  filterType: DataTableColumnFilterType | string = DataTableColumnFilterType.NONE;

  @Input()
  filterPosition: DataTableColumnFilterPosition | string = DataTableColumnFilterPosition.NONE;

  @Input()
  trigger: Subject<any> = new Subject();

  private tableElementRef: ElementRef;
  private tableElement: HTMLElement;
  private theadElement: HTMLElement;
  private tfootElement: HTMLElement;
  private tbodyElement: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.setDefaultLanguage();
    if (!this.dtElement.dtTrigger) { this.dtElement.dtTrigger = new Subject(); }
    this.settings["columnFilterType"] = this.filterType;
    this.dtElement.dtOptions = this.settings;
    this.trigger.subscribe(() => this.reloadTable());
  }

  ngAfterViewInit(): void {
    this.drawTable(true);
  }

  private drawTable(isInitialDraw = false): void {
    this.dtElement.dtTrigger.next();
    this.tableElementRef = this.dtElement["el"];
    this.tableElement = this.tableElementRef.nativeElement;
    this.theadElement = this.tableElement.querySelector("thead");
    this.tfootElement = this.tableElement.querySelector("tfoot");
    this.tbodyElement = this.tableElement.querySelector("tbody");

    if (!this.dtElement.dtInstance) { return; }
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      this.drawColumnFilters(dtInstance, this.theadElement, this.tfootElement, this.tbodyElement, isInitialDraw);
    });
  }

  public reloadTable(): void {
    if (!this.dtElement.dtInstance) { return; }
    this.dtElement.dtOptions = this.settings;
    this.dtElement.dtInstance.then((dtInstance) => {
      dtInstance.destroy();
      this.drawTable();
    });
  }

  public updateSettings(newSettings: DataTableSettings): void {
    this.settings = newSettings;
    this.reloadTable();
  }

  public updateFilterColumnPosition(position: string): void {
    this.filterPosition = position;
    this.reloadTable();
  }

  private setDefaultLanguage(): void {
    $.extend($.fn.dataTable.defaults, {
      language: dtLanguageDefinitionPt
    });
  }

  private drawColumnFilters(dtInstance: DataTables.Api, thead, tfoot, tbody, isInitialDraw): void {
    const columnFilterType = this.settings["columnFilterType"];

    if (!columnFilterType) {
      dtInstance.columns().every(function() { $(this.footer()).remove(); });
    } else if (!tfoot && (this.filterPosition !== DataTableColumnFilterPosition.NONE)) {
      tfoot = this.drawFooter(dtInstance, thead);
    }

    this.setFooterClass(tfoot);
    this.drawInputColumnFilter(dtInstance, columnFilterType);
    this.drawSelectColumnFilter(dtInstance, columnFilterType);

    if (isInitialDraw) { this.reloadTable(); }
  }

  private drawFooter(dtInstance: DataTables.Api, thead: any): any {
    let tfootHtml = "";
    for (let index = 0; index < dtInstance.columns()[0].length; index++) {
      tfootHtml += `<td></td>`;
    }
    tfootHtml = `<tfoot><tr>${tfootHtml}</tr></tfoot>`;
    $(tfootHtml).insertAfter(thead);
    this.tfootElement = this.tableElement.querySelector("tfoot");
    return this.tfootElement;
  }

  private setFooterClass(tfoot: any): void {
    if (tfoot && (this.filterPosition === DataTableColumnFilterPosition.TOP || !this.filterPosition)) {
      $(tfoot).addClass(this.TOP_FILTER_CLASS);
    } else if (tfoot && this.filterPosition === DataTableColumnFilterPosition.BOTTOM) {
      $(tfoot).removeClass(this.TOP_FILTER_CLASS);
    }
  }

  private drawInputColumnFilter(dtInstance: DataTables.Api, columnFilterType: DataTableColumnFilterType | string): void {
    const filterInputClass = this.FILTER_INPUT_CLASS;

    dtInstance.columns().every(function () {
      const column = this;
      if (columnFilterType === DataTableColumnFilterType.INPUT || column.header().dataset.filter === DataTableColumnFilterType.INPUT) {
        const columnText = column.header().innerHTML;
        $(`<input class='${filterInputClass}' placeholder='Filtre ${columnText}'>`)
          .appendTo($(column.footer()).empty())
          .on("keyup change", function () {
            if (column.search() !== this["value"]) {
              column
                .search(this["value"])
                .draw();
            }
          });
      }
    });
  }

  private drawSelectColumnFilter(dtInstance: DataTables.Api, columnFilterType: DataTableColumnFilterType | string): void {
    const filterSelectClass = this.FILTER_SELECT_CLASS;

    dtInstance.columns().every(function () {
      const column = this;
      if (columnFilterType === DataTableColumnFilterType.SELECT || column.header().dataset.filter === DataTableColumnFilterType.SELECT) {
        const columnText = column.header().innerHTML;
        const select = $(`<select class='${filterSelectClass}'><option value=\"\">Filtre ${columnText}</option></select>`)
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
      }
    });
  }

}
