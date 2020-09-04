import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-staff-detail-table',
  templateUrl: './staff-detail-table.component.html',
  styleUrls: ['./staff-detail-table.component.css']
})
export class StaffDetailTableComponent implements OnInit {
  @Input() staffDetails:any;
  @Input() staffTableColumn:any;
  @Input() schoolOpt:any;
  
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.staffDetails);
    console.log(this.schoolOpt);
  }

}
