import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoriosDrawer } from './acessorios-drawer';

describe('AcessoriosDrawer', () => {
  let component: AcessoriosDrawer;
  let fixture: ComponentFixture<AcessoriosDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessoriosDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessoriosDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
