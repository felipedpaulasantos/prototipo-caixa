import { ValueAccessorBase } from "../common/value-acessor-base";
import { EventEmitter, ViewChild } from "@angular/core";
import { cpfPattern, cpfPlaceholder } from "../common/constants";
import { Component, OnInit, Input, Output, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-cpf",
  templateUrl: "./cpf.component.html",
  styleUrls: ["./cpf.component.css"],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CpfComponent),
    multi: true
  }]
})
export class CpfComponent extends ValueAccessorBase<string> {
  public pattern: string = cpfPattern;

  @ViewChild("inputCpf", { static: false })
  inputCpf;

  @Input()
  placeholder: string = cpfPlaceholder;
  @Input()
  id: string;

  @Output()
  blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value
      ? value
          .replace(/[^\d]/g, "")
          .trim()
          .slice(0, 11)
      : value;
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
