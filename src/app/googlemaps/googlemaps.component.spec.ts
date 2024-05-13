import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglemapsComponent } from './googlemaps.component';

describe('GooglemapsComponent', () => {
  let component: GooglemapsComponent;
  let fixture: ComponentFixture<GooglemapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GooglemapsComponent]
    });
    fixture = TestBed.createComponent(GooglemapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
