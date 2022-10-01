import { Action, createReducer, on } from '@ngrx/store';
import * as BreweryActions from './brewery.actions';

export const breweryFeatureKey = 'brewery';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(BreweryActions.loadBreweries, (state) => state),
  on(BreweryActions.loadBreweriesSuccess, (state, action) => state),
  on(BreweryActions.loadBreweriesFailure, (state, action) => state)
);
