import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "vinculoTipoMask" })
export class VinculoTipoPipe implements PipeTransform {
  transform(value: string) {
    switch (value) {
      case "5":
        return "CNPJ";
      case "6":
        return "CEI";
      case "7":
        return "CPF";
    }
  }
}
