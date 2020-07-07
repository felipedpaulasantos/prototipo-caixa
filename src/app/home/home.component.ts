import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  constructor() {}

  rows: any[] = [];

  resources = [
    {
      name: "Cores",
      url: "/cores",
      icon: "fas fa-palette",
      description: "Consulte as cores disponíveis e a recomendação de seus usos"
    },
    {
      name: 'Layout',
      icon: 'fas fa-layer-group',
      url: '/layout',
      description: "Altera os temas da aplicação",
    },
/*     {
      name: "Conta",
      url: "/contas",
      icon: "fas fa-phone-alt",
      description: "Consulte e altere os dados da conta selecionada"
    },
    {
      name: "Relatórios",
      url: "/relatorios",
      icon: "fas fa-chart-bar",
      description: "Visualize relatórios em formatos de gráficos e tabelas"
    }, */
    {
			name: 'Componentes',
			url: '/componentes',
      icon: 'fas fa-toolbox',
      description: 'Testes de estilo e componentes'
		}
  ];

  ngOnInit() {
    this.rows = this.groupColumns(this.resources);
  }

  groupColumns(resources: any[]): any[] {
    const newRows = [];

    for (let index = 0; index < resources.length; index += 3) {
      newRows.push(resources.slice(index, index + 3));
    }

    return newRows;
  }
}
