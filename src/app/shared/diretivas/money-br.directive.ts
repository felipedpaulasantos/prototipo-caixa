import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { NgControl } from "@angular/forms";

declare var VMasker: any;

@Directive({
  selector: "[appMoneyBr]"
})
export class MoneyBrDirective {

  @Input() precision = undefined;

  constructor(private element: ElementRef, private model: NgControl) {}

  @HostListener("input")
  inputChange() {
    const nativeElement = this.element.nativeElement;
    VMasker(nativeElement).maskMoney({
      // Decimal precision -> "90"
      precision: this.precision ? this.precision : 2,
      // Decimal separator -> ",90"
      separator: ",",
      // Number delimiter -> "12.345.678"
      delimiter: ".",
      // Force type only number instead decimal,
      // masking decimals with ",00"
      // Zero cents -> "R$ 1.234.567.890,00"
      zeroCents: false
    });

    const newValue = this.element.nativeElement.value
      .replace(".", "")
      .replace(",", ".");
    this.model.control.setValue(newValue, {
      emitEvent: false,
      emitModelToViewChange: false,
      emitViewToModelChange: false
    });
  }
}
