import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-paginas",
  templateUrl: "./paginas.component.html",
  styleUrls: ["./paginas.component.scss"]
})
export class PaginasComponent implements OnInit {

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private fb: FormBuilder
  ) { }

  formTeste = this.fb.group({
    cpf: new FormControl("39761837840", []),
    nis: new FormControl("21070628575", []),
    cnpj: new FormControl("00360305000104", [])
  });
  cpf = this.formTeste.controls.cpf;
  nis = this.formTeste.controls.nis;
  cnpj = this.formTeste.controls.cnpj;

  formCampoUnico = this.fb.group({
    campoUnico: new FormControl("39761837840", []),
    tipoCampo: new FormControl("cpf")
  });
  campoUnico = this.formCampoUnico.controls.campoUnico;
  tipoCampo = this.formCampoUnico.controls.tipoCampo;

  ngOnInit(): void {
    this.ngxLoader.start("loader-1");
  }

  validaCampo(valor: string) {
    if (this.isCpf(valor)) {
      this.tipoCampo.setValue("cpf");
    } else if (this.isCpnj(valor)) {
      this.tipoCampo.setValue("cnpj");
    } else if (this.isNis(valor)) {
      this.tipoCampo.setValue("nis");
    } else {
      this.tipoCampo.setValue("cpf / cnpj / nis");
    }
  }

  isCpf(cpf: string): boolean {
    const multiplicador1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const multiplicador2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let tempCpf: string;
    let digito: string;
    let soma: number;
    let resto: number;

    cpf = cpf.trim();
    cpf = cpf.replace(".", "").replace("-", "");
    if (cpf.length != 11) {
      return false;
    }
    tempCpf = cpf.substring(0, 9);
    soma = 0;

    for (let i = 0; i < 9; i++) {
      soma += Number.parseInt(tempCpf[i].toString()) * multiplicador1[i];
    }

    resto = soma % 11;
    if (resto < 2) {
      resto = 0;
    } else {
      resto = 11 - resto;
    }
    digito = resto.toString();
    tempCpf = tempCpf + digito;
    soma = 0;

    for (let i = 0; i < 10; i++) {
      soma += Number.parseInt(tempCpf[i].toString()) * multiplicador2[i];
    }

    resto = soma % 11;
    if (resto < 2) {
      resto = 0;
    } else {
      resto = 11 - resto;
    }
    digito = digito + resto.toString();
    return cpf.endsWith(digito);
  }

  isNis(pis: string): boolean {
    const multiplicador = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma;
    let resto;

    if (pis.trim().length != 11) {
      return false;
    }

    pis = pis.trim();
    pis = pis.replace("-", "").replace(".", "").padStart(11, "0");
    soma = 0;

    for (let i = 0; i < 10; i++) {
      soma += Number.parseInt(pis[i].toString()) * multiplicador[i];
    }

    resto = soma % 11;
    if (resto < 2) {
      resto = 0;
    } else {
      resto = 11 - resto;
    }
    return pis.endsWith(resto.toString());
  }

  isCpnj(cnpj: string): boolean {
    const multiplicador1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const multiplicador2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma;
    let resto;
    let digito;
    let tempCnpj;
    cnpj = cnpj.trim();
    cnpj = cnpj.replace(".", "").replace("-", "").replace("/", "");
    if (cnpj.length != 14) {
      return false;
    }
    tempCnpj = cnpj.substring(0, 12);
    soma = 0;
    for (let i = 0; i < 12; i++) {
      soma += Number.parseInt(tempCnpj[i].toString()) * multiplicador1[i];
    }
    resto = (soma % 11);
    if (resto < 2) {
      resto = 0;
    } else {
      resto = 11 - resto;
    }
    digito = resto.toString();
    tempCnpj = tempCnpj + digito;
    soma = 0;
    for (let i = 0; i < 13; i++) {
      soma += Number.parseInt(tempCnpj[i].toString()) * multiplicador2[i];
    }
    resto = (soma % 11);
    if (resto < 2) {
      resto = 0;
    } else {
      resto = 11 - resto;
    }
    digito = digito + resto.toString();
    return cnpj.endsWith(digito);
  }
}
