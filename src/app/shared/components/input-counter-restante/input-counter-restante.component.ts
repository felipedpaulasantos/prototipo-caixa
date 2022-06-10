import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input-counter-restante",
  templateUrl: "./input-counter-restante.component.html",
  styleUrls: ["./input-counter-restante.component.css"]
})
export class InputCounterRestanteComponent implements OnInit {

  @Input()
  inputTyped: number;

  @Input()
  inputLimit: number;

  constructor() { }

  ngOnInit() {
  }

}
