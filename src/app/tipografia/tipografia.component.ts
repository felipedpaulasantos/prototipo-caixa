import { Component, OnInit } from '@angular/core';
import { loremIpsumPlaceHolder } from '../guia-caixa/constants/constants';


@Component({
  selector: 'app-tipografia',
  templateUrl: './tipografia.component.html',
  styleUrls: ['./tipografia.component.scss']
})
export class TipografiaComponent implements OnInit {

  constructor() { }

  placeholder = loremIpsumPlaceHolder;

  ngOnInit(): void {
  }

}
