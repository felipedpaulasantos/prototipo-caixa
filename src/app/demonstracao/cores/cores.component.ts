import { Component, OnInit } from "@angular/core";
import { loremIpsumPlaceHolder, BootstrapTheme } from "src/app/guia-caixa/constants/constants";


@Component({
  selector: "app-cores",
  templateUrl: "./cores.component.html",
  styleUrls: ["./cores.component.scss"]
})
export class CoresComponent implements OnInit {

  cores: any[] = [];
  coresGradiente: any[] = [];

  placeholder: string;

  constructor() {
    this.placeholder = loremIpsumPlaceHolder;

/*     Object.getOwnPropertyNames(BootstrapTheme).forEach((theme: any) => {
      const tema = BootstrapTheme[theme].value;
      if (tema) {
        tema.titulo = tema.name;
        tema.texto = textosCores[tema.name];
        this.cores.push(tema);
      }
    }); */

    this.cores = BootstrapTheme.getTemas();
    this.coresGradiente = BootstrapTheme.getTemas();
  }

  ngOnInit() {
  }

}
