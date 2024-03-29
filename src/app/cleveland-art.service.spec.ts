import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ClevelandArtService } from './cleveland-art.service';

describe('ClevelandArtService', () => {
  let service: ClevelandArtService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ClevelandArtService]
    });
    service = TestBed.inject(ClevelandArtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
