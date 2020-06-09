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
      name: "Cards",
      url: "/componentes/cards",
      icon: "fa fa-clipboard fa-lg",
      description: "Cards flexíveis para exibição de qualquer tipo de conteúdo"
    },
    {
      name: "Botões",
      url: "/componentes/botoes",
      icon: "fa fa-dot-circle fa-lg",
      description: "Botões com estilo complementar ao framework Bootstrap"
    },
    {
			name: 'Mensagens',
			url: '/componentes/mensagens',
      icon: 'fa fa-comment fa-lg',
      description: 'Exibição de mensagens de sucesso, informação, alerta e erro'
    },
    {
			name: 'Formulários',
			url: '/componentes/formularios',
      icon: 'fa fa-file fa-lg',
      description: 'Campos de formulário e validação de erros'
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
