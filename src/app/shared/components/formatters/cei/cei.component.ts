import { ValueAccessorBase } from "../common/value-acessor-base";
import { EventEmitter } from "@angular/core";
import { ceiPattern, ceiPlaceholder } from "../common/constants";
import { Component, OnInit, Input, Output, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-cei",
  templateUrl: "./cei.component.html",
  styleUrls: ["./cei.component.css"],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CeiComponent),
    multi: true
  }]
})
export class CeiComponent extends ValueAccessorBase<string> {
  public pattern: string = ceiPattern;

  @Input()
  placeholder: string = ceiPlaceholder;
  @Input()
  id: string;

  @Output()
  blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value
      ? value
          .replace(/[^\d]/g, "")
          .trim()
          .slice(0, 13)
      : value;
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
