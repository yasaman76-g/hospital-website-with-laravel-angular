import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UserService } from '../shared/service/user.service';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  errormessage: string;
  errormode = false;

  constructor(private userservice: UserService, private cookieService: CookieService, private router: Router, private title: Title) {

  }


  ngOnInit() {
    this.title.setTitle('ورود')

  }
  @ViewChild('f') signupform: NgForm

  login(f: NgForm) {
    const user = {
      "username": f.value.username,
      "password": f.value.password
    }

    this.userservice.islogin(user)
      .subscribe(
        tokenModel => {

          console.log("POST Request is successful ", tokenModel.data);
          this.cookieService.set("token", tokenModel.data.token, null, null, null, null, null);
          this.cookieService.set("username", tokenModel.data.username, null, null, null, null, null)
          this.cookieService.set("scope", tokenModel.data.scope, null, null, null, null, null);
          if (tokenModel.data.scope === '2') {
            this.router.navigate(['/doctor']);
          }
          else if (tokenModel.data.scope === '1') {
            this.router.navigate(['/manager']);
          }
          else if (tokenModel.data.scope === '3') {
            this.router.navigate(['']);
          }
        },
        errorDate => {
          console.log("errorDate", errorDate);
          this.errormode = true;
          this.errormessage = 'نام کاربری یا رمز عبور اشتباه است'
        }
      );
  }


}
