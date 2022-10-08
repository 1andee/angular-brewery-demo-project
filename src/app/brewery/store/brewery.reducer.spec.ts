import {
  OnGetBreweriesByCityAction,
  OnGetRandomBreweryAction,
} from './brewery.actions';
import { breweryReducer } from './brewery.reducer';
import { BreweryState } from './brewery.state';
import { mockBreweriesByCity, mockBrewery } from './brewery.state.mock';

describe('breweryReducer', () => {
  let initialState: BreweryState;

  beforeEach(() => {
    initialState = {
      randomBrewery: undefined,
      breweriesByCity: [],
    } as any;
  });

  it('should update state on OnGetRandomBreweryAction.Response', () => {
    const response = mockBrewery();
    const result = breweryReducer(
      initialState,
      OnGetRandomBreweryAction.Response({ data: response })
    );
    expect(result.randomBrewery).toEqual(response);
  });

  it('should update city name on OnGetBreweriesByCityAction.Start', () => {
    const response = 'alameda';
    const result = breweryReducer(
      initialState,
      OnGetBreweriesByCityAction.Start({ city: 'alameda' })
    );
    expect(result.breweriesByCity.city).toEqual(response);
  });

  it('should update state on OnGetBreweriesByCityAction.Response', () => {
    const response = mockBreweriesByCity();
    const result = breweryReducer(
      initialState,
      OnGetBreweriesByCityAction.Response({ data: response })
    );
    expect(result.breweriesByCity.breweries).toEqual(response);
  });
});
