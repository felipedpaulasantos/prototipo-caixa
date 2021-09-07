import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[cxTabelaExtrato]"
})
export class TabelaExtratoDirective {

  public elementRef;

  constructor(el: ElementRef) {
    this.elementRef = el;
  }

}
