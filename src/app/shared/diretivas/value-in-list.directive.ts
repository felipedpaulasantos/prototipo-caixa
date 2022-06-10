import { ValidatorFn, AbstractControl } from "@angular/forms";
import { strToNumber } from "../utils/utils";

export function valueInList(
  values: number[],
  initialValue: number
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = strToNumber(control.value);
    let minValue = values.length > 0 ? values[0] : 0;
    let maxValue = values.length > 1 ? values[1] : 0;

    for (let i = 0; i < values.length; i++) {
      if (value === values[i] && value >= initialValue) {
        return null;
      }
    }

    for (let i = 0; i < values.length; i++) {
      if (values[i] < value) {
        minValue = values[i];
      }
    }

    for (let i = 0; i < values.length; i++) {
      maxValue = values[i];
      if (values[i] > value) {
        break;
      }
    }

    if (minValue < initialValue) {
      minValue = initialValue;
    }
    if (maxValue < initialValue) {
      maxValue = initialValue;
    }

    return {
      valueInList: {
        value: control.value,
        minValue: minValue,
        maxValue: maxValue
      }
    };
  };
}
