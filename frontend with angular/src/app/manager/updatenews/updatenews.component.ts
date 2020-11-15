import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/service/user.service';
import { news } from 'src/app/homepage/news.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatenews',
  templateUrl: './updatenews.component.html',
  styleUrls: ['./updatenews.component.css']
})
export class UpdatenewsComponent implements OnInit {
  form: FormGroup;
  news: news[];
  constructor(private title: Title, private router: Router, private formBuilder: FormBuilder, private userservice: UserService) {
    this.userservice.getnews().subscribe((res) => {
      this.news = res;

    },
      (err) => {
        console.log(err);
      }
    )
  }
  ngOnInit() {
    this.title.setTitle('ویرایش خبر');
  }
  update(f: NgForm, id) {
    const model = {
      "titr": f.value.titr,
      "header": f.value.header
    }
    this.userservice.updatenews(id, model).subscribe(
      (res) => {
        console.log("success")
        this.router.navigate(['/']);
      }
    )
  }
  delete(id) {
    this.userservice.deletenews(id).subscribe(
      (res) => {
        console.log("success")
        this.router.navigate(['/']);
      }
    )
  }
}
