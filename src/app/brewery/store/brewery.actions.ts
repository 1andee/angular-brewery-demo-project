import { createAction, props } from '@ngrx/store';

export const loadBreweries = createAction('[Brewery] Load Breweries');

export const loadBreweriesSuccess = createAction(
  '[Brewery] Load Breweries Success',
  props<{ data: any }>()
);

export const loadBreweriesFailure = createAction(
  '[Brewery] Load Breweries Failure',
  props<{ error: any }>()
);
