import { Component, OnInit, ViewChild } from "@angular/core";

import { ComponentesInterface } from "../../componentes/componentes-interface";
import { ToastrService } from "ngx-toastr";
import { BootstrapTheme } from "src/app/guia-caixa/constants/constants";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";

@Component({
  selector: "app-botoes",
  templateUrl: "./botoes.component.html",
  styleUrls: ["./botoes.component.css"],
  host: { "(window:scroll)": "onScroll($event)" }
})
export class BotoesComponent extends ComponentesInterface implements OnInit {

/*   temas = BootstrapTheme.getTemas(); */

  temas = [
    { "name": "principal" },
    { "name": "destaque" },
    { "name": "cancel" },
    { "name": "aux" },
    { "name": "success" },
    { "name": "danger" },
    { "name": "info" },
    { "name": "warning" }
  ];

  constructor(
    public toastr: ToastrService
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  sectionOffset = 0;
  currentSection = "painelBotoes";

  navItems: CodeFixedNavItem[] = [
    { id: "painelBotoes", name: "Padrão" },
    { id: "painelBotoesTamanho", name: "ícones" }
  ];

  botoesIntroducao = `<button class="btn btn-principal">Principal</button>;
<button class="btn btn-destaque">Destaque</button>;
<button class="btn btn-cancel">Cancel</button>;
<button class="btn btn-outline-aux">Auxiliar</button>;
<button class="btn btn-danger btn-sm">Perigo</button>;
<button class="btn btn-success btn-lg">Sucesso</button>;
<button class="btn btn-warning">Alerta</button>
<button class="btn btn-info">Informativo</button>
<button class="btn btn-link">Link</button>`;

  botoesIcones = `<button class="btn btn-destaque btn-sm">
  <i class="fa fa-plus mr-2"></i>Incluir
</button>

<button class="btn btn-outline-destaque">
  <i class="fa fa-edit mr-2"></i>Editar
</button>

<button class="btn btn-principal btn-lg">
  <i class="fa fa-lg fa-save mr-3"></i>Salvar
</button>`;








  htmlCodeBotoes = `<button class="btn btn-caixa btn-cancel">Botão</button>`.trim();

  htmlCodeBotoesTematicos = `        <button class="btn btn-caixa btn-destaque">Primário</button> &nbsp;
<button class="btn btn-caixa btn-danger-dark">Erro com tom escuro</button> &nbsp;
<button class="btn btn-caixa btn-apoio-light">Apoio com tom claro</button> &nbsp;
<button class="btn btn-caixa btn-outline-info">Info - outline</button>`.trim();

  htmlCodeBotoesTamanho = `        <button class="btn btn-caixa btn-outline-dark btn-sm">Pequeno</button> &nbsp;
<button class="btn btn-caixa btn-primario btn-lg">Grande</button> &nbsp;
<button class="btn btn-caixa btn-primario btn-lg disabled">Grande desabilitado</button> &nbsp;
<button class="btn btn-caixa btn-outline-destaque">
  <i class="fa fa-edit mr-2"></i>
  Com ícone
</button>`.trim();

  htmlCodeExemplo = `          <button class="btn btn-caixa btn-flat">
  Flat
</button>
<button class="btn btn-caixa btn-flat rounded-circle p-3">
  <i class="fa fa-bars fa-2x"></i>
</button>
<button class="btn btn-caixa btn-flat text-principal rounded-circle p-2">
  <i class="fa fa-home fa-2x"></i>
</button>
<button class="btn btn-caixa btn-outline-apoio rounded-circle p-2">
  <i class="fa fa-check fa-lg"></i>
</button>
<button class="btn btn-caixa btn-primario rounded-circle p-3">
  <i class="fa fa-play fa-lg"></i>
</button>
<button class="btn btn-caixa btn-outline-perigo rounded-circle shadow-none p-4">
  <i class="fa fa-trash fa-2x"></i>
</button>
<button class="btn btn-caixa btn-aux shadow-none">
  Sem sombra
</button>`.trim();

  cssCodeExemplo = `.btn-exemplo button {
    margin-left: 1rem;
    margin-right: 1rem;
}`.trim();

  htmlCodeTodosTematicos = `        <div class="table-responsive">
  <table class="table table-caixa table-borderless">
    <tbody>
      <ng-container *ngFor="let tema of temas; let i = index">
        <tr>
          <td><button class="btn btn-caixa btn-{{tema.name}}">Padrão</button></td>
          <td><button class="btn btn-caixa btn-{{tema.name}}-light">Claro</button></td>
          <td><button class="btn btn-caixa btn-{{tema.name}}-dark">Escuro</button></td>
          <td><button class="btn btn-caixa btn-outline-{{tema.name}}">Outline</button></td>
          <td><button class="btn btn-caixa btn-outline-{{tema.name}}-light">Claro</button></td>
          <td><button class="btn btn-caixa btn-outline-{{tema.name}}-dark">Escuro</button></td>
        </tr>
      </ng-container>
    </tbody>
  </table>
</div>`.trim();

  tsCodeTodosTematicos = `  import { Component } from '@angular/core';

  @Component({
      selector: 'app-botoes',
      templateUrl: './botoes.component.html',
      styleUrls: ['./botoes.component.scss']
  })
  export class BotoesComponent {

    temas = [
      { "name": "primary" },
      { "name": "secondary" },
      { "name": "success" },
      { "name": "danger" },
      { "name": "info" },
      { "name": "warning" },
      { "name": "apoio" },
      { "name": "aux" },
      { "name": "light" },
      { "name": "dark" }
    ]
  }
  `.trimRight();

  ngOnInit() {
  }

}
