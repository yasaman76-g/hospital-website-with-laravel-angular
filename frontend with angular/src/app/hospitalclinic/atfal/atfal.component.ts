import { Component, OnInit } from '@angular/core';
import { Doctors } from '../doctors.component';
import { DoctorsService } from '../../shared/service/doctors.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-atfal',
  templateUrl: './atfal.component.html',
  styleUrls: ['./atfal.component.css']
})
export class AtfalComponent implements OnInit {
  atfal: Doctors[];
  filterstring = '';
  constructor(private doctorsservice: DoctorsService, private title: Title) {
    this.doctorsservice.getatfal().subscribe(
      (res) => {
        this.atfal = res;

      },
      (error) => {
        console.log(error);

      }
    )

  }

  ngOnInit() {
    this.title.setTitle('درمانگاه اطفال')
  }

}
