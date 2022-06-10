import { Subscription } from "rxjs";
import { ControleAcessoFuncionalidade, Funcionalidade } from "../../model/controle-acesso-funcionalidade.model";
import { ControleAcessoFuncionalidadeService } from "../../service/controle-acesso-funcionalidade.service";
import { Directive, ElementRef, OnInit, Input } from "@angular/core";
import { notEmpty, objIsNotEmpty } from "../utils/utils";
import { ClienteComercial } from "../../comercial/model/cliente-comercial.model";
import { ComercialService } from "../../comercial/service/comercial.service";

@Directive({
  selector: "[appTipoClienteHasConfig]"
})
export class TipoClienteHasConfigDirective implements OnInit {

  @Input() appTipoClienteHasConfig: string;

  clienteAtual: ClienteComercial;
  clienteAtualEvent: Subscription;

  constructor(private el: ElementRef,
    private comercialService: ComercialService,
    private controleAcesso: ControleAcessoFuncionalidadeService) {
      this.clienteAtualEvent = this.comercialService.getClienteAtual().subscribe(cliente => {
        if (cliente && this.comercialService.isClientesDiferentes(cliente, this.clienteAtual)) {
          this.clienteAtual = cliente;
          this.hasConfig();
        }
      });
  }

  ngOnInit() {
    if (this.comercialService.clienteAtual) {
      this.clienteAtual = this.comercialService.clienteAtual;
      this.hasConfig();
    }
  }

  hasConfig() {
    this.controleAcesso.controleAcessoFuncionalidade$
      .subscribe(
        (controleAcessoFuncionalidade: ControleAcessoFuncionalidade) => {
          if (objIsNotEmpty(controleAcessoFuncionalidade)
            && notEmpty(controleAcessoFuncionalidade.funcionalidades)) {
              const funcionalidades = controleAcessoFuncionalidade.funcionalidades;
              this.el.nativeElement.hidden = !this.controleAcesso.getFuncionalidadePermissaoPorCliente(funcionalidades,
                 Funcionalidade[this.appTipoClienteHasConfig], this.clienteAtual.tipoCliente);
            }
        });
  }

}
