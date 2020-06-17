import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { completeDatatableConfig, getRefreshDtButton } from 'src/app/shared/constants/datatable-definitions';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;

  dtTrigger: Subject<any> = new Subject();

  rows = [];
  dtOptions: any = {};

  constructor() {
    for (let index = 0; index < 15; index++) {
      this.rows[index] = index;
    }
  }

  ngOnInit() {
/*     this.dtOptions = {
      dom: "Blfrtip",
      buttons: [
        'colvis',
        'copy',
        'print',
        'excel',
        {
          text: '<i class="fa fa-lg fa-sync-alt mr-2"></i>Recarregar',
          key: '1',
          action: (e, dt, node, config) => {
            this.rerender();
          }
        }
      ],
      pagingType: 'full_numbers',
      language: {
        buttons: {
          copy: '<i class="fas fa-lg fa-copy mr-2"></i>Copiar',
          copyTitle: 'Copiado',
          copySuccess: {
            _: 'Copiados %d registros',
            1: 'Copiado 1 registro'
          },
          pdf: '<i class="fa fa-lg fa-file-pdf mr-2"></i>PDF',
          print: '<i class="fa fa-lg fa-print mr-2"></i>Imprimir',
          excel: '<i class="fa fa-lg fa-file-excel mr-2"></i>Planilha do Excel',
          colvis: '<i class="fa fa-lg fa-columns mr-2"></i>Colunas visíveis',
          pageLength: '<i class="fa fa-lg fa-bars mr-2"></i>Mostrar <b>%d</b> linhas'
        },
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
    }; */
    const refreshButon = getRefreshDtButton(this.dtElement, this.dtTrigger);
    console.log(refreshButon);
    this.dtOptions.buttons = [refreshButon];
    this.dtOptions = Object.assign(this.dtOptions, completeDatatableConfig);
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    if (this.dtElement && this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        // Destroy the table first
        dtInstance.destroy();
        // Call the dtTrigger to rerender again
        this.dtTrigger.next();
      });
    }
  }

}
