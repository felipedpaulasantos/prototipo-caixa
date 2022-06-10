import { Component, Input, SimpleChanges, OnChanges } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { ClienteComercial, TipoCliente } from "../../../comercial/model/cliente-comercial.model";
import { ConsultasCadastraisEnum } from "../../../model/enum/consulta-cadastral.enum";
import { ComercialService } from "../../../comercial/service/comercial.service";
import { ConsultaCorporativaService } from "../../../service/consulta-corporativa.service";
import { Receita, Estabelecimento } from "../../../governo-social/model/cliente.model";
import { PesquisaCadastral, Sicow, Sinad, Spc, Siccf, Serasa, Cadin, OrgaoPesquisaCadastral, StatusPesquisaCadastral } from "../../../comercial/model/pesquisa-cadastral.model";
import { ReceitaRegularidadePF, ReceitaRegularidadePJ } from "../../../model/enum/receita-regularidade.enum";
import { ConsultaCadastralStatus, ConsultaCadastral, ConsultasCadastrais } from "../../../model/consultas-cadastrais.model";
import { AberturaContaService } from "../../../comercial/abertura-conta/abertura-conta.service";
import { ValidacaoCadastroSicli } from "../../../comercial/saque-aniversario/antecipacao/model/validacao-cadastro-sicli.model";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "cx-consultas-cadastrais",
  templateUrl: "./consultas-cadastrais.component.html",
  styleUrls: ["./consultas-cadastrais.component.css"]
})
export class ConsultasCadastraisComponent implements OnChanges {

  private readonly pesquisasSipes = [
    ConsultasCadastraisEnum.CADIN,
    ConsultasCadastraisEnum.SCPC,
    ConsultasCadastraisEnum.SERASA,
    ConsultasCadastraisEnum.SICCF,
    ConsultasCadastraisEnum.SICOW,
    ConsultasCadastraisEnum.SINAD
  ];

  private readonly todasConsultas = [].concat(
    this.pesquisasSipes, ConsultasCadastraisEnum.SICLI, ConsultasCadastraisEnum.RECEITA
  );

  readonly statusConsulta = ConsultaCadastralStatus;

  readonly SUCCESS_ICON = "fa fa-check";
  readonly TIMEOUT_ICON = "fa fa-sync";
  readonly PENDING_ICON = "fa fa-square";
  readonly PENDING_MESSAGE = "Consulta não efetuada";
  readonly WARNING_ICON = "fa fa-exclamation";
  readonly ERROR_ICON = "fa fa-times";
  readonly LOADING_ICON = "fa fa-circle-notch fa-spin";
  readonly LOADING_MESSAGE = "Efetuando consulta...";

  /**
   * Cliente cuja senha será cadastrada/validada/recadastrada
   * Tipo: ClienteComercial
  */
  @Input()
  cliente: ClienteComercial;

  /**
   * Pesquisas a serem realizadas
   * Recomendado utilizar a enum ConsultasCadastraisEnum para definir os valores
   * Tipo: ConsultasCadastraisEnum[] | string[]
   * Padrão: [ConsultasCadastraisEnum.RECEITA, ConsultasCadastraisEnum.SICLI, ConsultasCadastraisEnum.SICOW, ConsultasCadastraisEnum.SINAD]
  */
  @Input()
  pesquisasParaFazer: ConsultasCadastraisEnum[] = [
    ConsultasCadastraisEnum.RECEITA,
    ConsultasCadastraisEnum.SICLI,
    ConsultasCadastraisEnum.SICOW,
    ConsultasCadastraisEnum.SINAD
  ];

  /**
   * Indica se o componente deve realizar todas as consultas possíveis
   * OBS: Caso seja informado 'true', este atributo sobrescreve o que for definido no Input 'pesquisasParaFazer'
   * Tipo: boolean
   * Padrão: false
  */
  @Input()
  consultarTodas = false;

  /**
    * Série de Inputs opcionais que definem se um resultado de erro/indisponível para uma consulta é impeditivo ou não
    * A definição de impedimento afeta o visual do componente e o seu estado retornado nos métodos de
    verificação das consultas, como '.isReceitaStatusOk()' por exemplo
  */

  @Input() isReceitaImpeditivo = true;
  @Input() isSicliImpeditivo = true;
  @Input() isSicowImpeditivo = true;
  @Input() isSinadImpeditivo = true;
  @Input() isSerasaImpeditivo = true;
  @Input() isSpcImpeditivo = true;
  @Input() isSiccfImpeditivo = true;

  /**
    * Série de Inputs opcionais que definem se um subgrupo do SICOW é impeditivo ou não
    * Essa série opcional é tratada apenas se o input mais genérico isSicowImpeditivo seja falso
    * A definição de impedimento afeta o visual do componente e o seu estado retornado nos métodos de
    verificação das consultas, como '.isReceitaStatusOk()' por exemplo
  */
 @Input() isSicowConresImpeditivo = false;
 @Input() isSicowTrabalhoEscravoImpeditivo = false;
 @Input() isSicowSegurancaImpeditivo = false;
 @Input() isSicowPpeRelacionadosImpeditivo = false;
 @Input() isSicowPpePrimarioImpeditivo = false;
 @Input() isSicowInterdicaoImpeditivo = false;
 @Input() isSicowContratarPublicoImpeditivo = false;

  /**
    * Série de Inputs opcionais que definem se uma determinada consulta deve ser exibida ou não
    * OBS: Se a exibição for desabilitada, a chamada ao serviço não será realizada
  */

  @Input() showConsultaReceita = true;
  @Input() showConsultaSicli = true;
  @Input() showConsultaSipes = true;

  /**
    * Série de Inputs opcionais que definem se os detalhes da consulta já devem aparecer por padrão
  */

  @Input() isReceitaColapsado = true;
  @Input() isSicliColapsado = true;
  @Input() isSipesColapsado = true;

  /**
    * As três consultas (SICLI, RECEITA, SIPES) são modeladas conforme a interface 'ConsultaCadastral'
    * Caso seja necessário consultar seu conteúdo, recuperar o Observable 'consultasCadastrais$'
  */

  private resultadoReceitaPF: Receita;
  private resultadoReceitaPJ: Estabelecimento;
  private statusReceita: ConsultaCadastralStatus = ConsultaCadastralStatus.NAO_CONSULTADO;

  private resultadoSicli: ValidacaoCadastroSicli;
  private statusSicli: ConsultaCadastralStatus = ConsultaCadastralStatus.NAO_CONSULTADO;

  private resultadoSipes: PesquisaCadastral = new PesquisaCadastral();
  private statusSipes: ConsultaCadastralStatus = ConsultaCadastralStatus.NAO_CONSULTADO;

  private consultaCadastralSicli: ConsultaCadastral;
  private consultaCadastralReceita: ConsultaCadastral;
  private consultaCadastralSipes: ConsultaCadastral;

  private consultasCadastrais: ConsultasCadastrais;

  private consultasCadastraisSource = new BehaviorSubject<ConsultasCadastrais>(null);
  consultasCadastrais$: Observable<ConsultasCadastrais> = this.consultasCadastraisSource.asObservable();

  isClientePF: boolean;

  constructor(
    private comercialService: ComercialService,
    private corpService: ConsultaCorporativaService,
    private aberturaContaService: AberturaContaService
  ) { }

  /**
    * Retorna se a consulta ao SICLI possui status SUCESSO ou ERRO_NAO_IMPEDITIVO
  */
  public isStatusSicliOk(): boolean {
    return (this.consultaCadastralSicli.status === ConsultaCadastralStatus.SUCESSO
      || this.consultaCadastralSicli.status === ConsultaCadastralStatus.ERRO_NAO_IMPEDITIVO
    );
  }

  /**
    * Retorna se a consulta a RECEITA possui status SUCESSO ou ERRO_NAO_IMPEDITIVO
  */
  public isStatusReceitaOk(): boolean {
    return (this.consultaCadastralReceita.status === ConsultaCadastralStatus.SUCESSO
      || this.consultaCadastralReceita.status === ConsultaCadastralStatus.ERRO_NAO_IMPEDITIVO
    );
  }

  /**
    * Retorna se a consulta ao SIPES possui status SUCESSO ou ERRO_NAO_IMPEDITIVO
  */
  public isStatusSipesOk(): boolean {
    return (this.consultaCadastralSipes.status === ConsultaCadastralStatus.SUCESSO
      || this.consultaCadastralSipes.status === ConsultaCadastralStatus.ERRO_NAO_IMPEDITIVO
    );
  }

  /**
    * Retorna se todas as consultas possuem status SUCESSO ou ERRO_NAO_IMPEDITIVO
  */
  public isTodasConsultasOk(): boolean {
    return (this.isStatusSicliOk() && this.isStatusReceitaOk() && this.isStatusSipesOk());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cliente) {
      this.resetCliente();
      this.cliente = changes.cliente.currentValue;
    }

    if (!this.cliente) { return; }
    this.isClientePF = (this.cliente.tipoCliente === TipoCliente.PF);

    if (this.pesquisasParaFazer && this.pesquisasParaFazer.length > 0) {
      if (this.consultarTodas === true) { this.pesquisasParaFazer = this.todasConsultas }
      this.resetResultados();
      this.realizaConsultasCadastrais(this.pesquisasParaFazer);
    }
  }

  private realizaConsultasCadastrais(pesquisasParaFazer: ConsultasCadastraisEnum[]): void {
    this.consultaReceita(pesquisasParaFazer);
    this.consultaSicli(pesquisasParaFazer);
    this.consultaSipes(pesquisasParaFazer);
  }

  private resetCliente(): void {
    this.cliente = null;
    this.resetResultados();
  }

  private resetResultados(): void {
    this.resultadoReceitaPF = this.resultadoReceitaPJ = this.resultadoSicli = this.resultadoSipes = null;
    this.statusReceita = this.statusSicli = this.statusSipes = ConsultaCadastralStatus.NAO_CONSULTADO;
    this.initConsultasCadastrais();
  }

  private initConsultasCadastrais(): void {
    this.consultaCadastralSicli = {
      tipo: [ConsultasCadastraisEnum.SICLI],
      titulo: "Consulta de Cadastro do Cliente",
      mensagem: this.PENDING_MESSAGE,
      visivel: this.showConsultaSicli,
      status: this.statusSicli,
      colapsado: this.isSicliColapsado
    }
    this.consultaCadastralReceita = {
      tipo: [ConsultasCadastraisEnum.RECEITA],
      titulo: "Consulta da Receita",
      mensagem: this.PENDING_MESSAGE,
      visivel: this.showConsultaReceita,
      status: this.statusReceita,
      colapsado: this.isReceitaColapsado
    }
    this.consultaCadastralSipes = {
      tipo: [
        ConsultasCadastraisEnum.CADIN, ConsultasCadastraisEnum.SCPC, ConsultasCadastraisEnum.SERASA,
        ConsultasCadastraisEnum.SICCF, ConsultasCadastraisEnum.SICOW, ConsultasCadastraisEnum.SINAD
      ],
      titulo: "Pesquisas Cadastrais",
      mensagem: this.PENDING_MESSAGE,
      visivel: this.showConsultaSipes,
      status: this.statusSipes,
      colapsado: this.isSipesColapsado
    }
    this.consultasCadastrais = {
      consultaSicli: this.consultaCadastralSicli,
      consultaReceita: this.consultaCadastralReceita,
      consultaSipes: this.consultaCadastralSipes
    };
    this.consultasCadastraisSource.next(this.consultasCadastrais);
  }

  private consultaReceita(pesquisasParaFazer: ConsultasCadastraisEnum[]): void {
    if (!pesquisasParaFazer.includes(ConsultasCadastraisEnum.RECEITA) || !this.showConsultaReceita) { return; }

    (this.isClientePF)
      ? this.consultaReceitaPF(this.cliente.resumoCliente.dadosBasicosPessoaFisicaDTO.cpf)
      : this.consultaReceitaPJ(this.cliente.resumoCliente.dadosBasicosPessoaJuridicaDTO.cnpj);
  }

  private consultaReceitaPF(cpf: string): void {
    this.consultaCadastralReceita.status = ConsultaCadastralStatus.LOADING;
    this.consultaCadastralReceita.mensagem = this.LOADING_MESSAGE;
    this.corpService.consultaCpf(cpf).subscribe(
      (receitaPF) => {
        this.resultadoReceitaPF = receitaPF;
        const status = (receitaPF.regularidade === ReceitaRegularidadePF.REGULAR)
          ? ConsultaCadastralStatus.SUCESSO
          : this.getIsImpeditivo(ConsultasCadastraisEnum.RECEITA)
        const mensagem = `O CPF do cliente está em situação
          <strong class="text-uppercase">${this.resultadoReceitaPF.descricaoRegularidade}</strong>
          perante a Receita Federal.`.trim();
        this.updateConsultaCadastral(this.consultaCadastralReceita, status, mensagem);
      },
      () => {
        const status = ConsultaCadastralStatus.ERRO_IMPEDITIVO;
        const mensagem = `Houve um erro ao consultar a Receita para este cliente.`;
        this.updateConsultaCadastral(this.consultaCadastralReceita, status, mensagem);
      }
    );
  }

  private consultaReceitaPJ(cnpj: string): void {
    this.consultaCadastralReceita.status = ConsultaCadastralStatus.LOADING;
    this.consultaCadastralReceita.mensagem = this.LOADING_MESSAGE;
    this.corpService.consultaCnpjRest(cnpj).subscribe(
      (receitaPJ) => {
        this.resultadoReceitaPJ = receitaPJ;
        let status: ConsultaCadastralStatus;
        let mensagem: string;
        if (receitaPJ.descricaoSituacaoCadastral && receitaPJ.descricaoSituacaoCadastral === ReceitaRegularidadePJ.ATIVA) {
          status = ConsultaCadastralStatus.SUCESSO;
          mensagem = `O CNPJ do cliente está em situação
          <strong class="text-uppercase">${this.resultadoReceitaPJ.descricaoSituacaoCadastral}</strong>
          perante a Receita Federal.`.trim();
          this.updateConsultaCadastral(this.consultaCadastralReceita, status, mensagem);
        } else {
          status = this.getIsImpeditivo(ConsultasCadastraisEnum.RECEITA);
          mensagem = `O CNPJ do cliente está em situação
          <strong class="text-uppercase">${this.resultadoReceitaPJ.descricaoSituacaoCadastral}</strong>
          perante a Receita Federal.`.trim();
        }
        this.updateConsultaCadastral(this.consultaCadastralReceita, status, mensagem);
      },
      () => {
        const status  = ConsultaCadastralStatus.ERRO_IMPEDITIVO;
        const mensagem = `Houve um erro ao consultar a Receita para este cliente.`;
        this.updateConsultaCadastral(this.consultaCadastralReceita, status, mensagem);
      }
    );
  }

  private consultaSicli(pesquisasParaFazer: ConsultasCadastraisEnum[]): void {
    if (!pesquisasParaFazer.includes(ConsultasCadastraisEnum.SICLI) || !this.showConsultaSicli) { return; }

    const cpfCnpj = (this.isClientePF)
      ? this.cliente.resumoCliente.dadosBasicosPessoaFisicaDTO.cpf
      : this.cliente.resumoCliente.dadosBasicosPessoaJuridicaDTO.cnpj;

    this.consultaCadastralSicli.status = ConsultaCadastralStatus.LOADING;
    this.consultaCadastralSicli.mensagem = this.LOADING_MESSAGE;
    this.aberturaContaService.validarCadastroSicli(cpfCnpj).subscribe(
      (dadosSicli: ValidacaoCadastroSicli) => {
        this.setResultadoSicli(dadosSicli);
      },
      () => {
        const status = this.getIsImpeditivo(ConsultasCadastraisEnum.SICLI);
        const mensagem = "Houve um erro ao consulta o cadastro do cliente.";
        this.updateConsultaCadastral(this.consultaCadastralSicli, status, mensagem);
      }
    )
  }

  private setResultadoSicli(dadosSicli: ValidacaoCadastroSicli): void {
    let status = ConsultaCadastralStatus.NAO_CONSULTADO;
    let mensagem = "";
    if (dadosSicli.erro) {
      status = this.getIsImpeditivo(ConsultasCadastraisEnum.SICLI);
      dadosSicli.mensagens.forEach((erroMsg: string) => {
        mensagem += `<li>${erroMsg}</li>`
      });
      mensagem = `<ul class="list-disc">${mensagem}<ul>`;
    } else {
      status = ConsultaCadastralStatus.SUCESSO;
      mensagem = "Não há pendências no cadastro do cliente.";
    }
    this.resultadoSicli = dadosSicli;
    this.updateConsultaCadastral(this.consultaCadastralSicli, status, mensagem);
  }

  private consultaSipes(pesquisasParaFazer: ConsultasCadastraisEnum[]): void {
    if (!this.includesAlgumaPesquisaSipes(pesquisasParaFazer) || !this.showConsultaSipes) { return; }

    const pesquisasParaFazerSipes = pesquisasParaFazer.filter((pesquisa) => this.pesquisasSipes.includes(pesquisa));

    let cpfCnpj = "";
    let tipoDocumento = "";
    if (this.isClientePF) {
      cpfCnpj = this.cliente.resumoCliente.dadosBasicosPessoaFisicaDTO.cpf;
      tipoDocumento = "cpf";
    } else {
      cpfCnpj = this.cliente.resumoCliente.dadosBasicosPessoaJuridicaDTO.cnpj;
      tipoDocumento = "cnpj";
    }

    this.consultaCadastralSipes.status = ConsultaCadastralStatus.LOADING;
    this.consultaCadastralSipes.mensagem = this.LOADING_MESSAGE;
    this.comercialService.consultarPesquisaCadastralAPI(cpfCnpj, tipoDocumento, pesquisasParaFazerSipes).subscribe(
      (resultado: PesquisaCadastral) => {
        this.setResultadoSipes(resultado, pesquisasParaFazerSipes);
      },
      (error) => {
        const status = ConsultaCadastralStatus.ERRO_IMPEDITIVO;
        const mensagem = "Houve um erro na consulta aos sistemas de pesquisas cadastrais.";
        this.updateConsultaCadastral(this.consultaCadastralSipes, status, mensagem);
      }
    )
  }

  private setResultadoSipes(pesquisa: PesquisaCadastral, pesquisasParaFazerSipes: ConsultasCadastraisEnum[]): void {
    this.resultadoSipes = pesquisa;
    let status = this.consultaCadastralSipes.status;
    if (this.resultadoSipes.mensagemErro) {
      status = (pesquisasParaFazerSipes.some((pesquisaSipes) => this.getIsImpeditivo(pesquisaSipes) === ConsultaCadastralStatus.ERRO_IMPEDITIVO))
        ? ConsultaCadastralStatus.ERRO_IMPEDITIVO
        : ConsultaCadastralStatus.ERRO_NAO_IMPEDITIVO;
      const mensagem = "Houve um erro na consulta aos sistemas de pesquisas cadastrais.";
      this.updateConsultaCadastral(this.consultaCadastralSipes, status, mensagem);
    } else {
      this.trataResultadoPesquisaCadastral(pesquisa, pesquisasParaFazerSipes);
    }
  }

  private includesAlgumaPesquisaSipes(pesquisasParaFazer: ConsultasCadastraisEnum[]): boolean {
    return pesquisasParaFazer.some(pesquisa => this.pesquisasSipes.includes(pesquisa));
  }

  private trataResultadoPesquisaCadastral(pesquisa: PesquisaCadastral, pesquisasParaFazerSipes: ConsultasCadastraisEnum[]) {
    this.cliente.orgaosPesquisaCadastral.forEach((orgao: OrgaoPesquisaCadastral) => {
      switch (orgao.tipo) {
        case ConsultasCadastraisEnum.SICOW:
          if (pesquisasParaFazerSipes.includes(ConsultasCadastraisEnum.SICOW)) {
            orgao.checked = true;
          }
          if (pesquisa.sicow) {
            orgao.aplicaRetornoPesquisaCadastral(pesquisa.sicow.retorno, pesquisa.sicow);
          } else {
            pesquisa.sicow = new Sicow();
          }
          break;
        case ConsultasCadastraisEnum.SINAD:
          if (pesquisasParaFazerSipes.includes(ConsultasCadastraisEnum.SINAD)) {
            orgao.checked = true;
          }
          if (pesquisa.sinad) {
            orgao.aplicaRetornoPesquisaCadastral(pesquisa.sinad.retorno);
          } else {
            pesquisa.sinad = new Sinad();
          }
          break;
        case ConsultasCadastraisEnum.SCPC:
          if (pesquisasParaFazerSipes.includes(ConsultasCadastraisEnum.SCPC)) {
            orgao.checked = true;
          }
          if (pesquisa.spc) {
            orgao.aplicaRetornoPesquisaCadastral(pesquisa.spc.retorno);
          } else {
            pesquisa.spc = new Spc();
          }
          break;
        case ConsultasCadastraisEnum.SICCF:
          if (pesquisasParaFazerSipes.includes(ConsultasCadastraisEnum.SICCF)) {
            orgao.checked = true;
          }
          if (pesquisa.siccf) {
            orgao.aplicaRetornoPesquisaCadastral(pesquisa.siccf.retorno);
          } else {
            pesquisa.siccf = new Siccf();
          }
          break;
        case ConsultasCadastraisEnum.SERASA:
          if (pesquisasParaFazerSipes.includes(ConsultasCadastraisEnum.SERASA)) {
            orgao.checked = true;
          }
          if (pesquisa.serasa) {
            orgao.aplicaRetornoPesquisaCadastral(pesquisa.serasa.retorno);
          } else {
            pesquisa.serasa = new Serasa();
          }
          break;
        case ConsultasCadastraisEnum.CADIN:
          if (pesquisasParaFazerSipes.includes(ConsultasCadastraisEnum.CADIN)) {
            orgao.checked = true;
          }
          if (pesquisa.cadin) {
            orgao.aplicaRetornoPesquisaCadastral(pesquisa.cadin.retorno);
          } else {
            pesquisa.cadin = new Cadin();
          }
          break;
      }
    });

    this.montaMensagemDosOrgaosParaDetalhamento(pesquisasParaFazerSipes, pesquisa);
    this.verificaSituacaoImpeditivaSipes(pesquisasParaFazerSipes);
  }

  private verificaSituacaoImpeditivaSipes(pesquisasParaFazerSipes: ConsultasCadastraisEnum[]): void {
    let status = ConsultaCadastralStatus.NAO_CONSULTADO;
    let mensagem = "";

    const orgaosComPendencia: OrgaoPesquisaCadastral[]  = this.cliente.orgaosPesquisaCadastral
    .filter((orgao: any) => {
      return this.pesquisasParaFazer.includes(orgao.tipo) && this.isOrgaoErrorOuPendencia(orgao);
    });

    if (orgaosComPendencia.length > 0) {
      orgaosComPendencia.forEach((orgao: OrgaoPesquisaCadastral) => {
        mensagem += `<li><b>${orgao.nome.toUpperCase()}</b>: ${orgao.descricao}</li>`
      });
      status = orgaosComPendencia.some((orgao) => this.getIsImpeditivo(orgao.tipo) === ConsultaCadastralStatus.ERRO_IMPEDITIVO)
        ? ConsultaCadastralStatus.ERRO_IMPEDITIVO
        : ConsultaCadastralStatus.ERRO_NAO_IMPEDITIVO;
      mensagem = `<ul class="list-disc">${mensagem}</ul>`;
    } else {
      status = ConsultaCadastralStatus.SUCESSO;
      mensagem = `Não há pendências no cadastro do cliente.`;
    }
    mensagem = `<p>${mensagem}</p>
    <small class="d-block mt-3 text-muted">
    Consultas efetuadas: ${pesquisasParaFazerSipes.join(", ").toUpperCase()}
    </small>`;
    this.updateConsultaCadastral(this.consultaCadastralSipes, status, mensagem);
  }

  private isOrgaoErrorOuPendencia(orgao): boolean {
    return (orgao.status === StatusPesquisaCadastral.ERROR
      || orgao.status === StatusPesquisaCadastral.PENDENCIA)
  }

  private updateConsultaCadastral(consulta: ConsultaCadastral, status?: ConsultaCadastralStatus, mensagem?: string, showConsulta?: boolean) {
    consulta.status = status ? status : consulta.status;
    consulta.mensagem = mensagem ? mensagem : consulta.mensagem;
    consulta.visivel = (showConsulta !== undefined && showConsulta !== null)
      ? showConsulta : consulta.visivel;
    this.consultasCadastraisSource.next(this.consultasCadastrais);
  }

  private getIsImpeditivo(tipoConsulta: ConsultasCadastraisEnum | string): ConsultaCadastralStatus {
    let isImpeditivo = false;
    switch (tipoConsulta) {
      case ConsultasCadastraisEnum.RECEITA:
        isImpeditivo = this.isReceitaImpeditivo;
        break;
      case ConsultasCadastraisEnum.SICLI:
        isImpeditivo = this.isSicliImpeditivo;
        break;
      case ConsultasCadastraisEnum.SICOW:
        isImpeditivo = this.isSicowImpeditivo || this.isSicowConresImpeditivo ||
                       this.isSicowSegurancaImpeditivo || this.isSicowTrabalhoEscravoImpeditivo ||
                       this.isSicowPpePrimarioImpeditivo || this.isSicowPpeRelacionadosImpeditivo ||
                       this.isSicowInterdicaoImpeditivo || this.isSicowContratarPublicoImpeditivo;
        break;
      case ConsultasCadastraisEnum.SINAD:
        isImpeditivo = this.isSinadImpeditivo;
        break;
      case ConsultasCadastraisEnum.SICCF:
        isImpeditivo = this.isSiccfImpeditivo;
        break;
      case ConsultasCadastraisEnum.SERASA:
        isImpeditivo = this.isSerasaImpeditivo;
        break;
      case ConsultasCadastraisEnum.SCPC:
        isImpeditivo = this.isSpcImpeditivo;
        break;
    }
    return isImpeditivo ? ConsultaCadastralStatus.ERRO_IMPEDITIVO : ConsultaCadastralStatus.ERRO_NAO_IMPEDITIVO
  }

  private montaMensagemDosOrgaosParaDetalhamento(pesquisasParaFazerSipes: string[], pesquisa: PesquisaCadastral) {
    pesquisa.sicow.retorno.mensagem = this.montaMensagemDetalhamento(
      pesquisasParaFazerSipes.includes(ConsultasCadastraisEnum.SICOW), pesquisa.sicow.retorno.codigo, pesquisa.sicow.retorno.mensagem);

    pesquisa.sinad.retorno.mensagem = this.montaMensagemDetalhamento(
      pesquisasParaFazerSipes.includes(ConsultasCadastraisEnum.SINAD), pesquisa.sinad.retorno.codigo, pesquisa.sinad.retorno.mensagem);

    pesquisa.spc.retorno.mensagem = this.montaMensagemDetalhamento(
      pesquisasParaFazerSipes.includes(ConsultasCadastraisEnum.SCPC), pesquisa.spc.retorno.codigo, pesquisa.spc.retorno.mensagem);

    pesquisa.siccf.retorno.mensagem = this.montaMensagemDetalhamento(
      pesquisasParaFazerSipes.includes(ConsultasCadastraisEnum.SICCF), pesquisa.siccf.retorno.codigo, pesquisa.siccf.retorno.mensagem);

    pesquisa.serasa.retorno.mensagem = this.montaMensagemDetalhamento(
      pesquisasParaFazerSipes.includes(ConsultasCadastraisEnum.SERASA), pesquisa.serasa.retorno.codigo, pesquisa.serasa.retorno.mensagem);

    pesquisa.cadin.retorno.mensagem = this.montaMensagemDetalhamento(
      pesquisasParaFazerSipes.includes(ConsultasCadastraisEnum.CADIN), pesquisa.cadin.retorno.codigo, pesquisa.cadin.retorno.mensagem);
  }

  private montaMensagemDetalhamento(orgaoConsultado: boolean, codigo: string, mensagem: string): string {
    if (codigo.length === 0 && mensagem.length === 0) {
      if (orgaoConsultado) {
        return "Problema na consulta.";
      } else {
        return "Consulta não realizada.";
      }
    } else {
      if (codigo === "00") {
        return "Nada consta.";
      } else {
        if (mensagem) {
          return "Problema na consulta.";
        } else {
          return "Restrição cadastral.";
        }
      }
    }
  }

}
