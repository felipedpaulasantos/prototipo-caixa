import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent implements OnInit {

  rows = [];
  dtOptions: DataTables.Settings = {};

  constructor() {
    for (let index = 0; index < 15; index++) {
      this.rows[index] = index;
    }
   }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        processing: "Processando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ elementos",
        info: "Mostrando desde <i>_START_</i> até <i>_END_</i> de <b>_TOTAL_</b> elementos",
        infoEmpty: "Mostrando nenhum elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Carregando registros...",
        zeroRecords: "Não foram encontrados registros",
        emptyTable: "Não há dados disponíveis na tabela",
        paginate: {
          first: "Primeiro",
          previous: "Anterior",
          next: "Seguinte",
          last: "Último"
        },
        aria: {
          sortAscending: ": Ativar para ordenar a tabela em ordem ascendente",
          sortDescending: ": Ativar para ordenar a tabela em ordem descendente"
        }
      }
    };
  }

}
