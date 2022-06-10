import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extinguir-expediente',
  templateUrl: './extinguir-expediente.component.html',
  styleUrls: ['./extinguir-expediente.component.css']
})
export class ExtinguirExpedienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("extinguir expediente iniciou");
  }

}
