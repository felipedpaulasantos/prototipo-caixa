import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalService } from 'src/app/guia-caixa/services/modal.service';

import { ComponentesInterface } from '../componentes-interface';
import { ModalSize } from 'src/app/guia-caixa/components/modal/modal-options';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css'],
  host: { '(window:scroll)': 'onScroll($event)' }
})
export class MensagensComponent extends ComponentesInterface implements OnInit {

  modalSize = ModalSize;

  constructor(
    public toastr: ToastrService,
    public spinner: NgxSpinnerService,
    private modalService: ModalService
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;
  spiedTags = ['APP-DOCUMENTACAO-TEMPLATE'];
  sectionOffset = 0;
  currentSection = "painelMensagens";

  htmlCodeMensagens = `        <button class="btn btn-caixa btn-success" (click)="exibirSucesso()">
  Sucesso!
</button> &nbsp;

<button class="btn btn-caixa btn-danger" (click)="exibirErro()">
  Erro!
</button> &nbsp;

<button class="btn btn-caixa btn-warning" (click)="exibirAlerta()">
  Alerta!
</button> &nbsp;

<button class="btn btn-caixa btn-info" (click)="exibirInfo()">
  Informação!
</button> &nbsp;`.trim();
  tsCodeMensagens = `  import { Component } from '@angular/core';
  import { ToastrService } from 'ngx-toastr';

  @Component({
      selector: 'app-mensagens',
      templateUrl: './mensagens.component.html',
      styleUrls: ['./mensagens.component.scss']
  })
  export class MensagensComponent {

    constructor(
      private toastr: ToastrService
    ) {}

    exibirSucesso() {
      this.toastr.success('Sucesso!');
    }

    exibirErro() {
      this.toastr.error('Ocorreu um erro!', 'Erro!');
    }

    exibirAlerta() {
      this.toastr.warning('Alerta!', null, { positionClass: 'toast-bottom-center' });
    }

    exibirInfo() {
      this.toastr.info('Informação!', 'Importante!', { progressBar: false });
    }
  }
  `.trimRight();

  htmlCodeSpinner = `        <button class="btn btn-caixa btn-outline-dark" (click)="exibirSpinner()">
  Mostrar tela de carregamento
</button>`.trim();
  tsCodeSpinner = `  import { Component } from '@angular/core';
  import { NgxSpinnerService } from 'ngx-spinner';

  @Component({
      selector: 'app-mensagens',
      templateUrl: './mensagens.component.html',
      styleUrls: ['./mensagens.component.scss']
  })
  export class MensagensComponent {

    constructor(
      private spinner: NgxSpinnerService
    ) {}

    exibirSpinner() {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
    }
  }
  `.trimRight();

  htmlCodeModal = `        <button class="btn btn-caixa btn-outline-dark" (click)="exibirModal()">
  <i class="fa fa-lg fa-external-link-alt mr-2"></i>
  Mostrar modal
</button>`.trim();
  tsCodeModal = `  import { Component } from '@angular/core';
  import { ModalService } from 'src/app/shared/services/modal.service';
  import { ModalSize } from 'src/app/shared/components/modal/modal-options';

  @Component({
      selector: 'app-mensagens',
      templateUrl: './mensagens.component.html',
      styleUrls: ['./mensagens.component.scss']
  })
  export class MensagensComponent {

    constructor(
      private modalService: ModalService
    ) {}

    exibirModal() {
      this.modalService.show({
        showCancelar: true,
        classTitulo: "",
        titulo: "Título do modal",
        mensagem: "Mensagem do modal",
        btOkTexto: "OK",
        btnOkClass: "btn btn-caixa btn-secondary",
        btnCancelarClass: "btn btn-caixa btn-info",
        btCancelarTexto: "Cancelar",
        tamanho: ModalSize.NORMAL,
        centralizado: false
      });
    }
  }
  `.trimRight();

  ngOnInit() {
  }

  exibirSucesso() {
    this.toastr.success('Sucesso!');
  }

  exibirErro() {
    this.toastr.error('Ocorreu um erro!', 'Erro!');
  }

  exibirAlerta() {
    this.toastr.warning('Alerta!', null, { positionClass: 'toast-bottom-center' });
  }

  exibirInfo() {
    this.toastr.info('Informação!', 'Importante!', { progressBar: false });
  }

  exibirSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  showTesteModal(titulo?: string, mensagem?: string, tamanho?: ModalSize, centro?: boolean) {
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

  exibirModal() {
    this.modalService.show({
      showCancelar: true,
      classTitulo: "",
      titulo: "Título do modal",
      mensagem: "Mensagem do modal",
      btOkTexto: "OK",
      btnOkClass: "btn btn-caixa btn-secondary",
      btnCancelarClass: "btn btn-caixa btn-info",
      btCancelarTexto: "Cancelar",
      tamanho: ModalSize.NORMAL,
      centralizado: false
    });
  }

}
