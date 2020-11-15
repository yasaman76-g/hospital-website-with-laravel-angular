import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, Title } from '@angular/platform-browser';
declare var require: any
const FileSaver = require('file-saver');



@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  answerUrl;
  code;
  show: boolean = false;
  showerr: boolean = false;
  errormessage: string;
  src;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private title: Title) { }
  ngOnInit() {
    this.title.setTitle('جواب آزمایش')
  }
  onSelect(f) {
    this.code = f.value.name;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    const model = {
      "code": f.value.name
    }
    this.http.post<any>("http://localhost/hospital-laravel/public/api/selectanswer", model, { headers: headers, responseType: 'blob' as 'json' }).subscribe(
      (res) => {
        console.log(res);
        this.show = true;
        this.showerr = false;
        if (res['size'] != 7) {
          var blob = new Blob([res], { type: 'application/pdf' })
          var pdf = new File([blob], this.code, { type: 'application/pdf' })
          this.createpdfFromBlob(pdf);
        }
        else {
          this.showerr = true;
          this.show = false;
          this.errormessage = "چنین جواب آزمایشی موجود نیست"
        }
      },
      (err) => {
        this.showerr = true;
        this.show = false;
        this.errormessage = "چنین جواب آزمایشی موجود نیست"
      })
  }
  createpdfFromBlob(pdf) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.answerUrl = reader.result;
      console.log(this.answerUrl)
    }, false);
    if (pdf) {
      reader.readAsDataURL(pdf);

    }

  }
  downloadPdf() {
    const pdfUrl = this.answerUrl;
    FileSaver.saveAs(pdfUrl, this.code);
  }
  // openDoc() {
  //   const pdfUrl = this.answerUrl;
  //   window.open(pdfUrl, '_blank', '', true);
  // }
}
