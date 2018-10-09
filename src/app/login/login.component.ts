import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',{updateOn: 'change', validators: [Validators.required, Validators.minLength(5), Validators.maxLength(15)]}], // updateOn: 'change', 'submit', 'blur' // default is 'change'
      password: ['',[Validators.required, Validators.minLength(8)]]
    })
  }

  doLogin(){
    console.log(this.loginForm.controls.username.value);
    console.log(this.loginForm.controls.password.value);
  }

}
