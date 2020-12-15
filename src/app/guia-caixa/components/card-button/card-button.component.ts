import {
  Component, Input, OnInit, OnChanges, ChangeDetectionStrategy,
  Output, EventEmitter, SimpleChanges, ChangeDetectorRef, Self
} from "@angular/core";
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { CardButtonCheckEvent } from './card-button-check-event';

@Component({
  selector: "cx-card-button",
  templateUrl: "./card-button.component.html",
  styleUrls: ["./card-button.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardButtonComponent implements OnInit, OnChanges, ControlValueAccessor {

  @Input()
  value: any;

  /**
   * @description Atributo que define o estado atual do componente, se está marcado ou não.
   * @param value Estado do checkbox, se está marcado ou não. Padrão: false
   * @type boolean
  */
  @Input()
  isChecked = false;

  /**
   * @param cardId Nome ou identificação opcional para o componente. Padrão: ""
   * @type string
  */
  @Input()
  cardId = "";

  /**
   * @param data Atributo opcional que será emitido internamente no evento CardButtonEventChecked. Padrão: null
   * @type any
  */
  @Input()
  data: any = null;

  /**
   * @param leftIcon Classe do ícone a ser exibido do lado esquerdo, ex: "fa fa-home". Padrão: ""
   * @type string
  */
  @Input()
  leftIcon = "";

  /**
   * @param leftTitle Título a ser exibido do lado esquerdo, em uma tag <h5>. Padrão: ""
   * @type string
  */
  @Input()
  leftTitle = "";

  /**
   * @param leftText Texto a ser exibido do lado esquerdo, em uma tag <span>. Padrão: ""
   * @type string
  */
  @Input()
  leftText = "";

  /**
   * @param styles Objeto de estilo a ser passado para o card-button-wrapper. Ex: [styles]="{ height: '300px'; font-color: 'blue' }"
   * @type object
  */
  @Input()
  styles = "";


  /**
   * @param checkMark Define o visual do container de checkbox / radio. Pode ser 'square' ou 'circle'. Padrão: 'square'
   * @type string
  */
  @Input()
  checkmarkType = "square";

  /**
   * @param checked Evento emitido ao ativar o botão, contendo o próprio componente e seus atributos
   * na propriedade (target).
   * @type CardButtonCheckEvent
  */
  @Output()
  checked: EventEmitter<CardButtonCheckEvent> = new EventEmitter();

  /**
   * Propriedade que armazena o valor do ngControl associado ao componente.
   * @type any
  */
  model: any;

  constructor(
    private changeDetector: ChangeDetectorRef,
    @Self() private ngControl: NgControl
  ) {
      ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    this.ngControl.control.valueChanges.subscribe(value => {
      this.writeValue(value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void { }

  /**
   * Troca o valor atual do componente.
  */
  toggleValue() {
    this.isChecked = !this.isChecked;
    this.model = this.model === this.value ? null : this.value;
    this.onChange(this.model);
    // this.value = this.isChecked;
    this.emitChecked();
  }

  /**
   * @param {boolean} checked Define novo valor boleano para o estado atual do componente.
  */
  setValue(checked: boolean) {
    this.isChecked = checked;
    this.value = this.isChecked;
    this.changeDetector.detectChanges();
  }

  /**
   * @param {string} checked Define novo valor para a propriedade [cardId].
  */
  setCardId(cardId: string) {
    this.cardId = cardId;
    this.changeDetector.detectChanges();
  }

  /**
   * @param {string} checked Define novo valor para a propriedade [leftIcon].
  */
  setLeftIcon(icon: string) {
    this.leftIcon = icon;
    this.changeDetector.detectChanges();
  }

  /**
   * @param {string} checked Define novo valor para a propriedade [leftTitle].
  */
  setLeftTitle(title: string) {
    this.leftTitle = title;
    this.changeDetector.detectChanges();
  }

  /**
   * @param {any} checked Define novo valor para a propriedade [data].
  */
  setData(data: any) {
    this.data = data;
    this.changeDetector.detectChanges();
  }

  /**
   * Emite o evento (CardButtonCheckEvent).
  */
  private emitChecked() {
    const checkEvent: CardButtonCheckEvent = {
      target: this,
    };
    this.checked.emit(checkEvent);
  }

  /* Implementação da interface ControlValueAccessor */

  onChange: any = () => { };

  onTouch: any = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: any) {
    this.model = value;
    this.changeDetector.detectChanges();
  }

}
