/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputFeedbackIconComponent } from './input-feedback.component';

describe('InputFeedbackIconComponent', () => {
  let component: InputFeedbackIconComponent;
  let fixture: ComponentFixture<InputFeedbackIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFeedbackIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFeedbackIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
