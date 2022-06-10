import { Directive, ElementRef, Input, HostListener } from "@angular/core";
import { cpfPattern, cnpjPattern, TAMANHO_CPF } from "../common/constants";
import * as vanillaMasker from "vanilla-masker";
import { removeNonDigitValues } from "../common/utils";

@Directive({
  selector: "[appCpfCnpjMask]"
})
export class CpfCnpjMaskDirective {
  public nativeElement: HTMLInputElement;
  @Input() public input: any;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
  }

  @HostListener("ngModelChange", ["$event"])
  onChanges(value: string) {
    if (value) {
      value = removeNonDigitValues(value);
      if (value.length > TAMANHO_CPF) {
        vanillaMasker(this.nativeElement).maskPattern(cnpjPattern);
      } else {
        vanillaMasker(this.nativeElement).maskPattern(cpfPattern);
      }
    }
  }
}
