import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent, NavigationStart } from "@angular/router";
import { Mensagem, PosicaoExibicao } from "../../../configuracao/components/servico-mensageria/model/servico-mensageria.model";
import { Amplitude, Categoria, ControleAcessoFuncionalidade, FuncionalidadeRestricao } from "../../../model/controle-acesso-funcionalidade.model";
import { ServicoMensageriaService } from "../../../configuracao/components/servico-mensageria/service/servico-mensageria.service";
import { notEmpty, objIsNotEmpty } from "../../utils/utils";


@Component({
  selector: "app-mensagem",
  templateUrl: "./mensagem.component.html",
  styleUrls: ["./mensagem.component.css"]
})
export class MensagemComponent implements OnInit {

  mensagens: Mensagem[] = [];
  mensagensExibidas = new Map<number, string>();
  amplitude: Amplitude;
  isShowBanner = false;
  conteudoMensagem = "";
  funcionalidades: FuncionalidadeRestricao[];

  constructor(
    private router: Router,
    private mensageriaService: ServicoMensageriaService,
    //private modalService: MzModalService
  ) { }

  ngOnInit() {
    this.mensageriaService.messageEmitted$
      .subscribe(
        (msg: Mensagem) => {
          if (msg) {
            msg.numero = this.mensagensExibidas.size + 1;
            this.tratarExibicaoAviso(msg);
          }
        }
    );
    this.router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof NavigationStart) {
          this.limparMensagemHeader();
          const link: FuncionalidadeRestricao = this.buscarLink(event.url);
          if (link) {
            if (link.numeroCategoria === Categoria.MODULO || link.urlFuncionalidade === "/comercial/resumo" || link.urlFuncionalidade === "/govsocial/resumo") {
              this.carregarMensagens();
            }
            if (this.mensagens) {
              const msg = this.mensagens.find(m => m.numeroFuncionalidade === link.numeroFuncionalidade);
              if (msg) {
                this.tratarExibicaoAviso(msg);
              }
            }
          }
        }
      }
    );
  }

  buscarLink(rota: string): FuncionalidadeRestricao {
    if (this.funcionalidades && this.funcionalidades.length > 0) {
      return this.funcionalidades.find(func => func.numeroCategoria === Categoria.MODULO ? rota === func.urlFuncionalidade : rota.includes(func.urlFuncionalidade));
    } else {
      return null;
    }
  }

  carregarMensagens () {
  }

  private tratarExibicaoAviso(msg: Mensagem): void {
    const msgExibida = this.mensagensExibidas.get(msg.numero);
    if (!msgExibida || msgExibida !== msg.conteudo) {
      if (msg.posicaoMensagem === PosicaoExibicao.POPUP) {
        this.exibirMensagemPopUp();
      } else if (msg.posicaoMensagem === PosicaoExibicao.HEADER) {
        this.exibirMensagemHeader(msg.conteudo);
      } else if (msg.posicaoMensagem === PosicaoExibicao.TOAST) {
        this.exibirMensagemToast(msg.conteudo);
      }
      this.mensagensExibidas.set(msg.numero, msg.conteudo);
    }
  }

  private exibirMensagemPopUp() {
    // this.modalService.open(ModalAlertaComponent, {
    //   header: "AVISO",
    //   message: conteudo,
    //   type: "info"
    // });
  }

  private exibirMensagemHeader(conteudo: string) {
    this.isShowBanner = true;
    this.conteudoMensagem = conteudo;
  }

  private exibirMensagemToast(conteudo: string) {
    console.log(conteudo);
    // TODO - Exibir toast com conteudo da mensagem
  }

  limparMensagemHeader() {
    this.isShowBanner = false;
    this.conteudoMensagem = "";
  }

}
