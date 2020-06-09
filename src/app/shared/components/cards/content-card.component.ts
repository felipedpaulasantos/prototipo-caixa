import { Component, Input, Renderer2, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  constructor(
    private renderer: Renderer2
  ) {}

  @ViewChild('card', { static: true }) card: ElementRef;
  @Input() header: string = null;
  @Input() footer: string = null;
  @Input() optionalClasses: string = null;

  ngOnInit() {
    if (this.optionalClasses) {
      this.renderer.addClass(this.card.nativeElement, this.optionalClasses);
    }
  }

}
