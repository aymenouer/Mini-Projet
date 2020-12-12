import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import {Router} from '@angular/router';
import {User} from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  user: User;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router : Router) { }

  ngOnInit(): void {
    this.user = new User();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {


    this.authService.login(this.user).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
      () =>
      {
        this.router.navigate(['/home']) .then(() => {
          window.location.reload();
        });
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
