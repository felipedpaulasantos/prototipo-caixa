import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSidemenuComponent } from './account-sidemenu.component';

describe('AccountSidemenuComponent', () => {
  let component: AccountSidemenuComponent;
  let fixture: ComponentFixture<AccountSidemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSidemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
