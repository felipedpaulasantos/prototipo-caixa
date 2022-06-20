import { OnInit } from '@angular/core';
import { InterceptorService } from './../../interceptor/interceptor.service';
import { AreaJudicial, AreaJudicialArray } from './../../model/area-judicial.model';
import { GrupoAssuntoArray, GrupoAssunto } from './../../model/grupo-assunto.model';
import { StepperItem } from './../../shared/caixa-components/stepper/stepper-component/stepper-item';
import { FaseService } from './../fase.service';
import { FaseApiInserirRequest, FaseApiInserirResponse200, Fase, FasesArray } from './../../model/fase.model';
import { hasRequiredField } from './../../shared/utils/utils';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-inserir-fase',
  templateUrl: './inserir-fase.component.html',
  styleUrls: ['./inserir-fase.component.scss']
})
export class InserirFaseComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private faseService: FaseService,
    private interceptorService: InterceptorService
  ) { }

  readonly PASSO_1_AREA_JUDICIAL = "Área Judicial";
  readonly PASSO_2_ORIGEM = "Origem";
  readonly PASSO_3_FASE = "Fase";
  readonly PASSO_4_ADVOGADO = "Advogado";
  readonly PASSO_5_TIPO_DO_PROCESSO = "Tipo do Processo";
  readonly PASSO_6_Finalizar = "Comprovante";

  hasRequiredField: (abstractControl: AbstractControl) => boolean = hasRequiredField;

  formPassoAreaJudicial: FormGroup = this.formBuilder.group([]);
  formPassoOrigem: FormGroup = this.formBuilder.group([]);
  formPassoFase: FormGroup = this.formBuilder.group([]);
  formPassoAdvogado: FormGroup = this.formBuilder.group([]);
  formPassoTipoProcesso: FormGroup = this.formBuilder.group([]);
  formInserirFase: FormGroup = this.formBuilder.group([]);

  passoAtual = 0;
  passos: StepperItem[] = [
    { title: this.PASSO_1_AREA_JUDICIAL },
    { title: this.PASSO_2_ORIGEM },
    { title: this.PASSO_3_FASE },
    { title: this.PASSO_4_ADVOGADO },
    { title: this.PASSO_5_TIPO_DO_PROCESSO },
    { title: this.PASSO_6_Finalizar }
  ];

  grupoAssuntoSelecionado: GrupoAssunto;
  gruposAssunto = GrupoAssuntoArray;
  areaJudicialSelecionada: AreaJudicial;
  areasJudiciais = AreaJudicialArray;
  faseSelecionada: Fase;
  fases = FasesArray;

  ngOnInit(): void {
    this.initForms();
  }

  initForms(): void {
    this.formPassoAreaJudicial = this.formBuilder.group({
      numeroAreaJudicial: this.formBuilder.control(null),
      areaJudicial: this.formBuilder.control(null, [Validators.required]),
      coGrupoAssunto: this.formBuilder.control(null, [Validators.required])
    });
    this.formPassoOrigem = this.formBuilder.group({
      ativo: this.formBuilder.control(true, [Validators.required]),
      coOrigem: this.formBuilder.control(null, [Validators.required]),
      coRecurso: this.formBuilder.control(null),
      documento: this.formBuilder.control(null)
    });
    this.formPassoFase = this.formBuilder.group({
      nomeFase: this.formBuilder.control(null, [Validators.required]),
      nuFase: this.formBuilder.control(null),
      faseAnterior: this.formBuilder.control(null)
    });
    this.formPassoAdvogado = this.formBuilder.group({
      icAcordo: this.formBuilder.control(null, [Validators.required]),
      icBem: this.formBuilder.control(null, [Validators.required]),
      icNovoAdvogado: this.formBuilder.control(null, [Validators.required]),
      icNovoCredenciado: this.formBuilder.control(null, [Validators.required]),
      instancia: this.formBuilder.control(null),
      tribunal: this.formBuilder.control(null),
    });
    this.formPassoTipoProcesso = this.formBuilder.group({
      suspensao: this.formBuilder.control(null),
      tipoProcesso: this.formBuilder.control(1, [Validators.required]),
      tiposAcao: this.formBuilder.control(null),
      matricula: this.formBuilder.control(["c897998"], [Validators.required])
    });
    this.formInserirFase = this.formBuilder.group({
      formPassoAreaJudicial: this.formPassoAreaJudicial,
      formPassoOrigem: this.formPassoOrigem,
      formPassoFase: this.formPassoFase,
      formPassoAdvogado: this.formPassoAdvogado,
      formPassoTipoProcesso: this.formPassoTipoProcesso
    });
  }

  public trocarPasso(passo: number): void {
    this.passoAtual = passo;
  }

  public getIndexPasso(nomePasso: string): number {
    return this.passos.findIndex(passo => passo.title === nomePasso);
  }

  public inserirFase(): void {
    const request: FaseApiInserirRequest = this.formInserirFase.value;
    this.interceptorService.setLoadingReqPendente(true);
    setTimeout(() => {
      this.faseService.inserirFase(request).subscribe((response: FaseApiInserirResponse200) => {
        console.log("DEBUG: ", request, response);
        this.interceptorService.setLoadingReqPendente(false);
        this.passoAtual = this.getIndexPasso(this.PASSO_6_Finalizar);
      });
    }, 2000);

  }

  public onChangeItemCodigoNome(valor: GrupoAssunto | AreaJudicial | Fase, campo: string): void {
    if (campo === "grupoAssunto") {
      this.formPassoAreaJudicial.controls.coGrupoAssunto.setValue(valor?.codigo || null);
    }
    if (campo === "areaJudicial") {
      this.formPassoAreaJudicial.controls.numeroAreaJudicial.setValue(valor?.codigo || null);
      this.formPassoAreaJudicial.controls.areaJudicial.setValue(valor?.nome || null);
    }
    if (campo === "fase") {
      this.formPassoFase.controls.nuFase.setValue(valor?.codigo || null);
      this.formPassoFase.controls.nomeFase.setValue(valor?.nome || null);
    }
  }

  public searchItemCodigoNome(termo: string, item: GrupoAssunto | AreaJudicial | Fase): boolean {
    const nomeItem = `${String(item.codigo)} ${item.nome.toLowerCase()}`;
    return nomeItem.includes(termo.toLowerCase());
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

  public recomecar(): void {
    this.initForms();
    this.faseSelecionada = null;
    this.grupoAssuntoSelecionado = null;
    this.areaJudicialSelecionada = null;
    this.passoAtual = 0;
  }

};