import { Directive, ElementRef, HostListener } from "@angular/core";
import { telefoneCelularSemDddPattern } from "../common/constants";
import * as vanillaMasker from "vanilla-masker";

@Directive({
  selector: "[appCelularMask]"
})
export class CelularMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
  }

  @HostListener("keyup", ["$event"])
  onKeyup(event: KeyboardEvent) {
    this.nativeElement.value = vanillaMasker.toPattern(
      this.nativeElement.value,
      telefoneCelularSemDddPattern
    );
  }
}
