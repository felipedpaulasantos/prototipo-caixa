import { Component, OnInit, HostListener, EventEmitter, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
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

  @ViewChild("sectionScroll") sectionScroll;

  document = document;

  CELLPHONE = '(00) 00000-0000';
  LANDLINE = '(00) 0000-0000';

  phoneMask = this.LANDLINE;
  phoneNumberLength = 0;
  phoneNumber = '';
  previusLength = 0;

  sectionOffset = 0;
  spiedTags = ['SECTION'];
  currentSection = "painelInputBasico";

  mesError = [
    { "simpleMonthDate": "Data do tipo mês/ano inválida" }
  ];

  formulario = this.fb.group({
    nome: ['Fulano da Silva'],
    tel: [11985163524, [Validators.required, Validators.minLength(10)]],
    idade: [null, [Validators.required, Validators.min(18), Validators.max(100)]],
    nascimento: ['01/01/1985', [Validators.required, DateValidator.simpleDate]],
    mesAno: ['04/2020', [Validators.required, DateValidator.simpleMonthDate]],
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

  ngModelTeste = 'Teste';

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
  <input inputCaixa placeholder="Inválido se vazio" [(ngModel)]="ngModelTeste" #ctrl="ngModel" required
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

    formulario = this.fb.group({
      texto: [null, [Validators.minLength(5)]],
      idade: [null, [Validators.required, Validators.min(18), Validators.max(100)]]
    });

    ngModelTeste = 'Teste';
  }
  `.trimRight();

  showTabsCustomValidacao = false;
  htmlCodeCustomValidacao = `<form [formGroup]="formulario">
  <cx-input [customErrors]='{"simpleDate": "Data inválida"}'>
    <label>Data de Nascimento</label>
    <input inputCaixa formControlName="nascimento" placeholder="dd/mm/aaaa">
  </cx-input>

  <cx-input [customErrors]="mesError">
    <label>Mês / Ano</label>
    <input inputCaixa formControlName="mesAno" placeholder="mm/aaaa">
  </cx-input>
</form>
  `.trim();
  tsCodeCustomValidacao = `  import { Component } from '@angular/core';
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

    /* dd/mm/aaaa */
    simpleDateValidator = (control: FormControl) => {
      const simpleDateRegexp = /([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
      return simpleDateRegexp.test(control.value) || control.value == ""
        ? null
        : { simpleDate: true };
    }

    /* mm/aaaa */
    simpleMonthDateValidator = (control: FormControl) => {
      const simpleDateRegexp = /^(0[1-9]|10|11|12)\/20[0-9]{2}$/i;
      return simpleDateRegexp.test(control.value) || control.value == ""
        ? null
        : { simpleMonthDate: true };
    }

    mesError = [
      { "simpleMonthDate": "Data do tipo mês/ano inválida" }
    ];

    formulario = this.fb.group({
      nascimento: ['01/01/1985', [Validators.required, simpleDateValidator]],
      mesAno: ['04/2020', [Validators.required, simpleMonthDateValidator]],
    });
  }
  `.trimRight();

  showTabsInputIcone = false;
  htmlCodeInputIcone = `<form [formGroup]="formularioLogin">
  <cx-input>
    <label>E-mail</label>
    <img src="/assets/images/caixa-logo-x.png" class="img-logo prefix-icon">
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

    formularioLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(10)]]
    });
  }
  `.trimRight();
  cssCodeInputIcone = `.img-logo {
  max-width: 20px;
  max-height: 20px;
}
  `.trimRight();

  ngOnInit() {}

  onPhoneChanged(phoneNumber): void {
    this.phoneNumber = phoneNumber.target.value;
    this.phoneNumberLength = phoneNumber.target.value.length;

    if (this.phoneNumberLength <= 14 && this.phoneMask === this.CELLPHONE) {
      this.phoneMask = this.LANDLINE;
    } else if (this.phoneNumberLength === 14 && this.phoneMask === this.LANDLINE && this.previusLength === 14) {
      this.phoneMask = this.CELLPHONE;
    }

    this.previusLength = this.phoneNumberLength;
  }

  copiarConteudo(val: string): void {
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

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
     document.querySelector('#' + section)
      .scrollIntoView({ behavior: "smooth" });
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.setSectionOffset();
    let currentSection: string;
		const children = this.sectionScroll.nativeElement.children;
		const scrollTop = event.target.scrollingElement.scrollTop;
    const parentOffset = event.target.scrollingElement.offsetTop;
		for (let i = 0; i < children.length; i++) {
			const element = children[i];
			if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
				if ((element.offsetTop - parentOffset - this.sectionOffset) <= scrollTop) {
					currentSection = element.id;
				}
			}
		}
		if (currentSection !== this.currentSection) {
			this.currentSection = currentSection;
		}
  }

  setSectionOffset() {
    if (this.sectionOffset) { return; }
    if (this.sectionScroll.nativeElement.getBoundingClientRect()) {
      const rect = this.sectionScroll.nativeElement.getBoundingClientRect();
      const sx = -(window.scrollX ? window.scrollX : window.pageXOffset);
      const sy = -(window.scrollY ? window.scrollY : window.pageYOffset);
      this.sectionOffset = rect.top - sy;
    }
  }

}
