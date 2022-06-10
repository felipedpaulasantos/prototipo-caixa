import { ValueAccessorBase } from "../common/value-acessor-base";
import { EventEmitter } from "@angular/core";
import { cnpjPattern, cnpjPlaceholder } from "../common/constants";
import { Component, Input, Output, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";


@Component({
  selector: "app-cnpj",
  templateUrl: "./cnpj.component.html",
  styleUrls: ["./cnpj.component.css"],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CnpjComponent),
    multi: true
  }]
})
export class CnpjComponent extends ValueAccessorBase<string> {
  public pattern: string = cnpjPattern;

  @Input()
  placeholder: string = cnpjPlaceholder;
  @Input()
  id: string;

  @Output()
  blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value
      ? value
          .replace(/[^\d]/g, "")
          .trim()
          .slice(0, 14)
      : value;
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
