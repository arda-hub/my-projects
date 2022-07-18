import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  
contactForm = new FormGroup({
  firstName: new FormControl(),
  email: new FormControl(),
  phone: new FormControl(),
  password: new FormControl(),
  repeatPassword: new FormControl(),

})
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }
}
