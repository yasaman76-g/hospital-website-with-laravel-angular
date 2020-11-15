import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Doctors } from 'src/app/hospitalclinic/doctors.component';
import { Title } from '@angular/platform-browser';
import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/signupform/user.component';

@Component({
  selector: 'app-turns',
  templateUrl: './turns.component.html',
  styleUrls: ['./turns.component.css']
})
export class TurnsComponent implements OnInit {
  //https://stackoverflow.com/questions/6327155/how-to-increase-a-field-value-of-mysql-table-every-some-minutes-automatically
  doctors: Doctors[];
  selectdoctors = [];
  tableMode = false;
  updateuser: User;
  weekdate;
  filterstring = '';
  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router, private title: Title, private userservice: UserService) {
    if (this.cookieService.get("token") != "") {
      this.userservice.getuser(this.cookieService.get("username")).subscribe(
        (res) => {
          this.updateuser = res[0];
        })
    }
  }
  ngOnInit() {
    this.title.setTitle('اخذ نوبت');
    this.http.get("http://127.0.0.1:80/hospital-laravel/public/api/pc").subscribe(
      res => {
        this.weekdate = res;
      }
    )
  }
  insert(f) {
    const model = {
      "takhasos": f.value.takhasos
    }
    if (this.cookieService.get("token") != "") {
      this.http.post<Doctors[]>("http://127.0.0.1:80/hospital-laravel/public/api/selectdoctor", model).subscribe(
        res => {
          for (let i in res) {
            if (res[i].day == "شنبه") {
              res[i]['date'] = this.weekdate[0]['شنبه'];

            }
            else if (res[i].day == "یکشنبه") {
              res[i]['date'] = this.weekdate[0]['یکشنبه'];
            }
            else if (res[i].day == "دوشنبه") {
              res[i]['date'] = this.weekdate[0]['دوشنبه'];
            }
            else if (res[i].day == "سه شنبه") {
              res[i]['date'] = this.weekdate[0]['سه شنبه'];
            }
            else if (res[i].day == "چهارشنبه") {
              res[i]['date'] = this.weekdate[0]['چهارشنبه'];
            }
            else if (res[i].day == "پنج شنبه") {
              res[i]['date'] = this.weekdate[0]['پنج شنبه'];
            }
            else if (res[i].day == "جمعه") {
              res[i]['date'] = this.weekdate[0]['جمعه'];
            }
          }
          this.doctors = res;
          this.tableMode = true;

        }
      )

    }

  }
  onSelect(item) {
    console.log(item)
    let houre: Number;
    let minute: Number;
    if (item.number == 12) {
      item.changetime = item.time;
    }
    else {
      if (item.changetime.split(':')[1] == "60") {
        if (item.changetime.split(':')[0] <= "24") {
          houre = (parseInt(item.changetime.split(':')[0]) + 1);
        }
        else {
          houre = 1;
        }
        item.changetime = houre + ":" + minute + ":" + item.changetime.split(':')[2]
      }
      else {
        houre = parseInt(item.changetime.split(':')[0]);
        minute = (parseInt(item.changetime.split(':')[1]) + 10);
        item.changetime = houre + ":" + minute + ":" + item.changetime.split(':')[2]

      }
    }


    this.selectdoctors.push({
      user_id: this.updateuser.id,
      doctor_id: item.refid,
      user_fname: this.updateuser.first_name,
      user_lname: this.updateuser.last_name,
      first_name: item.first_name,
      last_name: item.last_name,
      shift: item.shift,
      day: item.day,
      date: item.date,
      time: item.time,
      changetime: item.changetime,
      price: item.price
    });
  }
  insertturns(item) {
    const model = {
      "user_id": item.user_id,
      "doctor_id": item.doctor_id,
      "changetime": item.changetime,
      "time": item.time,
      "price": item.price,
      "day": item.day,
      "date": item.date
    }
    let user_id;
    this.http.post("http://127.0.0.1:80/hospital-laravel/public/api/insertturns", model).subscribe(
      res => {
        console.log(res)
        user_id = res;
        this.router.navigate(['turns/' + user_id])
      }
    )


  }
}
