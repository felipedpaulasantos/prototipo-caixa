import { Component, OnInit } from "@angular/core";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-paginas",
  templateUrl: "./paginas.component.html",
  styleUrls: ["./paginas.component.scss"]
})
export class PaginasComponent implements OnInit {

  constructor(private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxLoader.start("loader-1");
  }

}
