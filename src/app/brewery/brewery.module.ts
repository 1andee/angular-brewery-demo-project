import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromBrewery from './store/brewery.reducer';
import { BreweryEffects } from './store/brewery.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBrewery.breweryFeatureKey, fromBrewery.reducer),
    EffectsModule.forFeature([BreweryEffects]),
  ],
})
export class BreweryModule {}
