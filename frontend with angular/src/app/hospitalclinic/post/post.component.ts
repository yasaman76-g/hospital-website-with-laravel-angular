import { Component, OnInit } from '@angular/core';
import { Doctors } from '../doctors.component';
import { DoctorsService } from '../../shared/service/doctors.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  atfal: Doctors[];
  filterstring = '';
  constructor(private doctorsservice: DoctorsService, private title: Title) {
    this.doctorsservice.getpost().subscribe(
      (res) => {
        this.atfal = res;
      },
      (error) => {
        console.log(error);

      }
    )

  }


  ngOnInit() {
    this.title.setTitle('درمانگاه پوست و مو')
  }

}
