import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngx-spinner-default',
  templateUrl: './ngx-spinner-default.component.html',
  styleUrls: ['ngx-spinner-default.component.css']
})
export class NgxSpinnerDefaultComponent implements OnInit {

  @Input() fullscreen = false;

  constructor() { }

  ngOnInit() {
  }

}
