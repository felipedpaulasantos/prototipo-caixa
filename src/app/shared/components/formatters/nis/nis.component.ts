import {
  Component,
  OnInit,
  Input,
  Output,
  forwardRef,
  EventEmitter
} from "@angular/core";
import { nisPattern, nisPlaceholder } from "../common/constants";
import { ValueAccessorBase } from "../common/value-acessor-base";
import { NG_VALUE_ACCESSOR } from "@angular/forms";


@Component({
  selector: "app-nis",
  templateUrl: "./nis.component.html",
  styleUrls: ["./nis.component.css"],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NisComponent),
    multi: true
  }]
})
export class NisComponent extends ValueAccessorBase<string> {
  public pattern: string = nisPattern;

  @Input()
  placeholder: string = nisPlaceholder;
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
