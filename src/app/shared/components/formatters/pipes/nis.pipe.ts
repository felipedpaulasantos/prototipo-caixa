import { Pipe, PipeTransform } from "@angular/core";
import { nisPattern } from "../common/constants";
import * as vanillaMasker from "vanilla-masker";

@Pipe({
  name: "nis"
})
export class NisPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return "";
    }

    return vanillaMasker.toPattern(value, nisPattern);
  }
}
