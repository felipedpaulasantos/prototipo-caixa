import {ValueAccessorBase} from "../common/value-acessor-base";
import {cpfPattern, cnpjPattern, CPF_CNPJ_PLACEHOLDER, TAMANHO_CPF, TAMANHO_CNPJ} from "../common/constants";
import {Component, Input, Output, forwardRef, EventEmitter, ViewChild, ElementRef, AfterViewInit} from "@angular/core";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {removeNonDigitValues, isCPF, isCNPJ, isCPFValido, isCNPJValido} from "../common/utils";

@Component({
  selector: "app-cpf-cnpj",
  templateUrl: "./cpf-cnpj.component.html",
  styleUrls: ["./cpf-cnpj.component.css"],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CpfCnpjComponent),
    multi: true
  }]
})
export class CpfCnpjComponent extends ValueAccessorBase<string> implements AfterViewInit {

  public pattern: string;

  @Input()
  placeholder: string = CPF_CNPJ_PLACEHOLDER;

  @Input()
  isDisabledInput = true;

  @Input()
  disabledInputCpfCnpj = false;

  @Input()
  clearField = true;

  @Input()
  isRequired = false;

  @Input()
  isButtonSearch = true;

  @Output()
  search: EventEmitter<any> = new EventEmitter();

  @Output()
  clean: EventEmitter<any> = new EventEmitter();

  @ViewChild("cpfCnpj", {static: false})
  cpfCnpj: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    if (this.value) {
      setTimeout(() => {
        this.inputChange(this.value);
      });
    }
  }

  transform(value: string): string {
    const max = value.length <= TAMANHO_CPF ? TAMANHO_CPF : TAMANHO_CNPJ;
    return value
      ? value
        .replace(/[^\d]/g, "")
        .trim()
        .slice(0, max)
      : value;
  }

  inputChange(event) {
    const inputValue = removeNonDigitValues(event);
    this.isDisabledInput = inputValue.length < TAMANHO_CPF;
    this.pattern = inputValue.length <= TAMANHO_CPF ? cpfPattern : cnpjPattern;
    this.notifyChanges(event);
  }

  isCPFCNPJValid(value) {
    return (isCPF(value) && isCPFValido(value)) || (isCNPJ(value) && isCNPJValido(value));
  }

  callSearch(value) {
    const valueCopy = value;
    if (this.clearField) {
      this.value = "";
      this.isDisabledInput = true;
    }
    if (this.isCPFCNPJValid(valueCopy)) {
      this.search.emit(removeNonDigitValues(valueCopy));
    } else {
      this.cpfCnpj.nativeElement.blur();
      this.clean.emit();
      throw Error("Dados inválidos!");
    }
  }
}
