import { Component, OnInit } from '@angular/core';
import { BootstrapTheme } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css']
})
export class BotoesComponent implements OnInit {

  temas = BootstrapTheme.getTemas();

  constructor() { }

  ngOnInit() {
  }

}
