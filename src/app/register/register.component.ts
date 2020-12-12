import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {User} from '../models/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   user: User;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
this.user = new User();
  }

  onSubmit(): void {

    this.authService.register( this.user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      },
    () =>   this.router.navigate(['/welcome'])
    );
  }
}
