import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirCustaComponent } from './inserir-custa.component';

describe('InserirCustaComponent', () => {
  let component: InserirCustaComponent;
  let fixture: ComponentFixture<InserirCustaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirCustaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirCustaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
