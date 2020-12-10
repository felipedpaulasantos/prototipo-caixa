import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy,
  Output, EventEmitter, SimpleChanges, ChangeDetectorRef } from "@angular/core";
import { CardButtonCheckEvent } from './card-button-check-event';

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
  cardId = "";

  @Input()
  data: any = null;

  @Input()
  icon = "";

  @Input()
  leftLabel = "";

  @Input()
  leftText = "";

  @Output()
  checked: EventEmitter<CardButtonCheckEvent> = new EventEmitter();

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  updateChecked() {
    this.isChecked = !this.isChecked;
    this.emitChecked();
  }

  setChecked(checked: boolean) {
    this.isChecked = checked;
    this.changeDetector.detectChanges();
  }

  setCardId(cardId: string) {
    this.cardId = cardId;
    this.changeDetector.detectChanges();
  }

  setData(data: any) {
    this.data = data;
    this.changeDetector.detectChanges();
  }

  emitChecked() {
    const checkEvent: CardButtonCheckEvent = {
      isChecked: this.isChecked,
      cardId: this.cardId,
      data: this.data
    };
    this.checked.emit(checkEvent);
  }

}
