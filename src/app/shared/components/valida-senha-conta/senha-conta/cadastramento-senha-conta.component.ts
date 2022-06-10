
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { FormularioValidacao } from "../../../utils/formulario-validacao";
import { ManutencaoSenha } from "../../../../comercial/roteiro-negocial/model/roteiro-negocial.model";
import { ClienteComercial, TipoCliente } from "../../../../comercial/model/cliente-comercial.model";
import { Conta, FiltroConta } from "../../../../comercial/roteiro-negocial/interface/conta-deposito";
import { SenhaContaService } from "../../../../comercial/roteiro-negocial/senha-conta/senha-conta.service";
import { BuscaUtilsService } from "../../../../service/busca-utils.service";
import { ConsultaCorporativaService } from "../../../../service/consulta-corporativa.service";
import { ComercialService } from "../../../../comercial/service/comercial.service";
import { ModalConfirmComponent } from "../../modal/modal-confirm/modal-confirm.component";
import { downloadRelatorio } from "../../../utils/utils";
import { environment } from "../../../../../environments/environment";
import { ContaRelatorio } from "../../../../comercial/roteiro-negocial/senha-conta/interface/conta-relatorio";
import { ModalAlertComponent } from "../../modal/modal-alert/modal-alert.component";
import { DadosConta, FlagMigracao, TipoDocumento } from "../../../../governo-social/model/cliente.model";
import { OrigemConta } from "../../../../comercial/roteiro-negocial/enum/origem-conta-enum";
import { TipoContaPF, TipoContaPJ } from "../../../../comercial/roteiro-negocial/enum/tipo-conta.enum";


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "cx-senha-conta",
  templateUrl: "./cadastramento-senha-conta.component.html",
  styleUrls: ["./cadastramento-senha-conta.component.css"]
})
export class CadastramentoSenhaComponent extends FormularioValidacao implements OnInit {

  @Input()
  isModal = false;

  @Output()
  fechar: EventEmitter<any> = new EventEmitter();

  showFormulario = false;
  permiteImprimir = false;

  contaFormatada = "";
  contaAtual: Conta;
  private manutencaoSenha: ManutencaoSenha;
  agencia: any;
  senhaForm: FormGroup;
  titular: string;
  rotaAtual: string;
  clienteAtual: ClienteComercial;
  filtroConta: FiltroConta;
  filtroTiposConta: Array<any>
  operacaoSenha: string;
  contaSenha: any;

  tipoClientePF = TipoCliente.PF;

  tiposContas = "1,2,3"; // NSGD: 1, SIDEC: 2, FACIL: 3

  constructor(
    private formBuilder: FormBuilder,
    //private modalService: MzModalService,
    private senhaContaService: SenhaContaService,
    private buscaUtilsService: BuscaUtilsService,
    private consultaCorporativaService: ConsultaCorporativaService,
    private comercialService: ComercialService,

  ) {
    super();
    this.rotaAtual = "/comercial/roteiro-negocial/senha-conta";
    this.comercialService.getClienteAtual().subscribe(cliente => {
      if (cliente) {
        this.clienteAtual = cliente;
        if (this.clienteAtual.rotaAtual === this.rotaAtual) {

          if (this.clienteAtual.tipoCliente === TipoCliente.PF) {
            this.manutencaoSenha.tipoDocumento = 1; // CPF
            this.manutencaoSenha.cpfCnpj = this.clienteAtual.cadastroCliente.cpf;
          } else if (this.clienteAtual.tipoCliente === TipoCliente.PJ) {
            this.manutencaoSenha.tipoDocumento = 3; // CNPJ
            this.manutencaoSenha.cpfCnpj = this.clienteAtual.cadastroCliente.cnpj;
          }

          this.carregarDados();
        }
      }
    });
    this.comercialService.changeEmittedBefore$.subscribe(() => this.manterDados());
    this.comercialService.changeEmitted$.subscribe(() => this.cleanForms());
  }

  ngOnInit() {
    this.manutencaoSenha = new ManutencaoSenha();

    this.clienteAtual = this.comercialService.clienteAtual;

    if (this.isModal) {
      this.initForm();
      this.redirecionarFromModal();
    } else {
      this.carregarDados();
    }

    if (this.clienteAtual) {
      this.clienteAtual.rotaAtual = this.rotaAtual;

      if (this.clienteAtual.tipoCliente === TipoCliente.PF) {
        this.manutencaoSenha.tipoDocumento = 1; // CPF
        this.manutencaoSenha.cpfCnpj = this.clienteAtual.cadastroCliente.cpf;
      } else if (this.clienteAtual.tipoCliente === TipoCliente.PJ) {
        this.manutencaoSenha.tipoDocumento = 3; // CNPJ
        this.manutencaoSenha.cpfCnpj = this.clienteAtual.cadastroCliente.cnpj;
      }
    }


  }

  private carregarDados() {
    this.initForm();
    this.carregarTiposDeConta();
    this.carregarFiltroConta();
    this.carregarInfoAgencia();
    this.clienteTitular();
    if (this.clienteAtual.senhaConta.controleContas.mudancaAba) {
      this.carregarDadosSalvos();
    }
  }

  private carregarDadosSalvos() {
    // this.showFormulario = this.clienteAtual.senhaConta.showFormulario;
    this.showFormulario = false;
    this.permiteImprimir = this.clienteAtual.senhaConta.permiteImprimir;
    if (this.clienteAtual.senhaConta.controleContas.contaAtual) {
      this.contaAtual = this.clienteAtual.senhaConta.controleContas.contaAtual;
    }
  }

  clienteTitular(): void {
    if (this.clienteAtual.tipoCliente === TipoCliente.PF) {
      this.titular = this.clienteAtual.resumoCliente.dadosBasicosPessoaFisicaDTO.nome;
    } else {
      this.titular = this.clienteAtual.resumoCliente.dadosBasicosPessoaJuridicaDTO.razaoSocial;
    }
  }

  carregarTiposDeConta() {
    this.filtroTiposConta = [];
    if (this.clienteAtual.tipoCliente === TipoCliente.PF) {
      this.filtroTiposConta = [
        TipoContaPF.CONTA_CORRENTE_PF_CAIXA,
        TipoContaPF.POUPANCA_PF_CAIXA,
        TipoContaPF.CONTA_CORRENTE_PF,
        TipoContaPF.POUPANCA_CAIXA
      ];
    } else {
      this.filtroTiposConta = [
        TipoContaPJ.POUPANCA_PJ_CAIXA,
        TipoContaPJ.POUPANCA_PJ_SEM_FINS_LUCRATIVOS_CAIXA,
        TipoContaPJ.CONTA_CORRENTE_PJ_CAIXA,
        TipoContaPJ.CONTA_CORRENTE_PJ,
        TipoContaPJ.POUPANCA_CAIXA,
        TipoContaPJ.DEPOSITO_POUPANCA_PJ
      ];
    }
  }

  private carregarFiltroConta() {
    this.filtroConta = {
      produtos: this.filtroTiposConta.join(","),
      situacao: "1", // ATIVA,
      unidade: ""
    };
  }

  private initForm() {
    this.senhaForm = this.formBuilder.group({
      senhaAnterior: [""],
      novaSenha: [""],
      redigitacaoNovaSenha: [""]
    });

    this.form = this.senhaForm;

  }

  updateValidators(callback?) {

    if (this.senhaForm.get("senhaAnterior").value) {
      this.senhaForm.controls["senhaAnterior"].setValidators([Validators.required]);
    } else {
      this.senhaForm.controls["senhaAnterior"].clearValidators();
    }
    this.senhaForm.controls["novaSenha"].setValidators([Validators.required]);
    this.senhaForm.controls["redigitacaoNovaSenha"].setValidators([Validators.required]);

    this.senhaForm.controls["senhaAnterior"].updateValueAndValidity();
    this.senhaForm.controls["novaSenha"].updateValueAndValidity();
    this.senhaForm.controls["redigitacaoNovaSenha"].updateValueAndValidity();
    callback();
  }

  gerarSenha() {

    this.updateValidators(() => {
      if (this.senhaForm.valid) {
        let senhaAnterior = null;
        if (!this.isModal) {
          senhaAnterior = this.senhaForm.get("senhaAnterior").value;
        }
        const novaSenha = this.senhaForm.get("novaSenha").value;
        const redigitacaoNovaSenha = this.senhaForm.get("redigitacaoNovaSenha").value;

        if (senhaAnterior && senhaAnterior.length > 0) {
          this.validaTamanhoSenha(senhaAnterior, "senha anterior");
        }
        this.validaTamanhoSenha(novaSenha, "nova senha");
        this.validaTamanhoSenha(redigitacaoNovaSenha, "redigitação da nova senha");

        if (novaSenha !== redigitacaoNovaSenha) {
          this.exibirMensagem("A confirmação da senha e a nova senha são diferentes", "error");
        } else {

          this.manutencaoSenha.conta = this.toDadosConta(this.contaAtual);

          if (senhaAnterior && senhaAnterior.length > 0) {
            this.consultaCorporativaService.gerarCriptograma(senhaAnterior, this.manutencaoSenha.conta)
              .subscribe(senhaAtual =>  {
              this.manutencaoSenha.senhaAtual = senhaAtual.criptograma
              this.enviarRequisicao(senhaAnterior, novaSenha, this.manutencaoSenha);
            });
          } else {
            this.enviarRequisicao(senhaAnterior, novaSenha, this.manutencaoSenha);
          }

        }

      } else {
        this.validateAllFormFields();
        this.exibirMensagem("Campo(s) obrigatório(s) não preenchido(s)", "error");
      }
    })
  }

  enviarRequisicao(senhaAnterior: string, novaSenha: string, manutencaoSenha: ManutencaoSenha) {
    this.consultaCorporativaService.gerarCriptograma(novaSenha, this.manutencaoSenha.conta).subscribe(result => {
      this.manutencaoSenha.senhaNova = result.criptograma;
      if (senhaAnterior && senhaAnterior.length > 0) {
        this.alterarSenha();
      } else {
        this.cadastrarSenha();
      }
    });
  }

  cadastrarSenha() {

    this.senhaContaService.cadastrarSenha(this.manutencaoSenha).subscribe(response => {
      this.permiteImprimir = true;
      this.operacaoSenha = "1";
      this.clearForm();
      this.exibirMensagem("Senha gerada com sucesso", "success");
    }, (err) => {

      if (err.error && err.error.mensagem === "JA EXISTE SENHA CADASTRADA") {
        this.recadastrarSenha();
      } else {
        throw new Error(err.error.mensagem);
      }
    });
  }

  recadastrarSenha() {

    // this.modalService.open(ModalConfirmComponent, {
    //   message: `Já existe uma senha cadastrada para esta conta. Deseja recadastrar a nova senha?`,
    //   type: "info",
    //   textoConfirmar: "Sim",
    //   textoCancelar: "Não",
    //   confirmar: () => {
    //     this.senhaContaService.recadastrarSenha(this.manutencaoSenha).subscribe(response => {
    //       this.permiteImprimir = true;
    //       this.operacaoSenha = "3";
    //       this.clearForm();
    //       this.exibirMensagem("Senha gerada com sucesso", "success");
    //     }, (err) => {
    //       throw new Error(err.error.mensagem);
    //     });
    //   },
    //   cancelar: () => { }
    // });
  }

  alterarSenha() {

    this.senhaContaService.alterarSenha(this.manutencaoSenha).subscribe(response => {
      this.permiteImprimir = true;
      this.operacaoSenha = "2";
      this.clearForm();
      this.exibirMensagem("Senha gerada com sucesso", "success");
    }, (err) => {
      throw new Error(err.error.mensagem);
    });
  }

  imprimir(): void {
    this.senhaContaService.imprimirContratoSenhaConta(this.getObjetoRequisicao()).subscribe(response => {
      const file = new Blob(
        [response], {
        type: "application/pdf"
      }
      );
      downloadRelatorio(file, "Contrato Senha da Conta");
    }, () => {
      throw Error("Erro ao gerar Contrato de Prestação de Serviços – Senha da Conta");
    });
  }

  private carregarInfoAgencia(): void {
    const codigoAgencia = sessionStorage.getItem(environment.localStorageKeys.CODIGO_AGENCIA_VIRTUAL);
    this.buscaUtilsService.getAgenciaById(codigoAgencia).subscribe((agencia) => {
      this.agencia = agencia;
    }, (error) => {
      throw new Error(`Erro ao buscar Agência: ${error.error.mensagem}`);
    }
    );
  }

  private getObjetoRequisicao(): ContaRelatorio {
    if (!this.titular) {
      this.clienteTitular();
    }

    return {
      agencia: this.contaAtual.unidade,
      operacao: this.contaAtual.produto,
      nroConta: `${this.contaAtual.numero}-${this.contaAtual.dv}`,
      dtAlteracao: new Date().toLocaleDateString(),
      titular: this.titular,
      tipoOperacaoSenha: this.operacaoSenha,
      localidade: this.agencia.nomeMunicipio
    };
  }

  exibirMensagem(mensagem: string, type: string) {

    // this.modalService.open(ModalAlertComponent, {
    //   message: mensagem,
    //   type: type,
    //   textoFechar: "OK"
    // });
  }

  criptografarSenha(senha: string, isNovaSenha: boolean) {
    this.manutencaoSenha.conta = this.toDadosConta(this.contaAtual);


    this.consultaCorporativaService.gerarCriptograma(senha, this.manutencaoSenha.conta).subscribe(result => {
      if (isNovaSenha) {
        this.manutencaoSenha.senhaNova = result.criptograma;
      } else {
        this.manutencaoSenha.senhaAtual = result.criptograma;
      }
    }, (error: any) => {
      let mensagemErro = "";
      if (error.error.origem) {
        mensagemErro = error.error.origem + " - ";
      }
      mensagemErro += error.error.mensagem;
      throw Error(mensagemErro);
    });

  }

  private clearForm() {
    this.senhaForm.reset();
    this.resetValidations();
  }

  private toDadosConta(conta: Conta): DadosConta {
    const dadosConta = new DadosConta();
    dadosConta.unidade = Number(conta.unidade);
    dadosConta.numero = Number(conta.numero);
    dadosConta.dv = conta.dv;
    dadosConta.operacao = Number(conta.produto);
    dadosConta.titular = conta.titularidade;
    if (conta.icConta === OrigemConta.IC_CONTA_NSGD) {
      dadosConta.contaMigrada = FlagMigracao.SIM;
    } else if (conta.icConta === OrigemConta.IC_CONTA_SIDEC || conta.icConta === OrigemConta.IC_CONTA_FACIL) {
      dadosConta.contaMigrada = FlagMigracao.NAO;
    }
    return dadosConta;
  }

  public voltar() {
    this.showFormulario = false;
    this.permiteImprimir = false;
    this.fechar.emit(true);
  }

  redirecionar(contaSelecionada: any) {

    if (contaSelecionada.contas && contaSelecionada.contas.length > 0) {

      if (contaSelecionada.contas[0].icConta === OrigemConta.IC_CONTA_NSGD && contaSelecionada.contas[0].titularidade !== 1) {
        throw new Error("Essa operação é permitida apenas para o primeiro titular da Conta");
      } else {
        this.clienteAtual.senhaConta.controleContas.contaAtual = contaSelecionada.contas[0];
        this.contaAtual = this.clienteAtual.senhaConta.controleContas.contaAtual;
        this.clearForm();
        this.showFormulario = true;
        this.senhaForm.reset();
        this.permiteImprimir = false;
      }
    }

  }


  redirecionarFromModal() {
    this.contaAtual = this.clienteAtual.senhaConta.controleContas.contaAtual;
    this.carregarInfoAgencia();
    this.clearForm();
    this.showFormulario = true;
    this.senhaForm.reset();
    this.permiteImprimir = false;
  }


  validaTamanhoSenha(valor: string, mensagem: string) {
    if (valor.length < 4) {
      throw Error(`A ${mensagem} deve ter 4 dígitos.`);
    }
  }

  // manter dados
  cleanForms() {
    if (this.senhaForm) {
      this.senhaForm.reset();
    }
  }

  manterDados() {
    if (this.clienteAtual) {
      this.clienteAtual.senhaConta.showFormulario = this.showFormulario;
      this.clienteAtual.senhaConta.permiteImprimir = this.permiteImprimir;
    }
  }

}
