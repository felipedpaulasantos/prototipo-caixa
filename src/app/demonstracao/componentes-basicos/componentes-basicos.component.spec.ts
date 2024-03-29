import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComponentesBasicosComponent } from './componentes-basicos.component';

describe('ComponentesBasicosComponent', () => {
  let component: ComponentesBasicosComponent;
  let fixture: ComponentFixture<ComponentesBasicosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentesBasicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
