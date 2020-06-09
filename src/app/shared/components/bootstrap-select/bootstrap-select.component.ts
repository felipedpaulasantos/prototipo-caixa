import { Component, Input, ViewChild, AfterViewInit, OnInit } from '@angular/core';

declare let $: any;

enum LiveSearchStyle {
  contains = "contains",
  startsWith = "startsWith"
}

interface BootstrapSelectOptions {
  bootstrapVersion?: string;
  actionsBox?: boolean;
  container?: boolean;
  liveSearch?: boolean;
  liveSearchNormalize?: boolean;
  liveSearchPlaceholder?: string;
  liveSearchStyle?: LiveSearchStyle;
  mobile?: boolean;
  multipleSeparator?: string;
  noneSelectedText?: string;
  noneResultsText?: string;
  selectAllText?: string;
  style?: string;
  tickIcon?: string;
  width?: string | boolean;
}

@Component({
  selector: 'cx-bs-select',
  templateUrl: './bootstrap-select.component.html',
  styleUrls: ['./bootstrap-select.component.css']
})
export class BootstrapSelectComponent implements OnInit, AfterViewInit {

  defaultOptions: BootstrapSelectOptions = {
    bootstrapVersion: '4',
    actionsBox: false,
    container: false,
    liveSearch: false,
    liveSearchNormalize: false,
    liveSearchPlaceholder: null,
    liveSearchStyle: LiveSearchStyle.contains,
    mobile: true,
    multipleSeparator: ', ',
    noneSelectedText: 'Nenhuma opção selecionada',
    noneResultsText: 'Nenhum resultado encontrado',
    selectAllText: 'Selecionar todos',
    style: 'form-control input-caixa',
    tickIcon: 'fa fa-check',
    width: false
  };

  @Input() options: BootstrapSelectOptions = {};


  constructor() {
/*     $.fn.selectpicker.Constructor.BootstrapVersion = '4';
    $.fn.selectpicker.Constructor.actionsBox = false;
    $.fn.selectpicker.Constructor.DEFAULTS.liveSearch = false;
    $.fn.selectpicker.Constructor.DEFAULTS.noneSelectedText = 'Nenhuma opção selecionada';
    $.fn.selectpicker.Constructor.DEFAULTS.noneResultsText = 'Nenhum resultado encontrado';
    $.fn.selectpicker.Constructor.DEFAULTS.style = 'form-control input-caixa'; */
  }

  ngOnInit(): void {
    $.fn.selectpicker.Constructor.BootstrapVersion = this.options.bootstrapVersion || this.defaultOptions.bootstrapVersion;
    $.fn.selectpicker.Constructor.actionsBox = this.options.actionsBox || this.defaultOptions.actionsBox;
    $.fn.selectpicker.Constructor.DEFAULTS.liveSearch = this.options.liveSearch || this.defaultOptions.liveSearch;
    $.fn.selectpicker.Constructor.DEFAULTS.multipleSeparator = this.options.multipleSeparator || this.defaultOptions.multipleSeparator;
    $.fn.selectpicker.Constructor.DEFAULTS.noneSelectedText = this.options.noneSelectedText || this.defaultOptions.noneSelectedText;
    $.fn.selectpicker.Constructor.DEFAULTS.noneResultsText = this.options.noneResultsText || this.defaultOptions.noneResultsText;
    $.fn.selectpicker.Constructor.DEFAULTS.selectAllText = this.options.selectAllText || this.defaultOptions.selectAllText;
    $.fn.selectpicker.Constructor.DEFAULTS.style = this.options.style || this.defaultOptions.style;
    $.fn.selectpicker.Constructor.DEFAULTS.width = this.options.width || this.defaultOptions.width;
  }

  ngAfterViewInit(): void {
    this.initialize();
  }

  initialize() {
    $('.select-caixa').selectpicker('refresh');
  }
}
