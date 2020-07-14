import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cx-guia-caixa',
  template: `
    <p>
      guia-caixa works!
    </p>
  `,
  styleUrls: ["./guia-caixa.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class GuiaCaixaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
