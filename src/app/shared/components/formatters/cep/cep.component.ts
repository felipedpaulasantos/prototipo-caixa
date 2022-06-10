import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { cepPattern, cepPlaceholder } from "../common/constants";
import { ValueAccessorBase } from "../common/value-acessor-base";

@Component({
  selector: "app-cep",
  templateUrl: "./cep.component.html",
  styleUrls: ["./cep.component.css"],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CepComponent),
    multi: true
  }]
})
export class CepComponent extends ValueAccessorBase<string> {
  public pattern: string = cepPattern;

  @Input()
  id: string;
  @Input()
  placeholder: string = cepPlaceholder;
  @Output()
  blur: EventEmitter<any> = new EventEmitter();

  public blurEvt(event): void {
    this.blur.emit(event);
  }

  transform(value: string): string {
    return value
      ? value
          .replace(/[^\d]/g, "")
          .trim()
          .slice(0, 8)
      : value;
  }
}
