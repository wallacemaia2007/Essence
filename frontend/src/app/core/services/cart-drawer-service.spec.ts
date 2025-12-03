import { TestBed } from '@angular/core/testing';

import { CartDrawerService } from './cart-drawer-service';

describe('CartDrawerService', () => {
  let service: CartDrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartDrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
