import { Component, OnInit } from '@angular/core';
import { Doctors } from '../doctors.component';
import { DoctorsService } from '../../shared/service/doctors.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ortoped',
  templateUrl: './ortoped.component.html',
  styleUrls: ['./ortoped.component.css']
})
export class OrtopedComponent implements OnInit {
  atfal: Doctors[];
  filterstring = '';
  constructor(private doctorsservice: DoctorsService, private title: Title) {
    this.doctorsservice.getmaghz().subscribe(
      (res) => {
        this.atfal = res;
      },
      (error) => {
        console.log(error);

      }
    )

  }

  ngOnInit() {
    this.title.setTitle('درمانگاه ارتوپد')
  }

}
