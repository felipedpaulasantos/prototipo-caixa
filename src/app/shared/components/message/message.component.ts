import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {
  @Input() mensagem: string;

  @Input() timer: number;

  @Input() type = "error";

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.mensagem = null;
    }, this.timer ? this.timer : 5000);
  }

  close() {
    this.mensagem = null;
  }
}
