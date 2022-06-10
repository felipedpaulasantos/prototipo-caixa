import * as base64 from "base-64";
import * as utf8 from "utf8";
import { Router } from "@angular/router";
import * as moment from "moment";
import { FormGroup, FormControl, AbstractControl } from "@angular/forms";
import { DadoAtualizar } from "../../model/dado.model";

declare var $: any;
export function notEmpty(object: any[]): boolean {
  return object !== undefined && object !== null && object.length > 0;
}

export function isEmpty(object: any[]): boolean {
  return object === undefined || object === null || object.length === 0;
}

export function strIsEmpty(str: string): boolean {
  return str === undefined || str === null || str === "";
}

export function strNotEmpty(str: string): boolean {
  return str !== undefined && str !== null && str !== "";
}

export function objectIsEmpty<T>(obj: T, template: new () => T): boolean {
  return JSON.stringify(obj).length !== JSON.stringify(new template()).length;
}

export function objIsEmptyDeep(object: any): boolean {
  return object === undefined || object === "undefined" || object === null || (Object.keys(object).length === 0)
    || Object.keys(object).every(k => object[k] == null || !Object.keys(object[k]).length);
}

export function objIsEmpty(object: any): boolean {
  return object === undefined || object === null;
}

export function objIsNotEmpty(object: any) {
  return object !== undefined && object !== null;
}

export function strToDate(dateStr: string): Date {
  const regexBars = /(3[01]|[12][0-9]|0?[1-9])\/*(1[012]|0?[1-9])\/*((?:19|20)\d{2})/g;
  const match = regexBars.exec(dateStr);
  if (match !== null) {
    return new Date(+match[3], +match[2] - 1, +match[1], 12, 0, 0, 0);
  } else if (dateStr === undefined || dateStr === "" || dateStr === null) {
    return undefined;
  }
  throw new Error("Erro no formato de data: " + dateStr);
}
export function dataTo_ddMMyyyy(data: Date, separador: string = "/") {
  if (data === undefined || data === null) {
    return "";
  }

  if (typeof data === "number" || typeof data === "string") {
    data = new Date(data);
  }

  const dd = data.getDate();
  const mm = data.getMonth() + 1; // getMonth() is zero-based
  const yyyy = data.getFullYear();

  return [
    (dd > 9 ? "" : "0") + dd,
    separador,
    (mm > 9 ? "" : "0") + mm,
    separador,
    yyyy
  ].join("");
}

export function dataTo_yyyyMMdd(data: Date, separador: string = "/") {
  if (data === undefined || data === null) {
    return "";
  }

  if (typeof data === "number" || typeof data === "string") {
    data = new Date(data);
  }

  const dd = data.getDate();
  const mm = data.getMonth() + 1; // getMonth() is zero-based
  const yyyy = data.getFullYear();

  return [
    yyyy,
    separador,
    (mm > 9 ? "" : "0") + mm,
    separador,
    (dd > 9 ? "" : "0") + dd
  ].join("");
}

export function dataTo_yyyy_MM_dd(data: Date, separador: string = "-") {
  if (data === undefined || data === null) {
    return "";
  }

  if (typeof data === "number" || typeof data === "string") {
    data = new Date(data);
  }

  const dd = data.getDate();
  const mm = data.getMonth() + 1; // getMonth() is zero-based
  const yyyy = data.getFullYear();

  return [
    yyyy,
    separador,
    (mm > 9 ? "" : "0") + mm,
    separador,
    (dd > 9 ? "" : "0") + dd
  ].join("");
}

export function dataGMT_ddMMyyyy(data_gmt: string) {
  const timestamp = Date.parse(data_gmt);
  const time_format = new Date(timestamp);
  return dataTo_ddMMyyyy(time_format);
}


export function formatRg(rg: string) {
  const numeros = rg.match(/(\d+)/);
  const letras = rg.split(/\d+/);
  const rgFormatado = [numeros[0]];
  if (letras[1] !== null) {
    rgFormatado.push(letras[1].substring(0, letras[1].length - 2));
    rgFormatado.push(letras[1].substring(letras[1].length - 2, letras[1].length));
  } else {
    rgFormatado.push("");
    rgFormatado.push("");
  }
  return rgFormatado;
}

export function addDelimiterToDate(data: string, delimitador: string): string {
  if (data === undefined || data === null) {
    return "";
  }
  if (data.length !== 8) {
    return "";
  }
  return data.substring(0, 2) +
    delimitador + data.substring(2, 4) +
    delimitador + data.substring(4, 8);
}

export function downloadArquivo(arquivo, nomeArquivo, extensao) {
  const date = new Date();
  const actual_day = date.getDate();
  const actual_month = date.getMonth() + 1;
  const actual_year = date.getFullYear();
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(arquivo);
  link.download =
    nomeArquivo +
    "_" +
    actual_day +
    "-" +
    actual_month +
    "-" +
    actual_year +
    extensao;
  link.className = "link-comprovante";
  link.dispatchEvent(new MouseEvent("click"));
}

export function downloadRelatorio(arquivo, nomeArquivo) {
  downloadArquivo(arquivo, nomeArquivo, ".pdf");
}

export function constPesquisa(param) {
  Object.keys(param).forEach(function (key) {
    if (param[key] === "1") {
      alert("Inclusão");
    } else if (param[key] === "2") {
      alert("Alteração");
    } else if (param[key] === "3") {
      alert("Exclusão");
    } else if (param[key] === "") {
      alert("Vazio");
    }
  });
}

export function addClassFooter(cidadao: any): void {
  const footer = document.getElementById("id-position");
  /*   if (cidadao[0] === undefined) {
      footer.className = "fix-footer";
    } else if (cidadao[0] !== undefined) {
      footer.className = "";
    } */
}
export function getCurrentAddress(): string {
  return (
    location.protocol +
    "//" +
    location.hostname +
    (location.port ? ":" + location.port : "")
  );
}
export function preventD(): void {
  $("button").click(function (event) {
    event.preventDefault();
  });
}

export function encodeBase64(json: any): string {
  const bytes = utf8.encode(json);
  return base64.encode(bytes);
}

export function removeAccentsDiacritics(s: string): string {
  if (strIsEmpty(s)) {
    return "";
  }
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function removeMaskString(s: string): string {
  if (strIsEmpty(s)) {
    return "";
  }
  return s.replace(/\D/g, "");
}

export function leftpad(num: number, size: number): string {
  let s = num + "";
  while (s.length < size) {
    s = "0" + s;
  }
  return s;
}

export function strToNumber(value: string): number {
  if (value === null || value === "undefined" || value === "") {
    return 0;
  }
  value = value.replace(/\D/g, "");
  value =
    value.substr(0, value.length - 2) + "." + value.substr(value.length - 2);
  const newValue = Number(value);
  return newValue;
}

export function stringParaInteiro(value: string): number {
  if (value === null || value === "undefined" || value === "") {
    return 0;
  }
  return Number(value.replace(/\D/g, ""));
}

export function methodPisUtils(comparationPis: string): boolean {
  const convertValue = JSON.stringify(comparationPis);
  const valueComparar = convertValue.toLowerCase();
  if (valueComparar.search("pasep") >= 0) {
    return false;
  } else {
    return true;
  }
}

export function showPasepUtils(comparationPis: string): boolean {
  const valueComparar = comparationPis.toLowerCase();
  if (valueComparar.search("pasep") >= 0) {
    return true;
  } else {
    return false;
  }
}

// Utils Trilha
export function utilsSearchInUrl(url: string, search: string): number {
  return url.search(search);
}
export function utilsConvertNisCpfNumber(nisOuCpf: string): number {
  if (nisOuCpf !== undefined) {
    const inicialValue = nisOuCpf;
    const convertPassOne = inicialValue.split(".").join("");
    const convertPassTwo = convertPassOne.split("-").join("");
    const convertPassLast = Number(convertPassTwo);
    return convertPassLast;
  }
}

export function utilsRemoveFormatacaoNisCpf(nisOuCpf: string): string {
  if (nisOuCpf !== undefined) {
    const inicialValue = nisOuCpf;
    const convertValueOne = inicialValue.split(".").join("");
    const convertValueTwo = convertValueOne.split("-").join("");
    return convertValueTwo;
  }
}

export function utilsFormateTelefone(ddd: string, numero: string): string {
  const length = numero.length;
  let telefoneFormatado: any;
  if (length === 8) {
    telefoneFormatado =
      "(" + ddd + ") " + numero.substring(0, 4) + "-" + numero.substring(4, 8);
  } else if (length === 9) {
    telefoneFormatado =
      "(" + ddd + ") " + numero.substring(0, 5) + "-" + numero.substring(5, 9);
  }
  return telefoneFormatado;
}

export function utilsFormateTelefoneSemDDD(numero: string): string {
  const length = numero.length;
  let telefoneFormatado: any;
  if (length === 8) {
    telefoneFormatado =
     numero.substring(0, 4) + "-" + numero.substring(4, 8);
  } else if (length === 9) {
    telefoneFormatado =
     numero.substring(0, 5) + "-" + numero.substring(5, 9);
  }
  return telefoneFormatado;
}

export function formatNumberToStringWithDecimalPlaces(value: number, minDigits: number = 2, maxDigits: number = 2): string {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: minDigits, maximumFractionDigits: maxDigits });
}

export function redirecionaRotaUtils(modulo: string, rota: string, router: Router) {
  router.navigate([modulo, rota]);
}

export function isValidDate(date: string, format: string) {
  return moment(date, format, true).isValid();
}

export function isAfterDate(date: string, format: string) {
  return moment(date, format, true).isAfter(moment());
}

export function isBeforeDate(date: string, format: string) {
  return moment(date, format, true).isBefore(moment());
}

export function isSameOrAfterDate(date: string, format: string, unitOfTime?) {
  return moment(date, format, true).isSameOrAfter(moment().startOf(unitOfTime));
}

export function getDataAtual(format: string) {
  return moment().format(format);
}

export function getDataFromPattern(format: string, date: string) {
  return moment(date, format, true);
}

export function removeElementosObj(object: any): any {
  for (const key in object) {
    if (objIsEmptyDeep(object[key])) {
      delete object[key];
    }
  }
  return object;
}

export function resetValidations(form: FormGroup): void {
  Object.keys(form.controls).forEach(field => {
    const control = form.get(field);
    if (control instanceof FormControl) {
      control.markAsPristine();
      control.clearAsyncValidators();
      control.clearValidators();
      control.updateValueAndValidity();
    }
  });
}

export function removeZerosEsquerda(valor: string): string {
  if (strIsEmpty(valor)) {
    return "";
  }
  return valor.replace(/^0+/, "");
}

export function getNomeReduzido(nome: string): string {
  if (nome.indexOf(" ") !== -1) {
    const nomeArray = nome.split(" ");
    return nomeArray[0] + " " + nomeArray[nomeArray.length - 1];
  }
  return nome;
}

// Abrevia o sobrenome mantendo o ultimo sobrenome sem abreviar
export function abreviaSobrenome(nome: string, limiteCaracteres: number) {
  if (nome.length > limiteCaracteres) {
    const nomeSeparado = nome.split(" ");
    let nomeReduzido = nome;
    for (let i = nomeSeparado.length - 2; i > 0; i--) {
      if (nomeReduzido.length > limiteCaracteres) {
        nomeSeparado[i] = nomeSeparado[i].substring(0, 1) + ".";
        nomeReduzido = nomeSeparado.join(" ");
      } else {
        break;
      }
    }
    return nomeReduzido;
  } else {
    return nome;
  }
}

export function validaString(string: string) {
  string = string.replace("-", "")
  return string.normalize("NFD").replace(/  [\u0300-\u036f]/g, "");
}

export function verificarAtributo(atributo: string, dados: DadoAtualizar[]) {
  const dadoUtilizado = dados.find(dado => dado.chave === atributo);
  if (dadoUtilizado) {
    return dadoUtilizado.valor;
  } else {
    return "";
  }
}
/**
 * retorna a conta formatada com digito EX: 0000000000007413
 * @param  {string} numeroConta
 * @returns 000000000000741-3
 */
export function formataContaAddDigito(numeroConta: string): string {
  return numeroConta.replace(/(?=\d$)/, "-");
}

/**
 * retorno um número de telefone com codigo do pais e DD Ex: +5517985654523
 * @param  {string} telefone
 * @returns +55 (17) 98565-4523
 */
export function formataTelefoneCodigo(telefone: string): string {
  return telefone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/g, "$1 ($2) $3-$4");
}

export function transformCpfCnpj(chave: string): string {
  if (!chave && chave.length < 10) {
    return chave;
  }

  if (chave.length <= 11) {
    return mascaraCpf(chave);
  }

  return mascaraCnpj(chave);
}


export function mascaraCpf(cpf: string): string {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
}

export function mascaraCnpj(cnpj: string): string {
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");
}

export function mascaraCep(cep: string): string {
  return cep.replace(/(\d{5})(\d{3})/g, "\$1\-\$2");
}

export function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - 150;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export function validAttrNumber(value: any) {
  if (objIsNotEmpty(value)) {
    return value;
  }
  return 0;
}

export function dias() {
  return { su: "Dom", mo: "Seg", tu: "Ter", we: "Qua", th: "Qui", fr: "Sex", sa: "Sab" };
};

export function meses() {
  return { 1: "Jan", 2: "Fev", 3: "Mar", 4: "Abr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Ago", 9: "Set", 10: "Out", 11: "Nov", 12: "Dez" };
}

export function fromMilisegundosToHoraMinutoSegundo(milliseconds: number, zeroEsquerda: boolean) {
  function pad(num) {
    return `${ num }`.padStart(2, "0");
  }
  const asSeconds = milliseconds / 1000;

  let hours;
  let minutes = Math.floor(asSeconds / 60);
  const seconds = Math.floor(asSeconds % 60);

  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    minutes %= 60;
  }

  return hours
    ? `${ zeroEsquerda ? pad(hours) : hours }:${ pad(minutes) }:${ pad(seconds) }`
    : `${ zeroEsquerda ? pad(minutes) : minutes }:${ pad(seconds) }`;
}

export function isOnlyNumbers(texto: string): boolean {
  if (texto) {
    texto = String(texto).trim();
    return /^\d+$/.test(texto);
  }
}

export const hasRequiredField = (abstractControl: AbstractControl): boolean => {
  if (abstractControl.validator) {
      const validator = abstractControl.validator({}as AbstractControl);
      if (validator && validator.required) {
          return true;
      }
  }
  if (abstractControl['controls']) {
      for (const controlName in abstractControl['controls']) {
          if (abstractControl['controls'][controlName]) {
              if (hasRequiredField(abstractControl['controls'][controlName])) {
                  return true;
              }
          }
      }
  }
  return false;
};