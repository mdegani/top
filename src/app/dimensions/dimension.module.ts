import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DimensionEffects } from './effects/dimensions';
import { reducers } from './reducers';
import { DimensionsComponent } from './components/dimensions.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    StoreModule.forFeature('dimensions', reducers),
    EffectsModule.forFeature([DimensionEffects])
  ],
  declarations: [DimensionsComponent]
})
export class DimensionsModule {}
