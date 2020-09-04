import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    
    console.log(this.staffInfo);
    console.log(this.schoolOpt);
    console.log(this.attendanceOpt);
    
  }

}
