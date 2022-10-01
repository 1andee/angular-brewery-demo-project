import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as BreweryActions from './brewery.actions';

@Injectable()
export class BreweryEffects {
  loadBreweries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BreweryActions.loadBreweries),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((data) => BreweryActions.loadBreweriesSuccess({ data })),
          catchError((error) =>
            of(BreweryActions.loadBreweriesFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
