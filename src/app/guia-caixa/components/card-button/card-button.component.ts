import {
  Component, Input, OnInit, OnChanges, ChangeDetectionStrategy,
  Output, EventEmitter, SimpleChanges, ChangeDetectorRef
} from "@angular/core";
import { CardButtonCheckEvent } from './card-button-check-event';

@Component({
  selector: "cx-card-button",
  templateUrl: "./card-button.component.html",
  styleUrls: ["./card-button.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardButtonComponent implements OnInit, OnChanges {

  /**
   * @param {boolean} value Estado do checkbox, se está marcado ou não. Padrão: false
  */
  @Input()
  value = false;

  /**
   * @param {string} cardId Nome ou identificação opcional para o componente. Padrão: ""
  */
  @Input()
  cardId = "";

  /**
   * @param {any} data Atributo opcional que será emitido internamente no evento CardButtonEventChecked. Padrão: null
  */
  @Input()
  data: any = null;

  /**
   * @param {string} leftIcon Classe do ícone a ser exibido do lado esquerdo, ex: "fa fa-home". Padrão: ""
  */
  @Input()
  leftIcon = "";

  /**
   * @param {string} leftTitle Título a ser exibido do lado esquerdo, em uma tag <h5>. Padrão: ""
  */
  @Input()
  leftTitle = "";

  /**
   * @param {string} leftText Texto a ser exibido do lado esquerdo, em uma tag <span>. Padrão: ""
  */
  @Input()
  leftText = "";

  /**
   * @param {CardButtonCheckEvent} checked Evento emitido ao ativar o botão, contendo o próprio componente e seus atributos
   * na propriedade (target).
  */
  @Output()
  checked: EventEmitter<CardButtonCheckEvent> = new EventEmitter();

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }

  /**
   * Troca o valor atual do componente.
  */
  toggleValue() {
    this.value = !this.value;
    this.emitChecked();
  }

  /**
   * @param {boolean} checked Define novo valor boleano para o estado atual do componente.
  */
  setValue(checked: boolean) {
    this.value = checked;
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

}
