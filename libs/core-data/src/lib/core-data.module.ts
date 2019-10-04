import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PlanetsService } from './planets/planets.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [PlanetsService]
})
export class CoreDataModule {}
