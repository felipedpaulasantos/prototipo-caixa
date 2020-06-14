import { Injectable } from "@angular/core";
import { buttonSettings, languageSettings, DatatableInitOptions } from "./datatable-definitions";

declare let $: any;

@Injectable({
		providedIn: 'root'
})
export class DataTableService {

	constructor() {
			$.fn.dataTable.ext.errMode = 'throw';
	}

	initialize(tabelaId, dadosTabela, dadosColuna) {

		if ( !this.isValidDatatable(tabelaId, dadosTabela, dadosColuna) ) {
				return;
		}

		try {

			if (tabelaId.charAt(0) !== '#') { tabelaId = '#' + tabelaId; }

			this.destroyDatatableIfExists(tabelaId);

			const arrayDadosColuna = [];

			let dadoColuna = {};
			dadosColuna.forEach(nomeColuna => {
					dadoColuna = {"data": nomeColuna};
					arrayDadosColuna.push(dadoColuna);
			});

			const dataTable = $(tabelaId).DataTable({
					dom : 'Britp', // posição dos elementos na tela -> buttons, filter, processing, table, information, pagination
					data: dadosTabela, // json
					columns : arrayDadosColuna,
					buttons : buttonSettings,
					fixedHeader: true,
					responsive: true,
					select: false,
					language : languageSettings
			});

			this.appendHeaderFilter(tabelaId, dataTable);
			this.appendFooterFilter(tabelaId);
			this.applyPlugins(dataTable);

		} catch (erro) {

				console.error(`Erro ao inicializar a Datatable: ${tabelaId} \nDetalhe: ${erro}`);
		}
	}

	initializeById(selector: string, options?: DatatableInitOptions) {
		this.destroyDatatableIfExists(selector);
		this.initializePrePopulated(selector, options);
	}

	initializeByClass(selector: string, options?: DatatableInitOptions) {
		this.initializePrePopulated(selector, options);
	}

	initializePrePopulated(selector: string, options?: DatatableInitOptions) {

		try {

			let dtConfig = "";

			if (!options || Object.keys(options).length == 0) {
				dtConfig = "t";
			} else {
				if (options.showButtons) { dtConfig = "B"; }
				if (options.showFilter) { dtConfig += "f"; }
				if (options.showInfo) { dtConfig += "i"; }
				dtConfig += "t";
				if (options.showPagination) { dtConfig += "p"; }
				if (options.showOnlyTable) { dtConfig = "t"; }
			}

			$(selector).DataTable({
				dom : dtConfig, // posição dos elementos na tela -> buttons, filter, processing, table, information, pagination
				buttons : buttonSettings,
				fixedHeader: true,
				responsive: false,
				select: false,
				language : languageSettings
			});

			$('.dataTables_filter label').addClass('d-flex align-items-center ml-auto w-50');
			$('.dataTables_filter input').addClass('input-caixa font-fam-normal w-100 float-right').removeClass('form-control form-control-sm');

		} catch (err) {
			console.error(`Erro ao inicializar Datatable: ${err}`);
		}
	}

	private isValidDatatable(tabelaId, dadosTabela, dadosColuna) {

		if (!tabelaId) {
			console.error(`Datatable ${tabelaId} não identificada.`);
			return false;
		}

		if (!dadosTabela || !dadosColuna) {
			console.error(`Parâmetros incompletos para inicializar a Datatable ${tabelaId}.`);
			return false;
		}

		if (!dadosColuna) {
			console.error(`Erro ao verificar os nomes das colunas da Datatable: ${tabelaId}.`);
			return false;
		}

		return true;
	}

	private destroyDatatableIfExists(tabelaId) {

		if ( $.fn.DataTable.isDataTable( $(tabelaId) ) ) {
			$(tabelaId).DataTable().clear().destroy();
		}
	}

	private appendHeaderFilter(tabelaId, dataTable) {

		const icon = "<i class='fas fa-search mr-2'></i>";
		const searchInput = "<input class='input-caixa font-fam-normal w-100 float-right' \
												placeholder='Procurar...' type='text'>";
		const searchDiv = `<div class="my-3 d-flex form-caixa align-items-center justify-content-center"> ${icon} ${searchInput} </div>`;

		$(tabelaId).before(searchDiv);
		$('.datatable-filter').keyup(function() {
				dataTable.search($(this).val()).draw();
		});
	}

	private appendFooterFilter(tabelaId) {

		/* Gerar um campo de input para filtro individual das colunas */
		$(`${tabelaId} tfoot th`).each( function () {
				const title = $(this).text() || $(this).data('title');
				$(this).html( `<input type="text" class="form-control border-0" placeholder="Filtrar ${title}" />`);
		});
	}

	private applyPlugins(dataTable) {

		/* Permite ajuste da largura das colunas */
		// tslint:disable-next-line: no-unused-expression
		new $.fn.dataTable.ColReorder(dataTable);

		/* Prepara cada campo de filtro para efetuar a pesquisa */
		dataTable.columns().every( function () {
				const that = this;
				$( 'input', this.footer() ).on( 'keyup change clear', function () {
						if ( that.search() !== this.value ) {
								that
										.search( this.value )
										.draw();
						}
				});
		});

		dataTable.columns( '.hidden-default' ).visible( false );
	}

}
