import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { OnGetBreweriesAction } from './brewery.actions';
import { BreweryService } from '../services/brewery.service';

@Injectable()
export class BreweryEffects {
  constructor(
    private actions$: Actions,
    private breweryService: BreweryService
  ) {}

  getBreweries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OnGetBreweriesAction.Start),
      switchMap(() =>
        this.breweryService.getRandomBrewery().pipe(
          map((response) => OnGetBreweriesAction.Response({ data: response })),
          catchError((err) => of(OnGetBreweriesAction.Error(err))),
          startWith(OnGetBreweriesAction.Request())
        )
      )
    )
  );
}
