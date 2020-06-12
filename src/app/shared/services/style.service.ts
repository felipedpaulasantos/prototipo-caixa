import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  private toolbarBgSource = new BehaviorSubject<string>("bg-primary");
  toolbarBg$ = this.toolbarBgSource.asObservable();

  setToolbarBg(className: string) {
    this.toolbarBgSource.next(className);
  }

}
