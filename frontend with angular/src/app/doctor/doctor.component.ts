import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { User } from '../signupform/user.component';
import { UserService } from '../shared/service/user.service';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  getdoctor: User;
  errormessage: string;
  errormode = false;
  constructor(private httpClient: HttpClient, private cookieService: CookieService, private router: Router, private title: Title, private userservice: UserService) {
    if (this.cookieService.get("token") != "") {
      this.userservice.getuser(this.cookieService.get("username")).subscribe(
        (res) => {

          this.getdoctor = res[0];
        }
      )
    }

  }

  ngOnInit() {
    this.title.setTitle('صفحه ی پزشکان')
  }
  insert(f) {
    const model = {
      "refid": this.getdoctor.id,
      "takhasos": f.value.takhasos,
      "day": f.value.day,
      "shift": f.value.shift,
      "time": f.value.time,
      "price": f.value.price
    }

    const token = this.cookieService.get("token");
    if (token != "") {

      this.httpClient.post("http://localhost/hospital-laravel/public/api/insertdoctor", model
      )
        .subscribe(
          responseModel => {
            console.log("POST Request is successful ", responseModel);
            this.router.navigate(['/clinic'])
          },
          errorDate => {
            console.log("errorDate", errorDate);
            this.errormode = true;
            this.errormessage = 'اطلاعات خود را به درستی وارد کتید '

          }
        );
    }

  }
}
