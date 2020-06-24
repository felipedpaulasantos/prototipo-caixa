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

  formulario2 = this.fb.group({
    mensagem: ['Campo para mensagens grandes, com várias linhas.\nComo este exemplo.', [Validators.required]],
    comida: [null, [Validators.required]],
    filme: [null, [Validators.required]],
    marque: [false, [Validators.requiredTrue]],
    valor: [50, [Validators.min(50)]],
    condicoes: [null, [Validators.requiredTrue]]
  });

  name = '';

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
  <label>Nome</label>
  <input class="input-caixa" placeholder="Estilo apenas por classe..." value="Fulano da Silva">
</form>
  `.trim();

  showTabsValidacao = false;
  htmlCodeValidacao = `<form [formGroup]="formulario">
  <cx-input>
    <label>Texto</label>
    <input inputCaixa placeholder="Vazio ou pelo menos 5 caracteres" formControlName="texto">
  </cx-input>

  <cx-input>
    <label>Idade</label>
    <input inputCaixa formControlName="idade" placeholder="Obrigatório - Entre 18 e 100" mask="009">
  </cx-input>
</form>
  `.trim();
  tsCodeValidacao = `import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-formularios',
    templateUrl: './formularios.component.html',
    styleUrls: ['./formularios.component.scss']
})
export class FormulariosComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) {}

  formulario = this.fb.group({
    texto: [null, [Validators.minLength(5)]],
    idade: [null, [Validators.required, Validators.min(18), Validators.max(100)]]
  });
}
  `.trim();

  showTabsInputIcone = false;
  htmlCodeInputIcone = `<form>
  <cx-input>
    <label>Usuário</label>
    <i class="fa fa-user prefix-icon"></i>
    <input inputCaixa placeholder="Username">
  </cx-input>

  <cx-input>
    <label>Senha</label>
    <i class="fa fa-key prefix-icon"></i>
    <input type="password">
  </cx-input>
</form>
  `.trim();

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
