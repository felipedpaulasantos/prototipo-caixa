import { Directive, Input } from '@angular/core';

@Directive({
   selector: '[tabber]',
})
export class TabberDirective {

   @Input('tabber')
   tabId: any;

   constructor() {}
 }
