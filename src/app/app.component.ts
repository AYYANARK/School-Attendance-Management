import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OFFICER LOGIN';
  showStaffs;
  schoolList = [{'id':'1','name':'Government School','location':'Chennai'},{'id':'2','name':'Nellai School','location':'Tirunelveli'}];
  schoolDetails =[{'name':'Government School','address':'2/48A,Main Street,Pallavakkam','city':'Chennai','state':'TamilNadu','email':'govschool@gmail.com','phone':'7550399789'},
  {'name':'Nellai School','address':'8/48A,Periyar Street,Palladam','city':'Tirunelveli','state':'TamilNadu','email':'nellaischool@gmail.com','phone':'8939568978'}];
  staffTestDetails=[{'sName':'Government School','name':'Sudha','email':'sudha@gov.ac.in'},{'sName':'Nellai School','name':'Varadhan','email':'vadhan@nellai.ac.in'},{'sName':'Government School','name':'Pooja','email':'pooja@gov.ac.in'}];
  selected;

  staffDetails(schoolName) {

    console.log(schoolName);
    this.staffTestDetails.forEach(ele => {
      if(ele.sName===schoolName) {
        this.showStaffs=true;
      }
    })
    
  }
}
