import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-modal-contas",
  templateUrl: "./modal-contas.component.html",
  styleUrls: ["./modal-contas.component.css"]
})
export class ModalContasComponent {
  @Input()
  options;

  @Input()
  header: string;

  @Input()
  contas: any;

  @Input()
  modalComPaginacao: boolean;

  public page: number;

  constructor() {
    //super();
  }

}
