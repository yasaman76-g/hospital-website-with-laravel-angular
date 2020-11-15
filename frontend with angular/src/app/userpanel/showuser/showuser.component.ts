import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../shared/service/user.service';
import { User } from '../../signupform/user.component';
@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent implements OnInit {
  getuser: User[];
  constructor(private userservice: UserService, private router: Router, private cookieservice: CookieService) {
    if (this.cookieservice.get("token") != "") {
      this.userservice.getuser(this.cookieservice.get("username")).subscribe(
        (res) => {

          this.getuser = [res[0]];
          if (this.getuser[0].scope === '1') {
            this.getuser[0].scope = 'مدیر'
          }
          else if (this.getuser[0].scope === '2') {
            this.getuser[0].scope = 'پزشک'
          }
          else {
            this.getuser[0].scope = 'بیمار'
          }

        },
        errorDate => {
          console.log("errorDate", errorDate);

        }
      )
    }

  }

  ngOnInit() {
  }

}
