import {
  selectBreweriesByCity,
  selectRandomBrewery,
} from './brewery.selectors';
import { mockBreweryStore } from './brewery.state.mock';

describe('Brewery Store selectors', () => {
  const state = mockBreweryStore();

  describe('selectRandomBrewery', () => {
    it('should return randomBrewery', () => {
      expect(selectRandomBrewery.projector(state)).toEqual(state.randomBrewery);
    });
    it('should return empty if state is not loaded', () => {
      expect(selectRandomBrewery.projector(undefined)).toBeUndefined();
    });
  });

  describe('selectBreweriesByCity', () => {
    it('should return breweriesByCity', () => {
      expect(selectBreweriesByCity.projector(state)).toEqual(
        state.breweriesByCity
      );
    });
    it('should return empty if state is not loaded', () => {
      expect(selectBreweriesByCity.projector(undefined)).toBeUndefined();
    });
  });
});
