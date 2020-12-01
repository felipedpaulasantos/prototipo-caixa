import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperDemonstracaoComponent } from './stepper-demonstracao.component';

describe('StepperDemonstracaoComponent', () => {
  let component: StepperDemonstracaoComponent;
  let fixture: ComponentFixture<StepperDemonstracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperDemonstracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperDemonstracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
