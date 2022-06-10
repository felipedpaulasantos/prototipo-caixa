import { ValueAccessorBase } from "../common/value-acessor-base";
import { EventEmitter } from "@angular/core";
import { datePattern, datePlaceholder } from "../common/constants";
import { Component, Input, Output, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.css"],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateComponent),
    multi: true
  }]
})
export class DateComponent extends ValueAccessorBase<string> {
  public pattern: string = datePattern;

  @Input()
  placeholder: string = datePlaceholder;
  @Input()
  id: string;
  @Output()
  blur: EventEmitter<any> = new EventEmitter();

  /*
  transform(value: string): Date {
    return strToDate(value);
  }
  */

  transform(value: string): string {
    return value
      ? value
          .replace(/[^\d]/g, "")
          .trim()
          .slice(0, 8)
      : value;
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
