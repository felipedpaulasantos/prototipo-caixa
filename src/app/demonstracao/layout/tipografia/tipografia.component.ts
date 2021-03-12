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
      tag: "<h1 class='titulo'></h1>",
      exemplo: "<h1 class='titulo'>Título de página</h1>",
      uso: `Sempre com a tag h1, no início de cada página. <br>Aplica a cor de destaque e acrescenta espaçamento inferior de 2rem`
    },
    {
      tag: "<h5 class='subtitulo'></h5>",
      exemplo: "<h5 class='subtitulo'>Subtítulo padrão</h5>",
      uso: `Pode ser utilizada nas tags h2 até h6. <br>Aplica a fonte em negrito e acrescenta espaçamento inferior de 1rem.`
    },
  ];

  iconesExemplo = `<span class="mr-5">
  <i class="fa fa-check mr-3"></i>
  <i class="fa fa-times mr-3"></i>
  <i class="fa fa-exclamation mr-3"></i>
  <i class="fa fa-info mr-3"></i>
</span>
<h4 class="d-inline mr-5">
  <i class="fa fa-check fa-lg text-success mr-3"></i>
  <i class="fa fa-times fa-lg text-danger mr-3"></i>
  <i class="fa fa-exclamation text-warning fa-lg mr-3"></i>
  <i class="fa fa-info fa-lg text-info mr-3"></i>
</h4>
<h2 class="d-inline mr-5">
  <i class="fa fa-check fa-lg mr-3"></i>
  <i class="fa fa-times fa-lg mr-3"></i>
  <i class="fa fa-exclamation fa-lg mr-3"></i>
  <i class="fa fa-info fa-lg mr-3"></i>
</h2>`.trim();

  ngOnInit(): void {
  }

}
