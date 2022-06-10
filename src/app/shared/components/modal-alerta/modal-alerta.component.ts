import { Component, Input } from "@angular/core";

@Component({
  selector: "app-modal-alerta",
  templateUrl: "./modal-alerta.component.html",
  styleUrls: ["./modal-alerta.component.css"]
})
export class ModalAlertaComponent {
  @Input()
  options: any;

  @Input()
  header: string;

  @Input()
  message: string;

  @Input()
  type = "info";

  constructor() {
    //super();
  }

}
