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

  formSidemenu = this.fb.group({
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

  onIconChange(src: string): void {
    if (!src) { return; }
    this.styleService.setToolbarIcon(src);
  }

  onToolbarBgChange(theme: string, tom?: string): void {
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

  onSidemenuBgChange(theme: string, tom?: string): void {
    if (!theme) { return; }

    console.log(theme, tom);

    const temaSelecionado = this.temas.find(tema => tema.name === theme);
    if (!temaSelecionado) { return; }

    if (!tom && this.formSidemenu.get("tom").value) {
      tom = this.formSidemenu.get("tom").value;
    } else if (!tom) {
      tom = "";
    }

    this.styleService.setSidemenuBg(temaSelecionado.name + tom);
  }

}
