import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectorRef } from "@angular/core";
import { CaixaAlertType } from "./cx-alert-type";

class AlertClasses {
  alertClass = "";
  iconClass = "";
  closeButtonClass = "";

  constructor(alertClass, iconClass, closeButtonClass) {
    this.alertClass = alertClass;
    this.iconClass = iconClass;
    this.closeButtonClass = closeButtonClass;
  }
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "cx-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit, OnChanges {

  /**
   * Mensagem a ser exibida. O componente não será exibido caso não haja um valor válido. Padrão: ""
   * @type string
  */
  @Input()
  public message: string;

  /**
   * Atributo opcional de título em negrito precedendo a mensagem. Padrão: ""
   * @type string
  */
  @Input()
  public title: string;

  /**
   * Tipo do alert. Padrão: "CaixaAlertType.info | 'info"
   * @type CaixaAlertType | string
  */
  @Input()
  public type: CaixaAlertType = CaixaAlertType.INFO;

  /**
   * Tipo do alert. Padrão: "CaixaAlertType.info | 'info"
   * @type CaixaAlertType | string
  */
  @Output()
  public closed = new EventEmitter<boolean>(false);

  isClosed = false;

  alertClasses: AlertClasses;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildClasses();
  }

  ngOnInit() {
  }

  buildClasses() {
    switch (this.type) {
      case CaixaAlertType.INFO:
        this.alertClasses = new AlertClasses("bg-info text-white", "fa fa-info-circle", "text-white");
        break;
      case CaixaAlertType.SUCCESS:
        this.alertClasses = new AlertClasses("bg-success text-white", "fa fa-check-circle", "text-white");
        break;
      case CaixaAlertType.ERROR:
        this.alertClasses = new AlertClasses("bg-danger text-white", "fa fa-ban", "text-white");
        break;
      case CaixaAlertType.WARNING:
        this.alertClasses = new AlertClasses("bg-warning", "fa fa-exclamation-triangle", "");
        break;
    }
  }

  onClose() {
    this.isClosed = true;
    this.closed.emit(true);
    setTimeout(() => {
      this.message = "";
      this.alertClasses = null;
      this.cdr.detectChanges();
    }, 400);
  }

}
