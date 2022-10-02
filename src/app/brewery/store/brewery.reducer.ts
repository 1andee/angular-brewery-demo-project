import { Action, createReducer, on } from '@ngrx/store';
import { BreweryData } from '../model/brewery-data';
import { OnGetBreweriesAction } from './brewery.actions';

export const breweryFeatureKey = 'brewery';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(OnGetBreweriesAction.Response, (state, action) => state)
);
