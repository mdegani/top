import {
  MatTabsModule,
  MatToolbarModule,
  MatSidenavModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatTabsModule, MatToolbarModule, MatSidenavModule],
  exports: [MatTabsModule, MatToolbarModule, MatSidenavModule]
})
export class MaterialModule {}
