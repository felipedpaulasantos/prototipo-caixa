import { Pipe, PipeTransform } from "@angular/core";
import { cpfPattern } from "../common/constants";
import * as vanillaMasker from "vanilla-masker";
import { leftpad } from "../../../utils/utils";

@Pipe({
  name: "cpfLeftPad"
})
export class CpfLeftPadPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return "";
    }

    return vanillaMasker.toPattern(leftpad(value, 11), cpfPattern);
  }
}
