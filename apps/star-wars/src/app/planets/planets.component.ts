import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '@swapi/core-data';

import { Observable } from 'rxjs';

import { Planet } from '@swapi/core-data';

@Component({
  selector: 'swapi-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  planets$: Observable<Planet[]>;

  constructor(private planetsService: PlanetsService) { }

  ngOnInit() {
    this.planets$ = this.planetsService.all();
  }

}
