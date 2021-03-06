import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DimensionsService } from './services/dimensions.service';
import { DimensionsComponent } from './dimensions/components/dimensions.component';
import { AboutComponent } from './about/about.component';
import { reducers } from './reducers';
import { metaReducers } from './reducers/index';
import { DimensionsModule } from './dimensions/dimension.module';
import { TransactionsComponent } from './employee-transactions/components/transactions/transactions.component';
import { TransactionsModule } from './employee-transactions/employee-transactions.module';
import { TransactionService } from './services/transaction.service';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DimensionsModule,
    TransactionsModule,
    MaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([
      {
        path: 'dimensions',
        component: DimensionsComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [DimensionsService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
