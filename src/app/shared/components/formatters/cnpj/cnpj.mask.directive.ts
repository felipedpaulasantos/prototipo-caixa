import { Directive, ElementRef } from "@angular/core";
import { cnpjPattern } from "../common/constants";
import * as vanillaMasker from "vanilla-masker";

@Directive({
  selector: "[appCnpjMask]"
})
export class CnpjMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(cnpjPattern);
  }
}
