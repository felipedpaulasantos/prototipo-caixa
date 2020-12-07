import {Component, Input, OnInit, OnChanges, ElementRef, ChangeDetectionStrategy} from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { CardChave } from './listar-chaves';

@Component({
  selector: "cx-card-button",
  templateUrl: "./card-button.component.html",
  styleUrls: ["./card-button.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardButtonComponent  implements OnInit, OnChanges {

  @Input()
  card: CardChave;
  @Input()
  index: any;
  formCard: FormGroup;
  valor: any;

  TITLE_DOCUMENTO = "CPF/CNPJ";
  TITLE_ALEATORIA = "Chave Aleatória";
  TITLE_CELULAR = "Número do celular";
  TITLE_EMAIL = "E-mail do cliente";

  ICON_DOCUMENTO = "fas fa-user-friends";
  ICON_ALEATORIA = "fas fa-key";
  ICON_CELULAR = "fas fa-mobile-alt";
  ICON_EMAIL = "fas fa-envelope";

    constructor(
      private fb: FormBuilder    ) {
/*       pixService.changeEmittedAutenticarCliente$.subscribe((card: CardChave) => this.atualizarValorCard()); */
    }

    ngOnInit(): void {

    }

    ngOnChanges(): void {
      this.formCard = this.fb.group({
        selecionado: [this.card.selecionado],
        valor: [this.card.valor]
      });

/*       if (this.card) {
        switch (this.card.tipo) {
          case TipoChaveCard.DOCUMENTO:
          case TipoChave.CPF:
          case TipoChave.CNPJ:
            this.card.icone = this.ICON_DOCUMENTO
            this.card.titulo = this.TITLE_DOCUMENTO
            break;
          case TipoChaveCard.ALEATORIA:
            this.card.icone = this.ICON_ALEATORIA;
            this.card.titulo = this.TITLE_ALEATORIA
            break;
          case TipoChaveCard.CELULAR:
          case TipoChave.PHONE:
            this.card.icone = this.ICON_CELULAR;
            this.card.titulo = this.TITLE_CELULAR
            break;
          case TipoChaveCard.EMAIL:
            this.card.icone = this.ICON_EMAIL;
            this.card.titulo = this.TITLE_EMAIL
            break;
          default:
            break;
        }
      } */

      this.formCard.get("valor").valueChanges.subscribe(() => {
        this.atualizarValorCard();
      });
    }

    atualizarListaTasks() {
/*       this.pixService.nextChangeCardSelecionado(this.card); */
      this.atualizarValorCard();
    }

    atualizarValorCard() {
        if (this.card.selecionado) {
          this.card.valor = this.formCard.get("valor").value;
/*           this.pixService.nextChangeCardValor(this.card); */
        }
    }

    nextStep() {

    }


  }
