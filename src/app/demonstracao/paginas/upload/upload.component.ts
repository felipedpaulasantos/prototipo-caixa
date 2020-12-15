import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CardButtonCheckEvent } from 'src/app/guia-caixa/components/card-button/card-button-check-event';
import { CardButtonComponent } from 'src/app/guia-caixa/components/card-button/card-button.component';
import { StepperItem } from 'src/app/guia-caixa/components/stepper/stepper-component/stepper-item';
import { TabberItem } from 'src/app/guia-caixa/components/stepper/tabber-component/tabber-item';

@Component({
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private renderer: Renderer2
  ) { }

  @ViewChild("cardHome")
  cardHome: CardButtonComponent;

  @ViewChild("cardChave")
  cardChave: CardButtonComponent;

  @ViewChild("cardCDC")
  cardCDC: CardButtonComponent;

  @ViewChild("cardVazio")
  cardVazio: CardButtonComponent;

  formCpfNis = this.fb.group({
    cpf: [{ value: null, disabled: true }, [Validators.required, Validators.minLength(11)]],
    nis: [null, [Validators.required, Validators.minLength(11)]]
  });
  cliente = null;

  previaSrc: string;
  uploadedFile: File = null;

  contratos = [];

  passoAtual = 0;

  passos: StepperItem[] = [
    { title: "Passo 1" },
    { title: "Passo 2" },
    { title: "Passo 3" },
    { title: "Passo 4" },
    { title: "Passo 5" }
  ];

  abas: TabberItem[] = [
    { name: "Passo 1", icon: "fa fa-home" },
    { name: "Passo 2", icon: "fa fa-home" },
    { name: "Passo 3", icon: "fa fa-home" },
    { name: "Passo 4", icon: "fa fa-home" },
    { name: "Passo 5", icon: "fa fa-home" }
  ];

  valor = "";

  rotas = [
    { url: "tal-rota" },
    { url: "tal-rota" },
    { url: "tal-rota" },
    { url: "tal-rota" },
    { url: "tal-rota" },
  ];

  testeEv: CardButtonCheckEvent;

  teste(ev, cardEl: CardButtonComponent) {
/*     cardEl.setData(ev);
    if (ev.length > 5) {
      cardEl.emitChecked();
    } */
    this.cardVazio.setLeftIcon(ev);
  }

  ativar(checkEv: CardButtonCheckEvent, cardEl: CardButtonComponent) {
    this.testeEv = checkEv;
    console.log(checkEv.target);
    console.log(this.formCpfNis.value);
    const cards = [this.cardHome, this.cardChave, this.cardCDC];
    if (checkEv.target.isChecked) {
      this.valor = cardEl.leftTitle;
      cards.forEach(card => {
        card.setValue(false);
      });
      cardEl.setValue(true);
    }
    if (cardEl.cardId == "cardChave" && cardEl.isChecked) {
      this.formCpfNis.get('cpf').enable();
    } else {
      this.formCpfNis.get('cpf').disable();
    }
  }

  ngOnInit(): void {
    this.clientePesquisado();
    this.populaContratos();
    this.preventDragDropDefault();
  }

  populaContratos(): void {
    for (let index = 0; index < 10; index++) {
      const contrato = {
        numero: `4200.160.0150${index}-${index}`,
        valor: 50000 + (index * 1000),
        situacao: "Pago"
      };
      this.contratos.push(contrato);
    }
  }

  get isCpfNisInvalid(): boolean {
    return (this.formCpfNis.get('cpf').invalid && this.formCpfNis.get('nis').invalid)
    || (this.formCpfNis.get('cpf').valid && this.formCpfNis.get('nis').valid);
  }

  pesquisarCpf(): void {
    this.spinner.show('global');
    setTimeout(() => {
      this.spinner.hide('global');
      this.toastr.success("Cliente pesquisado com sucesso");
      this.clientePesquisado();
    }, 2000);
  }

  clientePesquisado() {
    this.cliente = {
      nome: "Fulano da Silva",
      cpf: this.formCpfNis.get('cpf').value || this.formCpfNis.get('nis').value || "111.111.111-11",
      nis: this.formCpfNis.get('nis').value || "",
      dataNascimento: "01/01/1920",
      nomeMae: "Ciclana da Silva"
    };
  }

  drop(ev: DragEvent, cardEl: ElementRef) {
    ev.preventDefault();
    if (ev.dataTransfer && ev.dataTransfer.files && ev.dataTransfer.files[0]) {
      const files = ev.dataTransfer.files;
      this.uploadArquivo(files);
    }
    this.dragLeave(null, cardEl);
  }

  dragOver(ev: any, cardEl: ElementRef) {
    this.renderer.addClass(cardEl, "drag-hover");
  }

  dragLeave(ev: any, cardEl: ElementRef) {
    this.renderer.removeClass(cardEl, "drag-hover");
  }

  uploadArquivo(files: FileList) {
    this.previaSrc = null;
    this.uploadedFile = null;
    this.spinner.show("spinnerUpload");

    const file = files[0];
    setTimeout(() => {
      this.fromFileToBase64(file).then(
        (base64) => {
          this.previaSrc = `data:${file.type};base64,${base64}`;
          this.uploadedFile = file;
          this.spinner.hide("spinnerUpload");
        }
      );
    }, 2000);
  }

  addDocumento() {
    this.toastr.success("Documento adicionado com sucesso!");
  }

  fromFileToBase64(file: File, comMetadata: boolean = false): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {

        /* Metadata: 'data:{mimetype};base64,' */
        const resultComMetadata = reader.result.toString();
        const resultSemMetadata = resultComMetadata.replace(/^data:(.*,)?/, "");

        let base64 = comMetadata ? resultComMetadata : resultSemMetadata;

        /* Preenche o base64 com '=' caso não seja múltiplo de 4 - correção de padding */
        if ((base64.length % 4) > 0) {
          base64 += "=".repeat(4 - (resultSemMetadata.length % 4));
        }
        resolve(base64);
      };
      reader.onerror = error => reject(error);
    });
  }

  open(src: string) {
    window.open(src);
  }

  preventDragDropDefault() {
    window.addEventListener("dragover", function(e: any) {
      e.preventDefault();
    }, false);
    window.addEventListener("drop", function(e: any) {
      e.preventDefault();
    }, false);
  }

}
