import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { User } from './user.component';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})

export class SignupformComponent implements OnInit {
  clienttype = [
    { 'value': '2', 'name': 'پزشک' }, { 'value': '3', 'name': 'بیمار' }
  ];
  errormessage;
  errormode = false;
  constructor(private httpClient: HttpClient, private cookieService: CookieService, private router: Router, private title: Title) {

  }

  ngOnInit() {
    this.title.setTitle('ثبت نام')
  }
  @ViewChild('f') signupform: NgForm

  insert(f: NgForm) {
    //prepare 
    const token = this.cookieService.get("token");

    const httpOptions = {
      headers: new HttpHeaders({

        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json; charset=utf-8'
      })
    }


    const model = {
      "username": f.value.username,
      "password": f.value.password,
      "first_name": f.value.first_name,
      "last_name": f.value.last_name,
      "email": f.value.email,
      "userid": f.value.userid,
      "scope": f.value.type,

    }
    console.log(token, httpOptions, model);

    this.httpClient.post<User>("http://localhost/hospital-laravel/public/api/register", model, httpOptions)
      .subscribe(
        responseModel => {
          console.log("POST Request is successful ", responseModel);
          this.router.navigate(['/login'])
        },
        errorDate => {
          console.log(errorDate.error);

          this.errormode = true;
          for (var prop in errorDate.error) {
            console.log(errorDate.error[prop]);
            this.errormessage = errorDate.error[prop];
          }

        }
      );
  }

}
