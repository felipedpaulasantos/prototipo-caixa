import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "cx-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.css"]
})
export class StepperComponent implements OnInit, OnChanges {

  @Input()
  navegacaoLivre = true;

  @Input()
  steps: string[] = [];

  @Input()
  stepAtual = 0;

  @Output()
  changeStep: EventEmitter<number> = new EventEmitter();

  private readonly MAXIMUM_STEPS = 7;

  constructor() { }

  ngOnInit(): void {
    this.checkMaximumSteps();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stepAtual'] != null) {
      const stepAtual = changes['stepAtual'].currentValue;
      this.stepAtual = Number(stepAtual);
    }
  }

  toNextStep(): void {
    if ((this.stepAtual + 1) < this.steps.length) {
      this.changeStep.emit(this.stepAtual + 1);
    }
  }

  toPreviousStep(): void {
    if ((this.stepAtual - 1) >= 0) {
      this.changeStep.emit(this.stepAtual - 1);
    }
  }

  toStep(index: number): void {
    index = Number(index);
    if (index < this.stepAtual && this.stepAtual < (this.steps.length - 1)) {
      this.stepAtual = index;
      this.changeStep.emit(index);
    }
  }

  private checkMaximumSteps(): void {
    if (this.steps && this.steps.length > this.MAXIMUM_STEPS) {
      this.steps = this.steps.slice(0, this.MAXIMUM_STEPS);
    }
  }

}
