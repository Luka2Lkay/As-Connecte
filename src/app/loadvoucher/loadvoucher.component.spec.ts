import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadvoucherComponent } from './loadvoucher.component';

describe('LoadvoucherComponent', () => {
  let component: LoadvoucherComponent;
  let fixture: ComponentFixture<LoadvoucherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadvoucherComponent]
    });
    fixture = TestBed.createComponent(LoadvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
