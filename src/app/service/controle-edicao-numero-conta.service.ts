import { Injectable } from "@angular/core";
import { IndicadorConta } from "../comercial/model/manutencao-conta.model";
import { TipoContaPJ } from "../comercial/roteiro-negocial/enum/tipo-conta.enum";
import { Role } from "../model/enum/role.enum";
import { ControleAcessoService } from "./controle-acesso.service";

@Injectable({
  providedIn: "root"
})
export class ControleEdicaoNumeroContaService {

  produtosBloqueados = [TipoContaPJ.REVENDEDORES_LOTERICOS]

  constructor(
    private controleAcessoService: ControleAcessoService
  ) { }

  public permiteDigitarNumeroDaConta(produto: number, icConta: number): boolean {
    let permiteDigitar = false;
    if (produto !== undefined  && icConta !== undefined) {
      if (! this.produtosBloqueados.includes(produto) && icConta !== IndicadorConta.NSGD) {
        permiteDigitar = this.controleAcessoService.hasRole(Role.PERMITE_DIGITAR_NUMERO_CONTA);
      }
    }
    return permiteDigitar;
  }

  public calcularDv(agencia: string, produto: number, numeroConta: string): number {

    if (!agencia || !produto || !numeroConta) {
      return undefined;
    }

    const ag = agencia.toString().padStart(4, "0");
    const op = produto.toString().padStart(3, "0");
    const ct = numeroConta.toString().padStart(8, "0");

    let soma = 0;

    for (let i = 0; i < ag.length; i++) {
      soma += (8 - i) * Number(ag.substring(i, i + 1));
    }

    for (let i = 0; i < op.length; i++) {
      soma += (4 - i) * Number(op.substring(i, i + 1));
    }

    for (let i = 0; i < ct.length; i++) {
      soma += (9 - i) * Number(ct.substring(i, i + 1));
    }

    soma *= 10;
    soma %= 11;

    return (soma === 10 ? 0 : soma);

  }
}
