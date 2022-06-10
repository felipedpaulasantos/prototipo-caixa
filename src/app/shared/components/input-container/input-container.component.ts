import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  OnInit
} from "@angular/core";
import { FormControlName, NgModel } from "@angular/forms";

@Component({
  selector: "app-input-container",
  templateUrl: "./input-container.component.html",
  styleUrls: ["./input-container.component.css"]
})
export class InputContainerComponent implements OnInit, AfterContentInit {
  @Input()
  errorMessage: string;
  @Input()
  errorMaxMessage: string;
  @Input()
  errorMinMessage: string;
  @Input()
  errorMinLengthMessage: string;
  @Input()
  errorValueInListMessage: string;
  @Input()
  errorPatternMessage: string;
  @Input()
  label: string;

  input: any;

  @ContentChild(NgModel, {static: false})
  model: NgModel;
  @ContentChild(FormControlName, {static: false})
  control: FormControlName;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.input = this.model || this.control;
    if (this.input === undefined) {
      throw new Error(
        "Esse componente precisa ser usado com uma diretiva ngModel ou formControlName"
      );
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
