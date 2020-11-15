import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-root',
  templateUrl: './appnotfound.component.html',
  styleUrls: ['./appnotfound.component.css']
})
export class AppNotFoundComponent {
  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
  };

}