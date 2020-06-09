import { Directive, HostListener, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
	selector: '[selectCaixa]'
})
export class SelectCaixaDirective {

	private keyPressed = new BehaviorSubject<number>(0);
	nativeElement: any;
	keyPressed$ = this.keyPressed.asObservable();
	focus = false;

	constructor(element: ElementRef) {
		this.nativeElement = element.nativeElement;
	}

	@HostListener("focus")
	onFocus() {
		this.focus = true;
	}

	@HostListener("blur")
	onBlur() {
		this.focus = false;
	}
}
