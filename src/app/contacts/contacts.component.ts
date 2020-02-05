import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms'
import { from } from 'rxjs';
// import { join } from 'path';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  // start form 
  userData = new FormGroup({

    userName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
    userMail: new FormControl('',[Validators.required,Validators.email]),
    userAge: new FormControl('',[Validators.required,Validators.min(5),Validators.max(60)]),
    userPassword: new FormControl('',[Validators.required]),
    userMessage: new FormControl('')

  });
  // end form 

  // local storage 

  dataContainer:object[]=[];//this is array contain data entered by user 

// function that will called when we submit
  submitForm(){
   this.dataContainer.push(this.userData.value);
   localStorage.setItem('usersInfo',JSON.stringify(this.dataContainer));


  }

  constructor() { }

  ngOnInit() {
  }

}