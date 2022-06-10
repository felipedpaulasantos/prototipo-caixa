import {PipeTransform, Pipe} from "@angular/core";
import {leftpad, stringParaInteiro} from "../utils/utils";

@Pipe({
  name: "cep"
})
export class CepPipe implements PipeTransform {
  transform(value: string): string {
    value = leftpad(stringParaInteiro(value), 8);
    return value.substr(0, 5) + "-" + value.substr(5, 8);
  }
}
