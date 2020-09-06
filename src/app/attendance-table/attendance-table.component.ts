import { Component, OnInit, Input,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-attendance-table',
  templateUrl: './attendance-table.component.html',
  styleUrls: ['./attendance-table.component.css']
})
export class AttendanceTableComponent implements OnInit {
   @Input() stuDetails:any;
   @Input() attendanceColumn:any;
   @Input() schoolOpt:any;
   @Input() attendanceOpt:any;
   @Input() staffInfo:any;
  needPrint: any;
  constructor() { }

  ngOnInit(): void {
    
    console.log(this.staffInfo);
    console.log(this.schoolOpt);
    console.log(this.attendanceOpt);
    
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
