import { Component, OnInit,Input } from '@angular/core';
import {AppService} from '../app.service';
@Component({
  selector: 'app-student-detail-table',
  templateUrl: './student-detail-table.component.html',
  styleUrls: ['./student-detail-table.component.css']
})
export class StudentDetailTableComponent implements OnInit {
  // @Input() stuDetails:any;
  @Input() studentTableColumn:any;
  @Input() schoolOpt:any;
  @Input() studentOpt:any;
  staffInfo:any;
  stuDetail:any;
  constructor(private _appService :AppService) { }

  ngOnInit(): void {
    

    this._appService.getStudentDetail().subscribe((data)=>{
      this.stuDetail=data;
      console.log(this.stuDetail);
      
    });

    this._appService.getStaffDetails().subscribe((data)=>{
      this.staffInfo=data;
       console.log(this.staffInfo);
       
 
     });
    
    
  }

}
