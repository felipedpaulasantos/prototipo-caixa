import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "tipoDocumentoMask"
})
export class DocumentoPipe implements PipeTransform {
  transform(value: any, docType?: string): any {
    if (value) {
      value = value.toString();
      if (docType !== undefined && docType !== "") {
        return this.formatByType(value, docType);
      }

      return this.formatBySize(value);
    }

    return value;
  }

  formatBySize(value: string): any {
    if (value.length === 11) {
      return value
        .substring(0, 3)
        .concat(".")
        .concat(value.substring(3, 6))
        .concat(".")
        .concat(value.substring(6, 9))
        .concat("-")
        .concat(value.substring(9, 11));
    } else if (value.length === 12) {
      return value
        .substring(0, 2)
        .concat(".")
        .concat(value.substring(2, 5))
        .concat(".")
        .concat(value.substring(5, 10))
        .concat("/")
        .concat(value.substring(10, 12));
    } else if (value.length === 14) {
      return value
        .substring(0, 2)
        .concat(".")
        .concat(value.substring(2, 5))
        .concat(".")
        .concat(value.substring(5, 8))
        .concat("/")
        .concat(value.substring(8, 12))
        .concat("-")
        .concat(value.substring(12, 14));
    }

    return value;
  }

  formatByType(value: string, type: string): any {
    const docType: number = +type;

    switch (docType) {
      case 5:
        return value
          .substring(0, 2)
          .concat(".")
          .concat(value.substring(2, 5))
          .concat(".")
          .concat(value.substring(5, 8))
          .concat("/")
          .concat(value.substring(8, 12))
          .concat("-")
          .concat(value.substring(12, 14));
      case 6:
        return value
          .substring(0, 2)
          .concat(".")
          .concat(value.substring(2, 5))
          .concat(".")
          .concat(value.substring(5, 10))
          .concat("/")
          .concat(value.substring(10, 12));
      case 7:
        return value
          .substring(0, 3)
          .concat(".")
          .concat(value.substring(3, 6))
          .concat(".")
          .concat(value.substring(6, 9))
          .concat("-")
          .concat(value.substring(9, 11));
    }
  }
}
