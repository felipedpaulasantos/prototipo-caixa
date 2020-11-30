import {
  Component, OnInit, EventEmitter, Input, Output, ContentChildren,
  TemplateRef, SimpleChanges, OnChanges, ChangeDetectionStrategy,
  ChangeDetectorRef, AfterContentInit
} from '@angular/core';
import { TabberDirective } from './tabber-directive';
import { TabberItem } from './tabber-item';
import { TabberOrientation } from './tabber-orientation';

/** @class Componente Tabber para organizar conteúdo dinâmico ou estático em abas */
@Component({
  selector: 'cx-tabber',
  templateUrl: './tabber.component.html',
  styleUrls: ['./tabber.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabberComponent implements OnInit, OnChanges, AfterContentInit {

  /**
   * Quantidada mínima e máxima de abas permitida
  */
  readonly MINIMUM_TABS = 2;
  readonly MAXIMUM_TABS = 7;

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
   * Orientação das abas, podendo ser horizontal ou vertical.
   * @param {TabberOrientation} orientation Enum com valores Horizontal e Vertical.
  */
  @Input()
  orientation = TabberOrientation.Horizontal;

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
   * Tema de cor dos ícones
   * @param {string} theme Nome do tema. Padrão = 'primary'.
   * Outras opções: 'secondary', 'info', 'warning', 'danger', 'light', 'dark'.
  */
  @Input()
  theme = "primary";

  /**
   * Evento que transmite o index da nova aba atual após ser selecionada.
   * @param {string | number} changeTab Index da nova aba selecionada.
  */
  @Output()
  changeTab: EventEmitter<number> = new EventEmitter();

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void { }

  /**
    Adotando a estratégia OnPush para melhor performance,
    valida-se o valor informado para a propriedade tabs
    e apenas atualiza a view caso o valor seja válido
  */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tabs']) {
      const newTabs: any[] = changes['tabs'].currentValue;
      if (newTabs.length >= this.MINIMUM_TABS && newTabs.length > this.MAXIMUM_TABS) {
        this.tabs = newTabs.slice(0, this.MAXIMUM_TABS);
        this.changeDetector.detectChanges();
      }
    }
  }

  /**
   * Inicializa os templates
  */
  ngAfterContentInit(): void {
    this.changeDetector.detectChanges();
  }

  /**
   * Salta para a aba de index indicado
   * @param {string | number} index Index da nova aba a ser selecionada.
  */
  toTabByIndex(index: number): void {
    if (index != null && index != undefined && index < this.tabs.length) {
      this.currentTab = index;
      this.changeTab.emit(index);
      this.changeDetector.detectChanges();
    }
  }

  /**
   * Salta para a próxima aba
  */
  next(): void {
    if ((this.currentTab + 1) < this.tabs.length) {
      this.currentTab += 1;
      this.changeTab.emit(this.currentTab);
      this.changeDetector.detectChanges();
    }
  }

  /**
   * Salta para a aba anterior
  */
  previous(): void {
    if ((this.currentTab - 1) >= 0) {
      this.currentTab -= 1;
      this.changeTab.emit(this.currentTab);
      this.changeDetector.detectChanges();
    }
  }

  /**
   * Salta para a primeira aba
  */
  first(): void {
    this.currentTab = 0;
    this.changeTab.emit(this.currentTab);
    this.changeDetector.detectChanges();
  }

  /**
   * Salta para a última aba
  */
  last(): void {
    this.currentTab = this.tabs.length - 1;
    this.changeTab.emit(this.currentTab);
    this.changeDetector.detectChanges();
  }


  getTema(isActive: boolean) {
    return isActive ? `bg-${this.theme}` : '';
  }

}
