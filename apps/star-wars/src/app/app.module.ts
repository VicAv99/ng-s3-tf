import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreDataModule } from '@swapi/core-data';
import { MaterialModule } from '@swapi/material';
import { UiToolbarModule } from '@swapi/ui-toolbar';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsListComponent } from './planets/planets-list/planets-list.component';

@NgModule({
  declarations: [AppComponent, PlanetsComponent, PlanetsListComponent],
  imports: [
    BrowserModule,
    CoreDataModule,
    MaterialModule,
    UiToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
