import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  officerFlag=false;
  staffFlag=false;
officerLogin(){
   this.officerFlag=true;
   this.staffFlag=false;

}
staffLogin(){
  this.officerFlag=false;
  this.staffFlag=true;

}



}
