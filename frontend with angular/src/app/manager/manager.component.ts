import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  //https://www.tutsmake.com/new-angular-7-upload-file-image-example/
  //https://www.techiediaries.com/php-file-upload-tutorial/
  // fileData: File = null;
  // blob: Blob;
  form: FormGroup;
  uploadResponse;
  constructor(private formBuilder: FormBuilder, private httpclient: HttpClient, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('بارگذاری آزمایش');
    this.form = this.formBuilder.group({
      upload: [''],
      code: new FormControl(null)
    });
  }
  fileProgress(fileInput: any) {

    const file = fileInput.target.files[0];
    this.form.get('upload').setValue(file);

  }

  onSubmit() {
    const formData = new FormData();
    formData.append('upload', this.form.get('upload').value);
    formData.append('code', this.form.value.code);

    this.httpclient.post<any>("http://localhost/hospital-laravel/public/api/uplaodanswer", formData).subscribe(
      (res) => {
        console.log(res);
        alert('فایل شما ذخیره شد')
      },
      (err) => {

        console.log(err);
      }
    );

  }

}
