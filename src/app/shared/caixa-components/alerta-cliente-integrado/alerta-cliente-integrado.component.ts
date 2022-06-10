import { Component, OnInit, ChangeDetectionStrategy, Input, SimpleChanges, OnChanges } from "@angular/core";

@Component({
  selector: "app-alerta-cliente-integrado",
  template: `<ng-container>
    <div class="row">
      <div class="col-12 col-sm-6 col-xl-8">
        <div class="alert alert-outline-warning">
          <p class="mb-3" [innerHTML]="mensagemAcesso"></p>
          <p class="m-0" [innerHTML]="mensagemSugestao"></p>
        </div>
      </div>
    </div>
  </ng-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertaClienteIntegradoComponent implements OnInit, OnChanges {

  constructor() { }

  private readonly MENSAGEM_ACESSO_NIS = `Para acessar esta funcionalidade é necessário que o cliente possua o número do <strong>NIS</strong>.`;
  private readonly MENSAGEM_SUGESTAO_NIS = `Favor consultar novamente pelo número do NIS ou regularizar o cadastro do cliente.`;

  private readonly MENSAGEM_ACESSO_CPF_CNPJ = `Para acessar esta funcionalidade é necessário que o cliente possua o número de <strong>CPF</strong> ou <strong>CNPJ</strong>.`;
  private readonly MENSAGEM_SUGESTAO_CPF_CNPJ = `Favor consultar novamente pelo número de CPF / CNPJ ou regularizar o cadastro do cliente.`;

  private readonly MENSAGEM_ACESSO_CPF = `Para acessar esta funcionalidade é necessário que o cliente possua o número de <strong>CPF</strong>.`;
  private readonly MENSAGEM_SUGESTAO_CPF = `Favor consultar novamente pelo número de CPF ou regularizar o cadastro do cliente.`;

  private readonly MENSAGEM_ACESSO_CNPJ = `Para acessar esta funcionalidade é necessário que o cliente possua o número de <strong>CNPJ</strong>.`;
  private readonly MENSAGEM_SUGESTAO_CNPJ = `Favor consultar novamente pelo número de CNPJ ou regularizar o cadastro do cliente.`;

  @Input()
  faltaNIS: boolean;

  @Input()
  faltaCPFouCNPJ: boolean;

  @Input()
  faltaCPF: boolean;

  @Input()
  faltaCNPJ: boolean;

  mensagemAcesso = "";
  mensagemSugestao = "";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.faltaNIS) {
      this.mensagemAcesso = this.MENSAGEM_ACESSO_NIS;
      this.mensagemSugestao = this.MENSAGEM_SUGESTAO_NIS;
      return;
    }

    if (changes.faltaCPFouCNPJ) {
      this.mensagemAcesso = this.MENSAGEM_ACESSO_CPF_CNPJ;
      this.mensagemSugestao = this.MENSAGEM_SUGESTAO_CPF_CNPJ;
      return;
    }

    if (changes.faltaCPF) {
      this.mensagemAcesso = this.MENSAGEM_ACESSO_CPF;
      this.mensagemSugestao = this.MENSAGEM_SUGESTAO_CPF;
      return;
    }

    if (changes.faltaCNPJ) {
      this.mensagemAcesso = this.MENSAGEM_ACESSO_CNPJ;
      this.mensagemSugestao = this.MENSAGEM_SUGESTAO_CNPJ;
      return;
    }
  }

  ngOnInit() {
  }

}
