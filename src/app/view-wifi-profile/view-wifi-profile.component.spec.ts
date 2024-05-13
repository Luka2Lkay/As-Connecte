import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWifiProfileComponent } from './view-wifi-profile.component';

describe('ViewWifiProfileComponent', () => {
  let component: ViewWifiProfileComponent;
  let fixture: ComponentFixture<ViewWifiProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewWifiProfileComponent]
    });
    fixture = TestBed.createComponent(ViewWifiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
