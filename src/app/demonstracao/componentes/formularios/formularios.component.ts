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

  CELLPHONE = '(00) 00000-0000';
  LANDLINE = '(00) 0000-0000';

  phoneMask = this.LANDLINE;
  phoneNumberLength = 0;
  phoneNumber = '';
  previusLength = 0;

  formulario = this.fb.group({
    nome: ['Fulano da Silva'],
    tel: [11985163524, [Validators.required, Validators.minLength(10)]],
    idade: [35, [Validators.required, Validators.min(18), Validators.max(100)]],
    nascimento: ['01/01/1985', [Validators.required, DateValidator.simpleDate]]
  });

  formulario2 = this.fb.group({
    mensagem: ['Campo para mensagens grandes, com várias linhas.\nComo este exemplo.', [Validators.required]],
    comida: [null, [Validators.required]],
    filme: [null, [Validators.required]],
    marque: [false, [Validators.requiredTrue]],
    naoMarque: [true],
    valor: [50, [Validators.min(50)]],
    condicoes: [null, [Validators.requiredTrue]]
  });

  name = '';

  onPhoneChanged(phoneNumber) {
    console.log(phoneNumber.target.value.length);
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

}
