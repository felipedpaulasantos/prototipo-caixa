import { Component } from "@angular/core";

import { SocketioService } from "../shared/services/socketio.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent {

  contador: any;
  url: string;
  message: string;
  messages = [];

  constructor(
    private socketService: SocketioService,
    private toastr: ToastrService
  ) {}

  resetarSocket() {
    this.socketService.resetSocket();
  }

  sendMessage(msg: string) {
    this.scrollSmoothToBottom("chatDiv");
    this.socketService.sendMessage(`Front: ${msg}`);
    $("#msgInput input").trigger("focus");
  }

  scrollSmoothToBottom(id) {
    const div = "#" + id;
    $(div).stop().animate({
      scrollTop: $(div)[0].scrollHeight
    }, 800);
 }

}
