import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineDemonstracaoComponent } from './timeline-demonstracao.component';

describe('TimelineDemonstracaoComponent', () => {
  let component: TimelineDemonstracaoComponent;
  let fixture: ComponentFixture<TimelineDemonstracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineDemonstracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineDemonstracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
