import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGaurdService {
    constructor(private cookieservice: CookieService) { }
    loggedIn = false;
    isAuthenticate() {
        if ((this.cookieservice.get("token") != "") && (this.cookieservice.get("scope") === "2")) {
            this.loggedIn = true
        } else { this.loggedIn = false }
        const promis = new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(this.loggedIn)
                    }, 800)
            }
        )
        return promis;
    }
    isAuthenticate2() {
        if ((this.cookieservice.get("token") != "") && (this.cookieservice.get("scope") === "1")) {
            this.loggedIn = true
        } else { this.loggedIn = false }
        const promis = new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(this.loggedIn)
                    }, 800)
            }
        )
        return promis;
    }

}