import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiDetailsComponent } from './wifi-details.component';

describe('WifiDetailsComponent', () => {
  let component: WifiDetailsComponent;
  let fixture: ComponentFixture<WifiDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WifiDetailsComponent]
    });
    fixture = TestBed.createComponent(WifiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
