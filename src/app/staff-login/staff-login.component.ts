import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { TranslationWidth } from '@angular/common';
import {AppService} from '../app.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Attendance} from '../attendence';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {
  @Input() displayTop:any;
  @Input() loggeddata:any;
  @Input() classDrop:any;
  classSelected;
  flagAttendancebtn=false;
  flagStudentbtn=false;
  flagStaffbtn=false;
  // attendanceDetails=[{'aname':'Government School','std':'I STANDARD'},{'aname':'Government School','std':'II STANDARD'},{'aname':'Government School','std':'III STANDARD'},{'aname':'Government School','std':'IV STANDARD'},{'aname':'Government School','std':'V STANDARD'}
  // ,{'aname':'Government School','std':'VI STANDARD'},{'aname':'Government School','std':'VII STANDARD'},
  // {'aname':'Government School','std':'VIII STANDARD'},{'aname':'Government School','std':'IX STANDARD'},{'aname':'Government School','std':'X STANDARD'},{'aname':'Government School','std':'XI STANDARD'},
  // {'aname':'Government School','std':'XII Standard'},
  // {'aname':'Nellaiyappar School','std':'I STANDARD'},{'aname':'Nellaiyappar School','std':'II STANDARD'},{'aname':'Nellaiyappar School','std':'III STANDARD'},{'aname':'Nellaiyappar School','std':'IV STANDARD'},{'aname':'Nellaiyappar School','std':'V STANDARD'},{'aname':'Nellaiyappar School','std':'VI STANDARD'},
  // {'aname':'Nellaiyappar School','std':'VII STANDARD'},{'aname':'Nellaiyappar School','std':'VIII STANDARD'},{'aname':'Nellaiyappar School','std':'IX STANDARD'},{'aname':'Nellaiyappar School','std':'X STANDARD'}];
  _attendance=[];
  _student=[];
  _staff=[];
  attenForm:FormGroup;
  stuDetailForm:FormGroup;
  staffDetailForm:FormGroup;
  attenDetail:Attendance[];
  
  constructor(private formBuider:FormBuilder , private _appService :AppService) { }

  ngOnInit(): void {
    this.attenForm =this.formBuider.group({
      rno:[],
      name:[],
      twd:[],
      dp:[],
      da:[],
      remark:[]

    });
    this.stuDetailForm=this.formBuider.group({
      stuRno:[],
      stuName:[],
      dob:[],
      blood:[],
      phone:[],
      address:[]
});

this.staffDetailForm=this.formBuider.group({

  staffName:[],
  incharge:[],
  email1:[],
  phone:[]
});
    

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
  attenSubmit(){
    // console.log(this.attenForm.value);
     let attendDetails =[];
    attendDetails.push(this.attenForm.value);
    attendDetails.push(this.classSelected);
    attendDetails.push(this.displayTop.name);
    console.log(attendDetails);
    
    this._appService.insertAttendance(attendDetails).subscribe((data) =>{
      console.log(data);
      
    });

  }

  stuDetailSubmit(){
    let studentDetails=[];
    studentDetails.push(this.stuDetailForm.value);
    studentDetails.push(this.classSelected);
    studentDetails.push(this.displayTop.name);
    this._appService.insertStuDetail(studentDetails).subscribe((data)=>{
        // console.log(data);
    });

  }
  staffDetailSubmit(){
    let staffDetails=[];
    staffDetails.push(this.staffDetailForm.value);
    staffDetails.push(this.displayTop.name);
    this._appService.insertStaffDetail(staffDetails).subscribe((data)=>{
        // console.log(data);
    });

  }

}
