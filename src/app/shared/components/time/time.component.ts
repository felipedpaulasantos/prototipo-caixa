import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-time",
  template: `{{ now.toLocaleTimeString() }}`
})
export class TimeComponent implements OnInit {
  public now: Date = new Date();

  constructor() {
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit() {}
}
