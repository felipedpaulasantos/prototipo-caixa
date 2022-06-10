import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ClienteComercial, TipoCliente } from "../../../comercial/model/cliente-comercial.model";
import { objIsNotEmpty } from "../../utils/utils";
import { Biometria } from "../perfil-cliente/perfil-cliente.model";

@Component({
  selector: "app-resumo-cliente-simples",
  templateUrl: "./resumo-cliente-simples.component.html",
  styleUrls: ["./resumo-cliente-simples.component.css"]
})
export class ResumoClienteSimplesComponent implements OnInit, OnChanges {

  clienteTipoPF = TipoCliente.PF;
  clienteTipoPJ = TipoCliente.PJ;

  @Input()
  cliente: ClienteComercial;

  resumoCliente: any;
  resumoBiometria = new Biometria();

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.resumoBiometria.possuiCadastroFace = false;
    this.resumoBiometria.possuiCadastroDigitais = false;
    const clienteChange: ClienteComercial = changes.cliente.currentValue;
    if (objIsNotEmpty(clienteChange)) {
      if (clienteChange.tipoCliente === this.clienteTipoPF) {
        this.resumoCliente = clienteChange.resumoCliente.dadosBasicosPessoaFisicaDTO;
        // this.buscaService.getResumoBiometria(clienteChange.resumoCliente.dadosBasicosPessoaFisicaDTO.cpf).subscribe(resposta => {
        //   this.resumoBiometria = resposta;
        //   if (resposta.possuiCadastroFace) {
        //     this.url = this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64," + resposta.imagemPessoa);
        //   }
        // }, (error: any) => {
        //   throw Error(error.error.mensagem);
        // });
      } else {
        this.resumoCliente = clienteChange.resumoCliente.dadosBasicosPessoaJuridicaDTO;
      }
    }
  }

  public ehClientePF(): boolean {
    if (this.cliente) {
      return this.cliente.tipoCliente === TipoCliente.PF;
    }
  }


}
