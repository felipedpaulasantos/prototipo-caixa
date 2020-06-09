import { Component, OnInit, Input, SimpleChanges, OnChanges, Renderer2,
  ViewChild, ElementRef, ContentChild, HostBinding } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { InputCaixaDirective } from './input-caixa.directive';

@Component({
  selector: 'cx-input-caixa',
  templateUrl: './input-caixa.component.html',
  styleUrls: ['./input-caixa.component.scss']
})
export class InputCaixaComponent implements OnInit, OnChanges {

  constructor(
    private renderer: Renderer2
  ) { }

  @ContentChild(InputCaixaDirective, { read: InputCaixaDirective, static: true })
  inputDirective: InputCaixaDirective;

  @ViewChild("wrapper", { read: ElementRef, static: true })
  wrapper;

  @Input() formInput: AbstractControl;
  @Input() optionalErrors: string;
  @Input() formato: string;
  @Input() msgErroPadrao: string;
  parsedOptionalErrors = [];

  Object = Object;

  isRequired = false;

  ngOnInit() {
    this.isRequired = this.isFieldRequired(this.formInput);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.optionalErrors) {
      const parsedErrors = JSON.parse(this.optionalErrors.trim());
      this.parsedOptionalErrors.push(parsedErrors);
    }
  }

  isFieldRequired(abstractControl: AbstractControl): boolean {

    if (abstractControl && abstractControl.validator) {
      const validator = abstractControl.validator({}as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    if (abstractControl && abstractControl['controls']) {
      for (const controlName in abstractControl['controls']) {
        if (abstractControl['controls'][controlName]) {
          if (this.isFieldRequired(abstractControl['controls'][controlName])) {
            return true;
          }
        }
      }
    }
    if (this.inputDirective && this.inputDirective.element
      && this.inputDirective.element.nativeElement && this.inputDirective.element.nativeElement.required) {
      return true;
    }
    return false;
  }

  isFieldValid(): boolean {
    if (this.formInput) {
      return this.formInput.valid;
    } else {
      if (this.inputDirective && this.inputDirective.element && this.inputDirective.element.nativeElement) {
        return this.inputDirective.changed && (this.inputDirective.element.nativeElement.classList.contains("ng-valid"));
      }
    }
    return false;
  }

  resetField() {
    if (this.formInput) {
      this.formInput.reset();
    } else {
      this.inputDirective.changed = false;
      this.inputDirective.element.nativeElement.value = "";
    }
  }

  @HostBinding("class.input-caixa-focused")
  get focus() {

    if (this.inputDirective && this.inputDirective.focused) {
      this.renderer.addClass(this.wrapper.nativeElement, "focused");
    } else {
      this.renderer.removeClass(this.wrapper.nativeElement, "focused");
    }

    return this.inputDirective ? this.inputDirective.focused : false;
  }

  @HostBinding("class.ng-invalid")
  get invalid() {
    if (this.formInput) {
      if (this.formInput.touched && this.formInput.invalid) {
        return "ng-invalid ng-touched";
      }
    } else {
      if (this.inputDirective && this.inputDirective.changed && !this.isFieldValid()) {
        return "ng-invalid ng-touched";
      }
    }
  }

  @HostBinding("class.ng-valid")
  get valid() {
    if (this.formInput) {
      if (this.formInput.touched && this.formInput.valid) {
        return "ng-valid ng-touched";
      }
    } else {
      if (this.inputDirective && this.inputDirective.changed && this.isFieldValid()) {
        return "ng-valid ng-touched";
      }
    }
  }

}
