import { Component, Input, OnChanges, Output, EventEmitter, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

import { ClienteComercial, TipoCliente } from "../../../comercial/model/cliente-comercial.model";
import { ControleContas } from "../../../comercial/roteiro-negocial/model/roteiro-negocial.model";
import { CheckableItem } from "../../../comercial/model/cadastro.model";

import { Conta, TipoProduto } from "../../../comercial/roteiro-negocial/interface/conta-deposito";
import { PropriedadesPagina } from "../../propriedades-pagina";
import { BuscaContasService } from "../../../comercial/roteiro-negocial/busca-contas/busca-contas.service";
import { ComercialService } from "../../../comercial/service/comercial.service";
import { PaginadorService } from "../../paginador.service";
import { CadastroService } from "../../../comercial/pesquisa-cpf-cnpj/cadastro/cadastro.service";
import { objIsNotEmpty, removeElementosObj, notEmpty } from "../../utils/utils";


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "cx-busca-contas",
  templateUrl: "./buscador-contas.component.html",
  styleUrls: ["./buscador-contas.component.css"]
})
export class BuscadorContasComponent implements OnChanges {

  @Input()
  clienteAtual: ClienteComercial;

  @Input()
  controleContas: ControleContas = new ControleContas();

  @Input()
  multiSelecao = false;

  @Input()
  textoBtnAcao = "Detalhar";

  @Input()
  iconBtnAcao = "fa-search";

  @Input()
  unidade: string;

  @Input()
  produtos: string; // Ex: produtos=3702,146,1292,3,13,22

  @Input()
  situacao = "1"; // ATIVA

  @Input()
  tiposContas = "1,2"; // Ex: NSGD: 1, SIDEC: 2, FACIL: 3

  @Input()
  showRepresentante = false;

  @Input()
  retornaPropriedade9 = false;

  @Input()
  descartaConjuntasNaoSolidarias = false;

  @Output()
  selecionar: EventEmitter<any> = new EventEmitter();

  contaDeposito: {
    contas: CheckableItem<Conta>[]
  };

  private tiposConta: TipoProduto[] = [];
  private representante: any;
  representantesCombo = [];

  formRepresentante: FormGroup;

  // paginacao
  private contasPaginacao: {
    contas: CheckableItem<Conta>[]
  };
  pageIndex: number;
  propriedadesPaginador: PropriedadesPagina = {};
  rotaAtual: string;
  totalItemsPaginacao = 0;
  totalItemsPage = 20;
  terminouPaginacao = false;

  showTable = false;
  loading = false;

  constructor (
    private buscaContasService: BuscaContasService,
    private comercialService: ComercialService,
    private paginadorService: PaginadorService,
    private cadastroService: CadastroService) {
    comercialService.changeEmittedBefore$.subscribe(() => {
      this.manterDados()
    });
    comercialService.changeEmitted$.subscribe(() => this.cleanForms());
    this.contaDeposito = {
      contas: []
    };
    this.formRepresentante = new FormGroup({
      representante: new FormControl()
    });
  }

  ngOnChanges(): void {
    if (objIsNotEmpty(this.produtos) && objIsNotEmpty(this.situacao)) {
      if (this.showRepresentante) {
        this.carregaRepresentanteLegal();
      }
      this.carregarDados();
    }
  }

  carregarDados() {
    this.loading = true;
    this.contaDeposito = {
      contas: []
    };
    this.contasPaginacao = {
      contas: []
    };
    this.carregarTiposDeConta();
    if (this.controleContas.mudancaAba) {
      this.carregarDadosSalvas();
    } else {
      this.representante = null;
      this.carregarContas();
    }
  }

  carregarDadosSalvas() {
    // contas
    this.contasPaginacao.contas = this.controleContas.contas;
    this.pageIndex = this.controleContas.pageIndex;
    this.alterarPagina(this.pageIndex);

    // representante
    if (this.showRepresentante) {
      this.representante = this.controleContas.representante;
      if (this.representante) {
        this.formRepresentante.patchValue({ representante: this.representante.coDocumento });
      } else {
        this.formRepresentante.patchValue({ representante: null });
      }
    }

    this.showTable = true;
    this.loading = false;
  }

  carregarTiposDeConta() {
    const param = {
      produtos: this.produtos
    }

    this.buscaContasService.consultarTiposConta(param).subscribe((response: TipoProduto[]) => {
      this.tiposConta = response;
    });
  }

  carregarContas(): void {
    this.loading = true;
    const clienteAtual = this.comercialService.clienteAtual;
    if (objIsNotEmpty(this.comercialService.clienteAtual)) {
      let params: any;
      if (clienteAtual.tipoCliente === TipoCliente.PF) {
        params = {
          cpf: clienteAtual.resumoCliente.dadosBasicosPessoaFisicaDTO.cpf
        };
      } else {
        params = {
          cnpj: clienteAtual.resumoCliente.dadosBasicosPessoaJuridicaDTO.cnpj
        };
      }
      params.unidade = this.unidade;
      params.produtos = this.produtos;
      params.situacao = this.situacao;
      params.tiposConta = this.tiposContas;
      params = removeElementosObj(params);
      this.showTable = false;
      this.buscaContasService.consultarContas(params).subscribe(response => {
        if (response && response.contas) {
          this.buscaContasService.contasEncontradas = response.contas;
        if (!this.retornaPropriedade9 && this.descartaConjuntasNaoSolidarias) {
          this.contasPaginacao.contas = response.contas
              .map(conta => new CheckableItem<Conta>(false, conta))
              .filter(c => (c.item.produto !== "1288" || (c.item.produto === "1288" && c.item.propriedade !== 9)) && c.item.tipoConta !== 2);
        } else if (!this.retornaPropriedade9) {
            this.contasPaginacao.contas = response.contas
              .map(conta => new CheckableItem<Conta>(false, conta))
              .filter(c => c.item.produto !== "1288" || (c.item.produto === "1288" && c.item.propriedade !== 9));
          } else if (this.descartaConjuntasNaoSolidarias) {
            this.contasPaginacao.contas = response.contas
              .map(conta => new CheckableItem<Conta>(false, conta))
              .filter(c => c.item.tipoConta !== 2);
          } else {
            this.contasPaginacao.contas = response.contas
              .map(conta => new CheckableItem<Conta>(false, conta));
          }
          this.tratarContas(this.contasPaginacao.contas);
          this.alterarPagina(1);
        } else {
          this.buscaContasService.contasEncontradas = [];
        }
        this.showTable = true;
        this.loading = false;
      }, (error) => {
        this.buscaContasService.contasEncontradas = [];
        this.showTable = true;
        this.loading = false;
        throw new Error(error.error.mensagem);
      });
    }
  }

  tratarContas(checkConta: CheckableItem<Conta>[]) {
    checkConta.forEach(check => {
      check.item = this.buscaContasService.getContaFormatada(check.item);
      const tipoConta = this.tiposConta.find(tipo => tipo.codigo === Number(check.item.produto));
      check.item.descricaoTipoConta = tipoConta ? tipoConta.nome : "";
    });
  }

  public alterarPagina(pagina: number): void {
    pagina ? this.pageIndex = pagina : this.pageIndex = 1;
    this.propriedadesPaginador = this.paginadorService.getPaginador(this.contasPaginacao.contas.length, pagina);
    this.contaDeposito.contas = this.contasPaginacao.contas.slice(
      this.propriedadesPaginador.indexInicial,
      this.propriedadesPaginador.indexFinal + 1
    );
  }

  checkConta(event: any, item: CheckableItem<Conta>) {
    item.checked = event.target.checked;
  }

  desabilitarBtnAcaoMultiSelecao() {
    if (this.contaDeposito.contas) {
      if (this.clienteAtual && this.clienteAtual.tipoCliente === TipoCliente.PF) {
        return this.contaDeposito.contas.filter(s => s.checked).length === 0;
      } else {
        return this.contaDeposito.contas.filter(s => s.checked).length === 0 || !this.representante;
      }
    }
  }

  selecionarConta(conta: Conta) {
    const objeto = {
      contas: [conta],
      representante: this.representante
    };
    this.selecionar.emit(objeto);
  }

  selecionarMultiContas() {
    const contasSelecionadas = this.contaDeposito.contas
      .filter(check => check.checked)
      .map(check => {
        return check.item
      });
    const objeto = {
      contas: contasSelecionadas,
      representante: this.representante
    };
    this.selecionar.emit(objeto);
  }

  carregaRepresentanteLegal() {
    this.representantesCombo = [];
    const params = {
      campos: "composicaoadministrativa"
    };
    let cpfCnpj = "";
    if (this.clienteAtual.tipoCliente === TipoCliente.PF) {
      cpfCnpj = this.clienteAtual.cadastroCliente.cpf;
    } else {
      cpfCnpj = this.clienteAtual.cadastroCliente.cnpj;
    }
    this.cadastroService.consultarSicli(cpfCnpj, params).subscribe((response: any) => {
      if (notEmpty(response.composicaoAdministrativa)) {
        if (response.composicaoAdministrativa[0].administradores) {
          this.representantesCombo = response.composicaoAdministrativa[0].administradores;
        }
      }
    });
  }

  atualizarRepresentante(selectedIndex: number) {
    if (selectedIndex > 0) {
      selectedIndex--;
      this.representante = this.representantesCombo[selectedIndex];
    } else {
      this.representante = null;
    }
  }

  cleanForms() {
    this.formRepresentante.reset();
  }

  manterDados() {
    this.controleContas.mudancaAba = true;
    this.controleContas.representante = this.representante;
    this.controleContas.pageIndex = this.pageIndex;
    if (this.contasPaginacao) {
      this.controleContas.contas = this.contasPaginacao.contas;
    }
  }

}
