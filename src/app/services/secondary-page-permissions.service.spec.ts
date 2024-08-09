import { TestBed } from '@angular/core/testing';

import { SecondaryPagePermissionsService } from './secondary-page-permissions.service';

describe('SecondaryPagePermissionsService', () => {
  let service: SecondaryPagePermissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondaryPagePermissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
