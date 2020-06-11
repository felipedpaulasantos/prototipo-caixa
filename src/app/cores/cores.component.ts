import { Component, OnInit } from '@angular/core';
import { BootstrapTheme, loremIpsumPlaceHolder } from '../shared/constants/constants';
import { textosCores } from './cores-constants';

@Component({
  selector: 'app-cores',
  templateUrl: './cores.component.html',
  styleUrls: ['./cores.component.scss']
})
export class CoresComponent implements OnInit {

  cores: any[] = [];

  placeholder: string;

  constructor() {
    this.placeholder = loremIpsumPlaceHolder;

    Object.getOwnPropertyNames(BootstrapTheme).forEach((theme: any) => {
      const tema = BootstrapTheme[theme].value;
      if (tema) {
        tema.titulo = tema.name;
        tema.texto = textosCores[tema.name];
        this.cores.push(tema);
      }
    });
  }

  ngOnInit() {
  }

}
