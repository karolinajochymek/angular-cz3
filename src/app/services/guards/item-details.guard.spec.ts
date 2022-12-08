import { TestBed } from '@angular/core/testing';

import { ItemDetailsGuard } from './item-details.guard';

describe('ItemDetailsGuard', () => {
  let guard: ItemDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ItemDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
