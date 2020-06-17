import { DataTableDirective } from 'angular-datatables';
import { Subject, BehaviorSubject } from 'rxjs';

const BTN_CLASS = "btn btn-sm btn-outline-dark-light btn-caixa";

export const dtPortugues = {
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
    },
    select: {
        rows: {
            _: " - %d linhas selecionadas",
            0: " - Clique em uma linha para selecioná-la",
            1: " - 1 linha selecionada"
        }
    }
};

export function getRefreshDtButton(dtDirective: DataTableDirective, dtTrigger: Subject<any> | BehaviorSubject<any>) {
    console.log(dtDirective, dtTrigger);
    if (dtDirective || dtTrigger) {
        return;
    }
    return {
        text: '<i class="fa fa-lg fa-sync-alt mr-2"></i>Recarregar',
        key: '1',
        action: (e, dt, node, config, dtDirective, dtTrigger) => {
            if (dtDirective && dtDirective.dtInstance) {
                dtDirective.dtInstance.then((dtInstance: DataTables.Api) => {
                    // Destroy the table first
                    dtInstance.destroy();
                    // Call the dtTrigger to rerender again
                    dtTrigger.next(null);
                });
            }
        }
    };
}

export const completeDatatableConfig = {
    dom: "Blfrtip",
    buttons: [
        'colvis',
        'copy',
        'print',
        'excel'
    ],
    language: dtPortugues
};

export const languageSettings = {
    buttons: {
        copy: '<i class="fas fa-copy mr-3"></i>Copiar',
        copyTitle: 'Copiado',
        copySuccess: {
            _: 'Copiados %d registros',
            1: 'Copiado 1 registro'
        },
        pdf: '<i class="fas fa-file-pdf mr-3"></i>PDF',
        print: '<i class="fas fa-print mr-3"></i>Imprimir',
        excel: '<i class="fas fa-file-excel mr-3"></i>Planilha do Excel',
        colvis: '<i class="fas fa-columns mr-3"></i>Colunas visíveis',
        pageLength: '<i class="fas fa-bars mr-3"></i>Mostrar <b>%d</b> linhas'
    },
    "sEmptyTable": "Nenhum registro encontrado",
    "sInfo": "Mostrando de <i>_START_</i> até <i>_END_</i> de <b>_TOTAL_</b> registros",
    "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
    "sInfoFiltered": "(Filtrados de <b>_MAX_</b> registros)",
    "sInfoPostFix": "",
    "sInfoThousands": ".",
    "sLengthMenu": "_MENU_ resultados por página",
    "sLoadingRecords": "Carregando...",
    "sProcessing": "Processando...",
    "sZeroRecords": "Nenhum registro encontrado",
    "sSearch": "<i class='fas fa-search datatable-search-icon mr-1'></i>",
    "searchPlaceholder": "Pesquisar...",
    "oPaginate": {
        "sNext": "Próximo",
        "sPrevious": "Anterior",
        "sFirst": "Primeiro",
        "sLast": "Último"
    },
    "oAria": {
        "sSortAscending": ": Ordenar colunas de forma ascendente",
        "sSortDescending": ": Ordenar colunas de forma descendente"
    },
    select: {
        rows: {
            _: " - %d linhas selecionadas",
            0: " - Clique em uma linha para selecioná-la",
            1: " - 1 linha selecionada"
        }
    }
};

export const buttonSettings = {
    dom: {
        button: {
            tag: 'button',
            className: ''
        },
    },
    buttons: [
        {
            extend: 'collection',
            text: '<i class="fas fa-lg fa-file mr-3"></i>Exportar',
            className: BTN_CLASS,
            buttons: [
                {
                    extend: 'copy',
                    exportOptions: {
                        columns: [':visible']
                    }
                },
                {
                    extend: 'print',
                    title: 'Relatório',
                    exportOptions: {
                        columns: [':visible']
                    }
                },
                {
                    extend: 'excelHtml5',
                    filename: 'Relatório',
                    title: 'Relatório',
                    exportOptions: {
                        columns: [':visible']
                    }
                },
                {
                    extend: 'pdfHtml5',
                    title: 'Relatório',
                    exportOptions: {
                        columns: [':visible']
                    }
                }
            ],
        },
        {
            extend: 'pageLength',
            className: BTN_CLASS
        },
        {
            extend: 'colvis',
            className: BTN_CLASS
        }
    ],
};

export interface DatatableInitOptions {
    showButtons?: boolean;
    showFilter?: boolean;
    showInfo?: boolean;
    showPagination?: boolean;
    showOnlyTable?: boolean;
}
