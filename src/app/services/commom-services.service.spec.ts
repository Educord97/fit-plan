import { TestBed } from '@angular/core/testing';

import { CommomService } from './commom-services.service';

describe('CommomService', () => {
  let service: CommomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
