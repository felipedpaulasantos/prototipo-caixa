import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirExpedienteComponent } from './inserir-expediente.component';

describe('InserirExpedienteComponent', () => {
  let component: InserirExpedienteComponent;
  let fixture: ComponentFixture<InserirExpedienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirExpedienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
