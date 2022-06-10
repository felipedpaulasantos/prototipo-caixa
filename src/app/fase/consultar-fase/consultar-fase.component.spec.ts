import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarFaseComponent } from './consultar-fase.component';

describe('ConsultarFaseComponent', () => {
  let component: ConsultarFaseComponent;
  let fixture: ComponentFixture<ConsultarFaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarFaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
