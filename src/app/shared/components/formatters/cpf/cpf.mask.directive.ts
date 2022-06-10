import { Directive, ElementRef } from "@angular/core";
import { cpfPattern } from "../common/constants";
import * as vanillaMasker from "vanilla-masker";

@Directive({
  selector: "[appCpfMask]"
})
export class CpfMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(cpfPattern);
  }
}
