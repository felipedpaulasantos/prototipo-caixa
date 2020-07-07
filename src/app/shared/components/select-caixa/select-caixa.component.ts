import { Component, OnInit, Input, AfterViewInit, ContentChild,
  ViewChild, ElementRef, HostBinding, Renderer2, AfterContentInit, SimpleChanges, OnChanges } from '@angular/core';
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
  deselectAllText?: string;
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
export class SelectCaixaComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit {

  defaultOptions: BootstrapSelectOptions = {
    bootstrapVersion: '4',
    actionsBox: false,
    container: false,
    deselectAllText: 'Remover seleção',
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

  Object = Object;

  @Input() options: BootstrapSelectOptions = {};
  @Input() initTrigger = false;
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
  private nativeElement: any;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.setBootstrapSelectDefault();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
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

    if (this.selectDirective && this.selectDirective.element) {
      this.nativeElement = this.selectDirective.element;
    }

    this.isRequired = this.isFieldRequired(this.formInput);
  }

  initialize() {
    if (this.nativeElement) {
      $(this.nativeElement).selectpicker(this.options);
      $(this.nativeElement).selectpicker('refresh');
    }
  }

  refresh() {
    $(this.nativeElement).selectpicker('destroy');
    setTimeout(() => {
      this.ngAfterContentInit();
      this.ngAfterViewInit();
    }, 1);
  }

  private isFieldRequired(abstractControl: AbstractControl): boolean {
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
    if (this.nativeElement) {
      return this.nativeElement.required;
    }
    if (this.nativeElement && this.nativeElement.required) {
      return true;
    }
    return false;
  }

  isFieldValid(): boolean {
    if (this.formInput) {
      return this.formInput.valid;
    } else {
      if (this.nativeElement) {
        return this.selectDirective.changed && (this.nativeElement.classList.contains("ng-valid"));
      }
    }
    return false;
  }

  isFieldInvalid(): boolean {
    if (this.formInput) {
      return this.formInput.invalid;
    } else {
      if (this.nativeElement) {
        return this.selectDirective.changed && (this.nativeElement.classList.contains("ng-invalid"));
      }
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
    } else if (this.selectDirective) {
      this.selectDirective.changed = false;
      this.nativeElement.value = "";
    }
    this.initialize();
  }

  private setBootstrapSelectDefault() {

    const opt: BootstrapSelectOptions = {};

    opt.bootstrapVersion = this.options.bootstrapVersion || this.defaultOptions.bootstrapVersion;
    opt.actionsBox = this.options.actionsBox || this.defaultOptions.actionsBox;
    opt.container = this.options.container || this.defaultOptions.container;
    opt.deselectAllText = this.options.deselectAllText || this.defaultOptions.deselectAllText;
    opt.liveSearch = this.options.liveSearch || this.defaultOptions.liveSearch;
    opt.multipleSeparator = this.options.multipleSeparator || this.defaultOptions.multipleSeparator;
    opt.noneSelectedText = this.options.noneSelectedText || this.defaultOptions.noneSelectedText;
    opt.noneResultsText = this.options.noneResultsText || this.defaultOptions.noneResultsText;
    opt.selectAllText = this.options.selectAllText || this.defaultOptions.selectAllText;
    opt.style = this.options.style || this.defaultOptions.style;
    opt.width = this.options.width || this.defaultOptions.width;

    this.options = opt;

/*     $.fn.selectpicker.Constructor.BootstrapVersion = this.options.bootstrapVersion || this.defaultOptions.bootstrapVersion;
    $.fn.selectpicker.Constructor.actionsBox = this.options.actionsBox || this.defaultOptions.actionsBox;
    $.fn.selectpicker.Constructor.DEFAULTS.liveSearch = this.options.liveSearch || this.defaultOptions.liveSearch;
    $.fn.selectpicker.Constructor.DEFAULTS.multipleSeparator = this.options.multipleSeparator || this.defaultOptions.multipleSeparator;
    $.fn.selectpicker.Constructor.DEFAULTS.noneSelectedText = this.options.noneSelectedText || this.defaultOptions.noneSelectedText;
    $.fn.selectpicker.Constructor.DEFAULTS.noneResultsText = this.options.noneResultsText || this.defaultOptions.noneResultsText;
    $.fn.selectpicker.Constructor.DEFAULTS.selectAllText = this.options.selectAllText || this.defaultOptions.selectAllText;
    $.fn.selectpicker.Constructor.DEFAULTS.style = this.options.style || this.defaultOptions.style;
    $.fn.selectpicker.Constructor.DEFAULTS.width = this.options.width || this.defaultOptions.width; */
  }

}
