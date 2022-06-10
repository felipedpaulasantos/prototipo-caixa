import { ValidatorFn, AbstractControl } from "@angular/forms";
import { strIsEmpty } from "../utils/utils";

export const DATE_PATTERN = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;

export function dateValid(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    // eslint-disable-next-line max-len
    let value: string = control.value;
    if (strIsEmpty(value)) {
      return null;
    }

    value = value.replace(/\D/g, "");
    if (value.length < 8) {
      return null;
    }
    value = leftpad(value, 8);
    value = value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4);
    if (!value.match(DATE_PATTERN)) {
      return { dataInvalida: { value: control.value } };
    }
    return null;
  };
}

function leftpad(num: string, size: number): string {
  let s = num + "";
  while (s.length < size) {
    s = "0" + s;
  }
  return s;
}
