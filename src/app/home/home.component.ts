import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { SocketioService } from './../socketio.service';

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  constructor(
    private socketService: SocketioService
  ) {}

  contador;

  rows: any[] = [];

  resources = [
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
    }
  ];

  ngOnInit() {
    this.rows = this.groupColumns(this.resources);
    this.socketService.setupSocketConnection();
    this.socketService.contador$.subscribe(contador => {
      this.contador = contador;
    });
  }

  groupColumns(resources: any[]): any[] {
    const newRows = [];

    for (let index = 0; index < resources.length; index += 3) {
      newRows.push(resources.slice(index, index + 3));
    }

    return newRows;
  }

  resetarSocket() {
    this.socketService.resetSocket();
  }
}
