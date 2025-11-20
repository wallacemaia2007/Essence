import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcasDrawer } from './calcas-drawer';

describe('CalcasDrawer', () => {
  let component: CalcasDrawer;
  let fixture: ComponentFixture<CalcasDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcasDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcasDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
