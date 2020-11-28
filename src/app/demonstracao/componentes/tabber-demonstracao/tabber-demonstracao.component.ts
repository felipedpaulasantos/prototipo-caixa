import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ComponentesInterface } from '../componentes-interface';

@Component({
  templateUrl: './tabber-demonstracao.component.html',
  styleUrls: ['./tabber-demonstracao.component.scss'],
  host: { '(window:scroll)': 'onScroll($event)' }
})
export class TabberDemonstracaoComponent  extends ComponentesInterface {

  constructor(
    public toastr: ToastrService,
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;

  sectionOffset = 0;
  spiedTags = ['APP-DOCUMENTACAO-TEMPLATE'];
  currentSection = "painelTabberPadrao";

  showTabsInputBasico = false;
  htmlCodeInputBasico = `<form>
  <cx-input>
    <label>Nome</label>
    <input inputCaixa placeholder="Digite seu nome aqui" value="Fulano da Silva">
  </cx-input>
</form>
  `.trim();

}
