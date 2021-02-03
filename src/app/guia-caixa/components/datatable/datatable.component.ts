import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from "@angular/core";
import { DataTableDirective } from "angular-datatables";

@Component({
  selector: "cx-datatable",
  templateUrl: "./datatable.component.html",
  styleUrls: ["./datatable.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatableComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;

  constructor() { }

  ngOnInit(): void {
  }

}
