import { Action, combineReducers, createReducer, on } from '@ngrx/store';
import { OnGetRandomBreweryAction } from './brewery.actions';
import { BreweryState } from './brewery.state';

export const randomBreweryReducer = createReducer(
  null,
  on(OnGetRandomBreweryAction.Response, (state, { data }) => data)
);

export function breweryReducer(
  state: BreweryState,
  action: Action
): BreweryState {
  return combineReducers<BreweryState>({
    randomBrewery: randomBreweryReducer,
  })(state, action);
}
