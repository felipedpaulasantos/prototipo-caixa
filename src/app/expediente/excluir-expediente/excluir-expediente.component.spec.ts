import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirExpedienteComponent } from './excluir-expediente.component';

describe('ExcluirExpedienteComponent', () => {
  let component: ExcluirExpedienteComponent;
  let fixture: ComponentFixture<ExcluirExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
