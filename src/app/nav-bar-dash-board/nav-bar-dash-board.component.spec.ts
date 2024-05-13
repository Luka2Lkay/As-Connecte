import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDashBoardComponent } from './nav-bar-dash-board.component';

describe('NavBarDashBoardComponent', () => {
  let component: NavBarDashBoardComponent;
  let fixture: ComponentFixture<NavBarDashBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarDashBoardComponent]
    });
    fixture = TestBed.createComponent(NavBarDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
