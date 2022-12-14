import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BreweryState } from './brewery.state';

export const selectBreweryState =
  createFeatureSelector<BreweryState>('breweries');

export const selectRandomBrewery = createSelector(
  selectBreweryState,
  (state) => state && state.randomBrewery
);

export const selectBreweriesByCityName = createSelector(
  selectBreweryState,
  (state) => state && state.breweriesByCity.city
);

export const selectBreweriesByCity = createSelector(
  selectBreweryState,
  (state) => state && state.breweriesByCity.breweries
);
