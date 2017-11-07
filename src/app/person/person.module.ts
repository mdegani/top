import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CollectionEffects } from './effects/collection';
import { reducers } from './reducers';
import { PeopleComponent } from './components/people.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('persons', reducers),
    EffectsModule.forFeature([CollectionEffects])
  ],
  declarations: [PeopleComponent]
})
export class PersonsModule {}
