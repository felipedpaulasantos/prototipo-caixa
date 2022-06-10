import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.css"]
})
export class StepperComponent {

    @Input()
    isSequencial = false;

    @Input()
    steps: {title?: string}[] = [];

    @Input()
    stepSelecionado = 0;

    @Output()
    changeStep: EventEmitter<any> = new EventEmitter();


    constructor() { }

    selecionarStep(index: number) {
        if (index < this.stepSelecionado && this.stepSelecionado < (this.steps.length - 1)) {
            this.stepSelecionado = index;
            this.changeStep.emit(index);
        }
    }

}
