import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authentication.service';

//import {UserModel} from '../models/UserModel';


@Component({
  selector: 'app-login-data-form-component',
  templateUrl: './login-data-form.component.html',
  styleUrls: ['./login-data-form.component.css']
})
export class LoginDataFormComponent implements OnInit {
  loggedIn = false;
  submitted = false;
  loading = false;
  loginError = false;
  loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder,private router: Router,private authenticationService: AuthenticationService,) { }

  ngOnInit()
      {
      	this.loginForm = this.formBuilder.group({
      		userName: ['', Validators.required],
      		password: ['', [Validators.required, Validators.minLength(5)]]//, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
      	});
        // reset login status
        this.authenticationService.logout();
      }
      invalidUserName()
        {
        	return (this.submitted && this.loginForm.controls.userName.errors != null);
        }
  invalidPassword()
    {
    	return (this.submitted && this.loginForm.controls.password.errors != null);
    }
    isLoggedIn(){
      return this.loggedIn;
    }
  onSubmit()
    {
    	this.submitted = true;
      this.loginError = false;
      console.log("Form Submitted");
    	if(this.loginForm.invalid == true)
    	{
        console.log("Login INvalid");
        return;
    	}
    	else
    	{
        this.loading = true;
        this.authenticationService
          .login(this.loginForm.controls.userName.value, this.loginForm.controls.password.value)
          .pipe(first())
          .subscribe(
                data => {
                  this.loggedIn = true;
                  this.loading = false;
                  this.router.navigate(['/new']);
                },
                error => {
                    console.log(error);
                      this.loggedIn = false;
                    this.loading = false;
                    this.loginError = true;
                });

    	}
    }

}
