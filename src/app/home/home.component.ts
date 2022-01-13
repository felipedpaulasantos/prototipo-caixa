import { Component, ComponentFactoryResolver, Injector, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { TipografiaComponent } from "../demonstracao/layout/tipografia/tipografia.component";
import { ModalSize } from "../guia-caixa/components/modal/modal-options";
import { ModalService } from "../guia-caixa/services/modal.service";
import { AccordionMenu } from "../shared/components/accordion/types/accordion-menu";
import { mockedSideMenuItems } from "../shared/constants";
import { StyleService } from "../shared/services/style.service";

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
    private injector: Injector,
    private router: Router,
    private styleService: StyleService) { }

  rows: any[] = [];
  resources: AccordionMenu[] = mockedSideMenuItems;

  contratos = [];

  formCpfNis = this.fb.group({
    cpf: [null, [Validators.required]],
    nis: [null, [Validators.required]]
  });
  cliente = null;

  previaSrc: string;
  uploadedFile: File = null;

  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 },
    { name: "PC", value: 50000 },
    { name: "Oven", value: 70000 },
    { name: "aaaa", value: 20000 },
    { name: "bbbb", value: 150000 }
  ];

  // your color scheme
  colorScheme = {
    domain: [
      this.styleService.getCssVariableValue("--info-light"),
      this.styleService.getCssVariableValue("--tangerina"),
      this.styleService.getCssVariableValue("--limao"),
      this.styleService.getCssVariableValue("--goiaba"),
      this.styleService.getCssVariableValue("--uva"),
      this.styleService.getCssVariableValue("--turquesa"),
      this.styleService.getCssVariableValue("--goiaba-dark")
    ]
  };

  ngOnInit() {
    this.rows = this.groupColumns(this.resources);
    this.clientePesquisado();
  }

  groupColumns(resources: any[]): any[] {
    const filteredResources = this.resources.filter(resource => {
      return (resource.enabled && resource.isLink) && (resource.name != "Início");
    });
    const newRows = [];
    for (let index = 0; index < filteredResources.length; index += 3) {
      newRows.push(filteredResources.slice(index, index + 3));
    }
    return newRows;
  }

  get isCpfNisInvalid(): boolean {
    return (this.formCpfNis.get("cpf").invalid && this.formCpfNis.get("nis").invalid)
      || (this.formCpfNis.get("cpf").valid && this.formCpfNis.get("nis").valid);
  }

  pesquisarCpf(): void {
    this.spinner.show("global");
    setTimeout(() => {
      this.spinner.hide("global");
      this.toastr.success("Cliente pesquisado com sucesso");
      this.clientePesquisado();
    }, 2000);
  }

  clientePesquisado() {
    this.cliente = {
      nome: "Fulano da Silva",
      cpf: this.formCpfNis.get("cpf").value || this.formCpfNis.get("nis").value || "111.111.111-11",
      nis: this.formCpfNis.get("nis").value || "",
      dataNascimento: "01/01/1920",
      nomeMae: "Ciclana da Silva"
    };
  }

  injetarTeste(index: number) {
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

  redirect(url: string): void {
    this.router.navigate([url]);
  }

}
