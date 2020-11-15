import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../shared/service/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  errormessage: string;
  errormode = false;
  constructor(private userservice: UserService, private cookieService: CookieService, private router: Router, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('تغییر رمز عبور')
  }
  @ViewChild('f') signupform: NgForm

  change(f: NgForm) {
    if (this.cookieService.get("token") != "") {
      if (f.value.password === f.value.passwordverify) {
        this.errormode = false;
        this.userservice.changepassword(this.cookieService.get("username"), f.value.password)
          .subscribe(
            res => {

              console.log("POST Request is successful ", res);
              this.cookieService.delete("token");
              this.router.navigate(['/login']);


            },
            errorDate => {
              console.log("errorDate", errorDate);
              f.reset();
              this.errormode = true;
              this.errormessage = 'لطفا مجددا تلاش کنید'
            }
          );
      }
      else {

        this.errormode = true;
        this.errormessage = 'رمز عبور با تکرار رمز عبور یکسان نیست'
      }


    }


  }

}
