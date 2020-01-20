import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutSectionComponent } from './check-out-section.component';

describe('CheckOutSectionComponent', () => {
  let component: CheckOutSectionComponent;
  let fixture: ComponentFixture<CheckOutSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
