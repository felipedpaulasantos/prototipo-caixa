import { Component, OnInit, Input, AfterViewInit, ContentChild,
  ViewChild, ElementRef, HostBinding, Renderer2, AfterContentInit } from '@angular/core';
import { SelectCaixaDirective } from './select-caixa.directive';
import { AbstractControl, NgControl, FormControlName } from '@angular/forms';

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
export class SelectCaixaComponent implements OnInit, AfterViewInit, AfterContentInit {

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
    style: 'input-caixa',
    tickIcon: 'fa fa-check',
    width: false
  };

  @Input() options: BootstrapSelectOptions = {};

  @Input() showFeedback = true;

  @ContentChild(NgControl, { read: NgControl, static: true })
  ngControlDirective: NgControl;

  @ContentChild(FormControlName, { read: FormControlName, static: true })
  formControlDirective: FormControlName;

  @ContentChild(SelectCaixaDirective, { read: SelectCaixaDirective, static: true })
  selectDirective: SelectCaixaDirective;

  @ViewChild("wrapper", { read: ElementRef, static: true })
  wrapper;

  formInput: AbstractControl;
  isRequired = false;
  nativeElement: any;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.setBootstrapSelectDefault();
  }

  ngAfterViewInit(): void {
    this.initialize();
  }

  ngAfterContentInit(): void {
    if (this.formControlDirective) {
      this.formInput = this.formControlDirective.control;
    } else if (this.ngControlDirective) {
      this.formInput = this.ngControlDirective.control;
    }
    this.isRequired = this.isFieldRequired(this.formInput);

    if (this.selectDirective && this.selectDirective.nativeElement && this.selectDirective.nativeElement.nativeElement) {
      this.nativeElement = this.selectDirective.nativeElement.nativeElement;
    }
  }

  initialize() {
    // $('select').selectpicker('refresh');

    if (this.selectDirective && this.selectDirective.nativeElement) {
      $(this.selectDirective.nativeElement).selectpicker("refresh");
    }
  }

  isFieldRequired(abstractControl: AbstractControl): boolean {
    if (abstractControl && abstractControl.validator) {
      const validator = abstractControl.validator({}as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    if (abstractControl && abstractControl['controls']) {
      for (const controlName in abstractControl['controls']) {
        if (abstractControl['controls'][controlName]) {
          if (this.isFieldRequired(abstractControl['controls'][controlName])) {
            return true;
          }
        }
      }
    }
    if (this.nativeElement && this.nativeElement.required) {
      return true;
    }
    return false;
  }

  @HostBinding("class.input-caixa-focused")
  get focus() {
    if (this.selectDirective && this.selectDirective.focus) {
      this.renderer.addClass(this.wrapper.nativeElement, "focused");
    } else {
      this.renderer.removeClass(this.wrapper.nativeElement, "focused");
    }
    return this.selectDirective ? this.selectDirective.focus : false;
  }

  @HostBinding("class.ng-invalid")
  get invalid() {
    if (this.formInput && this.formInput.touched && this.formInput.invalid) {
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

  setBootstrapSelectDefault() {
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

}
