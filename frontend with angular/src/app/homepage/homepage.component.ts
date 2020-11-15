import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { news } from './news.component'
import { UserService } from '../shared/service/user.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  news: news[];
  constructor(private title: Title, private httpclient: HttpClient, private userservice: UserService) {
    this.userservice.getnews().subscribe((res) => {
      this.news = res;
      console.log(this.news);

    },
      (err) => {
        console.log(err);
      }
    )
  }

  ngOnInit() {
    this.title.setTitle('بیمارستان');

  }

}
