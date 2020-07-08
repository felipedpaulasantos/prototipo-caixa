import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentesInterface } from '../componentes-interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  host: { '(window:scroll)': 'onScroll($event)' }
})
export class CardsComponent extends ComponentesInterface {

  constructor(
    public toastr: ToastrService
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;
  spiedTags = ['APP-DOCUMENTACAO-TEMPLATE'];
  sectionOffset = 0;
  currentSection = "painelCards";

  htmlCodeCards = `      <div class="card card-caixa">
  <div class="card-header">
    <h4 class="header-caixa">Card branco</h4>
  </div>
  <div class="card-body">
    <h5 class="font-fam-bold">Este é um título</h5>
    <span>class="font-fam-bold">Este é um subtítulo</span>
    <span>Este é um texto</span>
  </div>
  <div class="card-footer">
    <h5>Isso é um rodapé</h5>
  </div>
</div>`.trim();

  htmlCodeCardsTematicos = `      <div class="row">
  <div class="col">
    <div class="card card-caixa bg-dark text-light">
      <div class="card-header">
        <h4 class="header-caixa">Card escuro</h4>
      </div>
      <div class="card-body">
        <h5 class="font-fam-bold">Este é um título</h5>
        <span>class="font-fam-bold">Este é um subtítulo</span>
        <span>Este é um texto</span>
      </div>
      <div class="card-footer">
        <h5>Isso é um rodapé</h5>
      </div>
    </div>
  </div>  <!-- Coluna -->

  <div class="col">
    <div class="card card-caixa bg-primary text-light">
      <div class="card-header">
        <h4 class="header-caixa">Card escuro</h4>
      </div>
      <div class="card-body">
        <h5 class="font-fam-bold">Este é um título</h5>
        <span>class="font-fam-bold">Este é um subtítulo</span>
        <span>Este é um texto</span>
      </div>
      <div class="card-footer">
        <h5>Isso é um rodapé</h5>
      </div>
    </div>
  </div>  <!-- Coluna -->
</div>  <!-- Linha -->`.trim();

  htmlCodeCardsEfeito = `        <div class="card card-caixa card-hover">
  <div class="card-body">
    <span>Este card possui efeito de sombra.</span>
  </div>
</div>`.trim();


}
