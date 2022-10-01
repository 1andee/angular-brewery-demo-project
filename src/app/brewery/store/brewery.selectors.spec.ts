import * as fromBrewery from './brewery.reducer';
import { selectBreweryState } from './brewery.selectors';

describe('Brewery Selectors', () => {
  it('should select the feature state', () => {
    const result = selectBreweryState({
      [fromBrewery.breweryFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
