import { AreaJudicial, AreaJudicialArray } from './../../model/area-judicial.model';
import { GrupoAssuntoArray, GrupoAssunto } from './../../model/grupo-assunto.model';
import { StepperItem } from './../../shared/caixa-components/stepper/stepper-component/stepper-item';
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
export class InserirFaseComponent {

  constructor(
    private formBuilder: FormBuilder,
    private faseService: FaseService
  ) { }

  readonly PASSO_1_AREA_JUDICIAL = "Área Judicial";
  readonly PASSO_2_ORIGEM = "Origem";
  readonly PASSO_3_FASE = "Fase";
  readonly PASSO_4_ADVOGADO = "Advogado";
  readonly PASSO_5_TIPO_DO_PROCESSO = "Tipo do Processo";

  hasRequiredField = hasRequiredField;
  formPassoAreaJudicial: FormGroup = this.formBuilder.group({
    numeroAreaJudicial: this.formBuilder.control(null),
    areaJudicial: this.formBuilder.control(null, [Validators.required]),
    coGrupoAssunto: this.formBuilder.control(null, [Validators.required])
  });
  formPassoOrigem: FormGroup = this.formBuilder.group({
    ativo: this.formBuilder.control(null, [Validators.required]),
    coOrigem: this.formBuilder.control(1, [Validators.required]),
    coRecurso: this.formBuilder.control(null),
    documento: this.formBuilder.control(null)
  });
  formPassoFase: FormGroup = this.formBuilder.group({
    nomeFase: this.formBuilder.control(null, [Validators.required]),
    nuFase: this.formBuilder.control(null),
    faseAnterior: this.formBuilder.control(null)
  });
  formPassoAdvogado: FormGroup = this.formBuilder.group({
    icAcordo: this.formBuilder.control(null, [Validators.required]),
    icBem: this.formBuilder.control(null, [Validators.required]),
    icNovoAdvogado: this.formBuilder.control(null, [Validators.required]),
    icNovoCredenciado: this.formBuilder.control(null, [Validators.required]),
    instancia: this.formBuilder.control(null),
    tribunal: this.formBuilder.control(null),
  });
  formPassoTipoProcesso: FormGroup = this.formBuilder.group({
    suspensao: this.formBuilder.control(null),
    tipoProcesso: this.formBuilder.control(1, [Validators.required]),
    tiposAcao: this.formBuilder.control(null),
    matricula: this.formBuilder.control("c897998", [Validators.required])
  });

  formInserirFase: FormGroup = this.formBuilder.group({
    formPassoAreaJudicial: this.formPassoAreaJudicial,
    formPassoOrigem: this.formPassoOrigem,
    formPassoFase: this.formPassoFase,
    formPassoAdvogado: this.formPassoAdvogado,
    formPassoTipoProcesso: this.formPassoTipoProcesso
  });

  passoAtual = 0;

  passos: StepperItem[] = [
    { title: this.PASSO_1_AREA_JUDICIAL },
    { title: this.PASSO_2_ORIGEM },
    { title: this.PASSO_3_FASE },
    { title: this.PASSO_4_ADVOGADO },
    { title: this.PASSO_5_TIPO_DO_PROCESSO }
  ];
  grupoAssuntoSelecionado: GrupoAssunto;
  gruposAssunto = GrupoAssuntoArray;
  areaJudicialSelecionada: AreaJudicial;
  areasJudiciais = AreaJudicialArray;

  public trocarPasso(passo: number): void {
    this.passoAtual = passo;
  }

  public getIndexPasso(nomePasso: string): number {
    return this.passos.findIndex(passo => passo.title === nomePasso);
  }

  public inserirFase(): void {
    const request: FaseApiInserirRequest = this.formInserirFase.value;
    this.faseService.inserirFase(request).subscribe((response: FaseApiInserirResponse200) => {
      console.log("DEBUG: ", request, response);
    });
  }

  public onChangeGrupoArea(valor: GrupoAssunto | AreaJudicial, campo: string): void {
    if (campo === "grupoAssunto") {
      this.formPassoAreaJudicial.controls.coGrupoAssunto.setValue(valor?.codigo || null);
    }
    if (campo === "areaJudicial") {
      this.formPassoAreaJudicial.controls.numeroAreaJudicial.setValue(valor?.codigo || null);
      this.formPassoAreaJudicial.controls.areaJudicial.setValue(valor?.nome || null);
    }
  }

  public searchAreaGrupoFn(termo: string, grupoOuArea: GrupoAssunto | AreaJudicial): boolean {
    const nomeGrupo = `${String(grupoOuArea.codigo)} ${grupoOuArea.nome.toLowerCase()}`;
    return nomeGrupo.includes(termo.toLowerCase());
  }

  public isFormAtualValid(): boolean {
    let isFormAtualValid = false;
    switch (this.passoAtual) {
      case this.getIndexPasso(this.PASSO_1_AREA_JUDICIAL):
        isFormAtualValid = this.formPassoAreaJudicial.valid;
        break;
      case this.getIndexPasso(this.PASSO_2_ORIGEM):
        isFormAtualValid = this.formPassoOrigem.valid;
        break;
      case this.getIndexPasso(this.PASSO_3_FASE):
        isFormAtualValid = this.formPassoFase.valid;
        break;
      case this.getIndexPasso(this.PASSO_4_ADVOGADO):
        isFormAtualValid = this.formPassoAdvogado.valid;
        break;
      case this.getIndexPasso(this.PASSO_5_TIPO_DO_PROCESSO):
        isFormAtualValid = this.formPassoTipoProcesso.valid;
        break;    
      default:
        false;
        break;
    }
    return isFormAtualValid;
  }


}