import { Component, OnInit,ViewChild } from '@angular/core';
import { TranslationWidth } from '@angular/common';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {
 
  classSelected;
  flagAttendancebtn=false;
  flagStudentbtn=false;
  flagStaffbtn=false;
  attendanceDetails=[{'aname':'Government School','std':'I STANDARD'},{'aname':'Government School','std':'II STANDARD'},{'aname':'Government School','std':'III STANDARD'},{'aname':'Government School','std':'IV STANDARD'},{'aname':'Government School','std':'V STANDARD'}
  ,{'aname':'Government School','std':'VI STANDARD'},{'aname':'Government School','std':'VII STANDARD'},
  {'aname':'Government School','std':'VIII STANDARD'},{'aname':'Government School','std':'IX STANDARD'},{'aname':'Government School','std':'X STANDARD'},{'aname':'Government School','std':'XI STANDARD'},
  {'aname':'Government School','std':'XII Standard'},
  {'aname':'Nellaiyappar School','std':'I STANDARD'},{'aname':'Nellaiyappar School','std':'II STANDARD'},{'aname':'Nellaiyappar School','std':'III STANDARD'},{'aname':'Nellaiyappar School','std':'IV STANDARD'},{'aname':'Nellaiyappar School','std':'V STANDARD'},{'aname':'Nellaiyappar School','std':'VI STANDARD'},
  {'aname':'Nellaiyappar School','std':'VII STANDARD'},{'aname':'Nellaiyappar School','std':'VIII STANDARD'},{'aname':'Nellaiyappar School','std':'IX STANDARD'},{'aname':'Nellaiyappar School','std':'X STANDARD'}];
  _attendance=[];
  _student=[];
  _staff=[];

  constructor() { }

  ngOnInit(): void {
    
  }

  attendanceClicked(){
    
    this.flagStudentbtn=false;
    this.flagStaffbtn=false;
    this.flagAttendancebtn=true;
}
studentClicked(){
  this.flagStudentbtn=true;
  this.flagStaffbtn=false;
  this.flagAttendancebtn=false;
}
staffClicked(){
  this.flagStudentbtn=false;
  this.flagStaffbtn=true;
  this.flagAttendancebtn=false;
}
  attenBtnClick(attenForm){
    console.log(attenForm.value);
    // let rollNo = attenForm.controls['rno'].value;
    // let name = attenForm.controls['name'].value;
    // let work = attenForm.controls['twd'].value;
    // let present = attenForm.controls['dp'].value;
    // let absent = attenForm.controls['da'].value;
    // let remark = attenForm.controls['remark'].value;
    // let attendenceObj = {'rollNo':rollNo,'name':name,'work':work,'present':present,'absent':absent,'remark':remark};
    this._attendance.push(attenForm.value);
    console.log(this._attendance);
  }

}
