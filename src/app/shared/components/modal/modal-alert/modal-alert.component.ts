import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { ValidaSenhaContaService } from "../../valida-senha-conta/valida-senha-conta.service";

@Component({
  selector: "app-modal-alert",
  templateUrl: "./modal-alert.component.html",
  styleUrls: ["./modal-alert.component.css"]
})
export class ModalAlertComponent implements OnInit, OnDestroy {

  private OFFSET_BLOCO = -140;

  constructor(
    private validacaoSenhaService: ValidaSenhaContaService
  ) {
    //super();
    this.validacaoSenhaService.setIsModalConfirmacaoAberto(true);
  }

  @Input()
  options;

  @Input()
  type = "info";

  @Input()
  message: string;

  @Input()
  textoFechar = "Fechar";

  @Input()
  scrollToId: string;

  @Input()
  close: any = () => {
    if (this.scrollToId) {
      this.scrollTo(this.scrollToId);
    }
  };

  ngOnInit() {
    // this.options.inDuration = 0;
    // this.options.outDuration = 0;
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + this.OFFSET_BLOCO;

    window.scrollTo({ top: y, behavior: "smooth" });
  }

  ngOnDestroy(): void {
    this.validacaoSenhaService.setIsModalConfirmacaoAberto(false);
  }

}
