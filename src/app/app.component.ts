import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OFFICER LOGIN';
  showStaffs;
  schoolList = [{'id':'1','name':'Government School','location':'Chennai'},{'id':'2','name':'Nellaiyappar School','location':'Tirunelveli'}];
  schoolDetails =[{'name':'Government School','address':'2/48A,Main Street,Pallavakkam','city':'Chennai','state':'TamilNadu','email':'govschool@gmail.com','phone':'7550399789','pname':'Dr.A.Radhakrishnan','pmobile':'9443200217','pgmail':'krish@ghs.ac.in'},
  {'name':'Nellaiyappar School','address':'8/48A,Periyar Street,Palladam','city':'Tirunelveli','state':'TamilNadu','email':'nellaischool@gmail.com','phone':'8939568978','pname':'Dr.A.Ramakrishnan','pmobile':'9443200216','pgmail':'krish@nellai.ac.in'}];
  staffTestDetails=[{'sName':'Government School','name':'Sudha','email':'sudha@gov.ac.in'},{'sName':'Nellaiyappar School','name':'Varadhan','email':'vadhan@nellai.ac.in'},{'sName':'Government School','name':'Pooja','email':'pooja@gov.ac.in'}];
  attendanceDetails=[{'aname':'Government School','std1':'I STANDARD'},{'aname':'Government School','std2':'II STANDARD'},{'aname':'Government School','std3':'III STANDARD'},{'aname':'Government School','std4':'IV STANDARD'},{'aname':'Government School','std5':'V STANDARD'}
  ,{'aname':'Government School','std6':'VI STANDARD'},{'aname':'Government School','std7':'VII STANDARD'},
  {'aname':'Government School','std8':'VIII STANDARD'},{'aname':'Government School','std9':'IX STANDARD'},{'aname':'Government School','std10':'X STANDARD'},{'aname':'Government School','std11':''},
  {'aname':'Government School','std12':''},
  {'aname':'Nellaiyappar School','std1':'I STANDARD'},{'aname':'Nellaiyappar School','std2':'II STANDARD'},{'aname':'Nellaiyappar School','std3':'III STANDARD'},{'aname':'Nellaiyappar School','std4':'IV STANDARD'},{'aname':'Nellaiyappar School','std5':'V STANDARD'},{'aname':'Nellaiyappar School','std6':'VI STANDARD'},
  {'aname':'Nellaiyappar School','std7':'VII STANDARD'},{'aname':'Nellaiyappar School','std8':'VIII STANDARD'},{'aname':'Nellaiyappar School','std9':'IX STANDARD'},{'aname':'Nellaiyappar School','std10':'X STANDARD'},{'aname':'Nellaiyappar School','std11':'XI STANDARD'},{'aname':'Nellaiyappar School','std12':'XII STANDARD'}];
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
