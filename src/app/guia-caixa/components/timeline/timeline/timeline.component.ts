import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TimelineItem } from './timeline-item';

@Component({
  selector: 'cx-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent implements OnInit {

  constructor() { }

  @Input()
  items: TimelineItem[] = [];

  @Input()
  orientation = 1;

  currentStep;

  ngOnInit(): void {
  }

}
