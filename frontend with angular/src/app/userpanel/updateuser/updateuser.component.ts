import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../signupform/user.component';
import { UserService } from '../../shared/service/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  updateuser: User[];
  errormessage: string;
  errormode = false;
  constructor(private cookieservice: CookieService, private userservice: UserService, private router: Router, private title: Title) {

    if (this.cookieservice.get("token") != "") {
      this.userservice.getuser(this.cookieservice.get("username")).subscribe(
        (res) => {
          this.errormode = false;
          this.updateuser = [res[0]];
          console.log(this.updateuser)

        },
        errorDate => {
          console.log("errorDate", errorDate);
          this.errormode = true;
          this.errormessage = 'لطفا مجددا تلاش کنید'
        }
      )
    }

  }


  ngOnInit() {
    this.title.setTitle('ویرایش اطلاعات')

  }
  update(f: NgForm) {
    const model = {
      "username": f.value.username,
      "first_name": f.value.first_name,
      "last_name": f.value.last_name,
      "email": f.value.email,
      "userid": f.value.userid
    }
    this.userservice.updateuser(this.cookieservice.get("username"), model).subscribe(
      (res) => {
        console.log(res)
        this.cookieservice.set("username", res.username, null, null, null, null, null);
        this.router.navigate(['/showuser']);
      }
    )
  }
}
