import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';
import {
  OnGetBreweriesByCityAction,
  OnGetRandomBreweryAction,
} from './brewery/store/brewery.actions';
import {
  selectBreweriesByCity,
  selectBreweriesByCityName,
  selectRandomBrewery,
} from './brewery/store/brewery.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'super-cool-demo-angular-project';
  public randomBrewery$ = this.store
    .select(selectRandomBrewery)
    .pipe(filter((brewery) => !!brewery));

  public breweriesByCity$ = this.store
    .select(selectBreweriesByCity)
    .pipe(filter((breweries) => !!breweries));

  public cityName$ = this.store
    .select(selectBreweriesByCityName)
    .pipe(filter((breweries) => !!breweries));

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(OnGetRandomBreweryAction.Start());
    this.store.dispatch(OnGetBreweriesByCityAction.Start({ city: 'chicago' }));
  }
}
