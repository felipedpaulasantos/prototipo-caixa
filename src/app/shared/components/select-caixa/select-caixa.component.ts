import { Component, OnInit, Input, AfterViewInit, ContentChild, ViewChild, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { SelectCaixaDirective } from './select-caixa.directive';
import { AbstractControl } from '@angular/forms';

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
  selector: 'cx-select',
  templateUrl: './select-caixa.component.html',
  styleUrls: ['./select-caixa.component.scss']
})
export class SelectCaixaComponent implements OnInit, AfterViewInit {

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

  @Input() formInput: AbstractControl;

  @Input() options: BootstrapSelectOptions = {};

  @ContentChild(SelectCaixaDirective, { read: SelectCaixaDirective, static: true })
  input: SelectCaixaDirective;

  @ViewChild("wrapper", { read: ElementRef, static: true })
  wrapper;

  constructor(
    private renderer: Renderer2
  ) { }

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
    // $('select').selectpicker('refresh');

    if (this.input && this.input.nativeElement) {
      $(this.input.nativeElement).selectpicker("refresh");
    }
  }

  isRequired = (abstractControl: AbstractControl): boolean => {
    if (abstractControl.validator) {
      const validator = abstractControl.validator({}as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    if (abstractControl['controls']) {
      for (const controlName in abstractControl['controls']) {
        if (abstractControl['controls'][controlName]) {
          if (this.isRequired(abstractControl['controls'][controlName])) {
            return true;
          }
        }
      }
    }
    return false;
  }

  @HostBinding("class.input-caixa-focused")
  get focus() {
    if (this.input && this.input.focus) {
      this.renderer.addClass(this.wrapper.nativeElement, "focused");
    } else {
      this.renderer.removeClass(this.wrapper.nativeElement, "focused");
    }
    return this.input ? this.input.focus : false;
  }

  @HostBinding("class.ng-invalid")
  get invalid() {
    if (this.formInput && this.formInput.touched && this.formInput.invalid) {
      console.log("Teste", this.wrapper.nativeElement);
      this.renderer.addClass(this.wrapper.nativeElement, "ng-invalid");
      return "ng-invalid ng-touched";
    }
  }

  @HostBinding("class.ng-valid")
  get valid() {
    if (this.formInput && this.formInput.touched && this.formInput.valid) {
      this.renderer.addClass(this.wrapper.nativeElement, "ng-valid");
      return "ng-valid ng-touched";
    }
  }

  reset() {
    if (this.formInput) {
      this.formInput.reset();
    }
    this.initialize();
  }

}
