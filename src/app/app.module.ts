import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AttendanceTableComponent } from './attendance-table/attendance-table.component';
import { StudentDetailTableComponent } from './student-detail-table/student-detail-table.component';
import { StaffDetailTableComponent } from './staff-detail-table/staff-detail-table.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { OfficerLoginComponent } from './officer-login/officer-login.component';
import {NgPrintModule} from 'ng-print';
@NgModule({
  declarations: [
    AppComponent,
    AttendanceTableComponent,
    StudentDetailTableComponent,
    StaffDetailTableComponent,
    StaffLoginComponent,
    OfficerLoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    BrowserAnimationsModule,NgPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
