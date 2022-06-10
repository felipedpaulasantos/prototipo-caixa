import { Injectable } from "@angular/core";
import { PropriedadesPagina } from "./propriedades-pagina";

@Injectable()
export class PaginadorService {

  public getPaginador(totalItems: number, paginaAtual: number = 1, tamanhoPagina: number = 20) {

    const totalPaginas = Math.ceil(totalItems / tamanhoPagina);

    if (paginaAtual < 1) {
      paginaAtual = 1;
    } else if (paginaAtual > totalPaginas) {
      paginaAtual = totalPaginas;
    }

    // calculate start and end item indexes
    const indexInicial = (paginaAtual - 1) * tamanhoPagina;
    const indexFinal = Math.min(indexInicial + tamanhoPagina - 1, totalItems - 1);

    const propriedadesPagina: PropriedadesPagina = {};

    propriedadesPagina.indexInicial = indexInicial;
    propriedadesPagina.indexFinal = indexFinal;
    propriedadesPagina.totalItens = totalItems;
    propriedadesPagina.totalPaginas = totalPaginas;
    propriedadesPagina.tamanhoPagina = tamanhoPagina;

    return propriedadesPagina;
  }

}
