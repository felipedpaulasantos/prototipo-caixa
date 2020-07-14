import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaCaixaComponent } from './guia-caixa.component';

describe('GuiaCaixaComponent', () => {
  let component: GuiaCaixaComponent;
  let fixture: ComponentFixture<GuiaCaixaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiaCaixaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
