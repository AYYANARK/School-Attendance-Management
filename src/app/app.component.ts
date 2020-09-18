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
  flagMainLoginPage: boolean = true;
  showContainer:boolean;
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
  this._appService.displayInfo(this.loggedData["username"]).subscribe((dataDisplay)=>{
 console.log(dataDisplay);
  this.display=dataDisplay;
 console.log("display",this.display);

 this.getStandard();


});

}

getStandard() {
  this._appService.getClassDropDown().subscribe((dataDrop)=>{
    this.classDropDown=dataDrop;
    console.log("classDropDown",this.classDropDown);
  });
}

loginSubmit(){
   this.flagMainLoginPage=false;
   this.showContainer=true;
   console.log(this.uname);
   
  this._appService.logincheck(this.uname, this.pwd).subscribe((data) =>{
     
    this.loggedData=data;
    
    console.log(this.loggedData["username"]);
    console.log(this.loggedData["code"]);
    this.displayTop();
    
  });
  
}


}
