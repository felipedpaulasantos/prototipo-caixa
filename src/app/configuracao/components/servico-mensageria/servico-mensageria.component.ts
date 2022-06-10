import { Component, OnInit } from "@angular/core";
//import { MzModalService } from "ngx-materialize";
import { ComportamentoMenuEnum } from "../../configuracao.model";
import { ServicoMensageriaService } from "./service/servico-mensageria.service";
import { Mensagem, Publicacao, Funcionalidade, MensageriaResponse, ModoTelaEnum, PosicaoExibicao, ComprovanteMensageria, SituacaoMensagem } from "./model/servico-mensageria.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as moment from "moment";
import { strToDate, strNotEmpty, strIsEmpty } from "../../../shared/utils/utils";
import { StepperItem } from "../../../shared/caixa-components/stepper/stepper-component/stepper-item";
import { scrollToId } from "../../../shared/utils/utils";


@Component({
  selector: "app-servico-mensageria",
  templateUrl: "./servico-mensageria.component.html",
  styleUrls: ["./servico-mensageria.component.css"]
})

export class ServicoMensageriaComponent implements OnInit {

  loading: boolean;
  mensagens: Mensagem[] = [];
  funcionalidades: Funcionalidade[] = [];
  ativo = ComportamentoMenuEnum.ATIVO;
  inativo = ComportamentoMenuEnum.INATIVO;
  modoListagem = ModoTelaEnum.LISTAGEM;
  modoCadastro = ModoTelaEnum.CADASTRO;
  modoEdicao = ModoTelaEnum.EDICAO;
  modoComprovante = ModoTelaEnum.COMPROVANTE;
  situacaoAgendado = SituacaoMensagem.AGENDADO;
  situacaoAtivo = SituacaoMensagem.ATIVO;
  situacaoExpirado = SituacaoMensagem.EXPIRADO;
  situacaoSemExpiracao = SituacaoMensagem.SEM_EXPIRACAO;
  posicaoPopup = PosicaoExibicao.POPUP;
  posicaoHeader = PosicaoExibicao.HEADER;
  posicaoToast = PosicaoExibicao.TOAST;
  modoTela: number;
  mensagemAtual: Mensagem;
  publicacao: Publicacao;
  funcionalidade: Funcionalidade;
  isPrazo: boolean;
  comprovante: ComprovanteMensageria;

  passos: StepperItem[] = [{ title: "Listagem de Mensagens" },
  { title: "Adição ou Alteração" },
  { title: "Resumo da Operação" }];

  passo = 0;


  dadosMensagemForm = new FormGroup({
    paginaExibicao: new FormControl(null, [Validators.required]),
    nome: new FormControl(null, [Validators.required]),
    conteudo: new FormControl(null, [Validators.required]),
    dataInicio: new FormControl(null),
    horaInicio: new FormControl(null),
    dataFim: new FormControl(null),
    horaFim: new FormControl(null),
    chkComPrazo: new FormControl(null),
    chkAmbienteNacional: new FormControl(null),
    chkAmbientePiloto: new FormControl(null),
    chkAmbientePrePiloto: new FormControl(null),
    chkAmbienteRascunho: new FormControl(null),
    radioPosicao: new FormControl()
  });


  constructor(
    //private modalService: MzModalService,
    private mensageriaService: ServicoMensageriaService
    ) {
   }

  ngOnInit() {
    this.mensagemAtual = null;
    this.modoTela = this.modoListagem;
    this.passo = 0;
    this.carregarMensagens();
    this.carregarFuncionalidades();
  }

  changeStep(event) {
    this.passo = event;
    if (this.passo === 0) {
      this.voltar();
    }
    scrollToId("passos-mensageria");
  }

  private atribuiDadosFormulario() {
    this.dadosMensagemForm.reset();
    this.dadosMensagemForm.controls.chkComPrazo.setValue(false);
    this.isPrazo = false;
    if (this.mensagemAtual.inicioExibicao) {
      this.dadosMensagemForm.controls.chkComPrazo.setValue(true);
      this.isPrazo = true;
      const data = moment(this.mensagemAtual.inicioExibicao.split(" ")[0], "DD/MM/YYYY");
      const hora = this.mensagemAtual.inicioExibicao.split(" ")[1];
      this.dadosMensagemForm.patchValue({
        dataInicio: {
          date: {
            year: data.toDate().getFullYear(),
            month: data.toDate().getMonth() + 1,
            day: data.toDate().getDate()
          },
          formatted: data.format("DD/MM/YYYY")
        }
      });
      this.dadosMensagemForm.controls.horaInicio.setValue(hora);
    }
    if (this.mensagemAtual.fimExibicao) {
      this.dadosMensagemForm.controls.chkComPrazo.setValue(true);
      this.isPrazo = true;
      const data = moment(this.mensagemAtual.fimExibicao.split(" ")[0], "DD/MM/YYYY");
      const hora = this.mensagemAtual.fimExibicao.split(" ")[1];
      this.dadosMensagemForm.patchValue({
        dataFim: {
          date: {
            year: data.toDate().getFullYear(),
            month: data.toDate().getMonth() + 1,
            day: data.toDate().getDate()
          },
          formatted: data.format("DD/MM/YYYY")
        }
      });
      this.dadosMensagemForm.controls.horaFim.setValue(hora);
    }
    let rascunho = true;
    if (this.mensagemAtual.ambienteNacional === this.ativo) {
      this.dadosMensagemForm.controls.chkAmbienteNacional.setValue(true);
      rascunho = false;
    } else {
      this.dadosMensagemForm.controls.chkAmbienteNacional.setValue(false);
    }
    if (this.mensagemAtual.ambientePiloto === this.ativo) {
      this.dadosMensagemForm.controls.chkAmbientePiloto.setValue(true);
      rascunho = false;
    } else {
      this.dadosMensagemForm.controls.chkAmbientePiloto.setValue(false);
    }
    if (this.mensagemAtual.ambientePrePiloto === this.ativo) {
      this.dadosMensagemForm.controls.chkAmbientePrePiloto.setValue(true);
      rascunho = false;
    } else {
      this.dadosMensagemForm.controls.chkAmbientePrePiloto.setValue(false);
    }
    this.dadosMensagemForm.controls.chkAmbienteRascunho.setValue(rascunho);
    this.funcionalidade = this.funcionalidades.find(item => item.numeroFuncionalidade === this.mensagemAtual.numeroFuncionalidade);
    this.dadosMensagemForm.controls.nome.setValue(this.mensagemAtual.nome);
    this.dadosMensagemForm.controls.conteudo.setValue(this.mensagemAtual.conteudo);
    this.dadosMensagemForm.controls.radioPosicao.setValue(this.mensagemAtual.posicaoMensagem.toString());
  }


  public abrirEdicao(mensagem: Mensagem) {
    this.mensagemAtual = mensagem;
    this.atribuiDadosFormulario();
    this.modoTela = this.modoEdicao;
    this.passo = 1;
    scrollToId("passos-mensageria");
  }

  public abrirCadastro(): void {
    this.mensagemAtual = new Mensagem();
    this.funcionalidade = null;
    this.dadosMensagemForm.reset();
    this.isPrazo = false;
    this.modoTela = this.modoCadastro;
    this.passo = 1;
    scrollToId("passos-mensageria");
  }

  public salvarMensagem() {
    if (this.modoTela === this.modoEdicao) {
      this.alterarMensagem();
    } else if (this.modoTela === this.modoCadastro) {
      this.incluirMensagem();
    }

  }

  public excluirMensagem() {
    // this.modalService.open(ModalConfirmacaoComponent, {
    //     header: "Confirmação",
    //     message: `Confirma exclusão de "${mensagemSelecionada.nome}" ?`,
    //     type: "info",
    //     textoConfirmar: "Sim",
    //     textoCancelar: "Não",
    //     confirmar: () => {
    //       this.processarExclusao(mensagemSelecionada);
    //     },
    //     cancelar: () => { }
    // });
  }

  public alterarMensagem() {
    // if (this.isDadosValidos()) {
    //   this.modalService.open(ModalConfirmacaoComponent, {
    //     header: "Confirmação",
    //     message: `Confirma alteração da mensagem" ?`,
    //     type: "info",
    //     textoConfirmar: "Sim",
    //     textoCancelar: "Não",
    //     confirmar: () => {
    //       this.processarAlteracao();
    //     },
    //     cancelar: () => { }
    //   });
    // }
  }


  public incluirMensagem() {
    // if (this.isDadosValidos()) {
    //   this.modalService.open(ModalConfirmacaoComponent, {
    //     header: "Confirmação",
    //     message: `Confirma inclusão da mensagem" ?`,
    //     type: "info",
    //     textoConfirmar: "Sim",
    //     textoCancelar: "Não",
    //     confirmar: () => {
    //       this.processarInclusao();
    //     },
    //     cancelar: () => { }
    //   });
    // }
  }






  private carregarMensagens () {
    this.loading = true;
    this.mensageriaService.listarMensagens().subscribe((response: Array<Mensagem>) => {
      this.loading = false;
      this.mensagens = response;
    }, error => {
      this.loading = false;
      throw Error(error.error.mensagem);
    });
  }

  private carregarFuncionalidades () {
    this.loading = true;
    this.mensageriaService.listarFuncionalidades().subscribe((response: Array<Funcionalidade>) => {
      this.loading = false;
      this.funcionalidades = response;
    }, error => {
      this.loading = false;
      throw Error(error.error.mensagem);
    });
  }

  public voltar() {
    this.mensagemAtual = null;
    this.modoTela = this.modoListagem;
    this.passo = 0;
    this.carregarMensagens();
    scrollToId("passos-mensageria");
  }

  onChangeFuncionalidade() {
    if (this.funcionalidade) {
      this.mensagemAtual.numeroFuncionalidade = this.funcionalidade.numeroFuncionalidade;
    }
  }

  public customSearchFn(term: string, item: Funcionalidade): Funcionalidade | string {
    return item.nomeFuncionalidade.toLowerCase().includes(term.toLowerCase()) ? item : "";
  }

  private toComprovante(mensagem: Mensagem): ComprovanteMensageria {
    if (mensagem) {
      const pagina = this.funcionalidades.find(item => item.numeroFuncionalidade === mensagem.numeroFuncionalidade);
      let strAmbiente = "";
      if (mensagem.ambienteNacional === this.ativo) {
        strAmbiente = "Nacional"
      }
      if (mensagem.ambientePiloto === this.ativo) {
        strAmbiente = strAmbiente + (strIsEmpty(strAmbiente) ? "Piloto" : "/Piloto");
      }
      if (mensagem.ambientePrePiloto === this.ativo) {
        strAmbiente = strAmbiente + (strIsEmpty(strAmbiente) ? "PrePiloto" : "/PrePiloto");
      }
      let strModelo = "";
      if (Number(mensagem.posicaoMensagem) === this.posicaoHeader) {
        strModelo = "Cabeçalho";
      } else if (Number(mensagem.posicaoMensagem) === this.posicaoPopup) {
        strModelo = "Pop-up";
      } else if (Number(mensagem.posicaoMensagem) === this.posicaoToast) {
        strModelo = "Toast";
      }
      let strPeriodo = "";
      if (strNotEmpty(mensagem.inicioExibicao)) {
        if (strNotEmpty(mensagem.fimExibicao)) {
          strPeriodo = mensagem.inicioExibicao + " até " + mensagem.fimExibicao;
        } else {
          strPeriodo = "Inválido";
        }
      }  else {
        if (strNotEmpty(mensagem.fimExibicao)) {
          strPeriodo = "Inválido";
        } else {
          strPeriodo = "Sem Expiração";
        }
      }
      const comprovante: ComprovanteMensageria = {
        titulo: mensagem.nome,
        pagina: (pagina ? pagina.descricaoFuncionalidade : ""),
        ambiente: strAmbiente,
        modelo: strModelo,
        periodo: strPeriodo,
        conteudo: mensagem.conteudo
      }
      return comprovante;
    }
    return null;
  }

  private montaDataHoraInicio(): string {
    let dataHora = "";
    if (strNotEmpty(this.dadosMensagemForm.get("dataInicio").value)) {
      if (strNotEmpty(this.dadosMensagemForm.get("horaInicio").value)) {
        dataHora = this.dadosMensagemForm.get("dataInicio").value.formatted + " " + this.dadosMensagemForm.get("horaInicio").value;
      } else {
        dataHora = this.dadosMensagemForm.get("dataInicio").value.formatted + " " + "00:00";
      }
    } else {
      dataHora = "";
    }
    return dataHora;
  }

  private montaDataHoraFim(): string {
    let dataHora = "";
    if (strNotEmpty(this.dadosMensagemForm.get("dataFim").value)) {
      if (strNotEmpty(this.dadosMensagemForm.get("horaFim").value)) {
        dataHora = this.dadosMensagemForm.get("dataFim").value.formatted + " " + this.dadosMensagemForm.get("horaFim").value;
      } else {
        dataHora = this.dadosMensagemForm.get("dataFim").value.formatted + " " + "23:59";
      }
    } else {
      dataHora = "";
    }
    return dataHora;
  }
  datePickerOptions() {

  }

  exibirAlertaSucesso() {
    // this.modalService.open(ModalAlertaComponent, {
    //   header: cabecalho,
    //   message: msg,
    //   type: "sucess",
    // });
  }

  exibirAlertaErro() {
    // this.modalService.open(ModalErrorComponent, {
    //   header: cabecalho,
    //   message: msg
    // });
  }

  private toFullDate(dataHora: string): Date {
    const dtHr = dataHora.split(" ");
    const hrs = dtHr[1].split(":");
    const dt = moment(strToDate(dtHr[0]));
    dt.set({hour: Number(hrs[0]), minute: Number(hrs[1]), second: 0, millisecond: 0})
    return dt.toDate();
  }


  private isPeriodoInvalido(): boolean {
    if (this.isPrazo) {
      if (this.isHorarioInvalido(this.dadosMensagemForm.get("horaInicio").value)) {
        return true;
      }
      if (this.isHorarioInvalido(this.dadosMensagemForm.get("horaFim").value)) {
        return true;
      }
      const strDataInicio = this.montaDataHoraInicio();
      const strDataFim = this.montaDataHoraFim();
      if (strIsEmpty(strDataInicio) || strIsEmpty(strDataFim)) {
        return true;
      }
      const dataInicioPreenchida = this.toFullDate(strDataInicio);
      const dataFimPreenchida = this.toFullDate(strDataFim);
      if (dataInicioPreenchida.getTime() >= dataFimPreenchida.getTime()) {
        return true;
      }
    }
    return false;
  }

  private isHorarioInvalido(horario: string): boolean {
    if (strIsEmpty(horario)) {
      return false;
    }
    const hhmm = horario.split(":");
    if (hhmm.length !== 2) {
      return true;
    }
    if (Number(hhmm[0]) > 23 || Number(hhmm[0]) < 0) {
      return true;
    }
    if (Number(hhmm[1]) > 59 || Number(hhmm[1]) < 0) {
      return true;
    }

    return false;
  }

  private isPeriodoJaCadastrado(): boolean {
    let isCadastrado = false;
    if (this.mensagens && this.mensagens.length > 0) {
      if (!this.isPrazo) { // Prazo em aberto sem expiracao
        let mensagemCadastrada = null;
        if (this.modoTela === this.modoEdicao) {
          mensagemCadastrada = this.mensagens.find(msg => msg.numeroFuncionalidade === this.funcionalidade.numeroFuncionalidade &&
                                                    msg.numero !== this.mensagemAtual.numero);
        } else {
          mensagemCadastrada = this.mensagens.find(msg => msg.numeroFuncionalidade === this.funcionalidade.numeroFuncionalidade);
        }
        if (mensagemCadastrada) {
            isCadastrado = true;
        } else {
            isCadastrado = false;
        }
      } else { // Prazo fechado com periodo de data informado
        const dataInicioPreenchida = this.toFullDate(this.montaDataHoraInicio());
        const dataFimPreenchida = this.toFullDate(this.montaDataHoraFim());
        let numeroMensagem = 0;
        if (this.modoTela === this.modoEdicao) {
          numeroMensagem = this.mensagemAtual.numero;
        }
        this.mensagens.forEach(msg => {
          if ((msg.numero !== numeroMensagem) &&
              (msg.numeroFuncionalidade === this.funcionalidade.numeroFuncionalidade)) {
            if (!msg.inicioExibicao || !msg.fimExibicao) {
              isCadastrado = true; // Ja existe uma mensagem sem expiracao cadastrada
            } else { // Analisa se o periodo da cadastrada nao coincide com a nova
              const dataInicio = this.toFullDate(msg.inicioExibicao);
              const dataFim = this.toFullDate(msg.fimExibicao);
              if ((dataInicioPreenchida.getTime() <= dataInicio.getTime()) &&
                  (dataFimPreenchida.getTime() >= dataFim.getTime())) {
                  isCadastrado = true; // Periodo mais abrangente que o existente
              } else {
                if ((dataInicioPreenchida.getTime() >= dataInicio.getTime()) &&
                    (dataInicioPreenchida.getTime() <= dataFim.getTime())) {
                    isCadastrado = true // Periodo dentro do existente
                }
                if ((dataFimPreenchida.getTime() >= dataInicio.getTime()) &&
                    (dataFimPreenchida.getTime() <= dataFim.getTime())) {
                    isCadastrado = true // Periodo dentro do existente
                }
              }
            }
          }
        });
      }
    }
    return isCadastrado;
  }

  onCheckComPrazo(checked) {
    if (checked) {
      this.isPrazo = true;
      const data = moment(new Date(), "DD/MM/YYYY")
      this.dadosMensagemForm.patchValue({
        dataInicio: {
          date: {
            year: data.toDate().getFullYear(),
            month: data.toDate().getMonth() + 1,
            day: data.toDate().getDate()
          },
          formatted: data.format("DD/MM/YYYY")
        }
      });
      this.dadosMensagemForm.controls.horaInicio.setValue(data.format("HH:mm"));
    } else {
      this.isPrazo = false;
      this.dadosMensagemForm.controls.dataInicio.setValue(null);
      this.dadosMensagemForm.controls.horaInicio.setValue(null);
      this.dadosMensagemForm.controls.dataFim.setValue(null);
      this.dadosMensagemForm.controls.horaFim.setValue(null);
    }
  }

  onCheckRascunho(checked) {
    if (checked) {
        this.dadosMensagemForm.controls.chkAmbienteNacional.setValue(false);
        this.dadosMensagemForm.controls.chkAmbientePiloto.setValue(false);
        this.dadosMensagemForm.controls.chkAmbientePrePiloto.setValue(false);
    }
  }

  onCheckAmbiente(checked) {
    if (checked) {
      this.dadosMensagemForm.controls.chkAmbienteRascunho.setValue(false);
    }
  }

  exbirMsgExemplo(posicaoMensagem: number) {
    const msg = new Mensagem();
    msg.posicaoMensagem = posicaoMensagem;
    msg.conteudo = strNotEmpty(this.dadosMensagemForm.get("conteudo").value) ? this.dadosMensagemForm.get("conteudo").value : "O conteúdo da mensagem aparecerá aqui.";
    this.mensageriaService.emitirMensagem(msg);
  }

}
