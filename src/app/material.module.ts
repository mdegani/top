import {
  MatTabsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTableModule,
  MatCardModule,
  MatRadioModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    MatRadioModule
  ],
  exports: [
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    MatRadioModule
  ]
})
export class MaterialModule {}
