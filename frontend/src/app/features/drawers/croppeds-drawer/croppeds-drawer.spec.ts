import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroppedsDrawer } from './croppeds-drawer';

describe('CroppedsDrawer', () => {
  let component: CroppedsDrawer;
  let fixture: ComponentFixture<CroppedsDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CroppedsDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CroppedsDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
