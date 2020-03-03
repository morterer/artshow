import { TestBed } from '@angular/core/testing';

import { ClevelandArtService } from './cleveland-art.service';

describe('ClevelandArtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClevelandArtService = TestBed.get(ClevelandArtService);
    expect(service).toBeTruthy();
  });
});
