import { Directive, ElementRef } from "@angular/core";
import { ceiPattern } from "../common/constants";
import * as vanillaMasker from "vanilla-masker";

@Directive({
  selector: "[appCeiMask]"
})
export class CeiMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(ceiPattern);
  }
}
