import {
  telefoneFixoSemDddPattern,
  telefoneCelularSemDddPattern
} from "../common/constants";
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ValueAccessorBase } from "../common/value-acessor-base";
// import { telefoneCelularPattern, telefoneFixoPattern } from "../common/constants";

@Component({
  selector: "app-telefone",
  templateUrl: "./telefone.component.html",
  styleUrls: ["./telefone.component.css"],
  providers: [ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TelefoneComponent),
    multi: true
  }]
})
export class TelefoneComponent extends ValueAccessorBase<string> {
  public pattern = (value: any): string => {
    const len = value.toString().length;
    switch (len) {
      // case 11:
      //  return telefoneCelularPattern;
      // case 10:
      //  return telefoneFixoPattern;
      case 9:
        return telefoneCelularSemDddPattern;
      case 8:
        return telefoneFixoSemDddPattern;
    }
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input()
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input()
  id: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @Input()
  max: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
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
