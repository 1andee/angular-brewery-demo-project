import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  OnGetBreweriesByCityAction,
  OnGetRandomBreweryAction,
} from './brewery.actions';
import { BreweryService } from '../services/brewery.service';

@Injectable()
export class BreweryEffects {
  constructor(
    private actions$: Actions,
    private breweryService: BreweryService
  ) {}

  getRandomBrewery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OnGetRandomBreweryAction.Start),
      switchMap(() =>
        this.breweryService.getRandomBrewery().pipe(
          map((response) =>
            OnGetRandomBreweryAction.Response({ data: response[0] })
          ),
          catchError((err) => of(OnGetRandomBreweryAction.Error(err))),
          startWith(OnGetRandomBreweryAction.Request())
        )
      )
    )
  );

  getBreweriesByCity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OnGetBreweriesByCityAction.Start),
      switchMap(({ city }) =>
        this.breweryService.getBreweriesByCity(city).pipe(
          map((response) =>
            OnGetBreweriesByCityAction.Response({ data: response })
          ),
          catchError((err) => of(OnGetBreweriesByCityAction.Error(err))),
          startWith(OnGetBreweriesByCityAction.Request())
        )
      )
    )
  );
}
