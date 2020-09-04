import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AttendanceTableComponent } from './attendance-table/attendance-table.component';
import { StudentDetailTableComponent } from './student-detail-table/student-detail-table.component';
import { StaffDetailTableComponent } from './staff-detail-table/staff-detail-table.component';
@NgModule({
  declarations: [
    AppComponent,
    AttendanceTableComponent,
    StudentDetailTableComponent,
    StaffDetailTableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
