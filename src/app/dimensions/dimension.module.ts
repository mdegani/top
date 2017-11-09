import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CollectionEffects } from './effects/collection';
import { reducers } from './reducers';
import { DimensionsComponent } from './components/dimensions.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('dimensions', reducers),
    EffectsModule.forFeature([CollectionEffects])
  ],
  declarations: [DimensionsComponent]
})
export class DimensionsModule {}
