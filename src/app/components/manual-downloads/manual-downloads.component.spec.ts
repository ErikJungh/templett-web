import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualDownloadsComponent } from './manual-downloads.component';

describe('ManualDownloadsComponent', () => {
  let component: ManualDownloadsComponent;
  let fixture: ComponentFixture<ManualDownloadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualDownloadsComponent]
    });
    fixture = TestBed.createComponent(ManualDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
