import { Pipe, PipeTransform } from "@angular/core";
import { cpfPattern, TAMANHO_CPF } from "../common/constants";
import * as vanillaMasker from "vanilla-masker";

@Pipe({
  name: "cpf"
})
export class CpfPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return "";
    }
    if (value.length < TAMANHO_CPF) {
      const rest = TAMANHO_CPF - value.length;
      const prefixo = "0".repeat(rest);
      value = prefixo + value;
    }

    return vanillaMasker.toPattern(value, cpfPattern);
  }
}
