import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from "@angular/core";
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { timer } from "rxjs";
import * as vanillaMasker from "vanilla-masker";
import { scan, takeWhile } from "rxjs/operators";

import { CestaServicoService } from "../../../comercial/roteiro-negocial/cesta-servico/services/cesta-servico.service";
import { ConsultaCorporativaService } from "../../../service/consulta-corporativa.service";
import { CreditoDiretoCaixaService } from "../../../comercial/credito-direto-caixa/credito-direto-caixa.service";
import { BuscaContasService } from "../../../comercial/roteiro-negocial/busca-contas/busca-contas.service";
import { TipoValidacaoSenha, Telefone, ValidacaoToken, ValidacaoSenha, TokenValidacaoRequest, TipoValidacaoSelecionada } from "../valida-senha-conta/valida-senha-conta.model";
import { TelefoneSms } from "../token-sms/token-sms.model";
import { TokenCriacaoResponse } from "../../../comercial/roteiro-negocial/cesta-servico/model/dados-token";
import { objIsNotEmpty, removeElementosObj, objIsEmpty, removeMaskString } from "../../utils/utils";
import { ValidaSenhaContaRequest } from "../../../model/valida-senha-conta.model";
import { ModalAlertComponent } from "../modal/modal-alert/modal-alert.component";
import { DadosConta, FlagMigracao } from "../../../governo-social/model/cliente.model";
import { Conta } from "../../../comercial/roteiro-negocial/interface/conta-deposito";
import { ModalConfirmacaoComponent, ModalConfirmacaoOptions } from "../modal-confirmacao/modal-confirmacao.component";
import { IndicadorConta } from "../../../comercial/model/manutencao-conta.model";
import { TipoContaPF, TipoContaPJ } from "../../utils/constants";
import { InvestimentoService } from "../../../investimento/service/investimento.service";
import { ClienteInvestidor, TipoCliente } from "../../../investimento/model/cliente-investidor.model";


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "cx-valida-senha-conta-investidor",
  templateUrl: "./valida-senha-conta-investidor.component.html",
  styleUrls: ["./valida-senha-conta-investidor.component.css"]
})
export class ValidaSenhaContaInvestidorComponent implements OnInit, OnChanges {

  constructor(
    private fb: FormBuilder,
    private cestaServicoService: CestaServicoService,
    private consultaCorporativaService: ConsultaCorporativaService,
    private creditoService: CreditoDiretoCaixaService,
    //private modalService: MzModalService,
    private buscaContasService: BuscaContasService,
    private investimentoService: InvestimentoService
  ) { }

  /**
   * Cliente cuja senha será cadastrada/validada/recadastrada
   * Tipo: ClienteInvestidor
  */
  @Input()
  cliente: ClienteInvestidor;

  /**
   * Dados da conta do cliente cuja senha será validada
   * Tipo: Conta
  */
  @Input()
  conta: Conta;

  /**
   * Dados da conta do cliente cuja senha será validada
  */
  @Input()
  dadosConta: DadosConta;

  /**
   * Caso não seja informada a conta, deve-se informar a lista de contas para escolha do usuário
   * Classe: Conta
  */
  @Input()
  contas: Conta[] = [];

  /**
   * Caso não seja informada a conta, deve-se informar a lista de contas para escolha do usuário
   * Classe: DadosConta
  */
  @Input()
  dadosContaArray: DadosConta[] = [];

  /**
   * Tempo mínimo de espera para envio de novo token
  */
  @Input()
  tokenTimerLength = 60 * 5;

  /**
   * Determina se é possível validar por senha
  */
  @Input()
  enableValidacaoPorSenha = true;

  /**
   * Determina se é possível validar por token
  */
  @Input()
  enableValidacaoPorToken = true;

  /**
   * Indica qual o processo de validação de senha
   * Valores: "comum", "pix"
   * Padrão: "comum"
  */
  @Input()
  tipoValidacaoSenha: TipoValidacaoSenha | string = "comum";

  /**
   * Mensagem a ser exibida no modal de confirmação
  */
  @Input()
  mensagemModal: TipoValidacaoSenha | string = "Confirma a operação?";

  /**
   * Mensagem a ser exibida no modal de confirmação
  */
  @Input()
  tituloModal: TipoValidacaoSenha | string = "Confirmação";

  /**
   * Identifica se exibe ou não o label default "Autenticação por"
  */
  @Input()
  showLabel = true;

  /**
   * Evento boleano disparado quando o token é validado;
   * 'True' se o token foi informado corretamente, senão 'false'
  */
  @Output()
  tokenValidado = new EventEmitter<boolean>();

  /**
   * Evento boleano disparado quando o token é validado;
   * Se validado corretamente envia os dados do token
  */
  @Output()
  resultadoValidacaoToken = new EventEmitter<ValidacaoToken>();

  /**
  * Evento boleano disparado quando a senha é validado;
  * 'True' se a senha foi informada corretamente, senão 'false'
 */
  @Output()
  senhaValidada = new EventEmitter<boolean>();

  /**
   * Evento boleano disparado quando a senha é validado;
   * Se validado corretamente envia os dados da senha
  */
  @Output()
  resultadoValidacaoSenha = new EventEmitter<ValidacaoSenha>();

  /**
   * Conta selecionada no select pelo usuário
  */
  contaSelecionada: Conta;

  /**
   * Form dos 6 caracteres do token
  */
  formTokenCode = this.fb.group({
    tokenCodeChar1: [null, [Validators.required, Validators.maxLength(1)]],
    tokenCodeChar2: [null, [Validators.required, Validators.maxLength(1)]],
    tokenCodeChar3: [null, [Validators.required, Validators.maxLength(1)]],
    tokenCodeChar4: [null, [Validators.required, Validators.maxLength(1)]],
    tokenCodeChar5: [null, [Validators.required, Validators.maxLength(1)]],
    tokenCodeChar6: [null, [Validators.required, Validators.maxLength(1)]]
  });

  /**
   * Form da senha informada para validação
  */
  formPassword = this.fb.group({
    password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
  });
  passwordControl = this.formPassword.get("password");

  /**
   * Lista de telefones do cliente que possuem serviço de adesão ao serviço de SMS
   * É recebida ao consultar o serviço de telefones aptos
  */
  telefonesAdesaoSms: TelefoneSms[] = [];

  /**
   * Lista de celulares formatados que podem receber o token
   * É utilizada para popular o campo select
  */
  listaCelularToken: Telefone[] = [];

  /**
   * Controla a exibição do painel de validação de senha
  */
  showValidacaoSenha = true;

  /**
   * Controla a exibição do painel de validação de token
  */
  showValidacaoToken = false;

  /*
    * Enum de tipo de validação
  */
  tipoValidacaoSelecionada = TipoValidacaoSelecionada;

  /*
    * Controla o estado dos botões de tipo de validação
  */
  showTipoValidacao = new FormControl(this.tipoValidacaoSelecionada.SENHA);

  /**
   * Código token informado para validação
  */
  tokenCode: string

  /**
   * Timer de validação do token
  */
  timer: number;

  /**
   * Controla o carregamento da lista de celulares
  */
  loading: boolean;

  btnDisabledEnviarToken: boolean;
  telefoneEscolhido = new Telefone();
  telefoneEnviado: string;



  tokenCriacaoResponse: TokenCriacaoResponse;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.cliente || changes.enableValidacaoPorSenha || changes.enableValidacaoPorToken) {
      this.setTipoValidacao(this.enableValidacaoPorSenha, this.enableValidacaoPorToken);
    }

    /* Se for passado DadosConta, converte para Conta */
    if (this.dadosConta) {
      return this.setContaAtual(this.dadosConta);
    }

    /* Se for passado Conta, converte para DadosConta */
    if (!this.dadosConta && this.conta) {
      this.dadosConta = this.convertContaToDadosConta(this.conta);
      return this.setContaAtual(this.dadosConta);
    }

    /* Se não for passado DadosConta nem Conta, mas um array de Conta, exibe o select pro usuário escolher */
    if (!this.dadosConta && !this.conta &&
      (this.contas && this.contas.length > 0)
    ) {
      return;
    }

    /* Se não for passado DadosConta nem Conta, mas um array de DadosConta, converte o array para Conta */
    if (!this.dadosConta && !this.conta &&
      (this.dadosContaArray && this.dadosContaArray.length > 0)
    ) {
      return this.convertArrayDadosContaToArrayConta(this.dadosContaArray);
    }

    /* Se não for passado nada, chama o serviço de contas e popula o select */
    if (!this.dadosConta
      && !this.conta
      && (!this.contas || (this.contas && this.contas.length < 1))
    ) {
      return this.buscaContas();
    }
  }

  ngOnInit() { }

  public setTipoValidacao(porSenha: boolean, porToken: boolean) {
    if (porSenha) {
      this.showValidacaoSenha = true;
      this.showValidacaoToken = false;
      this.showTipoValidacao.setValue(this.tipoValidacaoSelecionada.SENHA);
    } else if (porToken) {
      this.consultaListaTelefonesAdesaoSms();
      this.showValidacaoSenha = false;
      this.showValidacaoToken = true;
      this.showTipoValidacao.setValue(this.tipoValidacaoSelecionada.TOKEN);
    } else {
      this.showValidacaoSenha = false;
      this.showValidacaoToken = false;
    }
    this.resetValidacao();
  }

  private buscaContas(): void {
    if (objIsNotEmpty(this.investimentoService.clienteAtual)) {
      const tiposConta = [
        String(IndicadorConta.NSGD),
        String(IndicadorConta.SIDEC)]
        .join(",");
      let params = {
        unidade: "",
        produtos: [
          TipoContaPF.CORRENTE,
          TipoContaPF.POUPANCA,
          TipoContaPF.CORRENTE_NSGD,
          TipoContaPF.POUPANCA_NSGD,
          TipoContaPJ.CORRENTE_PUBLICA,
          TipoContaPJ.CORRENTE_PRIVADA,
          TipoContaPJ.POUPANCA_SEM_FINS_LUCRATIVOS,
          TipoContaPJ.CORRENTE_NSGD,
          TipoContaPJ.POUPANCA_NSGD
        ].join(","),
        situacao: "1",
        tiposConta: tiposConta
      };
      if (this.cliente.tipoCliente === TipoCliente.PF) {
        params["cpf"] = this.cliente.resumoCliente.clientePessoaFisica.cpf;
      } else {
        params["cnpj"] = this.cliente.resumoCliente.clientePessoaJuridica.cnpj;
      }
      params = removeElementosObj(params);
      this.buscaContasService.consultarContas(params).subscribe(response => {
        if (response && response.contas) {
          this.tratarContas(response.contas);
        }
      }, (error) => {
        throw new Error(error.error.mensagem);
      });
    }
  }

  private tratarContas(contas: Conta[]) {
    contas.forEach(conta => {
      conta = this.buscaContasService.getContaFormatada(conta);
      conta.contaFormatada = `${conta.unidade}/${conta.produto}/${conta.numero}-${conta.dv}`;
    });

    this.contas = [].concat(contas);
  }

  /*
    Consulta a lista de telefones com adesão pelo cestaServicoService (API de segurança)
    e popula as propriedades
    telefonesAdesaoSms (recebido do serviço)
    listaCelularToken (para popular o select na tela)
  */
  public consultaListaTelefonesAdesaoSms(): void {
    if (this.listaCelularToken && this.listaCelularToken.length > 0 || (!this.cliente))  {
      return;
    }
    this.listaCelularToken = [];
    this.loading = true;
    let tipoContaToken: string;
    if (this.cliente.tipoCliente === TipoCliente.PF) {
      tipoContaToken = this.cliente.resumoCliente.clientePessoaFisica.cpf;
    } else {
      tipoContaToken = this.cliente.resumoCliente.clientePessoaJuridica.cnpj;
    }
    this.cestaServicoService.listaTelefonesAdesao(tipoContaToken).subscribe(telefonesAdesao => {
      if (telefonesAdesao) {
        this.loading = false;
        this.telefonesAdesaoSms = telefonesAdesao.telefones;
        const LENGTH_CELULAR_SEM_MASCARA = 9;
        const tels = [];
        this.telefonesAdesaoSms.forEach((telefone, index) => {
          const maskPattern = telefone.numero.replace(/[^\d]/g, "").length === LENGTH_CELULAR_SEM_MASCARA ? "99999-9999" : "9999-9999";
          telefone.numero = vanillaMasker.toPattern(telefone.numero, maskPattern);
          tels.push({
            "id": index,
            "value": "(" + telefone.ddd.toString() + ")" + telefone.numero
          })
        });
        this.listaCelularToken = tels.concat(this.listaCelularToken);
      }
    }, (error) => {
    }, () => this.loading = false);
  }

  public enviarToken(): void {
    if (this.telefoneEscolhido && (objIsEmpty(this.telefoneEscolhido.value) || this.telefoneEscolhido.value === "")) {
      throw new Error("Favor informe celular que receberá o token.");
    }
    this.btnDisabledEnviarToken = true;
    this.countdown();
    const tokenCriacaoRequest = {
      "documento": this.cliente.tipoCliente === 1 ? this.cliente.resumoCliente.clientePessoaJuridica.cnpj : this.cliente.resumoCliente.clientePessoaFisica.cpf,
      "ddd": this.telefonesAdesaoSms[this.telefoneEscolhido.id].ddd.toString(),
      "telefone": removeMaskString(this.telefonesAdesaoSms[this.telefoneEscolhido.id].numero)
    }
    this.cestaServicoService.enviarToken(tokenCriacaoRequest).subscribe(tokenCriacaoResponse => {
      this.tokenCriacaoResponse = tokenCriacaoResponse;
      this.telefoneEnviado = this.telefoneEscolhido.value;
    }, error => {
      if (error) {
        if (error.error) {
          throw new Error(`Erro ao enviar token: ${error.error.mensagem}`);
        } else {
          throw new Error(error);
        }
      }
    });
  }

  public onSelectContasChange() {
    if (!this.contaSelecionada) {
      this.dadosConta = null;
      this.conta = null;
      return;
    }
    this.dadosConta = this.convertContaToDadosConta(this.contaSelecionada);
    this.setContaAtual(this.dadosConta);
  }

  private setContaAtual(dadosConta: DadosConta) {
    if (!dadosConta) { return; }
    this.conta = this.convertDadosContaToConta(dadosConta);
    this.conta = this.buscaContasService.getContaFormatada(this.conta);
    this.cliente.senhaConta.controleContas.contaAtual = this.conta;
  }

  private convertContaToDadosConta(conta: Conta): DadosConta {
    const isContaMigrada = Number(conta.icConta) === IndicadorConta.NSGD
      ? FlagMigracao.SIM
      : FlagMigracao.NAO;
    return {
      unidade: Number(conta.unidade),
      operacao: Number(conta.produto),
      numero: Number(conta.numero),
      dv: conta.dv,
      titular: conta.titularidade,
      contaMigrada: isContaMigrada
    }
  }

  private convertDadosContaToConta(dadosConta: DadosConta): Conta {
    if (!dadosConta) { return; }
    return {
      unidade: dadosConta.unidade.toString(),
      numero: dadosConta.numero.toString(),
      dv: dadosConta.dv,
      icConta: dadosConta.contaMigrada === FlagMigracao.SIM ? "1" : "2",
      titularidade: dadosConta.titular,
      contaFormatada: "",
      situacao: 1,
      produto: dadosConta.operacao.toString(),
      motivo: 0,
      propriedade: 0,
      tipoConta: 0,
      descricaoTipoConta: ""
    }
  }

  private convertArrayDadosContaToArrayConta(dadosContaArray: DadosConta[]) {
    this.contas = new Array<Conta>();
    this.contas = dadosContaArray.map(dadosConta => this.convertDadosContaToConta(dadosConta));
  }

  public onTokenCodeKeyup(event) {
    const nextInput = event.srcElement.nextElementSibling;
    if (nextInput) { nextInput.focus(); }
    this.tokenCode = String(this.formTokenCode.get("tokenCodeChar1").value) +
      String(this.formTokenCode.get("tokenCodeChar2").value) +
      String(this.formTokenCode.get("tokenCodeChar3").value) +
      String(this.formTokenCode.get("tokenCodeChar4").value) +
      String(this.formTokenCode.get("tokenCodeChar5").value) +
      String(this.formTokenCode.get("tokenCodeChar6").value);
  }

  private verificaTipoValidacaoSenha() {
    if (this.tipoValidacaoSenha === TipoValidacaoSenha.COMUM) {
      this.gerarCriptograma();
    } else if (this.tipoValidacaoSenha === TipoValidacaoSenha.PIX) {
      /* Implementação da validação do PIX a fazer */
    }
  }

  private gerarCriptograma(): void {
    const dadosConta = this.dadosConta;
    const senha = this.passwordControl.value;
    const pan = this.consultaCorporativaService.gerarPan(dadosConta);

    this.consultaCorporativaService.gerarCriptograma(senha, dadosConta).subscribe(senhaCript => {
      const validarSenhaRequest: ValidaSenhaContaRequest = {
        conta: {
          agencia: dadosConta.unidade,
          dv: dadosConta.dv,
          numero: dadosConta.numero,
          produto: dadosConta.operacao
        },
        flagIdentificacaoPositiva: "SIM",
        pan: pan,
        senha: senhaCript.criptograma,
        titularidade: dadosConta.titular,
        cpfCnpj: this.cliente.tipoCliente === 1 ? this.cliente.resumoCliente.clientePessoaJuridica.cnpj : this.cliente.resumoCliente.clientePessoaFisica.cpf,
        tipoCliente: TipoCliente.PF
      }
      this.validarSenha(validarSenhaRequest);
    }, (error: any) => {
      this.exibirMensagem(`Erro ao criptografar senha: ${error.message}`, "error");
      this.senhaValidada.emit(null);
    });
  }

  private validarSenha(validarSenhaRequest: ValidaSenhaContaRequest) {
    this.creditoService.validarSenha(validarSenhaRequest).subscribe(
      (resposta) => {
        const validacaoSenha: ValidacaoSenha = {
          senhaValidada: true,
          validaSenhaContaRequest: validarSenhaRequest
        }
        this.senhaValidada.emit(true);
        this.resultadoValidacaoSenha.emit(validacaoSenha);
        this.formPassword.reset();
        this.formTokenCode.reset();
      },
      (error: any) => {
        const validacaoSenha: ValidacaoSenha = {
          senhaValidada: false
        }
        this.exibirMensagem(error.error.mensagem, "error");
        this.formPassword.reset();
        this.senhaValidada.emit(false);
        this.resultadoValidacaoSenha.emit(validacaoSenha);
      });
  }

  private validarToken() {
    const tokenValidacaoRequest: TokenValidacaoRequest = {
      codigo: this.tokenCode,
      documento: this.tokenCriacaoResponse.identificador.usuario,
      token: this.tokenCriacaoResponse.identificador.id
    }
    this.cestaServicoService.validarToken(tokenValidacaoRequest).subscribe(
      (tokenValidacaoResponse) => {
        const validacaoToken: ValidacaoToken = {
          tokenValidado: true,
          tokenValidacaoRequest: tokenValidacaoRequest
        }
        this.tokenValidado.emit(true);
        this.resultadoValidacaoToken.emit(validacaoToken);
        this.btnDisabledEnviarToken = false;
        this.formPassword.reset();
        this.formTokenCode.reset();
      },
      (error) => {
        const validacaoToken: ValidacaoToken = {
          tokenValidado: false
        }
        this.tokenValidado.emit(false);
        this.resultadoValidacaoToken.emit(validacaoToken);
        if (error) {
          if (error.error) {
            throw new Error(`Erro ao validar token: ${error.error.mensagem}`);
          } else {
            throw new Error(error);
          }
        }
      });
  }

  private resetValidacao() {
    this.formPassword.reset();
    this.senhaValidada.emit(null);
    this.formTokenCode.reset();
    this.tokenValidado.emit(null);
  }

  private countdown(): void {
    timer(0, 1000).pipe(
      scan(acc => --acc, this.tokenTimerLength),
      takeWhile(x => x >= 0)
    ).subscribe(time => {
      this.timer = time;
      if (time === 0) {
        this.btnDisabledEnviarToken = false;
      }
    });
  }

  private exibirAlertaSucesso(cabecalho: string, msg: string) {
    // this.modalService.open(ModalAlertComponent, {
    //   header: cabecalho,
    //   message: msg,
    //   type: "sucess",
    // });
  }

  private exibirMensagem(msg: string, type?: string): void {
    // this.modalService.open(ModalAlertComponent, {
    //   message: msg,
    //   type,
    //   textoFechar: "OK"
    // });
  }

  public isTelefoneEscolhidoValid(): boolean {
    return this.telefoneEscolhido
      && objIsNotEmpty(this.telefoneEscolhido.value)
      && this.telefoneEscolhido.value !== ""
  }

  public customSearchFn(term: string, item: Conta): Conta | string {
    return item.contaFormatada.includes(term) ? item : "";
  }

  public confirmarTransacao(): void {
    if (this.showValidacaoSenha) {
      this.verificaTipoValidacaoSenha();
    } else if (this.showValidacaoToken) {
      this.validarToken();
    }
  }

  public openModalConfirmacao(): void {
    const modalOptions: ModalConfirmacaoOptions = {
      header: this.tituloModal,
      message: this.mensagemModal,
      confirmar: () => this.confirmarTransacao(),
      cancelar: () => { }
    };
    // this.modalService.open(ModalConfirmacaoComponent, modalOptions);
  }

  public get isValidacaoSenhaEnabledValid(): boolean {
    return this.showValidacaoSenha && this.enableValidacaoPorSenha && this.formPassword.valid;
  }

  public get isValidacaoTokenEnabledValid(): boolean {
    return this.showValidacaoToken && this.enableValidacaoPorToken && this.formTokenCode.valid;
  }

  public get isValidacaoExibidaEnabledValid(): boolean {
    if (this.showValidacaoSenha) {
      return this.isValidacaoSenhaEnabledValid;
    }

    if (this.showValidacaoToken) {
      return this.isValidacaoTokenEnabledValid;
    }
  }
}
