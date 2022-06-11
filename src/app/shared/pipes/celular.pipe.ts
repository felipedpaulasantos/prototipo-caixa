import {Pipe, PipeTransform} from "@angular/core";
import * as vanillaMasker from "vanilla-masker";

@Pipe ({
  name: "celular"
})

export class CelularPipe implements PipeTransform {
  transform(value: string) {
    if (!value) {
      return "";
    }
    const valor = value.toString();
    const valorTratado = valor.replace("-", "");
    // if (value.length === 1 && value !== "9") {
    //   return vanillaMasker.toPattern("9" + valorTratado, telefoneCelularSemDddPattern);
    // } else {
    //   return vanillaMasker.toPattern(valorTratado, telefoneCelularSemDddPattern);
    // }

  }
}
