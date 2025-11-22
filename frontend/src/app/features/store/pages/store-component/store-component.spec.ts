import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StroreComponent } from './store-component';

describe('StroreComponent', () => {
  let component: StroreComponent;
  let fixture: ComponentFixture<StroreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StroreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StroreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
