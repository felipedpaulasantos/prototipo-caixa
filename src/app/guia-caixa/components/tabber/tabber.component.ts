import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

export interface TabberItem {
  name: string;
  icon: string;
}

@Component({
  selector: 'cx-tabber',
  templateUrl: './tabber.component.html',
  styleUrls: ['./tabber.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabberComponent implements OnInit {

  @Input()
  tabs: TabberItem[] = [];

  @Input()
  currentTab = 0;

  @Output()
  changeTab: EventEmitter<number> = new EventEmitter();

  private readonly MAXIMUM_STEPS = 5;

  constructor() { }

  ngOnInit(): void { }

  toTabByIndex(index: number): void {
    if (index < this.tabs.length) {
      console.log("teste");
      this.currentTab = index;
      this.changeTab.emit(index);
    }
  }

/*   toTabByName(tabname: string): void {
    this.tabs.indexOf(tabname => {
      
    });
  } */

}
