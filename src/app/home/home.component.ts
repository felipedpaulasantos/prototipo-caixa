import { Component, ComponentFactoryResolver, Injector, OnInit, ViewContainerRef } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LayoutComponent } from '../demonstracao/layout/layout.component';
import { TipografiaComponent } from '../demonstracao/tipografia/tipografia.component';
import { ModalSize } from '../guia-caixa/components/modal/modal-options';
import { ModalService } from '../guia-caixa/services/modal.service';
import { mockedSideMenuCaixaItems } from '../shared/constants';

interface Resources {
  name: string;
  icon: string;
  url?: string;
  description?: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private modal: ModalService,
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  rows: any[] = [];
  resources = mockedSideMenuCaixaItems;

  contratos = [];

  formCpfNis = this.fb.group({
    cpf: [null, [Validators.required]],
    nis: [null, [Validators.required]]
  });
  cliente = null;

  ngOnInit() {
    this.rows = this.groupColumns(this.resources);
    this.clientePesquisado();
    for (let index = 0; index < 10; index++) {
      const contrato = {
        numero: `4200.160.0150${index}-${index}`,
        valor: 50000 + (index * 1000),
        situacao: "Pago"
      }
      this.contratos.push(contrato);
    }
  }

  groupColumns(resources: any[]): any[] {
    const newRows = [];

    for (let index = 0; index < resources.length; index += 3) {
      newRows.push(resources.slice(index, index + 3));
    }

    return newRows;
  }

  get isCpfNisInvalid(): boolean {
    return (this.formCpfNis.get('cpf').invalid && this.formCpfNis.get('nis').invalid)
    || (this.formCpfNis.get('cpf').valid && this.formCpfNis.get('nis').valid);
  }

  pesquisarCpf(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
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

  injetarTeste(index: number) {
    console.log(index);
    const componenteFactory = this.resolver.resolveComponentFactory(TipografiaComponent);
    const componenteRef = componenteFactory.create(this.injector);
    const componente = componenteRef.instance;
    componente.placeholder = this.contratos[index].valor;
    this.modal.receberContextoInstanciado(componenteRef);
    this.modal.show({
      tamanho: ModalSize.MAIOR,
      titulo: "Detalhamento"
    });
  }
}
