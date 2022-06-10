
import {of as observableOf,  Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { ConsultaCorporativaService } from "./consulta-corporativa.service";
import { Injectable } from "@angular/core";
import { Localidade } from "../governo-social/model/cliente.model";
import { strNotEmpty } from "../shared/utils/utils";
class LocalidadeCache {
  lastFetch: number;
  uf: string;
  localidades: Localidade[];
}

@Injectable()
export class MunicipioService {
  constructor(private corpService: ConsultaCorporativaService) {}

  consultaMunicipios(uf: string): Observable<Localidade[]> {
    const lista: string = localStorage.getItem(uf);
    if (strNotEmpty(lista)) {
      const cache: LocalidadeCache = JSON.parse(lista);
      if (new Date().getTime() - cache.lastFetch < 24 * 60 * 60 * 1000) {
        return observableOf(cache.localidades);
      }
    }

    return this.corpService.consultaMunicipios(uf).pipe(
      tap((loc: Localidade[]) => {
        // console.log("Salvando no local storage");
        const newCache = new LocalidadeCache();
        newCache.uf = uf;
        newCache.lastFetch = new Date().getTime();
        newCache.localidades = loc;
        localStorage.setItem(uf, JSON.stringify(newCache));
      })
    );
  }
}
