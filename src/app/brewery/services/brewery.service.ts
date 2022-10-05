import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BreweryData } from '../model/brewery-data';

@Injectable()
export class BreweryService {
  public openBreweryDbApiUrl = 'https://api.openbrewerydb.org/breweries/';

  constructor(private http: HttpClient) {}

  public getRandomBrewery(): Observable<BreweryData[]> {
    return this.http.get<BreweryData[]>(`${this.openBreweryDbApiUrl}random`);
  }
}
