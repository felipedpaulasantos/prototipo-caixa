import {
  telefoneCelularSemDddPattern,
  telefoneFixoSemDddPattern
} from "../common/constants";
import { Pipe, PipeTransform } from "@angular/core";
// import { telefoneCelularPattern, telefoneFixoPattern } from "../common/constants";
import * as vanillaMasker from "vanilla-masker";

@Pipe({
  name: "telefone"
})
export class TelefonePipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return "";
    }
    let telefonePattern;
    const valor = value.toString();
    const valorTratado = valor.replace("-", "");
    const lengthDoValorTratado = valorTratado.toString().length;
    switch (lengthDoValorTratado) {
      /*  case 11:
        telefonePattern = telefoneCelularSemDddPattern;
        break;
      case 10:
        telefonePattern = telefoneFixoSemDddPattern;
        break; */
      case 9:
        telefonePattern = telefoneCelularSemDddPattern;
        break;
      case 8:
        telefonePattern = telefoneFixoSemDddPattern;
        break;
    }
    return vanillaMasker.toPattern(valorTratado, telefonePattern);
  }
}
