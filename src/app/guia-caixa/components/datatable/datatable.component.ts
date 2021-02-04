import { Component, OnInit, AfterViewInit, ContentChild, OnChanges } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { DatatableConfig, DatatableSettings } from "../../constants/datatable-definitions";

@Component({
  selector: "cx-datatable",
  templateUrl: "./datatable.component.html",
  styleUrls: ["./datatable.component.scss"]
})
export class DatatableComponent implements OnInit, AfterViewInit {

  @ContentChild(DataTableDirective, { read: DataTableDirective, static: true })
  datatableElement: DataTableDirective;

  tableElement: any;
  theadElement: any;
  tfootElement: any;
  private config: DataTables.Settings = DatatableConfig.CONFIG_COMPLETA;

  dtTrigger: Subject<any> = new Subject();

  filterPosition = "";

  constructor() { }

  ngOnInit(): void {
    if (!this.datatableElement.dtTrigger) {
      this.datatableElement.dtTrigger = new Subject();
    }
  }

  ngAfterViewInit(): void {

    this.datatableElement.dtTrigger.next();

    if (!this.datatableElement.dtInstance) { return; }

    this.tableElement = this.datatableElement["el"];
    this.theadElement = this.tableElement.nativeElement.querySelector("thead");
    this.tfootElement = this.tableElement.nativeElement.querySelector("tfoot");

    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      this.drawColumnFilters(dtInstance, this.theadElement, this.tfootElement);
    });
  }

  reloadTable() {
    this.datatableElement.dtOptions = this.config;
    this.datatableElement.dtInstance.then((dtInstance) => {
      dtInstance.destroy();
      this.ngAfterViewInit();
    });
  }

  drawColumnFilters(dtInstance: DataTables.Api, thead, tfoot) {

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
        column.data().unique().sort().each(function (d) {
          select.append("<option value=\"" + d + "\">" + d + "</option>");
        });
      });
    }
    this.datatableElement.dtInstance.then(instance => {
      instance.init();
    });
  }

  setConfig(config: DatatableSettings) {
    this.config = config;
    this.reloadTable();
  }

}
