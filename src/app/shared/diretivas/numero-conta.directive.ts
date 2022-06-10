import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appNumeroConta]"
})
export class NumeroContaDirective {
  constructor() {}

  @HostListener("keydown", ["$event"])
  onKeyDown(e: KeyboardEvent): boolean {
    return e.keyCode === 8 ||
      e.keyCode === 9 ||
      e.keyCode === 32 ||
      e.keyCode === 37 ||
      e.keyCode === 39
      ? true
      : new RegExp("^[0-9-]+$").test(e.key);
  }
}
