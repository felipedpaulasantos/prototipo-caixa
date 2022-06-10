import { ConfiguracaoService } from "../../configuracao.service";
import { ModalAlertComponent } from "./../../../shared/components/modal/modal-alert/modal-alert.component";
import { Component, OnInit } from "@angular/core";
//import { MzModalService } from "ngx-materialize";
import { ActionButton, AmbienteMenuEnum, CategoriaMenuEnum, ComportamentoMenuEnum, Funcionalidade, FuncionalidadeRequest} from "../../configuracao.model";
import { ControleAcessoFuncionalidadeService } from "../../../service/controle-acesso-funcionalidade.service";
import { Amplitude } from "../../../model/controle-acesso-funcionalidade.model";
import { objIsNotEmpty } from "../../../shared/utils/utils";

@Component({
  selector: "app-configuracao-do-modulo",
  templateUrl: "./configuracao-do-modulo.component.html",
  styleUrls: ["./configuracao-do-modulo.component.css"]
})
export class ConfiguracaoDoModuloComponent implements OnInit {
  page: number;
  isMenu: Boolean;
  loading: boolean;
  funcionalidades: Funcionalidade[] = [];
  funcionalidadesAux: Funcionalidade[] = [];
  funcionalidade = new FuncionalidadeRequest;
  id: number;
  nomeDoMenu: string;
  amplide: Amplitude;

  constructor(
    //private modalService: MzModalService,
    private controleAcessoService: ControleAcessoFuncionalidadeService,
    private configService: ConfiguracaoService) {
   }

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados(): void {
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
      this.funcionalidades = menus.funcionalidades.filter(m => m.nomeCategoria === "Modulo");
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.exibirMensagem(error.error.mensagem || "Erro ao carregar lista de menus", "error");
    });
  }


  alterarVisualizacaoMenu() {
    this.loading = true;
    this.configService.alterarVisualizacaoMenu(this.funcionalidade).subscribe((data) => {
      this.carregarDados();
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
    this.loading = true;
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

  private exibirMensagem(msg: string, type?: string): void {
    // this.modalService.open(ModalAlertComponent, {
    //   message: msg,
    //   type,
    //   textoFechar: "OK"
    // });
  }

  existeMenu(funcionalidade: Funcionalidade) {
    const listaFiltrada = this.funcionalidadesAux.filter(m => m.nomeCategoria === "Menu" && m.numeroFuncionalidadeSuperior === funcionalidade.numeroFuncionalidade);
    return listaFiltrada.length === 0 ;
  }

  isAtivo(comportamento: number): boolean {
    return comportamento === ComportamentoMenuEnum.ATIVO;
  }

  isInativo(comportamento: number): boolean {
    return comportamento === ComportamentoMenuEnum.INATIVO;
  }

  get actionButton(): typeof ActionButton {
    return ActionButton;
  }

  get ambiente(): typeof AmbienteMenuEnum {
    return AmbienteMenuEnum;
  }

  gerenciarMenu() {
    this.configService.setActiveTab(CategoriaMenuEnum.MENU);
  }

}
