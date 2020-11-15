import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-maghale1',
  templateUrl: './maghale1.component.html',
  styleUrls: ['./maghale1.component.css']
})
export class Maghale1Component implements OnInit {
  news;
  fimage;
  album = [];
  constructor(private router: ActivatedRoute, private http: HttpClient) {
    const id = this.router.snapshot.params['id'];
    console.log(id)
    this.http.post<any>("http://localhost/hospital-laravel/public/api/selectnewsbyid", { id }).subscribe(
      res => {
        this.news = res.news;
        this.fimage = res.album[0];
        for (var i = 1; i < res.album.length; i++) {
          this.album.push(res.album[i]);
        }

      },
      err => {
        console.log(err)
      }
    )
  }

  ngOnInit() {

  }
}
