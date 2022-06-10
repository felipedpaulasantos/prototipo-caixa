import { Directive, OnInit, ElementRef, Renderer2, Input, SimpleChanges, OnChanges, OnDestroy } from "@angular/core";
import { InterceptorService } from "../../interceptor/interceptor.service";
import { ValidaSenhaContaService } from "../components/valida-senha-conta/valida-senha-conta.service";
import { Subscription } from "rxjs";

@Directive({
  selector: "[appDisableButton]"
})
export class DisableBtnDirective implements OnInit, OnChanges, OnDestroy {

  private readonly DISABLED_CLASS = "disabled";

  constructor(
    private el: ElementRef,
    private loadingService: InterceptorService,
    private validacaoSenhaService: ValidaSenhaContaService,
    private renderer: Renderer2
  ) { }

  @Input()
  disableCondition = false;

  private isLoading = false;
  private isModalConfirmacaoOpen = false;

  private subscription = new Subscription();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.disableCondition) {
      this.updateButton(changes.disableCondition.currentValue);
    }
  }

  ngOnInit(): void {
    this.updateButtonWhenLoading();
    this.updateButtonWhenModalOpen();
  }

  private updateButtonWhenLoading(): void {
    this.subscription.add(
      this.loadingService.loadingPendingActions$.subscribe((isLoading: boolean) => {
        this.isLoading = isLoading;
        this.updateButton(isLoading);
      })
    );
  }

  private updateButtonWhenModalOpen(): void {
    this.subscription.add(
      this.validacaoSenhaService.isModalConfirmacaoOpen$.subscribe((isModalConfirmacaoAberto: boolean) => {
        this.isModalConfirmacaoOpen = isModalConfirmacaoAberto;
        this.updateButton(isModalConfirmacaoAberto);
      })
    );
  }

  private updateButton(condicaoDisable: boolean): void {
    (condicaoDisable === true) ? this.disableButton() : this.enableButton();
  }

  private disableButton(): void {
    if (this.isLoading || this.isModalConfirmacaoOpen || this.disableCondition) {
      this.el.nativeElement.disabled = true;
      this.renderer.addClass(this.el.nativeElement, this.DISABLED_CLASS);
    }
  }

  private enableButton(): void {
    if (!this.isLoading && !this.isModalConfirmacaoOpen && !this.disableCondition) {
      this.el.nativeElement.disabled = false;
      this.renderer.removeClass(this.el.nativeElement, this.DISABLED_CLASS);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
