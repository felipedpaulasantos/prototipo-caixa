import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-input-counter",
  templateUrl: "./input-counter.component.html",
  styleUrls: ["./input-counter.component.css"]
})
export class InputCounterComponent implements OnInit {

  @Input()
  inputTyped: number;

  @Input()
  inputLimit: number;

  constructor() { }

  ngOnInit() {
  }

}
