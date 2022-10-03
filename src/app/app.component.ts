import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';
import { OnGetRandomBreweryAction } from './brewery/store/brewery.actions';
import { selectRandomBrewery } from './brewery/store/brewery.selectors';

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

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(OnGetRandomBreweryAction.Start());
  }
}
