import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasDrawer } from './camisetas-drawer';

describe('CamisetasDrawer', () => {
  let component: CamisetasDrawer;
  let fixture: ComponentFixture<CamisetasDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamisetasDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamisetasDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
