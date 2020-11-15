import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-turnslist',
  templateUrl: './turnslist.component.html',
  styleUrls: ['./turnslist.component.css']
})
export class TurnslistComponent implements OnInit {
  turnslist;
  constructor(private cookieservice: CookieService, private http: HttpClient, private route: Router, private title: Title) {

  }
  ngOnInit() {
    this.title.setTitle('لیست نوبت');
    const model = {
      "username": this.cookieservice.get("username")
    }
    this.http.post("http://localhost:80/hospital-laravel/public/api/turnslist", model).subscribe(
      res => {
        this.turnslist = res;
      },
      err => {
        this.turnslist = [];
      }
    )
  }

  onSelect(item) {
    if (confirm("بیمار محترم در صورت حذف نوبت اخذ شده هزینه پرداختی شما باز گردانده نمی شود")) {
      let houre: Number;
      let minute: Number;
      if (item.changetime == item.time) {
        item.changetime = item.time;
      }
      else {
        if (item.changetime.split(':')[1] == "00") {
          houre = (parseInt(item.changetime.split(':')[0]) - 1);
          minute = item.changetime.split(':')[1] = 50;
          item.changetime = houre + ":" + minute + ":" + item.changetime.split(':')[2]
        }
        else {
          houre = parseInt(item.changetime.split(':')[0]);
          minute = (parseInt(item.changetime.split(':')[1]) - 10);
          item.changetime = houre + ":" + minute + ":" + item.changetime.split(':')[2]

        }
      }
      console.log(item)
      const model = {
        "id": item.id,
        "doctor_id": item.doctor_id,
        "day": item.day,
        "changetime": item.changetime
      }
      this.http.post("http://localhost:80/hospital-laravel/public/api/deleteturns", model).subscribe(
        res => {
          // alert("نوبت اخذ شده ی شما حذف شد");
          this.ngOnInit();
        }
      )

    }

  }

}
