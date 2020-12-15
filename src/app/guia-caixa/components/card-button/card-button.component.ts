import {
  Component, Input, OnInit, OnChanges, ChangeDetectionStrategy,
  Output, EventEmitter, SimpleChanges, ChangeDetectorRef, forwardRef
} from "@angular/core";
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CardButtonCheckEvent } from './card-button-check-event';

@Component({
  selector: "cx-card-button",
  templateUrl: "./card-button.component.html",
  styleUrls: ["./card-button.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CardButtonComponent),
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardButtonComponent implements OnInit, OnChanges, ControlValueAccessor {

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
   * @param checked Evento emitido ao ativar o botão, contendo o próprio componente e seus atributos
   * na propriedade (target).
   * @type CardButtonCheckEvent
  */
  @Output()
  checked: EventEmitter<CardButtonCheckEvent> = new EventEmitter();

  constructor(
    private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    /*     if (this.formGroupDir && this.checkboxControlName) {
          this.control = this.formGroupDir.control.get(this.checkboxControlName) as FormControl;
        } */
  }

  ngOnChanges(changes: SimpleChanges): void { }

  /**
   * Troca o valor atual do componente.
  */
  toggleValue() {
    this.isChecked = !this.isChecked;
    this.value = this.isChecked;
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

  set value(val: boolean) {
    if (val !== undefined) {
      this.onChange(val);
      this.onTouch(val);
    }
  }

  onChange: any = () => { };

  onTouch: any = () => { };

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(input: string) { }

}
