import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {

  constructor() { }

  rows: any[] = [];

  resources = [
    {
      name: "Botões",
      url: "/componentes/botoes",
      icon: "fa fa-dot-circle fa-lg",
      description: "Botões com estilo complementar ao framework Bootstrap"
    },
    {
      name: "Cards",
      url: "/componentes/cards",
      icon: "fa fa-clipboard fa-lg",
      description: "Cards flexíveis para exibição de qualquer tipo de conteúdo"
    },
    {
			name: 'Inputs',
			url: '/componentes/inputs',
      icon: 'fa fa-keyboard fa-lg',
      description: 'Inputs e validação de erros automática'
    },
    {
			name: 'Mensagens',
			url: '/componentes/mensagens',
      icon: 'fa fa-comment fa-lg',
      description: 'Notificações, tela de carregamento e modais'
    },
    {
			name: 'Select',
			url: '/componentes/select',
      icon: 'fa fa-hand-pointer fa-lg',
      description: 'Selects customizados integrando a biblioteca Bootstrap-Select'
    },
    {
			name: 'Tabelas',
			url: '/componentes/tabelas',
      icon: 'fa fa-table fa-lg',
      description: 'Tabelas com filtros, botões e paginação embutidas'
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
