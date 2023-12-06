import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStickersInfoComponent } from './basic-stickers-info.component';

describe('BasicStickersInfoComponent', () => {
  let component: BasicStickersInfoComponent;
  let fixture: ComponentFixture<BasicStickersInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicStickersInfoComponent]
    });
    fixture = TestBed.createComponent(BasicStickersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
