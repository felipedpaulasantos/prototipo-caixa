import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appOnlyNumbers]"
})
export class ApenasNumerosDirective {
  @HostListener("keydown", ["$event"])
  onKeyDown(e: KeyboardEvent): boolean {
    return e.keyCode === 8 ||
      e.keyCode === 9 ||
      e.keyCode === 37 ||
      e.keyCode === 39 ||
      e.keyCode === 46
      ? true
      : new RegExp("^\\d+$").test(e.key);
  }
}
