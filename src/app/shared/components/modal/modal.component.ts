import {
  Component,
  OnInit,
  ContentChild,
  ViewChild,
  ElementRef,
  Input
} from "@angular/core";
import { ModalService } from "../../services/modal.service";
import { ModalOptions, ModalSize } from './modal-options';

declare var $;

@Component({
  selector: "nov-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  modalSize = ModalSize;

  @ViewChild("defaultModal", { static: true })
  private modal: ElementRef<HTMLInputElement>;

  public titulo: String = "Alerta";
  public mensagem: String = "Mensagem default";

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
  }

  config(options: ModalOptions) {
    this.titulo = options.titulo || this.titulo;
    this.mensagem = options.mensagem || this.mensagem;
    this.btOkTexto = options.btOkTexto || this.btOkTexto;
    this.btnOkClass = options.btnOkClass || this.btnOkClass;

    this.btnCancelarClass = options.btnCancelarClass || this.btnCancelarClass;
    this.btCancelarTexto = options.btCancelarTexto || this.btCancelarTexto;

    this.showCancelar = options.showCancelar;
    this.classTitulo = options.classTitulo || this.classTitulo;

    this.centralizado = options.centralizado;
    this.tamanho = (options.tamanho != undefined && options.tamanho != null) ? options.tamanho : this.tamanho;

    this.modalBodyClass = options.modalBodyClass || this.modalBodyClass;
    this.modalHeaderClass = options.modalHeaderClass || this.modalHeaderClass;
    this.modalFooterClass = options.modalFooterClass || this.modalFooterClass;
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
