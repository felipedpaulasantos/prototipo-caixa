import { Pipe, PipeTransform } from "@angular/core";
import { cnpjPattern, cpfPattern } from "../common/constants";
import * as vanillaMasker from "vanilla-masker";
import { leftpad } from "../../../utils/utils";

const CNPJ_LENGTH = 14;
@Pipe({
  name: "cnpjLeftPad"
})

export class CnpjLeftPadPipe implements PipeTransform {

    transform(value: any, args?: any): any {
      if (!value) {
        return "";
      }

      return vanillaMasker.toPattern(leftpad(value, 14), cnpjPattern);
    }
  }
