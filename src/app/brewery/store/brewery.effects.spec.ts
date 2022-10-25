import { TestBed } from '@angular/core/testing';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Actions, EffectsModule } from '@ngrx/effects';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of, throwError } from 'rxjs';
import { BreweryService } from '../services/brewery.service';
import {
  OnGetBreweriesByCityAction,
  OnGetRandomBreweryAction,
} from './brewery.actions';
import { BreweryEffects } from './brewery.effects';
import { HttpErrorResponse } from '@angular/common/http';
import { mockBrewery } from './brewery.state.mock';

describe('BreweryEffects', () => {
  let actions: Observable<Action>,
    effects: BreweryEffects,
    breweryService: BreweryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EffectsModule.forRoot([])],
      providers: [
        BreweryEffects,
        {
          provide: BreweryService,
          useValue: {
            getRandomBrewery: () => of({}),
            getBreweriesByCity: () => of({}),
          },
        },
        provideMockActions(() => actions),
        provideMockStore({}),
      ],
    });

    actions = TestBed.inject(Actions);
    effects = TestBed.inject<BreweryEffects>(BreweryEffects);
    breweryService = TestBed.inject(BreweryService);
  });

  describe('getRandomBrewery$', () => {
    it('should dispatch Request and Response on API success', async () => {
      spyOn(breweryService, 'getRandomBrewery').and.returnValue(
        of([mockBrewery()])
      );

      actions = of(OnGetRandomBreweryAction.Start());

      const observerSpy = subscribeSpyTo(effects.getRandomBrewery$);
      await observerSpy.onComplete();

      expect(observerSpy.getValues()).toEqual([
        OnGetRandomBreweryAction.Request(),
        OnGetRandomBreweryAction.Response({
          data: mockBrewery(),
        }),
      ]);
    });

    it('should dispatch Request and Error on API fail', async () => {
      const mockError = { error: 'foo' } as HttpErrorResponse;
      spyOn(breweryService, 'getRandomBrewery').and.returnValue(
        throwError(mockError)
      );

      actions = of(OnGetRandomBreweryAction.Start());

      const observerSpy = subscribeSpyTo(effects.getRandomBrewery$);
      await observerSpy.onComplete();

      expect(observerSpy.getValues()).toEqual([
        OnGetRandomBreweryAction.Request(),
        OnGetRandomBreweryAction.Error(mockError),
      ]);
    });
  });

  describe('getBreweriesByCity$', () => {
    it('should dispatch Request and Response on API success', async () => {
      spyOn(breweryService, 'getBreweriesByCity').and.returnValue(
        of([mockBrewery()])
      );

      actions = of(OnGetBreweriesByCityAction.Start({ city: 'foo bar city' }));

      const observerSpy = subscribeSpyTo(effects.getBreweriesByCity$);
      await observerSpy.onComplete();

      expect(observerSpy.getValues()).toEqual([
        OnGetBreweriesByCityAction.Request(),
        OnGetBreweriesByCityAction.Response({
          data: [mockBrewery()],
        }),
      ]);
    });

    it('should dispatch Request and Error on API fail', async () => {
      const mockError = { error: 'foo' } as HttpErrorResponse;
      spyOn(breweryService, 'getBreweriesByCity').and.returnValue(
        throwError(mockError)
      );

      actions = of(OnGetBreweriesByCityAction.Start({ city: 'foo bar city' }));

      const observerSpy = subscribeSpyTo(effects.getBreweriesByCity$);
      await observerSpy.onComplete();

      expect(observerSpy.getValues()).toEqual([
        OnGetBreweriesByCityAction.Request(),
        OnGetBreweriesByCityAction.Error(mockError),
      ]);
    });
  });
});
