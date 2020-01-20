import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponSectionComponent } from './coupon-section.component';

describe('CouponSectionComponent', () => {
  let component: CouponSectionComponent;
  let fixture: ComponentFixture<CouponSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
