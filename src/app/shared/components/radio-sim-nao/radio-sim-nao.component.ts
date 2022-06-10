import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-radio-sim-nao",
  templateUrl: "./radio-sim-nao.component.html",
  styleUrls: ["./radio-sim-nao.component.css"]
})
export class RadioSimNaoComponent implements OnInit {

  @Output()
  value = new EventEmitter();

  @Input()
  disabled: boolean;

  @Input()
  labelSim = "Sim";

  @Input()
  labelNao = "Não";

  @Input()
  classBase = "col-md-4";

  botaoEnabledClass = this.classBase + " ml-2 mr-2 mt-1 mb-1 form-check btn btn-accent";

  botaoDisabledClass = this.classBase + " ml-2 mr-2 mt-1 mb-1 form-check btn btn-cancel";

  checked: boolean;


  constructor() { }

  ngOnInit() {
    this.changeSimNao(null);
  }

  changeSimNao (value) {
    if (this.checked !== value) {
      this.checked = value;
    } else {
      this.checked = undefined;
    }
    this.value.emit(this.checked);
  }

  getButtonSimClass (): string {
    return this.checked === true ? this.botaoEnabledClass : this.botaoDisabledClass;
  }

  getButtonNaoClass (): string {
    return this.checked === false ? this.botaoEnabledClass : this.botaoDisabledClass;
  }

}
