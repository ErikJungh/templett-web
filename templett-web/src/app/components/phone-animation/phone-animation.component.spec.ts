import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAnimationComponent } from './phone-animation.component';

describe('PhoneAnimationComponent', () => {
  let component: PhoneAnimationComponent;
  let fixture: ComponentFixture<PhoneAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneAnimationComponent]
    });
    fixture = TestBed.createComponent(PhoneAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
