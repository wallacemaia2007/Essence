import { TestBed } from '@angular/core/testing';

import { SlugNormalizerService } from './slug-normalize-service';

describe('SlugNormalizerService', () => {
  let service: SlugNormalizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlugNormalizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
