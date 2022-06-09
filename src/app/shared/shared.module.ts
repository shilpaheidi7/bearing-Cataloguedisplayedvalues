import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EllipsisPipe } from './pips/ellipsis/ellipsis.pipe';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { BearingCatalougeTableComponent } from './components/bearing-catalouge-table/bearing-catalouge-table.component';

const BASE_MODULES = [
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  MaterialModule,
];

@NgModule({
  declarations: [EllipsisPipe, LoginComponent],
  imports: [CommonModule, RouterModule, BASE_MODULES],
  exports: [EllipsisPipe, BASE_MODULES],
})
export class SharedModule {}
