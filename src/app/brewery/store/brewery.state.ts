import { BreweryData } from '../model/brewery-data';

export interface BreweryState {
  randomBrewery: BreweryData;
  breweriesByCity: {
    city: string;
    breweries: BreweryData[];
  };
}
