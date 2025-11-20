import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodysDrawer } from './bodys-drawer';

describe('BodysDrawer', () => {
  let component: BodysDrawer;
  let fixture: ComponentFixture<BodysDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodysDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodysDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
