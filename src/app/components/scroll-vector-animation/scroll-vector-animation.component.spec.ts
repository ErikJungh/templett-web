import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollVectorAnimationComponent } from './scroll-vector-animation.component';

describe('ScrollVectorAnimationComponent', () => {
  let component: ScrollVectorAnimationComponent;
  let fixture: ComponentFixture<ScrollVectorAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollVectorAnimationComponent]
    });
    fixture = TestBed.createComponent(ScrollVectorAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
