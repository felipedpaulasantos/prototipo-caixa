enum DatatableDefaultButtons {
    COLVIS = "colvis",
    COPY = "copy",
    PRINT = "print",
    EXCEL = "excel"
}

export const DatatableDefaultButtonsList = [
    DatatableDefaultButtons.COLVIS,
    DatatableDefaultButtons.COPY,
    DatatableDefaultButtons.PRINT,
    DatatableDefaultButtons.EXCEL
];

export interface DatatableSettings extends DataTables.Settings {
    buttons?: any;
}

export interface CustomDatatableConfig {
    showFilter?: boolean;
    showLength?: boolean;
    showButtons?: boolean;
    showTable?: boolean;
    showInfo?: boolean;
    showProcessing?: boolean;
    showPagination?: boolean;
    menuLength?: number[];
    buttons?: any[];
    searching?: boolean;
}

export const dtLanguageDefinitionPt = {
    buttons: {
        copy: "<i class=\"fas fa-lg fa-copy mr-2\"></i>Copiar",
        copyTitle: "Copiado",
        copySuccess: {
            _: "Copiados %d registros",
            1: "Copiado 1 registro"
        },
        pdf: "<i class=\"fa fa-lg fa-file-pdf mr-2\"></i>PDF",
        print: "<i class=\"fa fa-lg fa-print mr-2\"></i>Imprimir",
        excel: "<i class=\"fa fa-lg fa-file-excel mr-2\"></i>Planilha do Excel",
        colvis: "<i class=\"fa fa-lg fa-columns mr-2\"></i>Colunas visíveis",
        pageLength: "<i class=\"fa fa-lg fa-bars mr-2\"></i>Mostrar <b>%d</b> linhas"
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
    emptyTable: "<div class='text-center'>Não há dados disponíveis na tabela</div>",
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

export class DatatableConfig {

    static BTN_CLASS = "btn btn-sm btn-outline-dark-light btn-caixa";
    static SHOW_FILTER = "f";
    static SHOW_LENGTH = "l";
    static SHOW_BUTTONS = "B";
    static SHOW_TABLE = "t";
    static SHOW_INFO = "i";
    static SHOW_PROCESSING = "r";
    static SHOW_PAGINATION = "p";
    static DEFAULT_BUTTONS = DatatableDefaultButtons;

    static DEFAULT_CONFIG: DatatableSettings = DatatableConfig.getDatatableConfig({
        searching: true,
        showFilter: true,
        showLength: false,
        showButtons: false,
        showTable: true,
        showInfo: true,
        showProcessing: true,
        showPagination: true
    });

    static COMPLETE_CONFIG: DatatableSettings = DatatableConfig.getDatatableConfig({
        buttons: DatatableDefaultButtonsList,
        searching: true,
        showFilter: true,
        showLength: true,
        showButtons: true,
        showTable: true,
        showInfo: true,
        showProcessing: true,
        showPagination: true
    });

    static COMPLETE_NO_BUTTON_CONFIG: DatatableSettings = DatatableConfig.getDatatableConfig({
        searching: true,
        showFilter: true,
        showLength: true,
        showButtons: false,
        showTable: true,
        showInfo: true,
        showProcessing: true,
        showPagination: true
    });

    static FILTER_CONFIG: DatatableSettings = DatatableConfig.getDatatableConfig({
        searching: true,
        showFilter: true
    });

    static PAGINATION_CONFIG: DatatableSettings = DatatableConfig.getDatatableConfig({
        showPagination: true
    });

    static PAGINATION_INFO_CONFIG: DatatableSettings = DatatableConfig.getDatatableConfig({
        showInfo: true,
        showPagination: true
    });

    static SIMPLE_CONFIG: DatatableSettings = DatatableConfig.getDatatableConfig({});

    static getDatatableConfig(options: CustomDatatableConfig): DatatableSettings {

        const customConfig: DatatableSettings = {
            dom: this.SHOW_TABLE,
            buttons: [],
            language: dtLanguageDefinitionPt,
            responsive: true
        };
        let paging = false;
        let preTableElements = "";
        let postTableElements = "";

        if (options.showButtons || (options.buttons && options.buttons.length > 0)) {
            preTableElements = preTableElements += this.SHOW_BUTTONS;
        }
        if (options.showFilter) {
            preTableElements = preTableElements += this.SHOW_FILTER;
        }
        if (options.showLength) {
            preTableElements = preTableElements += this.SHOW_LENGTH;
        }
        if (options.showProcessing) { preTableElements = preTableElements += this.SHOW_PROCESSING; }

        if (options.showInfo) { postTableElements = postTableElements += this.SHOW_INFO; }
        if (options.showPagination) {
            paging = true;
            postTableElements = postTableElements += this.SHOW_PAGINATION;
        }

        if (options.buttons && options.buttons.length > 0) {
            customConfig.buttons = options.buttons;
        }

        if (options.menuLength && options.menuLength.length > 0) {
            customConfig.lengthMenu = options.menuLength;
        }

        const dtDom = preTableElements + this.SHOW_TABLE + postTableElements;
        customConfig.dom = dtDom;
        customConfig.paging = paging;
        customConfig.searching = options.searching;
        return customConfig;
    }
}
