import { Component, OnInit,Input } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-staff-detail-table',
  templateUrl: './staff-detail-table.component.html',
  styleUrls: ['./staff-detail-table.component.css']
})
export class StaffDetailTableComponent implements OnInit {
  // @Input() staffDetails:any;
  @Input() staffTableColumn:any;
  @Input() schoolOpt:any;
  staffInfo:any;
  

  constructor(private _appService :AppService) { }

  ngOnInit(): void {
    // console.log(this.staffDetails);
    // console.log(this.schoolOpt);
    this._appService.getStaffDetails().subscribe((data)=>{
     this.staffInfo=data;
      console.log(this.staffInfo);

    });
  }

}
