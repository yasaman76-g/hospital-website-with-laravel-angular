import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-takingturns',
  templateUrl: './takingturns.component.html',
  styleUrls: ['./takingturns.component.css']
})
export class TakingturnsComponent implements OnInit {
  menuMode = true;
  constructor(private cookieService: CookieService, private router: Router, private title: Title) {
    if (this.cookieService.get("token") != "") {
      this.menuMode = false
    }


    else {
      this.menuMode = true

    }
  }
  ngOnInit() {
    this.title.setTitle('نوبت دهی اینترنتی')
  }

}
