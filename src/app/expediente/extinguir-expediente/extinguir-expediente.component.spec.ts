import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtinguirExpedienteComponent } from './extinguir-expediente.component';

describe('ExtinguirExpedienteComponent', () => {
  let component: ExtinguirExpedienteComponent;
  let fixture: ComponentFixture<ExtinguirExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtinguirExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtinguirExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
