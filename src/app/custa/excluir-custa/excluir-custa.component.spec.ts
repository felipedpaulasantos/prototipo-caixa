import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirCustaComponent } from './excluir-custa.component';

describe('ExcluirCustaComponent', () => {
  let component: ExcluirCustaComponent;
  let fixture: ComponentFixture<ExcluirCustaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluirCustaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirCustaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
