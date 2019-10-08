import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Planet } from './planet.model';
import { Observable } from 'rxjs';

interface Res {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private httpClient: HttpClient) { }

  all(): Observable<Planet[]> {
    return this.httpClient.get<Planet[]>(`https://swapi.co/api/planets`).pipe(
      map((planetRes: any) => planetRes.results),
      map((planets: Planet[]) => planets.map(
        planet => ({name: planet.name, population: planet.population})
      ))
    );
  }

}
