import { Directive, ElementRef, HostListener } from "@angular/core";
import { removeNonDigitValues } from "../common/utils";
import {
  telefoneCelularSemDddPattern,
  telefoneFixoSemDddPattern
} from "../common/constants";
import * as vanillaMasker from "vanilla-masker";

@Directive({
  selector: "[appTelefoneMask]"
})
export class TelefoneMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
  }

  @HostListener("keyup", ["$event"])
  onKeyup(event: KeyboardEvent) {
    const telefonePattern: string =
      removeNonDigitValues(this.nativeElement.value).length === 9
        ? telefoneCelularSemDddPattern
        : telefoneFixoSemDddPattern;
    this.nativeElement.value = vanillaMasker.toPattern(
      this.nativeElement.value,
      telefonePattern
    );
  }
}
