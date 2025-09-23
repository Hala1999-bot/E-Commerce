import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isLoogedGuard } from './is-looged-guard';

describe('isLoogedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isLoogedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
