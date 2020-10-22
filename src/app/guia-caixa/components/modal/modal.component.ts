import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ComponentFactoryResolver,
  ChangeDetectorRef,
  ViewContainerRef,
  ComponentRef,
  Injector,
  Type,
  OnDestroy,
  ViewRef
} from "@angular/core";
import { Subscription } from 'rxjs';
import { ModalService } from "../../services/modal.service";
import { ModalOptions, ModalSize, defaultModalOptions } from './modal-options';

declare var $;

@Component({
  selector: "cx-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit, OnDestroy {

  constructor(
    private modalService: ModalService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef,
  ) { }

  @ViewChild("modalDinamico", { read: ViewContainerRef, static: false })
  modalDinamicoRef: ViewContainerRef;

  componenteParaInjetar: Type<Component>;
  // componenteParaInjetar: any;
  injectorDoComponenteParaInjetar: Injector;
  contextoSubscription: Subscription;

  componenteInjetadoRef: ComponentRef<Component>;
  injectorComponenteInjetado: Injector;

  componenteParaInjetarRef: ComponentRef<any>;

  modalSize = ModalSize;

  @ViewChild("defaultModal", { static: true })
  private modal: ElementRef<HTMLInputElement>;

  public titulo: String = "";
  public mensagem: String = "";

  public btOkTexto: String = "Ok";
  public btCancelarTexto: String = "Fechar";

  public showCancelar = false;

  public classTitulo = "text-primary";

  public btnOkClass = 'btn btn-primary btn-caixa';
  public btnCancelarClass = 'btn btn-secondary btn-caixa';

  public modalDialogClass = "modal-lg";
  public modalBodyClass = "";
  public modalHeaderClass = "";
  public modalFooterClass = "";

  public centralizado = false;
  public tamanho = ModalSize.NORMAL;

  ngOnInit() {
    this.modalService.showEvent.subscribe((options: ModalOptions) => {
      this.config(options);
      this.show();
    });

/*     this.contextoSubscription = this.modalService.contextoInjecao$.subscribe(contexto => {
      this.componentFactoryResolver = contexto.resolver;
      this.injectorDoComponenteParaInjetar = contexto.injector;
      this.componenteParaInjetar = contexto.componenteParaInjetar;
      this.injetarComponente();
    }); */

    this.contextoSubscription = this.modalService.contextoInjecaoInstanciado$.subscribe(
      (componentRef) => {
        this.componenteParaInjetarRef = componentRef;
        this.injetarComponenteInstanciado();
    });
  }

  injetarComponente() {

    if (!this.componenteParaInjetar) {
      this.clearComponent();
    }
    if (!this.injectorDoComponenteParaInjetar || !this.componentFactoryResolver) {
      return;
    }
    if (this.componenteInjetadoRef && this.componenteInjetadoRef.componentType
      && (this.componenteParaInjetar.toString() === this.componenteInjetadoRef.componentType.toString())) {
        return;
    }

    this.clearComponent();
    const componentType = this.componenteParaInjetar;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    this.injectorComponenteInjetado = Injector.create(
      [{provide: componentType, useValue: componentType}],
      this.injectorDoComponenteParaInjetar
    );
    this.componenteInjetadoRef = this.modalDinamicoRef.createComponent(
      componentFactory, 0, this.injectorComponenteInjetado
    );

    this.componenteInjetadoRef.changeDetectorRef.detectChanges();
  }

  injetarComponenteInstanciado() {

    this.clearComponent();

    this.modalDinamicoRef.insert(this.componenteParaInjetarRef.hostView);
    this.componenteParaInjetarRef.changeDetectorRef.detectChanges();
  }

  clearComponent() {
    this.modalDinamicoRef.clear();
    if (this.componenteInjetadoRef) {
      this.componenteInjetadoRef.destroy();
      this.componenteInjetadoRef = null;
    }
  }

  clearContext() {
    this.componentFactoryResolver = null;
    this.injectorDoComponenteParaInjetar = null;
  }

  ngOnDestroy() {
    this.contextoSubscription.unsubscribe();
    this.clearComponent();
  }

  config(options: ModalOptions) {
    this.titulo = options.titulo || defaultModalOptions.titulo;
    this.mensagem = options.mensagem || defaultModalOptions.mensagem;
    this.btOkTexto = options.btOkTexto || defaultModalOptions.btOkTexto;
    this.btnOkClass = options.btnOkClass || defaultModalOptions.btnOkClass;

    this.btnCancelarClass = options.btnCancelarClass || defaultModalOptions.btnCancelarClass;
    this.btCancelarTexto = options.btCancelarTexto || defaultModalOptions.btCancelarTexto;

    this.showCancelar = options.showCancelar;
    this.classTitulo = options.classTitulo || defaultModalOptions.classTitulo;

    this.centralizado = options.centralizado;
    this.tamanho = (options.tamanho != undefined && options.tamanho != null) ? options.tamanho : defaultModalOptions.tamanho;

    this.modalBodyClass = options.modalBodyClass || defaultModalOptions.modalBodyClass;
    this.modalHeaderClass = options.modalHeaderClass || defaultModalOptions.modalHeaderClass;
    this.modalFooterClass = options.modalFooterClass || defaultModalOptions.modalFooterClass;
  }

  show() {
    $(this.modal.nativeElement).modal("show");
  }

  cancelar() {
    this.modalService.btCancelarEvent.emit(true);
  }

  ok() {
    this.modalService.btOKEvent.emit(true);
  }
}
