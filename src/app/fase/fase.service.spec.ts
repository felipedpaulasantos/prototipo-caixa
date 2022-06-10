import { TestBed } from '@angular/core/testing';

import { FaseService } from './fase.service';

describe('FaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaseService = TestBed.get(FaseService);
    expect(service).toBeTruthy();
  });
});
