import { TestBed } from '@angular/core/testing';
import { StroreService } from './store-service';


describe('StroreService', () => {
  let service: StroreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StroreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
