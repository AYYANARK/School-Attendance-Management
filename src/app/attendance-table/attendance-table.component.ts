import { Component, OnInit, Input,ViewChild,ElementRef } from '@angular/core';
import {AppService} from '../app.service';
@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrls: ['./attendance-table.component.css']
})
export class AttendanceTableComponent implements OnInit {
  //  @Input() stuDetails:any;
   @Input() attendanceColumn:any;
   @Input() schoolOpt:any;
   @Input() attendanceOpt:any;
  staffInfo:any;
   attendance:any;
  needPrint: any;
  constructor(private _appService :AppService) { }

  ngOnInit(): void {
    
    // console.log(this.staffInfo);
    // console.log(this.schoolOpt);
    // console.log(this.attendanceOpt);
    this._appService.getAttendance().subscribe((data)=>{
      this.attendance=data;
      console.log(this.attendance);
    });

    this._appService.getStaffDetails().subscribe((data)=>{
      this.staffInfo=data;
       console.log(this.staffInfo);
       
 
     });
    
  }

  // printPage(attendancePrint){

  //   @ViewChild('attendancePrint') needPrint:ElementRef;
  //   // let myContainer = document.getElementById('attendancePrint') as HTMLInputElement;
  //   // let original = myContainer.body.innerHTML;
  //   // myContainer.body.innerHTML=myContainer;
     
  //   //   document.body.innerHTML = original;
  //   nativeElement.innerHTML=this.needPrint;
    
  //     window.print();
    
  // }

  }
