import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-modal-confirm",
  templateUrl: "./modal-confirm.component.html",
  styleUrls: ["./modal-confirm.component.css"]
})
export class ModalConfirmComponent implements OnInit {
  @Input()
  options;

  @Input()
  confirmar: any;

  @Input()
  cancelar: any;

  @Input()
  message: string;

  @Input()
  type = "info";

  @Input()
  textoConfirmar = "Confirmar";

  @Input()
  textoCancelar = "Cancelar";

  constructor() {
    //super();
  }

  ngOnInit() {
    // this.options.inDuration = 0;
    // this.options.outDuration = 0;
  }
}
