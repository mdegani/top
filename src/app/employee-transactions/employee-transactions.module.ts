import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { MaterialModule } from '../material.module';
import { TransactionEffects } from './effects/employee-transactions';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    StoreModule.forFeature('transactions', reducers),
    EffectsModule.forFeature([TransactionEffects])
  ],
  declarations: [TransactionsComponent],
})
export class TransactionsModule {}
