import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBenefitsSectionComponent } from './mobile-benefits-section.component';

describe('MobileBenefitsSectionComponent', () => {
  let component: MobileBenefitsSectionComponent;
  let fixture: ComponentFixture<MobileBenefitsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileBenefitsSectionComponent]
    });
    fixture = TestBed.createComponent(MobileBenefitsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
