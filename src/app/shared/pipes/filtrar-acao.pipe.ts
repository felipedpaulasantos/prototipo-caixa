import { Pipe, PipeTransform } from "@angular/core";
import { Acao } from "../../governo-social/model/cliente.model";

@Pipe({
  name: "filtrarAcao",
  pure: false
})
export class FiltrarAcaoPipe implements PipeTransform {
  transform(items: any, args?: any): any {
    return items.filter(item => {
      if (args === "ADICIONADO") {
        return item.acao === Acao.INCLUSAO.toString();
      } else {
        return item.acao !== Acao.REMOVER.toString();
      }
    });
  }
}
