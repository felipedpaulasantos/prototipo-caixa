import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fase',
  templateUrl: './fase.component.html'
})
export class FaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("fase iniciou");
  }

}
