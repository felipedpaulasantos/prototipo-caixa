import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-paginacao",
  templateUrl: "./paginacao.component.html",
  styleUrls: ["./paginacao.component.css"]
})
export class PaginacaoComponent {

  @Input()
  totalItems: number;

  @Input()
  totalItemsPage = 20;

  @Input()
  pageIndex: string;

  @Input()
  maxSize = 10;

  @Output() consultarPagina: EventEmitter<number> = new EventEmitter();

  public novaPagina(event: any): void {
    this.consultarPagina.next(event.page);
  }

}
