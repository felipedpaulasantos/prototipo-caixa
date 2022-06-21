import { InterceptorService } from './../../interceptor/interceptor.service';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-expediente',
  templateUrl: './consultar-expediente.component.html',
  styleUrls: ['./consultar-expediente.component.scss']
})
export class ConsultarExpedienteComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private interceptorService: InterceptorService
  ) { }

  formConsultarExpediente: FormGroup = this.formBuilder.group({
    expediente: [null, [Validators.required, Validators.minLength(17)]]
  });

  ngOnInit(): void { }

  consultarExpediente(): void {
    this.interceptorService.setLoadingReqPendente(true);
    setTimeout(() => {
      alert("Expediente consultado com sucesso");
      this.interceptorService.setLoadingReqPendente(false);
    }, 1000);
  }

}
