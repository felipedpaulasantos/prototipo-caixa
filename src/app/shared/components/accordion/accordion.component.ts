import { Component, OnInit, ChangeDetectionStrategy, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Config } from 'protractor';
import { AccordionMenu } from './types/accordion-menu';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnInit, AfterViewInit {

  constructor(
    private cdr: ChangeDetectorRef,
    private location: Location
  ) {}

  @Input() options;
  @Input() menus: AccordionMenu[];
  config: Config;
  url: string;

  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }

  ngAfterViewInit(): void {
    const loc = this.location.path();
    this.menus.forEach((menu, index) => {
      if (loc.includes(menu.url)) {
        this.toggle(index);
        this.cdr.detectChanges();
      }
    });
  }

  mergeConfig(options: Config) {

    const config = {
      // selector: '#accordion',
      multi: true
    };

    return { ...config, ...options };
  }

  toggle(index: number) {
    if (!this.config.multi) {
      this.menus.filter(
        (menu, i) => i !== index && menu.active
      ).forEach(menu => menu.active = !menu.active);
    }

    this.menus[index].active = !this.menus[index].active;
  }

}
