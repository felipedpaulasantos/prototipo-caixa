import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "toCamel"
})
export class ToCamelPipe implements PipeTransform {

  transform(value: any): any {
    return this.keysToCamel(value);
  }

  private toCamel(s) {
    return s.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace("-", "")
        .replace("_", "");
    });
  }

  private keysToCamel(o) {
    if (o === Object(o) && !Array.isArray(o) && typeof o !== "function") {
      const n = {};
      Object.keys(o).forEach((k) => {
          n[this.toCamel(k)] = this.keysToCamel(o[k]);
      });
      return n;
    } else if (Array.isArray(o)) {
      return o.map((i) => {
        return this.keysToCamel(i);
      });
    }
    return o;
  }

}
