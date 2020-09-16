import { Component,OnInit,OnDestroy,AfterContentInit } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  uname:any;
  pwd:any;
  loginConfirmation:boolean;
  loggedData:any;
  display:any;
  flagMainLoginPage=true;
  classDropDown:any;
//   officerFlag=false;
//   staffFlag=false;
// officerLogin(){
//    this.officerFlag=true;
//    this.staffFlag=false;

// }
// staffLogin(){
//   this.officerFlag=false;
//   this.staffFlag=true;

// }

constructor(private _appService :AppService) { }

displayTop(){
  this._appService.displayInfo(this.loggedData["username"]).subscribe((data)=>{
 console.log(data);
  this.display=data;
 console.log(this.display);

});
this._appService.getClassDropDown().subscribe((data)=>{
  this.classDropDown=data;
  console.log(this.classDropDown);
});
}

loginSubmit(){
   this.flagMainLoginPage=false;
   console.log(this.uname);
   
  this._appService.logincheck(this.uname, this.pwd).subscribe((data) =>{
     
    this.loggedData=data;
    
    console.log(this.loggedData["username"]);
    console.log(this.loggedData["code"]);
    
  });
  this.displayTop();
}


}
