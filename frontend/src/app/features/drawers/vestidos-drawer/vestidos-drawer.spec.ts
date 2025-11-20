import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestidosDrawer } from './vestidos-drawer';

describe('VestidosDrawer', () => {
  let component: VestidosDrawer;
  let fixture: ComponentFixture<VestidosDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VestidosDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VestidosDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
