import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import {FormGroup} from '@angular/forms';
import { Attendance } from './attendence';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  

  constructor(private http:HttpClient) {
    }
    getStaffDetails(){
      return this.http.get<any>('http://localhost/lifi/viewStaffTable.php');
    }
    getAttendance(){
      return this.http.get<any>("http://localhost/lifi/viewAttenTable.php");
    }
    getStudentDetail(){
      return this.http.get<any>("http://localhost/lifi/viewStudentDetailTable.php");
    }
    getClassDropDown(){
      return this.http.get<any>("http://localhost/lifi/viewClassDropdown.php");
    }
    getSchoolDropDown(){
      return this.http.get<any>("http://localhost/lifi/viewSchoolDropdown.php");
    }
    getSchoolInformation(){
      return this.http.get<any>("http://localhost/lifi/viewSchoolDetail.php");
    }

    insertAttendance(attenform){
 
     console.log(attenform);
 

// let _stafflogin=[{"rno":"103","name":"jey","twd":"10","dp":4,"da":2,"remark":"poor"}]
// console.log(_stafflogin);
      return this.http.post("http://localhost/lifi/insertAttendance.php",attenform);
    }

    insertStuDetail(studentDetail){
 
      console.log(studentDetail);
  
 
 // let _stafflogin=[{"rno":"103","name":"jey","twd":"10","dp":4,"da":2,"remark":"poor"}]
 // console.log(_stafflogin);
       return this.http.post("http://localhost/lifi/insertStuDetail.php",studentDetail);
     }
     insertStaffDetail(staffDetail){
 
      console.log(staffDetail);
  
 
 // let _stafflogin=[{"rno":"103","name":"jey","twd":"10","dp":4,"da":2,"remark":"poor"}]
 // console.log(_stafflogin);
       return this.http.post("http://localhost/lifi/insertStaffDetail.php",staffDetail);
     }

     logincheck(uname,password){
      //  console.log(uname);
      //  console.log(password);
       let login =[];
       login.push(uname);
       login.push(password);
       console.log(login);
       console.log(login[0]);
       console.log(login[1]);
       return this.http.post("http://localhost/lifi/logincode.php",login);

     }
     displayInfo(user1name){
       console.log(user1name);
       let username=[];
       username.push(user1name);
       console.log(username);
      return this.http.post("http://localhost/lifi/displayTopStaffLogin.php",username);
     }
     

  
}
