import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedStickerComponent } from './animated-sticker.component';

describe('AnimatedStickerComponent', () => {
  let component: AnimatedStickerComponent;
  let fixture: ComponentFixture<AnimatedStickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimatedStickerComponent]
    });
    fixture = TestBed.createComponent(AnimatedStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
