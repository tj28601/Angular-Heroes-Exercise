import { TestBed } from '@angular/core/testing';

import { JsonlistService } from './jsonlist.service';

describe('JsonlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonlistService = TestBed.get(JsonlistService);
    expect(service).toBeTruthy();
  });
});
