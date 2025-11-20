import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDrawer } from './generic-drawer';

describe('GenericDrawer', () => {
  let component: GenericDrawer;
  let fixture: ComponentFixture<GenericDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
