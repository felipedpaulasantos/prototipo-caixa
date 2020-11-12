import { Component, OnInit, ElementRef, AfterContentInit, ChangeDetectorRef, ViewChild, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-card-caixa',
  templateUrl: './card-caixa.component.html',
  styleUrls: ['./card-caixa.component.scss'],
  host: { 'class': 'card card-caixa' }
})
export class CardCaixaComponent implements OnInit, AfterContentInit {

  @ViewChild("moveButton", { static: true })
  moveButton: ElementRef;

  @Input()
  draggable: boolean = false;
  expandable: boolean = true;

  cardElement: any;

  isFullscreen: boolean = false;
  originalTopPosition: any;
  originalLeftPosition: any;
  originalHeight: any;
  originalWidth: any;
  wasMoved: boolean = false;
  pos1 = 0;
  pos2 = 0;
  pos3 = 0;
  pos4 = 0;

  constructor(
    element: ElementRef,
    private renderer: Renderer2
  ) {
    this.cardElement = element.nativeElement;
  }

  ngOnInit(): void {
    
  }

  ngAfterContentInit() {
    if (this.draggable) this.dragElement();
  }

  setOriginalPosition(): void {
    this.originalTopPosition = this.cardElement.style.top;
    this.originalLeftPosition = this.cardElement.style.left;

    console.log(this.cardElement);
  }

  setOriginalSize(): void {
    this.originalHeight = this.cardElement.offsetHeight + "px";
    this.originalWidth = this.cardElement.offsetWidth + "px";

    this.renderer.setStyle(this.cardElement, "minHeight", this.originalHeight);
    this.renderer.setStyle(this.cardElement, "height", this.originalHeight);
    this.renderer.setStyle(this.cardElement, "maxHeight", this.originalHeight);

    this.renderer.setStyle(this.cardElement, "minWidth", this.originalWidth);
    this.renderer.setStyle(this.cardElement, "width", this.originalWidth);
    this.renderer.setStyle(this.cardElement, "maxWidth", this.originalWidth);

    console.log("TESTE", this.cardElement.style.height);
  }

  resetOriginalPosition(): void {
    this.cardElement.style.left = this.originalLeftPosition;
    this.cardElement.style.top = this.originalTopPosition;
    this.cardElement.style.position = "relative";
    this.wasMoved = false;
  }

  toggleFullscreen(): void {

    if (!this.cardElement) return;

    if (this.checkFullscreen()) {
      document.exitFullscreen().then(() => this.isFullscreen = false);
    } else {
      if (this.cardElement.requestFullscreen) {
        this.cardElement.requestFullscreen();
        this.isFullscreen = true;
      }
    }
  }

  checkFullscreen(): boolean {
    if (document.fullscreenElement ||
      document["webkitFullscreenElement"] ||
      document["mozFullScreenElement"])
      return true;
    else
      return false;
  }

  dragElement(): void {

    this.setOriginalPosition();
    this.setOriginalSize();

    const elmnt = this.cardElement;
    console.log("ELEMENT", this.cardElement);

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (this.moveButton.nativeElement) {
      // if present, the header is where you move the DIV from:
      this.moveButton.nativeElement.onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      elmnt.style.position = "absolute";
      elmnt.style.minHeight = this.originalHeight;
      elmnt.style.minWidth = this.originalWidth;
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  dragElementeee(): void {
    if (this.moveButton.nativeElement) {
      // if present, the header is where you move the DIV from:
      this.moveButton.nativeElement.onmousedown = this.dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      this.cardElement.onmousedown = this.dragMouseDown;
    }
  }

  dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    document.onmouseup = this.closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = this.elementDrag;
  }

  elementDrag(e) {
    this.cardElement.style.position = "absolute";
    this.wasMoved = true;
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    this.pos1 = this.pos3 - e.clientX;
    this.pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    // set the element's new position:
    this.cardElement.style.top = (this.cardElement.offsetTop - this.pos2) + "px";
    this.cardElement.style.left = (this.cardElement.offsetLeft - this.pos1) + "px";
  }

  closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

}
