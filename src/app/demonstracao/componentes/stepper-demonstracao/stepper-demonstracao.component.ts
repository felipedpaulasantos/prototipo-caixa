import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StepperItem } from 'src/app/guia-caixa/components/stepper/stepper-component/stepper-item';
import { TabberItem } from 'src/app/guia-caixa/components/stepper/tabber-component/tabber-item';
import { BootstrapTheme } from 'src/app/guia-caixa/constants/constants';
import { ComponentesInterface } from '../componentes-interface';

@Component({
  templateUrl: './stepper-demonstracao.component.html',
  styleUrls: ['./stepper-demonstracao.component.scss'],
  host: { '(window:scroll)': 'onScroll($event)' }
})
export class StepperDemonstracaoComponent extends ComponentesInterface implements OnInit {

  @ViewChild("scrollElement") scrollElement;

  sectionOffset = 0;
  spiedTags = ['APP-DOCUMENTACAO-TEMPLATE'];
  currentSection = "painelStepperPadrao";

  showTabsStepperPadrao = false;
  htmlCodeStepperPadrao = `<cx-stepper [steps]="passos" [currentStep]="passoAtual" (changeStep)="passoAtual = $event"></cx-stepper>

<div *ngFor="let passo of passos; let i = index">
  <ng-container *ngIf="i == passoAtual">
    <h2 class="text-center">{{ passo }}</h2>

    <button [disabled]="passoAtual == 0"
    (click)="passoAtual = passoAtual - 1" class="btn btn-light btn-caixa mx-2">
        Voltar
    </button>

    <button [disabled]="passoAtual == passos.length - 1"
    (click)="passoAtual = passoAtual + 1" class="btn btn-primary btn-caixa mx-2">
        Avançar
    </button>
  </ng-container>
</div>`.trim();

  tsCodeStepperPadrao = `  import { Component } from '@angular/core';

  @Component({
      selector: 'app-stepper',
      templateUrl: './stepper.component.html',
      styleUrls: ['./stepper.component.scss']
  })
  export class StepperComponent {

    constructor() {}

    passoAtual = 0;

    passos = [
      'Primeiro passo',
      'Segundo passo',
      'Terceiro passo',
      'Quarto passo',
      'Passo final'
    ];
  }
  `.trimRight();

  htmlCodeStepperGuiado = `<cx-stepper [freeNavigation]="false" [steps]="passos" [currentStep]="passoAtual" (changeStep)="passoAtual = $event"></cx-stepper>

<div *ngFor="let passo of passos; let i = index">
  <ng-container *ngIf="i == passoAtual">
    <h2 class="text-center">{{ passo }}</h2>

    <button [disabled]="passoAtual == 0"
    (click)="passoAtual = passoAtual - 1" class="btn btn-light btn-caixa mx-2">
        Voltar
    </button>

    <button [disabled]="passoAtual == passos.length - 1"
    (click)="passoAtual = passoAtual + 1" class="btn btn-primary btn-caixa mx-2">
        Avançar
    </button>
  </ng-container>
</div>`.trim();

  tsCodeStepperGuiado = `  import { Component } from '@angular/core';

  @Component({
      selector: 'app-stepper',
      templateUrl: './stepper.component.html',
      styleUrls: ['./stepper.component.scss']
  })
  export class StepperComponent {

    constructor() {}

    passoAtual = 0;

    passos = [
      'Primeiro passo',
      'Segundo passo',
      'Terceiro passo',
      'Quarto passo',
      'Passo final'
    ];
  }
  `.trimRight();

  htmlCodeStepperTemplate = `<cx-stepper [steps]="passos" #stepperExemplo (changeStep)="passoAtual = $event"></cx-stepper>

  <div *ngFor="let passo of passos; let i = index">
     <ng-container *ngIf="i == passoAtual">
        <h2 class="text-center">{{ passo }}</h2>
     </ng-container>
  </div>

  <button [disabled]="stepperExemplo.currentStep == 0"
  (click)="stepperExemplo.first()" class="btn btn-dark btn-caixa mx-2">
     Primeiro
  </button>

  <button [disabled]="stepperExemplo.currentStep == 0"
  (click)="stepperExemplo.previous()" class="btn btn-light btn-caixa mx-2">
     Voltar
  </button>

  <button [disabled]="stepperExemplo.currentStep == passos.length - 1"
  (click)="stepperExemplo.next()" class="btn btn-primary btn-caixa mx-2">
     Avançar
  </button>`.trim();

  tsCodeStepperTemplate = `  import { Component } from '@angular/core';

  @Component({
      selector: 'app-stepper',
      templateUrl: './stepper.component.html',
      styleUrls: ['./stepper.component.scss']
  })
  export class StepperComponent {

    constructor() {}

    passoAtual = 0;

    passos = [
      'Primeiro passo',
      'Segundo passo',
      'Terceiro passo',
      'Quarto passo',
      'Passo final'
    ];
  }
  `.trimRight();

  htmlCodeStepperInterno = `<cx-stepper [steps]="passos" #stepperInterno>
  <div *cxStepper>
     <h2 class="text-center">Primeiro conteúdo interno</h2>
  </div>

  <div *cxStepper>
     <h2 class="text-center">Segundo conteúdo interno</h2>
  </div>

  <div *cxStepper>
     <h2 class="text-center">Terceiro conteúdo interno</h2>
  </div>

  <div *cxStepper>
     <h2 class="text-center">Quarto conteúdo interno</h2>
  </div>

  <div *cxStepper>
     <h2 class="text-center">Quinto conteúdo interno</h2>
  </div>
</cx-stepper>

<button [disabled]="stepperInterno.currentStep == 0"
(click)="stepperInterno.first()" class="btn btn-dark btn-caixa mx-2">
  Primeiro
</button>

<button [disabled]="stepperInterno.currentStep == 0"
(click)="stepperInterno.previous()" class="btn btn-light btn-caixa mx-2">
  Voltar
</button>

<button [disabled]="stepperInterno.currentStep == passos.length - 1"
(click)="stepperInterno.next()" class="btn btn-primary btn-caixa mx-2">
  Avançar
</button>`.trim();

  tsCodeStepperInterno = `  import { Component } from '@angular/core';

  @Component({
      selector: 'app-stepper',
      templateUrl: './stepper.component.html',
      styleUrls: ['./stepper.component.scss']
  })
  export class StepperComponent {

    constructor() {}

    passos = [
      'Primeiro passo',
      'Segundo passo',
      'Terceiro passo',
      'Quarto passo',
      'Passo final'
    ];

  }
  `.trimRight();

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

  passos: StepperItem[] = [
    { title: 'Primeiro passo' },
    { title: 'Segundo passo' },
    { title: 'Terceiro passo' },
    { title: 'Quarto passo' },
    { title: 'Quinto passo' }
  ];
  passoAtual = 0;
  steps: StepperItem[] = [
    { title: 'Um primeiro passo' },
    { title: 'Um segundo passo' },
    { title: 'Um terceiro passo' },
    { title: 'Um quarto passo' },
    { title: 'Fim' }
  ];

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

  tabberOrientation = 0;
  stepperFreeOrientation = 0;
  stepperGuidedOrientation = 0;
  hideStepsOnCompleted = true;
  completedMessage = null;
  completedIcon = null;
  freeNavigation = true;
  showCompletedMessage = true;

  temas = BootstrapTheme.getTemas();

  constructor(public toastr: ToastrService) {
    super(toastr);
  }

  ngOnInit(): void { }

  changeTabberOrientation(value: number) {
    this.tabberOrientation = value;
  }

  changeStepperFreeOrientation(value: number) {
    this.stepperFreeOrientation = value;
  }

  changeStepperGuidedOrientation(value: number) {
    this.stepperGuidedOrientation = value;
  }

  changeHideSteps(value: boolean) {
    this.hideStepsOnCompleted = value;
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

  addStep(nome: string) {
    const newIndex = this.steps.length + 1;
    const newStep: StepperItem = { title: '' };
    newStep.title = nome ? nome : `Passo ${newIndex}`;
    this.steps.push(newStep);
    this.steps = [].concat(this.steps);
  }

  removeStep() {
    this.steps.pop();
    this.steps = [].concat(this.steps);
  }

  mudarPasso(passo: number) {
    this.passoAtual = passo;
  }

  mudarTab(tab: number) {
    this.currentTab = tab;
  }

}
