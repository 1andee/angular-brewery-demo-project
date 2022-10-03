import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { breweryReducer } from './store/brewery.reducer';
import { BreweryEffects } from './store/brewery.effects';
import { BreweryService } from './services/brewery.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('breweries', breweryReducer),
    EffectsModule.forFeature([BreweryEffects]),
  ],
  providers: [BreweryService],
})
export class BreweryModule {}
