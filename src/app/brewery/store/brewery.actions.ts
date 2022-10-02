import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { BreweryData } from '../model/brewery-data';

const storeName = 'Brewery';

const getBreweriesAction = (type: string) =>
  `${storeName} - Get Breweries [${type}]`;

export const OnGetBreweriesAction = {
  Start: createAction(getBreweriesAction('Start')),
  Request: createAction(getBreweriesAction('Request')),
  Response: createAction(
    getBreweriesAction('Response'),
    props<{ data: BreweryData[] }>()
  ),
  Error: createAction(
    getBreweriesAction('Error'),
    props<{ error: HttpErrorResponse }>()
  ),
};
