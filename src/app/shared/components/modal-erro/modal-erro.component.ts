import { Component, Input } from "@angular/core";


@Component({
  selector: "app-modal-erro",
  templateUrl: "./modal-erro.component.html",
  styleUrls: ["./modal-erro.component.css"]
})
export class ModalErrorComponent {
  @Input()
  options;

  @Input()
  header: string;

  @Input()
  message: string;

  constructor() {
    //super();
  }

}
