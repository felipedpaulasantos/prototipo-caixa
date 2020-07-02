import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentesInterface } from '../componentes-interface';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  host: { '(window:scroll)': 'onScroll($event)' }
})
export class SelectComponent extends ComponentesInterface implements OnInit {

  constructor(
    public toastr: ToastrService,
    private fb: FormBuilder
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;
  sectionOffset = 0;
  spiedTags = ['APP-DOCUMENTACAO-TEMPLATE'];
  currentSection = "painelSelect";

  formulario = this.fb.group({
    comida: [null, [Validators.required]],
    filme: [null, [Validators.required, Validators.minLength(11)]]
  });

  htmlCodeSelectBasico = `						<form>
  <cx-select>
    <label>Número favorito</label>
    <select selectCaixa>
      <option value="0"></option>
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
    </select>
  </cx-select>
</form>`.trim();

  htmlCodeSelectValidacao = `						<form [formGroup]="formulario">
  <cx-select>
    <label>Comida favorita</label>
    <select selectCaixa formControlName="comida">
      <option value="" selected>Selecione uma opção</option>
      <option value="Lasanha">Lasanha</option>
      <option value="Feijoada">Feijoada</option>
      <option value="Churrasco">Churrasco</option>
    </select>
  </cx-select>
</form>`.trim();

  tsCodeSelectValidacao = `  import { Component } from '@angular/core';
  import { FormBuilder, Validators } from '@angular/forms';

  @Component({
      selector: 'app-select',
      templateUrl: './select.component.html',
      styleUrls: ['./select.component.scss']
  })
  export class SelectComponent {

    constructor(
      private fb: FormBuilder
    ) {}

    formulario = this.fb.group({
      comida: [null, [Validators.required]]
    });
  }
  `.trimRight();

  ngOnInit(): void {
  }

}
