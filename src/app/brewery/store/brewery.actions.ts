import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { BreweryData } from '../model/brewery-data';

const storeName = 'Brewery';

const getRandomBreweryAction = (type: string) =>
  `${storeName} - Get Random Brewery [${type}]`;

export const OnGetRandomBreweryAction = {
  Start: createAction(getRandomBreweryAction('Start')),
  Request: createAction(getRandomBreweryAction('Request')),
  Response: createAction(
    getRandomBreweryAction('Response'),
    props<{ data: BreweryData }>()
  ),
  Error: createAction(
    getRandomBreweryAction('Error'),
    props<{ error: HttpErrorResponse }>()
  ),
};

const getBreweriesByCityAction = (type: string) =>
  `${storeName} - Get Breweries By City [${type}]`;

export const OnGetBreweriesByCityAction = {
  Start: createAction(
    getBreweriesByCityAction('Start'),
    props<{ city: string }>()
  ),
  Request: createAction(getBreweriesByCityAction('Request')),
  Response: createAction(
    getBreweriesByCityAction('Response'),
    props<{ data: BreweryData[] }>()
  ),
  Error: createAction(
    getBreweriesByCityAction('Error'),
    props<{ error: HttpErrorResponse }>()
  ),
};
