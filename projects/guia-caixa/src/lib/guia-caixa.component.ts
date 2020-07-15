import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cx-guia-caixa',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ["./guia-caixa.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class GuiaCaixaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
