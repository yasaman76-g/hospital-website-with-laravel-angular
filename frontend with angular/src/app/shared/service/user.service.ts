import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { User } from '../../signupform/user.component';
import { Observable } from 'rxjs';
import { news } from 'src/app/homepage/news.component';
class TokenModel {
  access_token: string;
  expires_in: number;
  token_type: string;
  user_id: string;
  scope: string;
  refresh_token: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  clientId = "webapp";
  clientSecret = "123";

  constructor(private httpClient: HttpClient) { }
  islogin(user): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(this.clientId + ":" + this.clientSecret)
      })
    }
    return this.httpClient.post<TokenModel>("http://localhost/hospital-laravel/public/api/login", {
      "grant_type": "password",
      "username": user.username,
      "password": user.password
    }, httpOptions)

  }
  changepassword(username, password): Observable<any> {
    return this.httpClient.put<any>("http://localhost/hospital-laravel/public/api/changepassword", {
      "grant_type": "password",
      "username": username,
      "password": password
    })

  }
  getuser(username): Observable<any> {

    return this.httpClient.post<any>("http://localhost/hospital-laravel/public/api/getuser", { "username": username })
  }
  updateuser(user, model): Observable<any> {
    return this.httpClient.put<any>("http://localhost/hospital-laravel/public/api/updateuser", {
      user, model
    })
  }
  getnews(): Observable<any> {
    return this.httpClient.get<any>("http://localhost/hospital-laravel/public/api/selectnews", { responseType: 'json' })
  }
  updatenews(id, model): Observable<any> {
    return this.httpClient.post<any>("http://localhost/hospital-laravel/public/api/updatenews", { id, model })
  }
  deletenews(id): Observable<any> {
    return this.httpClient.post<any>("http://localhost/hospital-laravel/public/api/deletenews", { id })
  }
}
