import { cepPattern } from "../common/constants";
import { Directive, ElementRef } from "@angular/core";
import * as vanillaMasker from "vanilla-masker";

@Directive({
  selector: "[appCepMask]"
})
export class CepMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(cepPattern);
  }
}
