import { TestBed } from '@angular/core/testing';

import { PostAPIsService } from './post-apis.service';

describe('PostAPIsService', () => {
  let service: PostAPIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostAPIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
