import { Component, OnInit } from '@angular/core';
import { TabberItem } from 'src/app/guia-caixa/components/stepper/tabber-component/tabber-item';

@Component({
  templateUrl: './stepper-demonstracao.component.html',
  styleUrls: ['./stepper-demonstracao.component.scss']
})
export class StepperDemonstracaoComponent implements OnInit {

  passoAtual = 0;
  steps = [
    "Um primeiro",
    "Um segundo passo",
    "Mais outro passo",
    "Um quarto passo",
    "Fim"
  ];

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

  constructor() { }

  ngOnInit(): void {
  }

  changeTabberOrientation(value: number) {
    this.tabberOrientation = value;
  }

  changeStepperFreeOrientation(value: number) {
    this.stepperFreeOrientation = value;
  }

  changeStepperGuidedOrientation(value: number) {
    this.stepperGuidedOrientation = value;
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
    const newStep = nome ? nome : `Passo ${newIndex}`;
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
