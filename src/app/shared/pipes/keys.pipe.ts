import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "keys"
})
export class KeysPipe implements PipeTransform {

  transform(value, args: string[]): any {

    const keys = [];
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
       keys.push(key)
      }
    }

    console.log(keys, "fim")
    return keys.reverse()
  }

}
