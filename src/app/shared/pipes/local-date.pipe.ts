import { SessionService } from "./../../service/session.service";
import { Pipe, PipeTransform } from "@angular/core";
import { formatDate } from "@angular/common";
import { strToDate } from "../utils/utils";

@Pipe({
  name: "localDate"
})
export class LocalDatePipe implements PipeTransform {
  constructor(private session: SessionService) {}

  transform(value: any, format: string) {
    if (!value) {
      return "";
    }
    if (!format) {
      format = "shortDate";
    }
    if (typeof value === "string") {
      value = strToDate(value);
    }
    return formatDate(value, format, this.session.locale);
  }
}
