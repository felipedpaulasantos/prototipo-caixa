import { Pipe, PipeTransform } from "@angular/core";
import { cocliPattern } from "../common/constants";
import * as vanillaMasker from "vanilla-masker";

@Pipe({
  name: "cocli"
})
export class CocliPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return "";
    }

    let str = value + "";
    str = str.replace(/\D/g, "");
    if (str.length < 13) {
      str.padStart(13, "0");
    }

    return vanillaMasker.toPattern(value, cocliPattern);
  }
}
