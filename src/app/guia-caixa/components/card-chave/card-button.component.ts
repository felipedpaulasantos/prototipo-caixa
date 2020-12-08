import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy,
  Output, EventEmitter, SimpleChanges, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "cx-card-button",
  templateUrl: "./card-button.component.html",
  styleUrls: ["./card-button.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardButtonComponent implements OnInit, OnChanges {

  @Input()
  isChecked = false;

  @Input()
  icon = "";

  @Input()
  label = "";

  @Output()
  checked: EventEmitter<boolean> = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  toggleChecked() {
    this.isChecked = !this.isChecked;
    this.checked.emit(this.isChecked);
  }

  setChecked(checked: boolean) {
    this.isChecked = checked;
    this.cdr.detectChanges();
  }

}
