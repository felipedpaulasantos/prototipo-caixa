import { ConfiguracaoService } from "../../configuracao.service";
import { ModalAlertComponent } from "./../../../shared/components/modal/modal-alert/modal-alert.component";
import { Component, OnInit } from "@angular/core";
//import { MzModalService } from "ngx-materialize";
import { AmbienteMenuEnum, ComportamentoMenuEnum, ActionButton, Funcionalidade, FuncionalidadeRequest, CategoriaMenuEnum} from "../../configuracao.model";
import { ActivatedRoute } from "@angular/router";
import { ControleAcessoFuncionalidadeService } from "./../../../service/controle-acesso-funcionalidade.service";
import { Amplitude, Comportamento } from "../../../model/controle-acesso-funcionalidade.model";
import { objIsNotEmpty } from "../../../shared/utils/utils";
import { Location } from "@angular/common";

@Component({
  selector: "app-configuracao-do-menu",
  templateUrl: "./configuracao-do-menu.component.html",
  styleUrls: ["./configuracao-do-menu.component.css"]
})
export class ConfiguracaoDoMenuComponent implements OnInit {

  page: number;
  isMenu: Boolean;
  loading: boolean;
  funcionalidades: Funcionalidade[] = [];
  funcionalidadesAux: Funcionalidade[] = [];
  funcionalidade = new FuncionalidadeRequest;
  id: number;
  nomeDoModulo: string;
  amplide: Amplitude;

  constructor(
    //private modalService: MzModalService,
    private controleAcessoService: ControleAcessoFuncionalidadeService,
    private configService: ConfiguracaoService,
    private route: ActivatedRoute, private location: Location) {
   }

   ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.id = parseInt(params.get("id"), 10);
      this.nomeDoModulo = params.get("nomeModulo");
      this.carregarDados(this.id);
    });
  }

  carregarDados(id: number): void {
    this.loading = true;
    this.controleAcessoService.amplitude$
      .subscribe(
        (amplitude: Amplitude) => {
          this.amplide = amplitude;
        },
        (error: any) => {
          console.log("Erro ao recuperar amplitude do ambiente", error);
          this.amplide = null;
        }
      );
    this.configService.carregarListaMenus().subscribe((menus: any) => {
      this.funcionalidadesAux = menus.funcionalidades;
      this.funcionalidades = menus.funcionalidades.filter(m => m.nomeCategoria === "Menu" && m.numeroFuncionalidadeSuperior === id);
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.exibirMensagem(error.error.mensagem || "Erro ao carregar lista de menus", "error");
    });
  }

  alterarVisualizacaoMenu() {
    this.loading = true;
    this.configService.alterarVisualizacaoMenu(this.funcionalidade).subscribe((data) => {
      this.carregarDados(this.id);
      if (objIsNotEmpty(this.amplide)) {
        this.controleAcessoService.setControleAcesso(this.amplide);
      }
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.exibirMensagem(error.error.mensagem || "Erro ao alterar vizualicação do menu", "error");
    });
  }

  alterarFuncionalidade(funcionalidade: Funcionalidade, ambiente: number): void {
    this.funcionalidade.ambiente = ambiente;
    this.funcionalidade.funcionalidade = funcionalidade.numeroFuncionalidade;
    if (ambiente === AmbienteMenuEnum.NACIONAL) {
      this.funcionalidade.comportamento = funcionalidade.nacional === ComportamentoMenuEnum.INATIVO ? ComportamentoMenuEnum.ATIVO : ComportamentoMenuEnum.INATIVO;
    } else if (ambiente === AmbienteMenuEnum.PILOTO) {
      this.funcionalidade.comportamento = funcionalidade.piloto === ComportamentoMenuEnum.INATIVO ? ComportamentoMenuEnum.ATIVO : ComportamentoMenuEnum.INATIVO;
    } else if (ambiente === AmbienteMenuEnum.PREPILOTO) {
      this.funcionalidade.comportamento = funcionalidade.prePiloto === ComportamentoMenuEnum.INATIVO ? ComportamentoMenuEnum.ATIVO : ComportamentoMenuEnum.INATIVO;
    }
    this.alterarVisualizacaoMenu();
  }

  alterarFuncionalidadePorTipoCliente(numeroFuncionalidade: number, ambiente: number, comportamentoAtual: number, actionButton: ActionButton) {
    this.funcionalidade.ambiente = ambiente;
    this.funcionalidade.funcionalidade = numeroFuncionalidade;
    if (actionButton === ActionButton.ATIVAR_PF) {
      if (comportamentoAtual === ComportamentoMenuEnum.INATIVO) {
        this.funcionalidade.comportamento = ComportamentoMenuEnum.ATIVO_PF;
      } else {
        this.funcionalidade.comportamento = ComportamentoMenuEnum.ATIVO;
      }
    }
    if (actionButton === ActionButton.INATIVAR_PF) {
      if (comportamentoAtual === ComportamentoMenuEnum.ATIVO) {
        this.funcionalidade.comportamento = ComportamentoMenuEnum.ATIVO_PJ;
      } else {
        this.funcionalidade.comportamento = ComportamentoMenuEnum.INATIVO;
      }
    }
    if (actionButton === ActionButton.ATIVAR_PJ) {
      if (comportamentoAtual === ComportamentoMenuEnum.INATIVO) {
        this.funcionalidade.comportamento = ComportamentoMenuEnum.ATIVO_PJ;
      } else {
        this.funcionalidade.comportamento = ComportamentoMenuEnum.ATIVO;
      }
    }
    if (actionButton === ActionButton.INATIVAR_PJ) {
      if (comportamentoAtual === ComportamentoMenuEnum.ATIVO) {
        this.funcionalidade.comportamento = ComportamentoMenuEnum.ATIVO_PF;
      } else {
        this.funcionalidade.comportamento = ComportamentoMenuEnum.INATIVO;
      }
    }
    this.alterarVisualizacaoMenu();
  }

  exibirMensagem(msg: string, type?: string): void {
    // this.modalService.open(ModalAlertComponent, {
    //   message: msg,
    //   type,
    //   textoFechar: "OK"
    // });
  }

  voltar(): void {
    this.location.back();
    this.configService.setActiveTab(CategoriaMenuEnum.MODULO);
  }

  existeFuncionalidade(funcionalidade: Funcionalidade) {
   const listaFiltrada = this.funcionalidadesAux.filter(m => m.nomeCategoria === "Funcionalidade" && m.numeroFuncionalidadeSuperior === funcionalidade.numeroFuncionalidade);
   return listaFiltrada.length === 0 ;
  }

  isAtivo(sigla: string, comportamento: number): boolean {
    return sigla.startsWith("govsocial") && comportamento === ComportamentoMenuEnum.ATIVO;
  }

  isInativo(sigla: string, comportamento: number): boolean {
    return sigla.startsWith("govsocial") && comportamento === ComportamentoMenuEnum.INATIVO;
  }

  isAtivoPF(sigla: string, comportamento: number): boolean {
    return comportamento === ComportamentoMenuEnum.ATIVO_PF || (!sigla.startsWith("govsocial") && comportamento === ComportamentoMenuEnum.ATIVO);
  }

  isInativoPF(sigla: string, comportamento: number): boolean {
    return comportamento === ComportamentoMenuEnum.ATIVO_PJ || (!sigla.startsWith("govsocial") && comportamento === ComportamentoMenuEnum.INATIVO);
  }

  isAtivoPJ(sigla: string, comportamento: number): boolean {
    return comportamento === ComportamentoMenuEnum.ATIVO_PJ || (!sigla.startsWith("govsocial") && comportamento === ComportamentoMenuEnum.ATIVO);
  }

  isInativoPJ(sigla: string, comportamento: number): boolean {
    return comportamento === ComportamentoMenuEnum.ATIVO_PF || (!sigla.startsWith("govsocial") && comportamento === ComportamentoMenuEnum.INATIVO);
  }

  get actionButton(): typeof ActionButton {
    return ActionButton;
  }

  get ambiente(): typeof AmbienteMenuEnum {
    return AmbienteMenuEnum;
  }

  gerenciarFuncionalidade() {
    this.configService.setActiveTab(CategoriaMenuEnum.FUNCIONALIDADE);
  }

}
