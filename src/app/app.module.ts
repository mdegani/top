import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DimensionsService } from './services/dimensions.service';
import { InMemDimensionsService } from './dimensions/fake-backend/dimensions';
import { DimensionsComponent } from './dimensions/components/dimensions.component';
import { AboutComponent } from './about/about.component';
import { reducers } from './reducers';
import { metaReducers } from './reducers/index';
import { CollectionEffects } from './dimensions/effects/collection';
import { DimensionsModule } from './dimensions/dimension.module';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemDimensionsService),
    BrowserAnimationsModule,
    DimensionsModule,
    MaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([
      {
        path: 'dimensions',
        component: DimensionsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [DimensionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
