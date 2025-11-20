import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiasDrawer } from './saias-drawer';

describe('SaiasDrawer', () => {
  let component: SaiasDrawer;
  let fixture: ComponentFixture<SaiasDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaiasDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaiasDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
