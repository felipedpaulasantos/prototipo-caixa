import { Directive, ElementRef, Input, HostListener } from "@angular/core";
import * as vanillaMasker from "vanilla-masker";

@Directive({
  selector: "[appHoraMinMask]"
})
export class HoraMinMaskDirective {
  public nativeElement: HTMLInputElement;
  @Input() public input: any;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
  }

  @HostListener("ngModelChange", ["$event"])
  onChanges() {
    vanillaMasker(this.nativeElement).maskPattern("99:99");
  }
}
