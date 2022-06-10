import { Component, Input } from "@angular/core";

@Component({
  selector: "app-modal-info",
  templateUrl: "./modal-info.component.html",
  styleUrls: ["./modal-info.component.css"]
})
export class ModalInfoComponent {
  @Input()
  options: any;

  @Input()
  header: string;

  @Input()
  message: string;

  constructor() {
    //super();
  }

}
