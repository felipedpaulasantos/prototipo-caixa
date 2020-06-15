import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalService } from 'src/app/shared/services/modal.service';
import { ModalSize } from 'src/app/shared/components/modal/modal-options';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  modalSize = ModalSize;

  constructor(
    public toastr: ToastrService,
    public spinner: NgxSpinnerService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  showLoading() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  showTesteModal(titulo?: string, mensagem?: string, tamanho?: ModalSize, centro?: boolean) {
    console.log(tamanho);
    this.modalService.show({
      showCancelar: true,
      classTitulo: "",
      titulo: titulo || "Título do modal",
      mensagem: mensagem || "Mensagem do modal",
      btOkTexto: "OK",
      btnOkClass: "btn btn-caixa btn-secondary",
      btnCancelarClass: "btn btn-caixa btn-info",
      btCancelarTexto: "Cancelar",
      tamanho: tamanho,
      centralizado: centro
    });
  }

}
