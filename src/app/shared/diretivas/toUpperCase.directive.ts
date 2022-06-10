import { Directive, Output, EventEmitter, HostListener } from "@angular/core";
// Diretiva criada para envio de informações em caixa alta
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: "[uppercase]"
})
// eslint-disable-next-line @typescript-eslint/naming-convention
export class uppercaseDirective {
  @Output()
  ngModelChange: EventEmitter<any> = new EventEmitter();
  value: any;
  @HostListener("input", ["$event"])
  onInputChange($event) {
    this.value = $event.target.value.toUpperCase();
    this.ngModelChange.emit(this.value);
  }
  constructor() {}
}
