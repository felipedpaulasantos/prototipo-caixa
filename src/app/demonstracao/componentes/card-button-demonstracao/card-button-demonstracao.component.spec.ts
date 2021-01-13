import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardButtonDemonstracaoComponent } from './card-button-demonstracao.component';

describe('CardButtonDemonstracaoComponent', () => {
  let component: CardButtonDemonstracaoComponent;
  let fixture: ComponentFixture<CardButtonDemonstracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardButtonDemonstracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardButtonDemonstracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
