import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  id;
  items = [];
  price;
  constructor(private router: ActivatedRoute, private route: Router, private title: Title, private http: HttpClient) { }
  ngOnInit() {
    this.id = {
      "id": this.router.snapshot.params['userid']
    }
    this.http.post("http://127.0.0.1:80/hospital-laravel/public/api/getturns", this.id).subscribe(
      res => {
        this.items.push({
          id: res[0].id,
          doctor_id: res[0].doctor_id,
          price: res[0].price,
          changetime: res[0].changetime,
          day: res[0].day
        })

      }
    )
    this.title.setTitle('درگاه پرداخت بانک ملی')
  }
  update(item) {
    console.log(item)
    const model = {
      "id": item.id,
      "doctor_id": item.doctor_id,
      "changetime": item.changetime,
      "day": item.day
    }
    this.http.put("http://127.0.0.1:80/hospital-laravel/public/api/updateturns", model).subscribe(
      res => {
        console.log(res)
        this.route.navigate(['turnslist'])
      }
    )

  }

}
