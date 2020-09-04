import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-student-detail-table',
  templateUrl: './student-detail-table.component.html',
  styleUrls: ['./student-detail-table.component.css']
})
export class StudentDetailTableComponent implements OnInit {
  @Input() stuDetails:any;
  @Input() studentTableColumn:any;
  @Input() schoolOpt:any;
  @Input() studentOpt:any;
  @Input() staffInfo:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.stuDetails);
    
  }

}
