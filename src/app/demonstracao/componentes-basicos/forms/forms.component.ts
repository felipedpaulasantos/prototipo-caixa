import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";
import { ComponentesInterface } from "../../componentes/componentes-interface";

@Component({
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"],
  host: { "(window:scroll)": "onScroll($event)" }
})
export class FormsComponent extends ComponentesInterface implements OnInit  {

  constructor(
    public toastr: ToastrService
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  sectionOffset = 0;
  currentSection = "painelInputs";

  navItems: CodeFixedNavItem[] = [
    { id: "painelInputs", name: "Inputs e Text-area" },
    { id: "painelSelect", name: "Select" },
    { id: "painelCheckbox", name: "Checkbox" },
    { id: "painelRadio", name: "Radio" },
    { id: "painelRange", name: "Range" }
  ];

  inputExemplo = `<div class="form-group">
  <label>Nome</label>
  <input class="form-control">
</div>

<label>Idade</label>
<input class="form-control mb-3" type="number">

<label>Observações</label>
<textarea class="form-control"></textarea>`.trim();

  selectExemplo = `<label>Sexo</label>
<ng-select class="mb-3">
  <ng-option>Masculino</ng-option>
  <ng-option>Feminino</ng-option>
</ng-select>

<label>Naturalidade</label>
<select class="form-control mb-3">
  <option>Brasileiro</option>
  <option>Estrangeiro</option>
</select>`.trim();

  checkboxExemplo = `<div class="custom-control custom-checkbox mb-3">
  <input type="checkbox" class="custom-control-input" id="customCheck1">
  <label class="custom-control-label" for="customCheck1">Marque esse checkbox</label>
</div>

<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck2" checked>
  <label class="custom-control-label" for="customCheck2">Desmarque esse checkbox</label>
</div>`.trim();

  radioExemplo = `<div class="custom-control custom-radio mb-3">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio1">Ou esse fica marcado</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio2">Ou esse aqui</label>
</div>`.trim();

  rangeExemplo = `<label for="customRange1">Example range</label>
<input type="range" class="custom-range" id="customRange1">`.trim();

  ngOnInit(): void {
  }


}
