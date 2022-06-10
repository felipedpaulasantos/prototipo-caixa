import {Pipe, PipeTransform} from "@angular/core";
import {cepPattern} from "../common/constants";
import * as vanillaMasker from "vanilla-masker";
import {leftpad, stringParaInteiro} from "../../../utils/utils";

@Pipe({
  name: "cep"
})
export class CepPipe implements PipeTransform {
  transform(value: string) {
    if (!value) {
      return "";
    }
    value = leftpad(stringParaInteiro(String(value)), 8);
    return vanillaMasker.toPattern(value, cepPattern);
  }
}
