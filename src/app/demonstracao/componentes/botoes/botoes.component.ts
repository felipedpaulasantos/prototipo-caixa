import { Component, OnInit, ViewChild } from '@angular/core';
import { BootstrapTheme } from 'src/app/shared/constants/constants';
import { ComponentesInterface } from '../componentes-interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css'],
  host: { '(window:scroll)': 'onScroll($event)' }
})
export class BotoesComponent extends ComponentesInterface implements OnInit {

  temas = BootstrapTheme.getTemas();

  constructor(
    public toastr: ToastrService
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;
  spiedTags = ['APP-DOCUMENTACAO-TEMPLATE'];
  sectionOffset = 0;
  currentSection = "painelBotoes";

  htmlCodeBotoes = `<button class="btn btn-caixa">Botão</button>`.trim();

  htmlCodeBotoesTematicos = `        <button class="btn btn-caixa btn-primary">Primário</button> &nbsp;
<button class="btn btn-caixa btn-danger-dark">Erro com tom escuro</button> &nbsp;
<button class="btn btn-caixa btn-apoio-light">Apoio com tom claro</button> &nbsp;
<button class="btn btn-caixa btn-outline-info">Info - outline</button>`.trim();

  htmlCodeBotoesTamanho = `        <button class="btn btn-caixa btn-outline-dark btn-sm">Pequeno</button> &nbsp;
<button class="btn btn-caixa btn-secondary btn-lg">Grande</button> &nbsp;
<button class="btn btn-caixa btn-secondary btn-lg disabled">Grande desabilitado</button> &nbsp;
<button class="btn btn-caixa btn-outline-primary">
  <i class="fa fa-edit mr-2"></i>
  Com ícone
</button>`.trim();

  ngOnInit() {
  }

}
