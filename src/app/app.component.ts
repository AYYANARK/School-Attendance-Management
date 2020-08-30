import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  showStaffs;
  schoolList = [{'id':'1','name':'s1','location':'Chennai'},{'id':'2','name':'s2','location':'RJPM'}];
  schoolDetails =[{'name':'s1','address':'s1','city':'Chennai','state':'da','email':'ayyan'},
  {'name':'s2','address':'s2','city':'RJPM','state':'TN','email':'ayyan1'}];
  staffTestDetails=[{'sName':'s1','name':'A1','mail':'A1'},{'sName':'s1','name':'AC1','mail':'AC1'},{'sName':'s2','name':'A2','mail':'A2'}];
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
