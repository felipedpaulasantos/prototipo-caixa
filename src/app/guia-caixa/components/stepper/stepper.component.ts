import {
  Component, Input, Output, EventEmitter, OnInit, OnChanges,
  ChangeDetectionStrategy, ContentChildren, TemplateRef, SimpleChanges, ChangeDetectorRef, AfterContentInit
} from "@angular/core";
import { TabberDirective } from '../tabber/tabber-directive';
import { StepperDirective } from './stepper-directive';
import { StepperOrientation } from './stepper-orientation';

@Component({
  selector: "cx-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent implements OnInit, OnChanges, AfterContentInit {

  /**
   * Quantidade mínima e máxima de passos permitidos
  */
  readonly MINIMUM_STEPS = 2;
  readonly MAXIMUM_STEPS = 7;

  /**
   * Mapeia as templates dinâmicas com a diretiva *stepper, caso seja usada a variante de comportamento contentInside;
  */
  @ContentChildren(StepperDirective, { read: TemplateRef })
  templates: TemplateRef<any>[];

  /**
   * Orientação das abas, podendo ser horizontal ou vertical.
   * @param {StepperOrientation} orientation Enum com valores Horizontal (0) e Vertical (1).
  */
  @Input()
  orientation = StepperOrientation.Horizontal;

  /**
   * Na variante padrão de navegação livre, é possível retornar
   * para qualquer passo anterior.
   * Na navegação guiada, é possível retornar apenas para o passo
   * imediatamente anterior.
   * @param {boolean} freeNavigation Verdadeiro para navegação livre (padrão),
   * falso para navegação guiada.
  */
  @Input()
  freeNavigation = true;

  /**
   * Lista dos passos com sua descrição.
   * @param {string[]} steps Array de string com a descrição dos passos.
  */
  @Input()
  steps: string[] = [];

  /**
   * Index do passo atual, que pode ser alterado diretamente, pelos métodos de navegação ou clicando nos passos.
  * @param {string | number} currentStep Index do passo atual.
   */
  @Input()
  currentStep = 0;

  /**
   * Evento que transmite o index do novo passo atual após ser selecionado.
   * @param {string | number} changeStep Index do novo passo selecionado.
  */
  @Output()
  changeStep: EventEmitter<number> = new EventEmitter();

  /**
   * Injeta o serviço ChangeDetectorRef para sinalizar as mudanças ocorridas
   */
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void { }

  /**
    Adotando a estratégia OnPush para melhor performance,
    valida-se o valor informado para a propriedade tabs
    e apenas atualiza a view caso o valor seja válido
  */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['steps']) {
      const newSteps: any[] = changes['steps'].currentValue;
      if (newSteps.length >= this.MINIMUM_STEPS && newSteps.length > this.MAXIMUM_STEPS) {
        this.steps = newSteps.slice(0, this.MAXIMUM_STEPS);
        this.changeDetector.detectChanges();
      }
    }
  }

  /**
   * Inicializa os templates
  */
  ngAfterContentInit(): void {
    this.changeDetector.detectChanges();
    console.log("STEPPER", this.templates);
  }

  /**
   * Salta para o passo de index indicado, apenas se for um passo anterior
   * Caso esteja utilizando a navegação guiada, só será aceito o passo imediatamente anterior
   * @param {string | number} index Index da nova aba a ser selecionada.
  */
  toStepByIndex(index: number): void {
    const lastIndex = this.steps.length - 1;
    const isNotLastIndex = !(this.currentStep == lastIndex);
    const isPrevious = index < this.currentStep;
    const isImmediatePrevious = index == this.currentStep - 1;

    if ((this.freeNavigation && isNotLastIndex && isPrevious)
      || (!this.freeNavigation && isNotLastIndex && isImmediatePrevious)
    ) {
      this.currentStep = index;
      this.changeStep.emit(index);
      this.changeDetector.detectChanges();
    }
  }

  /**
   * Salta para o próximo passo
  */
  next(): void {
    if ((this.currentStep + 1) < this.steps.length) {
      this.currentStep += 1;
      this.changeStep.emit(this.currentStep);
      this.changeDetector.detectChanges();
    }
  }

  /**
   * Salta para o passo anterior
  */
  previous(): void {
    if ((this.currentStep - 1) >= 0) {
      this.currentStep -= 1;
      this.changeStep.emit(this.currentStep);
      this.changeDetector.detectChanges();
    }
  }

  /**
    * Salta para a primeira aba, apenas na navegação livre.
  */
  first(): void {
    if (this.freeNavigation) {
      this.currentStep = 0;
      this.changeStep.emit(this.currentStep);
      this.changeDetector.detectChanges();
    }
  }

  /**
   * Verifica qual ícone deve ser exibido para cada item
   * @param index Índice do item a ser analisado
  */
  getStepIcon(index: number): string {
    if (this.freeNavigation) { return null; }

    if (!this.freeNavigation) {
      if (index == (this.currentStep - 1) && this.currentStep != (this.steps.length - 1)) {
        return this.orientation == 0 ? 'fa fa-arrow-left' : 'fa fa-arrow-up';
      } else {
        return null;
      }
    }
  }

}
