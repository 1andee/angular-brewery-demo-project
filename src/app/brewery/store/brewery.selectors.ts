import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBrewery from './brewery.reducer';

export const selectBreweryState = createFeatureSelector<fromBrewery.State>(
  fromBrewery.breweryFeatureKey
);
