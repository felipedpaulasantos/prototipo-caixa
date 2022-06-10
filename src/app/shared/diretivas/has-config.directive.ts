import { ControleAcessoFuncionalidade, Funcionalidade } from "./../../model/controle-acesso-funcionalidade.model";
import { ControleAcessoFuncionalidadeService } from "./../../service/controle-acesso-funcionalidade.service";
import { Directive, ElementRef, OnInit, Input } from "@angular/core";
import { notEmpty, objIsNotEmpty } from "../utils/utils";

@Directive({
  selector: "[appHasConfig]"
})
export class HasConfigDirective implements OnInit {

  @Input() appHasConfig: string;

  constructor(private el: ElementRef,
    private controleAcesso: ControleAcessoFuncionalidadeService) {
  }

  ngOnInit(): void {
    this.controleAcesso.controleAcessoFuncionalidade$
      .subscribe(
        (controleAcessoFuncionalidade: ControleAcessoFuncionalidade) => {
          if (objIsNotEmpty(controleAcessoFuncionalidade)
            && notEmpty(controleAcessoFuncionalidade.funcionalidades)) {
              const funcionalidades = controleAcessoFuncionalidade.funcionalidades;
              this.el.nativeElement.hidden = !this.controleAcesso.getFuncionalidadePermissao(funcionalidades, Funcionalidade[this.appHasConfig]);
          }
        });
  }

}
