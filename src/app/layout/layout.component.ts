import { Component, OnInit } from '@angular/core';
import { BootstrapTheme, LOGO_CAIXA_BRANCO_SRC, LOGO_CAIXA_SRC } from '../shared/constants/constants';
import { StyleService } from '../shared/services/style.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  logoBranco = LOGO_CAIXA_BRANCO_SRC;
  logoPadrao = LOGO_CAIXA_SRC;

  constructor(
    public styleService: StyleService,
    private fb: FormBuilder
  ) { }

  temas = [];

  formToolbar = this.fb.group({
    icone: [""],
    bg: [""],
    tom: [""]
  });

  ngOnInit() {
    Object.getOwnPropertyNames(BootstrapTheme).forEach((theme: any) => {
      const tema = BootstrapTheme[theme].value;
      if (tema) { this.temas.push(tema); }
    });
    console.log("TEMAS", this.temas);
  }

  onToolbarBgChange(theme, tom?) {
    if (!theme) { return; }

    const temaSelecionado = this.temas.find(tema => tema.name === theme);
    if (!temaSelecionado) { return; }

    if (!tom && this.formToolbar.get("tom").value) {
      tom = this.formToolbar.get("tom").value;
    } else if (!tom) {
      tom = "";
    }

    this.styleService.setToolbarBg(temaSelecionado.name + tom);
    this.styleService.setToolbarText(temaSelecionado.textColor);
  }

  onIconChange(src) {
    if (!src) { return; }
    this.styleService.setToolbarIcon(src);
  }

  onSidemenuBgChange(className) {
    if (!className) { return; }
    this.styleService.setSidemenuBg(className);
  }

}
