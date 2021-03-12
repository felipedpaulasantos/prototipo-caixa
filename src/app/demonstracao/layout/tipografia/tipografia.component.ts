import { Component, OnInit } from "@angular/core";
import { loremIpsumPlaceHolder } from "src/app/guia-caixa/constants/constants";



@Component({
  selector: "app-tipografia",
  templateUrl: "./tipografia.component.html",
  styleUrls: ["./tipografia.component.scss"]
})
export class TipografiaComponent implements OnInit {

  constructor() { }

  placeholder = loremIpsumPlaceHolder;

  titulosGenericos = [
    { tag: "<h1></h1>", exemplo: "<h1>Título</h1>" },
    { tag: "<h2></h2>", exemplo: "<h2>Título</h2>" },
    { tag: "<h3></h3>", exemplo: "<h3>Título</h3>" },
    { tag: "<h4></h4>", exemplo: "<h4>Título</h4>" },
    { tag: "<h5></h5>", exemplo: "<h5>Título</h5>" },
    { tag: "<h6></h6>", exemplo: "<h6>Título</h6>" }
  ];

  titulosPadrao = [
    {
      tag: "<h1 class='header-principal-caixa'></h1>",
      exemplo: "<h1 class='header-principal-caixa'>Título</h1>",
      uso: "Título principal - sempre com a tag <h1>, no início de cada página: aplica a cor de destaque e acrescenta espaçamento inferior de 2rem"
    },
    {
      tag: "<h5 class='header-caixa'></h5>",
      exemplo: "<h5 class='header-caixa'>Subtítulo</h5>",
      uso: "Subtítulo: aplica a fonte em negrito e acrescenta espaçamento inferior de 1rem. Pode ser utilizada nas tags <h2> até <h6>"
    },
  ];

  ngOnInit(): void {
  }

}
