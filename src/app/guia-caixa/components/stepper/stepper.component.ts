import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "cx-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.css"]
})
export class StepperComponent implements OnChanges {

    @Input()
    isNavFree = false;

    @Input()
    steps: string[] = [];

    @Input()
    stepAtual = 0;

    @Output()
    changeStep: EventEmitter<number> = new EventEmitter();

    private readonly MAXIMUM_STEPS = 7;

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
      this.checkMaximumSteps();
    }

    checkMaximumSteps(): void {
      if (this.steps && this.steps.length > this.MAXIMUM_STEPS) {
        this.steps = this.steps.slice(0, this.MAXIMUM_STEPS);
      }
    }

    selecionarStep(index: number): void {
        if (index < this.stepAtual && this.stepAtual < (this.steps.length - 1)) {
            this.stepAtual = index;
            this.changeStep.emit(index);
        }
    }

}
