import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOGO_CAIXA_BRANCO_SRC } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  private toolbarBgSource = new BehaviorSubject<string>("primary");
  toolbarBg$ = this.toolbarBgSource.asObservable();

  private toolbarTextSource = new BehaviorSubject<string>("light");
  toolbarText$ = this.toolbarTextSource.asObservable();

  private toolbarIconSource = new BehaviorSubject<string>(LOGO_CAIXA_BRANCO_SRC);
  toolbarIcon$ = this.toolbarIconSource.asObservable();

  private sidemenuBgSource = new BehaviorSubject<string>("light-light");
  sidemenuBg$ = this.sidemenuBgSource.asObservable();

  private conteudoPrincipalBg = new BehaviorSubject<string>("");
  conteudoPrincipalBg$ = this.conteudoPrincipalBg.asObservable();

  setToolbarBg(className: string) {
    this.toolbarBgSource.next(className);
  }

  setToolbarText(className: string) {
    this.toolbarTextSource.next(className);
  }

  setToolbarIcon(src: string) {
    this.toolbarIconSource.next(src);
  }

  setSidemenuBg(className: string) {
    this.sidemenuBgSource.next(className);
  }

  setConteudoPrincipalBg(conteudoPrincipalBg: string) {
    this.conteudoPrincipalBg.next(conteudoPrincipalBg);
  }
}
