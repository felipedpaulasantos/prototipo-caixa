import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from "@angular/core";

@Component({
  selector: "cx-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.css"]
})
export class StepperComponent implements OnInit {

  @Input()
  freeNavigation = true;

  @Input()
  steps: string[] = [];

  @Input()
  currentStep = 0;

  @Output()
  changeStep: EventEmitter<number> = new EventEmitter();

  private readonly MAXIMUM_STEPS = 7;

  constructor() { }

  ngOnInit(): void {
    this.checkMaximumSteps();
  }

  toNextStep(): void {
    if ((this.currentStep + 1) < this.steps.length) {
      this.changeStep.emit(this.currentStep + 1);
    }
  }

  toPreviousStep(): void {
    if ((this.currentStep - 1) >= 0) {
      this.changeStep.emit(this.currentStep - 1);
    }
  }

  toStep(index: number): void {
    index = Number(index);
    if (index < this.currentStep && this.currentStep < (this.steps.length - 1)) {
      this.currentStep = index;
      this.changeStep.emit(index);
    }
  }

  private checkMaximumSteps(): void {
    if (this.steps && this.steps.length > this.MAXIMUM_STEPS) {
      this.steps = this.steps.slice(0, this.MAXIMUM_STEPS);
    }
  }

}
