import { ValidatorFn, AbstractControl } from "@angular/forms";
import { strToNumber } from "../utils/utils";

export function maxValue(maxVal: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = strToNumber(control.value);
    const forbidden = value > maxVal;
    return forbidden ? { maxValue: { value: control.value } } : null;
  };
}
