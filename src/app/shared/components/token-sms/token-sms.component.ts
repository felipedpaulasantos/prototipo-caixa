import { Component, OnInit, OnDestroy } from "@angular/core";
import { CestaServicoService } from "./../../../comercial/roteiro-negocial/cesta-servico/services/cesta-servico.service";
import { EventEmitter, Input, Output } from "@angular/core";
import * as vanillaMasker from "vanilla-masker";
import { objIsEmpty, removeMaskString, strIsEmpty } from "../../../shared/utils/utils";
import { Observable, Subscription, timer } from "rxjs";
import { scan, takeWhile } from "rxjs/operators";
import { BotaoToken, TelefoneSms } from "./token-sms.model";
import { ModalAlertComponent } from "../modal/modal-alert/modal-alert.component";
import { ModalAlertaComponent } from "../modal-alerta/modal-alerta.component";

@Component({
  selector: "app-token-sms",
  templateUrl: "./token-sms.component.html",
  styleUrls: ["./token-sms.component.css"]
})
export class TokenSmsComponent implements OnInit, OnDestroy {

  @Output() eventSuccess = new EventEmitter();
  @Output() eventError = new EventEmitter();
  //
  @Input() events = new Observable();
  @Input() cpfCnpj: string;
  @Input() botao: BotaoToken = {name: "Validar", icon: "fa fa-paper-plane", show: true};
  public btnDisabledEnviarToken = false;
  public telefone: any;
  public loading = false;
  public telefoneEnviado: string;
  public telefonesAdesaoSms: TelefoneSms[] = [];
  public tokenCriacaoResponse: any;
  public listaCelularToken: Array<{ id: number, value: string }>;
  cod1: string;
  cod2: string;
  cod3: string;
  cod4: string;
  cod5: string;
  cod6: string;
  public timer: number;
  private subscription: Subscription;

  constructor(
    private cestaServicoService: CestaServicoService,
    //private modalService: MzModalService
  ) {}

  ngOnInit() {
    this.listCelularToken();
    this.subscription = this.events.subscribe(() => this.validarToken());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public listCelularToken(): void {
    this.listaCelularToken = [];
    this.cestaServicoService.listaTelefonesAdesao(this.cpfCnpj).subscribe(telefonesAdesao => {
      if (telefonesAdesao) {
        this.telefonesAdesaoSms = telefonesAdesao.telefones;
        const LENGTH_CELULAR_SEM_MASCARA = 9;
        const LENGTH_TELEFONE_SEM_MASCARA = 8;
        const tels = [];
        this.telefonesAdesaoSms.forEach((telefone, index) => {
          const maskPattern = telefone.numero.replace(/[^\d]/g, "").length === LENGTH_CELULAR_SEM_MASCARA ? "99999-9999" : "9999-9999";
          telefone.numero = vanillaMasker.toPattern(telefone.numero, maskPattern);
          tels.push({
            "id": index,
            "value": "(" + telefone.ddd.toString() + ")" + telefone.numero
          })
        })
        this.listaCelularToken = tels.concat(this.listaCelularToken);
      }
    });

  }



  public tokenTab(event) {
    const nextInput = event.target.nextElementSibling || event.srcElement.nextElementSibling;
    if (nextInput == null || event.code.slice(0, -1) !== "Digit") {
      return;
    } else if (nextInput != null) {
      nextInput.focus();
    }
  }

  public enviarToken(): void {
    this.loading = true;
    if (this.telefone && (objIsEmpty(this.telefone.value) || this.telefone.value === "")) {
      this.loading = false;
      throw new Error("Favor informe celular que receberá o token.");
    }
    this.btnDisabledEnviarToken = true;
    this.countdown();
    const tokenCriacaoRequest = {
      "documento": this.cpfCnpj,
      "ddd": this.telefonesAdesaoSms[this.telefone.id].ddd.toString(),
      "telefone": removeMaskString(this.telefonesAdesaoSms[this.telefone.id].numero)
    }
    this.cestaServicoService.enviarToken(tokenCriacaoRequest).subscribe(data => {
      this.loading = false;
      this.telefoneEnviado = this.telefone.value;
      this.tokenCriacaoResponse = data;
      this.exibirAlertaSucesso("Token de validação enviado com sucesso", "Verificar o celular informado");
    }, error => {
      this.loading = false;
      if (error) {
        if (error.error) {
          throw new Error(`Erro ao enviar token: ${error.error.mensagem}`);
        } else {
          throw new Error(error);
        }
      }
    });
    this.limparCamposToken();
  }

  validarBotaoContratarPorToken(): boolean {
    return strIsEmpty(this.cod1) || strIsEmpty(this.cod2) || strIsEmpty(this.cod3) || strIsEmpty(this.cod4)
    || strIsEmpty(this.cod5) || strIsEmpty(this.cod6);
  }

  limparCamposToken () {
    this.cod1 = null;
    this.cod2 = null;
    this.cod3 = null;
    this.cod4 = null;
    this.cod5 = null;
    this.cod6 = null;
  }

  validarToken() {
    this.loading = true;
    const tokenValidacaoRequest = {
      "codigo": `${this.cod1}${this.cod2}${this.cod3}${this.cod4}${this.cod5}${this.cod6}`,
      "documento": this.tokenCriacaoResponse.identificador.usuario,
      "token": this.tokenCriacaoResponse.identificador.id
    }
    this.cestaServicoService.validarToken(tokenValidacaoRequest).subscribe(tokenValidacaoResponse => {
      this.loading = false;
      this.eventSuccess.emit(tokenValidacaoResponse);
    }, error  => {
      this.loading = false;
      this.eventError.emit(error);
    });
    this.limparCodigo();
  }


  exibirAlertaSucesso(cabecalho: string, msg: string) {
    // this.modalService.open(ModalAlertaComponent, {
    //   header: cabecalho,
    //   message: msg,
    //   type: "sucess",
    // });
  }

  limparCodigo() {
    this.cod1 = "";
    this.cod2 = "";
    this.cod3 = "";
    this.cod4 = "";
    this.cod5 = "";
    this.cod6 = "";
  }

  private countdown(): void {
    const timeInit = 60 * 5 // tempo inicial de 5 minutos
    timer(0, 1000).pipe(
      scan(acc => --acc, timeInit),
      takeWhile(x => x >= 0)
    ).subscribe(time => {
      this.timer = time;
      if (time === 0) {
        this.btnDisabledEnviarToken = false;
      }
    });
  }


}


