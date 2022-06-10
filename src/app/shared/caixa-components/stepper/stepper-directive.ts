import { Directive, Input } from "@angular/core";

@Directive({
   // eslint-disable-next-line @angular-eslint/directive-selector
   selector: "[cxStepper]",
})
export class StepperDirective {

   @Input("cxStepper")
   stepId: any;

   constructor() { }
}
