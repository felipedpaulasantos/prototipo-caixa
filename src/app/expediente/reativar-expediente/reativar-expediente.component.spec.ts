import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativarExpedienteComponent } from './reativar-expediente.component';

describe('ReativarExpedienteComponent', () => {
  let component: ReativarExpedienteComponent;
  let fixture: ComponentFixture<ReativarExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReativarExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativarExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
