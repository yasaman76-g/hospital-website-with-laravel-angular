import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;
  menuMode = true;
  doctormode = false;
  managermode = false;
  username;
  constructor(private cookieService: CookieService, private router: Router, private userservice: UserService) {

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log("AppComponent.constructor.router.events.subscribe NavigationEnd")

        if (this.cookieService.get("token") != "") {

          this.username = this.cookieService.get("username");
          this.menuMode = false
          if (this.cookieService.get("scope") === '2') { this.doctormode = true; }
          else if (this.cookieService.get("scope") === '1') { this.managermode = true; }



        } else {
          this.menuMode = true
          this.doctormode = false;
          this.managermode = false;
        }
      }
    });
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit() {

  }

}
