import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-expediente',
  templateUrl: './excluir-expediente.component.html',
  styleUrls: ['./excluir-expediente.component.css']
})
export class ExcluirExpedienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("excluir expediente iniciou");
  }

}
