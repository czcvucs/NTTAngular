import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatLoadingComponent } from './components';
import { MatTableComponent } from './components/mat-table/mat-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    MatLoadingComponent,
    HomeComponent,
    MatTableComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
