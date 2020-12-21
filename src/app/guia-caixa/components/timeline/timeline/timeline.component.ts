import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TimelineItem, TimelineOrientation } from './timeline-item';

interface StateIcon {
  state: string;
  icon: string;
}

@Component({
  selector: 'cx-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent implements OnInit {

  readonly SUCCESS_STATE: StateIcon = { state: "success", icon: "fa fa-check" };
  readonly INFO_STATE: StateIcon = { state: "info", icon: "fa fa-info" };
  readonly WARNING_STATE: StateIcon = { state: "warning", icon: "fa fa-exclamation" };
  readonly ERROR_STATE: StateIcon = { state: "error", icon: "fa fa-times" };
  readonly NONE_STATE: StateIcon = { state: "none", icon: "fa fa-question" };

  readonly timelineOrientation = TimelineOrientation;

  constructor() { }

  /**
   * Array de objetos do tipo TimelineItem com os seguintes atributos:
   * - title (string): Título do item
   * - state (string | TimelineState): Estado visual do item, podendo ser 'success', 'info', 'warning' ou 'error'
   * - dateText (string): Texto representando a data de ocorrência do item
   * - onClick (function) - Atributo opcional que define uma ação a ser executada ao clicar no item
  */
  @Input()
  items: TimelineItem[] = [];

  /**
   * Orientação da timeline, podendo ser horizontal ou vertical.
   * Padrão: Vertical / 1
  */
  @Input()
  orientation: TimelineOrientation = TimelineOrientation.VERTICAL;

  ngOnInit(): void { }

  /**
   * Formata o texto a ser exibido no atributo [title] do timeline-item
  */
  getFormattedText(item: TimelineItem): string {
    if (!item || !item.title || !item.dateText) { return ""; }

    return `${item.title} - ${item.dateText}`;
  }

}
