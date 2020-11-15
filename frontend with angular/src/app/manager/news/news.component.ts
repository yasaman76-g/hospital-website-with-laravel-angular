import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  form: FormGroup;
  uploadResponse;
  file = [];
  constructor(private title: Title, private formBuilder: FormBuilder, private httpclient: HttpClient, private router: Router) { }
  ngOnInit() {
    this.title.setTitle('بارگزاری خبر');
    this.form = this.formBuilder.group({
      image: [''],
      news: [''],
      titr: new FormControl(null),
      header: new FormControl(null)
    });
  }
  fileProgress1(fileInput: any) {
    console.log(fileInput.target.files[1])
    for (var val of fileInput.target.files) {
      this.file.push(val);

    }
    this.form.get('image').setValue(this.file);
  }
  fileProgress2(fileInput: any) {

    const file2 = fileInput.target.files[0];
    this.form.get('news').setValue(file2);
  }
  onSubmit() {
    const formData = new FormData();
    var i = 1;
    for (var val of this.form.get('image').value) {
      formData.append('image' + i, val);
      i++;

    }
    formData.append('news', this.form.get('news').value);
    formData.append('titr', this.form.value.titr);
    formData.append('header', this.form.value.header);
    console.log(this.form)
    this.httpclient.post<any>("http://localhost/hospital-laravel/public/api/insertnews", formData).subscribe(
      (res) => {
        alert('فایل شما ذخیره شد');
        this.router.navigate(['/']);

      },
      (err) => {
        console.log(err);
      }
    );

  }
}
