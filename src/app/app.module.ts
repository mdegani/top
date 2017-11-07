import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  MatTabsModule,
  MatToolbarModule,
  MatSidenavModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PeopleService } from './services/people.service';
import { InMemPeopleService } from './person/fake-backend/people';
import { PeopleComponent } from './person/components/people.component';
import { AboutComponent } from './about/about.component';
import { reducers } from './reducers';
import { metaReducers } from './reducers/index';
import { CollectionEffects } from './person/effects/collection';
import { PersonsModule } from './person/person.module';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemPeopleService),
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    PersonsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([
      {
        path: 'people',
        component: PeopleComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
