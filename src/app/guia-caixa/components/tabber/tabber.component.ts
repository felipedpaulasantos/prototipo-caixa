import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output, ContentChildren, TemplateRef } from '@angular/core';
import { TabberDirective } from './tabber-directive';
import { TabberItem } from './tabber-item';

/** @class Componente Tabber para organizar conteúdo dinâmico ou estático em abas */
@Component({
  selector: 'cx-tabber',
  templateUrl: './tabber.component.html',
  styleUrls: ['./tabber.component.css']
})
export class TabberComponent implements OnInit {

  /**
   * Mapeia as templates dinâmicas com a diretiva *tabber, caso seja usada a variante de comportamento contentInside;
   */
  @ContentChildren(TabberDirective, { read: TemplateRef })
  templates: TemplateRef<any>[];

  /**
   * Indica se o conteúdo das abas será inserido dentro do componente, ou se estará desacoplado.
   * @param {boolean} contentInside Verdadeiro para conteúdo interno.
  */
  @Input()
  contentInside = false;

  /**
   * Lista das abas, com sua descrição e ícone.
   * @param {TabberItem[]} tabs Array de objetos TabberItem representando as abas.
  */
  @Input()
  tabs: TabberItem[] = [];

  /**
   * Index da aba atual que pode ser alterado diretamente, pelos métodos de navegação ou clicando nas abas.
   * @param {string | number} currentTab Index da aba atual.
  */
  @Input()
  currentTab = 0;

  /**
   * Evento que transmite o index da nova aba atual após ser selecionada.
   * @param {string | number} changeTab Index da nova aba selecionada.
  */
  @Output()
  changeTab: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  /**
   * Salta para a aba de index indicado
   * @param {string | number} index Index da nova aba a ser selecionada.
  */
  toTabByIndex(index: number): void {
    if (index != null && index != undefined && index < this.tabs.length) {
      this.currentTab = index;
      this.changeTab.emit(index);
    }
  }

  /**
   * Salta para a próxima aba
  */
  next(): void {
    if ((this.currentTab + 1) < this.tabs.length) {
      this.currentTab += 1;
      this.changeTab.emit(this.currentTab);
    }
  }

  /**
   * Salta para a aba anterior
  */
  previous(): void {
    if ((this.currentTab - 1) >= 0) {
      this.currentTab -= 1;
      this.changeTab.emit(this.currentTab);
    }
  }

  /**
   * Salta para a primeira aba
  */
  first(): void {
    this.currentTab = 0;
    this.changeTab.emit(this.currentTab);
  }

  /**
   * Salta para a última aba
  */
  last(): void {
    this.currentTab = this.tabs.length - 1;
    this.changeTab.emit(this.currentTab);
  }

}
