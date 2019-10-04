import { Component, Input } from '@angular/core';

import { Planet } from '@swapi/core-data';

@Component({
  selector: 'swapi-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent {
  @Input() planets: Planet[];
}
