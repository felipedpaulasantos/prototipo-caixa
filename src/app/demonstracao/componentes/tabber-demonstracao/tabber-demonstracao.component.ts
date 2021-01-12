import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { TabberItem } from "src/app/guia-caixa/components/stepper/tabber-component/tabber-item";
import { ComponentesInterface } from "../componentes-interface";

@Component({
  templateUrl: "./tabber-demonstracao.component.html",
  styleUrls: ["./tabber-demonstracao.component.scss"],
  host: { "(window:scroll)": "onScroll($event)" }
})
export class TabberDemonstracaoComponent  extends ComponentesInterface {

  constructor(
    public toastr: ToastrService,
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;

  sectionOffset = 0;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  currentSection = "painelTabber";

  htmlCodeTabber = `<cx-tabber [tabs]="abas" #tabberExemplo>
  <ng-container *ngFor="let aba of abas">
     <div *cxStepper>
        <h2 class="text-center">{{ aba.name }}</h2>
     </div>
  </ng-container>
</cx-tabber>

<button [disabled]="tabberExemplo.currentTab == 0"
(click)="tabberExemplo.first()" class="btn btn-dark btn-caixa mx-2">
  Primeiro
</button>

<button [disabled]="tabberExemplo.currentTab == 0"
(click)="tabberExemplo.previous()" class="btn btn-light btn-caixa mx-2">
  Voltar
</button>

<button [disabled]="tabberExemplo.currentTab == abas.length - 1"
(click)="tabberExemplo.next()" class="btn btn-primary btn-caixa mx-2">
  Avançar
</button>

<button [disabled]="tabberExemplo.currentTab == abas.length - 1"
(click)="tabberExemplo.last()" class="btn btn-dark btn-caixa mx-2">
   Último
</button>`.trim();

  tsCodeTabber = `  import { Component } from '@angular/core';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  constructor() {}

  abas: TabberItem[] = [
    { name: "Home", icon: "fa fa-home" },
    { name: "Componentes", icon: "fa fa-toolbox" },
    { name: "Tipografia", icon: "fa fa-font" },
    { name: "Cores", icon: "fa fa-palette" },
    { name: "Configurações", icon: "fa fa-wrench" },
    { name: "Páginas", icon: "fa fa-newspaper" }
  ];
  abaAtual = 0;

}
  `.trimRight();

  tabberOrientation = 0;

  abas: TabberItem[] = [
    { name: "Home", icon: "fa fa-home" },
    { name: "Componentes", icon: "fa fa-toolbox" },
    { name: "Tipografia", icon: "fa fa-font" },
    { name: "Cores", icon: "fa fa-palette" },
    { name: "Configurações", icon: "fa fa-wrench" },
    { name: "Páginas", icon: "fa fa-newspaper" }
  ];
  abaAtual = 0;

  currentTab = 0;
  tabs: TabberItem[] = [
    { name: "Home", icon: "fa fa-home" },
    { name: "Componentes", icon: "fa fa-toolbox" },
    { name: "Tipografia", icon: "fa fa-font" },
    { name: "Cores", icon: "fa fa-palette" },
    { name: "Configurações", icon: "fa fa-wrench" },
    { name: "Páginas", icon: "fa fa-newspaper" }
  ];

  changeTabberOrientation(value: number) {
    this.tabberOrientation = value;
  }

  addTab(nome: string) {
    const newIndex = this.tabs.length + 1;
    const newTab: TabberItem = {
      name: nome ? nome : `Aba ${newIndex}`,
      icon: "fa fa-plus"
    };
    this.tabs.push(newTab);
    this.tabs = [].concat(this.tabs);
  }

  mudarTab(tab: number) {
    this.currentTab = tab;
  }

}
