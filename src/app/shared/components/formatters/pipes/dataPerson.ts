import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dataPerson"
})
export class DataPerson implements PipeTransform {
  transform(value: string) {
    const datePipe = new DatePipe("pt-BR");
    value = datePipe.transform(value, "dd/MM/yyyy");
    return value;
  }
}
