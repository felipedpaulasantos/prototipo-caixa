import { Directive, ElementRef } from "@angular/core";
import { nisPattern } from "../common/constants";
import * as vanillaMasker from "vanilla-masker";

@Directive({
  selector: "[appNisMask]"
})
export class NisMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
    vanillaMasker(this.nativeElement).maskPattern(nisPattern);
  }
}
