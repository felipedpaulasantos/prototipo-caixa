import { ValidatorFn, AbstractControl } from "@angular/forms";
import { strToNumber } from "../utils/utils";

export function minValue(minVal: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = strToNumber(control.value);
    const forbidden = value < minVal;
    return forbidden
      ? { minValue: { value: control.value, minValue: minVal } }
      : null;
  };
}
