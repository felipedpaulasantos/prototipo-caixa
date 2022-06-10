import { Directive, HostListener } from "@angular/core";
@Directive({
  selector: "[appAlphaNumeric]"
})
export class AlphaNumericDirective {
  @HostListener("keydown", ["$event"])
  onKeyDown(e: KeyboardEvent): boolean {
    return e.keyCode === 8 ||
      e.keyCode === 9 ||
      e.keyCode === 32 ||
      e.keyCode === 37 ||
      e.keyCode === 39
      ? true
      : new RegExp("^[a-zA-Z0-9_]*$").test(e.key);
  }

  @HostListener("change", ["$event"])
  onChange(e) {
    e.target.value = e.target.value.replace(/[^0-9a-z_ ]/gi, "");
  }

  @HostListener("paste", ["$event"]) onPaste(e) {
    e.target.value = e.target.value.replace(/[^0-9a-z_ ]/gi, "");
  }
}
