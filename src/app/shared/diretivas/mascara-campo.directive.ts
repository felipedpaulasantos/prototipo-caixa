import {
  Component,
  Input,
  Directive,
  HostListener,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[appMascaraCampoDirective]"
})
export class MascaraCampoDirective {
  constructor(private element: ElementRef) {}
  @Input() valorCampo: any;
  @HostListener("keyup", ["$event"])
  inputChanged(event: any): void {
    if (event.target.value) {
      this.onInput(event.target.value);
    }
  }
  private onInput(value: any): void {
    const ret = this.formataCampo(
      value,
      this.valorCampo.mask,
      this.valorCampo.len
    );
    if (ret) {
      this.element.nativeElement.value = ret;
    }
  }
  private formataCampo(campo: string, Mascara: string, tamanho: number): any {
    let boleanoMascara;
    const exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\R|\$|\&|\%| /g;
    const campoSoNumeros = campo.toString().replace(exp, "");
    let posicaoCampo = 0;
    let NovoValorCampo = "";
    let TamanhoMascara = campoSoNumeros.length;
    const teste = "";
    const testedoteste = "";
    for (let i = 0; i < TamanhoMascara; i++) {
      if (i < tamanho) {
        boleanoMascara =
          Mascara.charAt(i) === "-" ||
          Mascara.charAt(i) === "." ||
          Mascara.charAt(i) === "/";
        boleanoMascara =
          boleanoMascara ||
          (Mascara.charAt(i) === "(" ||
            Mascara.charAt(i) === ")" ||
            Mascara.charAt(i) === " ");
        boleanoMascara =
          boleanoMascara ||
          (Mascara.charAt(i) === "," ||
            Mascara.charAt(i) === "*" ||
            Mascara.charAt(i) === "+");
        boleanoMascara =
          boleanoMascara ||
          (Mascara.charAt(i) === "@" ||
            Mascara.charAt(i) === "#" ||
            Mascara.charAt(i) === "R");
        boleanoMascara =
          boleanoMascara ||
          (Mascara.charAt(i) === "$" ||
            Mascara.charAt(i) === "&" ||
            Mascara.charAt(i) === "%");
        if (boleanoMascara) {
          NovoValorCampo += Mascara.charAt(i);
          TamanhoMascara++;
        } else {
          NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
          posicaoCampo++;
        }
      }
    }
    return NovoValorCampo;
  }
}
