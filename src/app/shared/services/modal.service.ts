import { Injectable, EventEmitter, Output } from "@angular/core";

declare var $;

@Injectable({
  providedIn: "root"
})
export class ModalService {
  showEvent: EventEmitter<any> = new EventEmitter();

  btOKEvent: EventEmitter<boolean> = new EventEmitter();

  btCancelarEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  show(options: ModalOptions) {
    this.showEvent.emit(options || {});
  }
}
