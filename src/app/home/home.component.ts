import { Component, ComponentFactoryResolver, Injector, OnInit, ViewContainerRef } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LayoutComponent } from '../demonstracao/layout/layout.component';
import { TipografiaComponent } from '../demonstracao/tipografia/tipografia.component';
import { ModalSize } from '../guia-caixa/components/modal/modal-options';
import { ModalService } from '../guia-caixa/services/modal.service';

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
  resourcesOLD: Resources[] = [
    {
      name: 'Layout',
      icon: 'fas fa-layer-group',
      url: '/layout',
      description: "Temas dos principais componentes de layout",
    },
    {
			name: 'Componentes',
			url: '/componentes',
      icon: 'fas fa-toolbox',
      description: 'Componentes como inputs, botões e tabelas para uso em toda a aplicação'
    },
    {
			name: 'Tipografia',
			url: '/tipografia',
      icon: 'fas fa-font',
      description: 'Fontes e títulos'
		},
    {
      name: "Cores",
      url: "/cores",
      icon: "fas fa-palette",
      description: "Cores temáticas e suas aplicações"
    },
    {
      name: "Chat",
      url: "/chat",
      icon: "fas fa-comment",
      description: "Protótipo de chat"
    }
  ];

  resources: Resources[] = [
    {
      name: 'Pessoa Física/Jurídica',
      icon: 'fa fa-user-tie',
      url: '/layout'
    },
    {
			name: 'Serviços ao Cidadão',
			url: '/servicosaocidadao',
      icon: 'fa fa-user-friends'
    },
    {
			name: 'Investimentos',
			url: '/investimentos',
      icon: 'fa fa-chart-line'
		},
    {
      name: "Dossiê Digital",
      url: "/dossiedigital",
      icon: "fa fa-cloud-upload-alt"
    }
  ];

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
    console.log("ComponenteFactory", componenteFactory);
    console.log("ComponenteRef", componenteRef);
    console.log("Componente", componente);
    //this.modal.receberContexto(this.resolver, this.injector, componente);

    this.modal.receberContextoInstanciado(componenteRef);
    this.modal.show({
      tamanho: ModalSize.MAIOR,
      titulo: "Detalhamento"
    });
  }
}
