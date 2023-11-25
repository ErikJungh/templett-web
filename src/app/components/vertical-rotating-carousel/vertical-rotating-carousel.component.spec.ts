import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalRotatingCarouselComponent } from './vertical-rotating-carousel.component';

describe('VerticalRotatingCarouselComponent', () => {
  let component: VerticalRotatingCarouselComponent;
  let fixture: ComponentFixture<VerticalRotatingCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalRotatingCarouselComponent]
    });
    fixture = TestBed.createComponent(VerticalRotatingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
