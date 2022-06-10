import { FaseService } from './../fase.service';
import { FaseApiInserirRequest, FaseApiInserirResponse200 } from './../../model/fase.model';
import { hasRequiredField } from './../../shared/utils/utils';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-inserir-fase',
  templateUrl: './inserir-fase.component.html',
  styleUrls: ['./inserir-fase.component.scss']
})
export class InserirFaseComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private faseService: FaseService
  ) { }

  formInserirFase: FormGroup;
  hasRequiredField = hasRequiredField;

  ngOnInit() {
    this.formInserirFase = this.formBuilder.group({
      areaJudicial: this.formBuilder.control("Feitos Diversos", [Validators.required]),
      ativo: this.formBuilder.control("Sim", [Validators.required]),
      coGrupoAssunto: this.formBuilder.control(null),
      coOrigem: this.formBuilder.control(1, [Validators.required]),
      coRecurso: this.formBuilder.control(null),
      documento: this.formBuilder.control(null),
      faseAnterior: this.formBuilder.control(null),
      icAcordo: this.formBuilder.control(2, [Validators.required]),
      icBem: this.formBuilder.control(0, [Validators.required]),
      icNovoAdvogado: this.formBuilder.control("Fulano", [Validators.required]),
      icNovoCredenciado: this.formBuilder.control("Ciclano", [Validators.required]),
      instancia: this.formBuilder.control(null),
      matricula: this.formBuilder.control(123456, [Validators.required]),
      nomeFase: this.formBuilder.control("Cadastro", [Validators.required]),
      nuFase: this.formBuilder.control(null),
      numeroAreaJudicial: this.formBuilder.control(null),
      suspensao: this.formBuilder.control(null),
      tipoProcesso: this.formBuilder.control(1, [Validators.required]),
      tiposAcao: this.formBuilder.control(null),
      tribunal: this.formBuilder.control(null)
    });
  }

  inserirFase(): void {
    const request: FaseApiInserirRequest = this.formInserirFase.value;
    this.faseService.inserirFase(request).subscribe((response: FaseApiInserirResponse200) => {
      console.log("DEBUG: ", request, response);
    });
  }

}