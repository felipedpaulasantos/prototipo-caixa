import {
  Component,
  OnInit,
  ContentChild,
  ViewChild,
  ElementRef
} from "@angular/core";
import { ModalService } from "../../services/modal.service";

declare var $;

@Component({
  selector: "nov-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  @ViewChild("defaultModal", { static: true })
  private modal: ElementRef<HTMLInputElement>;

  public titulo: String = "Alerta";
  public mensagem: String = "Mensagem default";

  public btOkTexto: String = "Ok";
  public btCancelarTexto: String = "Fechar";

  public showCancelar = false;

  public classTitulo = "";

  public btnOkClass = 'btn btn-primary btn-caixa';
  public btnCancelarClass = 'btn btn-secondary btn-caixa';

  ngOnInit() {
    this.modalService.showEvent.subscribe(options => {
      this.config(options);
      this.show();
    });
  }

  config(options: ModalOptions) {
    this.titulo = options.titulo || this.titulo;
    this.mensagem = options.mensagem || this.mensagem;
    this.btOkTexto = options.btOkTexto || this.btOkTexto;
    this.btCancelarTexto = options.btCancelarTexto || this.btCancelarTexto;

    this.btnOkClass = options.btnOkClass || this.btnOkClass;

    this.showCancelar = options.showCancelar;
    this.classTitulo = options.classTitulo || this.classTitulo;
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
