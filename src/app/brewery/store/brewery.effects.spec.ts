import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BreweryEffects } from './brewery.effects';

describe('BreweryEffects', () => {
  let actions$: Observable<any>;
  let effects: BreweryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreweryEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(BreweryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
