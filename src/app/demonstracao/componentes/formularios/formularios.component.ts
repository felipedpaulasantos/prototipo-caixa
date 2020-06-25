import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DateValidator } from 'src/app/shared/validators/date.validator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService
  ) { }

  document = document;

  CELLPHONE = '(00) 00000-0000';
  LANDLINE = '(00) 0000-0000';

  phoneMask = this.LANDLINE;
  phoneNumberLength = 0;
  phoneNumber = '';
  previusLength = 0;

  formulario = this.fb.group({
    nome: ['Fulano da Silva'],
    tel: [11985163524, [Validators.required, Validators.minLength(10)]],
    idade: [null, [Validators.required, Validators.min(18), Validators.max(100)]],
    nascimento: ['01/01/1985', [Validators.required, DateValidator.simpleDate]],
    texto: [null, [Validators.minLength(5)]]
  });

  formularioLogin = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    senha: [null, [Validators.required, Validators.minLength(10)]]
  });

  formulario2 = this.fb.group({
    mensagem: ['Campo para mensagens grandes, com várias linhas.\nComo este exemplo.', [Validators.required]],
    comida: [null, [Validators.required]],
    filme: [null, [Validators.required]],
    marque: [false, [Validators.requiredTrue]],
    valor: [50, [Validators.min(50)]],
    condicoes: [null, [Validators.requiredTrue]]
  });

  ngModelTeste = '';

  showTabsInputBasico = false;
  htmlCodeInputBasico = `<form>
  <cx-input>
    <label>Nome</label>
    <input inputCaixa placeholder="Digite seu nome aqui" value="Fulano da Silva">
  </cx-input>

  <cx-input>
    <label>Mensagem</label>
    <textarea inputCaixa placeholder="Faça um comentário..."></textarea>
  </cx-input>
</form>
  `.trim();

  showTabsInputClasse = false;
  htmlCodeInputClasse = `<form>
  <label>Input Caixa (Padrão)</label>
  <input class="input-caixa">

  <br><br>

  <label>Input Base</label>
  <input class="input-base" placeholder="Input-base">

  <br><br>

  <label>Input Ripple Info</label>
  <input class="input-base input-ripple-info">

  <br><br>

  <label>Input Ripple Aux Dark</label>
  <input class="input-base input-ripple-aux-dark">
</form>
  `.trim();

  showTabsValidacao = false;
  htmlCodeValidacao = `<form [formGroup]="formulario">
  <cx-input>
    <label>Texto</label>
    <input inputCaixa formControlName="texto" placeholder="Vazio ou pelo menos 5 caracteres" >
  </cx-input>

  <cx-input>
    <label>Idade</label>
    <input inputCaixa formControlName="idade" placeholder="Obrigatório - Entre 18 e 100" mask="009">
  </cx-input>
</form>

<cx-input>
  <label>NG Model</label>
  <input inputCaixa placeholder="Inválido se vazio" [(ngModel)]="name" #ctrl="ngModel" required
  [ngClass]="{'ng-invalid': name == ''}">
</cx-input>
  `.trim();
  tsCodeValidacao = `  import { Component } from '@angular/core';
  import { FormBuilder, Validators } from '@angular/forms';

  @Component({
      selector: 'app-formularios',
      templateUrl: './formularios.component.html',
      styleUrls: ['./formularios.component.scss']
  })
  export class FormulariosComponent {

    constructor(
      private fb: FormBuilder
    ) {}

    formularioLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(10)]]
    });
  }`.trimRight();

  showTabsInputIcone = false;
  htmlCodeInputIcone = `<form [formGroup]="formularioLogin">
  <cx-input>
    <label>E-mail</label>
    <i class="fa fa-envelope prefix-icon"></i>
    <input inputCaixa formControlName="email" placeholder="Endereço de e-mail válido">
  </cx-input>

  <cx-input>
    <label>Senha</label>
    <i class="fa fa-key prefix-icon"></i>
    <input inputCaixa formControlName="senha" placeholder="Mínimo de 10 caracteres" type="password">
  </cx-input>
</form>
  `.trim();
  tsCodeInputIcone = `  import { Component } from '@angular/core';
  import { FormBuilder, Validators } from '@angular/forms';

  @Component({
      selector: 'app-formularios',
      templateUrl: './formularios.component.html',
      styleUrls: ['./formularios.component.scss']
  })
  export class FormulariosComponent {

    constructor(
      private fb: FormBuilder
    ) {}

    formulario = this.fb.group({
      texto: [null, [Validators.minLength(5)]],
      idade: [null, [Validators.required, Validators.min(18), Validators.max(100)]]
    });

    ngModelTeste = '';
  }

  `.trimRight();

  onPhoneChanged(phoneNumber) {
    this.phoneNumber = phoneNumber.target.value;
    this.phoneNumberLength = phoneNumber.target.value.length;

    if (this.phoneNumberLength <= 14 && this.phoneMask === this.CELLPHONE) {
      this.phoneMask = this.LANDLINE;
    } else if (this.phoneNumberLength === 14 && this.phoneMask === this.LANDLINE && this.previusLength === 14) {
      this.phoneMask = this.CELLPHONE;
    }

    this.previusLength = this.phoneNumberLength;
  }

  ngOnInit() {
  }

  copiarConteudo(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastr.info('Conteúdo copiado!');
  }

}
