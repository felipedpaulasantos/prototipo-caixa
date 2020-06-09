import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'cx-input-feedback',
  templateUrl: './input-feedback.component.html',
  styleUrls: ['./input-feedback.component.css']
})
export class InputFeedbackComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() formInput: AbstractControl;
  @Input() optionalErrors: string;
  parsedOptionalErrors = [];

  Object = Object;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.optionalErrors) {
      const parsedErrors = JSON.parse(this.optionalErrors.trim());
      this.parsedOptionalErrors = parsedErrors;
    }
  }

  isRequired = (abstractControl: AbstractControl): boolean => {
    if (abstractControl.validator) {
      const validator = abstractControl.validator({}as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    if (abstractControl['controls']) {
      for (const controlName in abstractControl['controls']) {
        if (abstractControl['controls'][controlName]) {
          if (this.isRequired(abstractControl['controls'][controlName])) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
