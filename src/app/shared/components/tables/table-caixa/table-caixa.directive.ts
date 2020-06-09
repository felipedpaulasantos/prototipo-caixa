import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[tableCaixa]'
})
export class TableCaixaDirective {

  element: ElementRef;

  constructor(el: ElementRef) {
    this.element = el;
  }

}
