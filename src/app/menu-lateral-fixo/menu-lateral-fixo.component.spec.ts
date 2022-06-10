import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuLateralFixoComponent } from "./menu-lateral-fixo.component";

describe("MenuLateralFixoComponent", () => {
  let component: MenuLateralFixoComponent;
  let fixture: ComponentFixture<MenuLateralFixoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLateralFixoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLateralFixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
