import { Component, OnInit } from '@angular/core';
import { BootstrapTheme, LOGO_CAIXA_BRANCO_SRC, LOGO_CAIXA_SRC } from '../shared/constants/constants';
import { StyleService } from '../shared/services/style.service';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  logoBranco = LOGO_CAIXA_BRANCO_SRC;
  logoPadrao = LOGO_CAIXA_SRC;

  constructor(
    private styleService: StyleService
  ) { }

  temas = [];

  ngOnInit() {
    Object.getOwnPropertyNames(BootstrapTheme).forEach((theme: any) => {
      const tema = BootstrapTheme[theme].value;
      if (tema) { this.temas.push(tema); }
    });
    console.log("TEMAS", this.temas);
  }

  onToolbarBgChange(theme) {
    if (!theme) { return; }
    const temaSelecionado = this.temas.find(tema => tema.name === theme);
    console.log(temaSelecionado);
    if (!temaSelecionado) { return; }
    this.styleService.setToolbarBg(temaSelecionado.name);
    this.styleService.setToolbarText(temaSelecionado.textColor);
  }

  onIconChange(src) {
    this.styleService.setToolbarIcon(src);
  }

}
