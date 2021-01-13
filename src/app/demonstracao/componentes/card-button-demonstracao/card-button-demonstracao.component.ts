import { Component, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";
import { ComponentesInterface } from "../componentes-interface";

@Component({
  templateUrl: "./card-button-demonstracao.component.html",
  styleUrls: ["./card-button-demonstracao.component.scss"]
})
export class CardButtonDemonstracaoComponent extends ComponentesInterface {

  constructor(
    public toastr: ToastrService,
    private fb: FormBuilder
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;

  sectionOffset = 0;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  currentSection = "painelCardButton";

  navItems: CodeFixedNavItem[] = [
    { id: "painelCardButton", name: "Card Button" },
    { id: "painelCardButtonCheckbox", name: "Card Button - Checkbox" },
    { id: "painelCardButtonRadio", name: "Card Button - Radio" },
  ];

  formFone = this.fb.group({
    tipoFone: [null]
  });

  user;
  email;

  htmlCodeCardButton = `<cx-card-button leftIcon="fa fa-home">
  <h5>Lorem Ipsum</h5>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint perspiciatis soluta
  saepe est nam, sunt accusantium.
</cx-card-button>
`.trim();

  htmlCodeCardCheckbox = `<cx-card-button type="checkbox" [(ngModel)]="user" value="user" leftIcon="fa fa-user">
  <label>Usuário</label>
  <input [disabled]="!user" value="Fulano" class="input-caixa">
</cx-card-button>

<br>

<cx-card-button type="checkbox" [(ngModel)]="email" value="email" leftIcon="fa fa-at">
  <label>E-mail</label>
  <input [disabled]="!email" value="fulano@email.com" class="input-caixa">
</cx-card-button>`
.trim();

  tsCodeCardCheckbox = `import { Component } from "@angular/core";

@Component({
  templateUrl: "./card-button-exemplo.component.html",
  styleUrls: ["./card-button-exemplo.component.scss"]
})
export class CardButtonExemplo {

  constructor() {}

  user;
  email;

}`.trim();

  htmlCodeCardRadio = `<form [formGroup]="formFone">
  <cx-card-button type="radio" formControlName="tipoFone" value="fixo" leftIcon="fa fa-phone-alt">
     <label>Fixo</label>
     <input [disabled]="formFone.get('tipoFone').value !== 'fixo'" class="input-caixa"
        placeholder="(00) 0000-0000">
  </cx-card-button>

  <br>

  <cx-card-button type="radio" formControlName="tipoFone" value="celular" leftIcon="fa fa-mobile-alt">
     <label>Celular</label>
     <input [disabled]="formFone.get('tipoFone').value !== 'celular'" class="input-caixa"
        placeholder="(00) 00000-0000">
  </cx-card-button>
</form>`.trim();

  tsCodeCardRadio = `import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  templateUrl: "./card-button-exemplo.component.html",
  styleUrls: ["./card-button-exemplo.component.scss"]
})
export class CardButtonExemplo {

  constructor(
    private fb: FormBuilder
  ) { }

  formFone = this.fb.group({
    tipoFone: [null]
  });

}`.trim();

  cardWidth = `<cx-card-button
  leftTitle="Largura: 100%"
  [styles]="{ width: '100%' }"
></cx-card-button>`.trim();

  cardHeight = `<cx-card-button leftIcon="fa fa-user" leftTitle="Altura: auto" leftText="Conteúdo extenso"
[styles]="{ height: 'auto' }">
    <div class="py-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt enim aspernatur suscipit
      doloribus eius deleniti porro, qui tempore totam officiis 
      nemo distinctio dolore perspiciatis ratione
      voluptas non maxime doloremque!
      <br><br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt enim aspernatur suscipit
      doloribus eius deleniti porro, qui tempore totam officiis 
      nemo distinctio dolore perspiciatis ratione
      voluptas non maxime doloremque!
    </div>
</cx-card-button>`.trim();

}
