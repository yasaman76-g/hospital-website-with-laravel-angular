import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './applogout.component.html',
  styleUrls: ['./applogout.component.css']
})
export class AppLogoutComponent {

  constructor(private cookieService: CookieService, private router: Router) {
    this.cookieService.delete("token", null);
    this.router.navigate(['/']);
  };
}