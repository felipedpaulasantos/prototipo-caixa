import { Funcionalidade } from "../../../model/controle-acesso-funcionalidade.model";
import { ControleAcessoFuncionalidadeService } from "../../../service/controle-acesso-funcionalidade.service";
import { Biometria } from "./perfil-cliente.model";
import { BuscaUtilsService } from "../../../service/busca-utils.service";
import { TipoCliente } from "../../../investimento/model/cliente-investidor.model";
import { ClienteComercial } from "../../../comercial/model/cliente-comercial.model";
import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { objIsNotEmpty } from "../../utils/utils";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-perfil-cliente",
  templateUrl: "./perfil-cliente.component.html",
  styleUrls: ["./perfil-cliente.component.css"]
})
export class PerfilClienteComponent implements OnInit, OnChanges {

  clienteTipoPF = TipoCliente.PF;
  clienteTipoPJ = TipoCliente.PJ;

  @Input()
  cliente: ClienteComercial;
  msgRegularidade: string;

  resumoCliente: any;
  resumoBiometria = new Biometria();
  url: any
  mensagemErroReceitaPF: string;
  mensagemErroReceitaPJ: string;
  mensagemErro: string;
  error: any


  constructor(private buscaService: BuscaUtilsService,
    private sanitizer: DomSanitizer,
    private controleAcesso: ControleAcessoFuncionalidadeService) {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.url = null;
    this.resumoBiometria.possuiCadastroFace = false;
    this.resumoBiometria.possuiCadastroDigitais = false;
    this.error = null;
    const clienteChange: ClienteComercial = changes.cliente.currentValue;
    if (objIsNotEmpty(clienteChange)) {
      if (clienteChange.tipoCliente === this.clienteTipoPF) {
        if (clienteChange.resumoCliente.dadosBasicosPessoaFisicaDTO.situacaoCpf) {
          this.msgRegularidade = clienteChange.resumoCliente.dadosBasicosPessoaFisicaDTO.situacaoCpf.msgRegularidade;
          this.mensagemErro = undefined;
        } else {
          this.msgRegularidade = undefined;
          this.mensagemErroReceitaPF = "";
          this.mensagemErroReceitaPF = clienteChange.resumoCliente.dadosBasicosPessoaFisicaDTO.mensagemErroReceita;
        }
        this.mensagemErro = clienteChange.resumoCliente.dadosBasicosPessoaFisicaDTO.mensagemErroPesquisaCadastral;
        this.resumoCliente = clienteChange.resumoCliente.dadosBasicosPessoaFisicaDTO;
        if (this.controleAcesso.getFuncionalidadePermissaoPorCliente(this.controleAcesso.controleAcessoFuncionalidade$.getValue().funcionalidades, Funcionalidade.comercial_perfilCliente_siabm, clienteChange.tipoCliente)) {
        this.buscaService.getResumoBiometria(clienteChange.resumoCliente.dadosBasicosPessoaFisicaDTO.cpf).subscribe(resposta => {
          this.resumoBiometria = resposta;
          if (resposta.possuiCadastroFace) {
            this.url = this.sanitizer.bypassSecurityTrustUrl("data:Image/*;base64," + resposta.imagemPessoa);
          }
        }, (error: any) => {
          this.error = error.error;
          console.log("Erro ao consultar biometria", error);
        });
      }
      } else {
        this.resumoCliente = clienteChange.resumoCliente.dadosBasicosPessoaJuridicaDTO;
        if (clienteChange.resumoCliente.dadosBasicosPessoaJuridicaDTO.situacaoCnpj) {
          this.msgRegularidade = clienteChange.resumoCliente.dadosBasicosPessoaJuridicaDTO.situacaoCnpj.msgRegularidade;
          this.mensagemErro = undefined;
        } else {
          this.msgRegularidade = undefined;
          this.mensagemErroReceitaPJ = "";
          this.mensagemErroReceitaPJ = clienteChange.resumoCliente.dadosBasicosPessoaJuridicaDTO.mensagemErroReceita;
        }
        this.mensagemErro = clienteChange.resumoCliente.dadosBasicosPessoaJuridicaDTO.mensagemErroPesquisaCadastral;

      }
    }
  }

  public ehClientePF(): boolean {
    if (this.cliente) {
      return this.cliente.tipoCliente === TipoCliente.PF;
    }
  }

}
