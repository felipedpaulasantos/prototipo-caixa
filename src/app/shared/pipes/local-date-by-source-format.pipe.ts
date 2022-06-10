import { SessionService } from "./../../service/session.service";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "localDateBySourceFormat"
})
export class LocalDateBySourceFormatPipe implements PipeTransform {

  private mapDateFormat: Map<string, string>;

  constructor(private session: SessionService) {
    this.mapDateFormat = new Map<string, string>();
    this.mapDateFormat.set("dd", "");
    this.mapDateFormat.set("MM", "");
    this.mapDateFormat.set("YYYY", "");
    this.mapDateFormat.set("HH", "");
    this.mapDateFormat.set("mm", "");
    this.mapDateFormat.set("ss", "");
  }

  transform(value: string, fromFormat: string, format: string): string {

    if (value.length !== fromFormat.length) {
      return "";
    }

    this.extractParts(value, fromFormat);
    const result = this.exportTo(format);

    return this.exportTo(format);
  }

  exportTo(format: string) {

    let exportStr = format;

    this.mapDateFormat.forEach((value: string, key: string) => {
      if (value.length > 0) {
        exportStr = exportStr.replace(key, value);
      }
    })
    return exportStr;
  }

  extractParts(value: string, format: string) {

   for (const key of Array.from(this.mapDateFormat.keys())) {

      if (format.indexOf(key) >= 0) {
        this.mapDateFormat.set(key, this.extract(value, format, key));
      }
   }
  }

  extract(value: string, format: string, part: string) {
    const index = format.indexOf(part);
    if (index < 0) {
      return "0".repeat(part.length);
    } else {
      return value.substring(index, (index + part.length)) ;
    }
  }

}
