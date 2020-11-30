import { Directive, Input } from '@angular/core';

@Directive({
   selector: '[stepper]',
})
export class StepperDirective {

   @Input('stepper')
   tabId: any;

   constructor() { }
}
