import { FormGroup, FormControl } from "@angular/forms";
import { isValidDate, isAfterDate } from "./utils";

export class FormularioValidacao {

  form: FormGroup;

  isFieldValid(field: string) {
      return this.form.get(field).invalid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      "has-error": this.isFieldValid(field)
    };
  }

  validateAllFormFields() {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      if (control instanceof FormControl) {
        if ((!control.dirty && control.invalid) || (control.dirty && control.invalid)) {
          control.markAsTouched({ onlySelf: true });
        }
      }
    });
  }

  resetValidations() {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      if (control instanceof FormControl) {
        control.clearAsyncValidators();
        control.clearValidators();
        control.updateValueAndValidity();
      }
    });
  }

  validarData(formulario, campo, mascaraData, checkAfter) {
    const data = formulario.controls[campo].value;
    const isValid = isValidDate(data, mascaraData);
    if (!isValid || (checkAfter && isAfterDate(data, mascaraData))) {
      formulario.controls[campo].setErrors({"incorrect": true});
      formulario.controls[campo].updateValueAndValidity();
    } else {
      formulario.controls[campo].setErrors(null);
      formulario.controls[campo].updateValueAndValidity();
    }
  }
}
