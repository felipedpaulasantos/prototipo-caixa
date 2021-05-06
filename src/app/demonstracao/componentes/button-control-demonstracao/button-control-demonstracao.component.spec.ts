import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonControlDemonstracaoComponent } from './button-control-demonstracao.component';

describe('ButtonControlDemonstracaoComponent', () => {
  let component: ButtonControlDemonstracaoComponent;
  let fixture: ComponentFixture<ButtonControlDemonstracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonControlDemonstracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonControlDemonstracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
