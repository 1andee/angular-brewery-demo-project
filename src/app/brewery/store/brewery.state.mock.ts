import { BreweryData } from '../model/brewery-data';
import { BreweryState } from './brewery.state';

export const mockBrewery = (): BreweryData => {
  return {
    id: 'ballast-point-brewing-company-chicago',
    name: 'Ballast Point Brewing Company',
    brewery_type: 'planning',
    street: null,
    address_2: null,
    address_3: null,
    city: 'Chicago',
    state: 'Illinois',
    county_province: null,
    postal_code: '60607',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: null,
    website_url: null,
    updated_at: '2022-08-20T02:56:08.975Z',
    created_at: '2022-08-20T02:56:08.975Z',
  };
};

export const mockBreweriesByCity = (): BreweryData[] => {
  return [mockBrewery(), mockBrewery()];
};

export const mockBreweryStore = (): BreweryState => {
  return {
    randomBrewery: mockBrewery(),
    breweriesByCity: {
      city: 'foo bar city',
      breweries: mockBreweriesByCity(),
    },
  };
};
