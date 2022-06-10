import { Pipe, PipeTransform } from "@angular/core";
import { cnpjPattern, TAMANHO_CNPJ } from "../common/constants";
import * as vanillaMasker from "vanilla-masker";

@Pipe({
  name: "cnpj"
})
export class CnpjPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return "";
    }
    if (value.length < TAMANHO_CNPJ) {
      const rest = TAMANHO_CNPJ - value.length;
      const prefixo = "0".repeat(rest);
      value = prefixo + value;
    }

    return vanillaMasker.toPattern(value, cnpjPattern);
  }
}
