import { Component, OnInit, Input, SimpleChanges, OnChanges, Renderer2,
  ViewChild, ElementRef, ContentChild, HostBinding, AfterContentInit } from '@angular/core';
import { AbstractControl, NgControl, FormControlName } from '@angular/forms';

import { InputCaixaDirective } from './input-caixa.directive';

@Component({
  selector: 'cx-input-caixa',
  templateUrl: './input-caixa.component.html',
  styleUrls: ['./input-caixa.component.scss']
})
export class InputCaixaComponent implements OnInit, OnChanges, AfterContentInit {

  constructor(
    private renderer: Renderer2
  ) { }

  Object = Object;

  @ContentChild(InputCaixaDirective, { read: InputCaixaDirective, static: true })
  inputDirective: InputCaixaDirective;

  @ContentChild(NgControl, { read: NgControl, static: true })
  ngControlDirective: NgControl;

  @ContentChild(FormControlName, { read: FormControlName, static: true })
  formControlDirective: FormControlName;

  @ViewChild("wrapper", { read: ElementRef, static: true })
  wrapper;

  @Input() optionalErrors: string;
  @Input() formato: string;
  @Input() msgErroPadrao: string;
  parsedOptionalErrors = [];

  formInput: AbstractControl;
  isRequired = false;
  nativeElement: any;

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    if (this.formControlDirective) {
      this.formInput = this.formControlDirective.control;
    } else if (this.ngControlDirective) {
      this.formInput = this.ngControlDirective.control;
    }
    this.isRequired = this.isFieldRequired(this.formInput);

    if (this.inputDirective && this.inputDirective.element && this.inputDirective.element.nativeElement) {
      this.nativeElement = this.inputDirective.element.nativeElement;
    }
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
    if (this.nativeElement && this.nativeElement.required) {
      return true;
    }
    return false;
  }

  isFieldValid(): boolean {
    if (this.formInput) {
      return this.formInput.valid;
    } else {
      if (this.nativeElement) {
        return this.inputDirective.changed && (this.nativeElement.classList.contains("ng-valid"));
      }
    }
    return false;
  }

  resetField() {
    if (this.formInput) {
      this.formInput.reset();
    } else if (this.inputDirective) {
      this.inputDirective.changed = false;
      this.nativeElement.value = "";
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
