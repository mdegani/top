import {
  MatTabsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTableModule,
  MatCardModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatTabsModule, MatToolbarModule, MatSidenavModule, MatTableModule, MatCardModule],
  exports: [MatTabsModule, MatToolbarModule, MatSidenavModule, MatTableModule, MatCardModule]
})
export class MaterialModule {}
