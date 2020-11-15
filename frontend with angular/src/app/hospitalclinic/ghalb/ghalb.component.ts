import { Component, OnInit } from '@angular/core';
import { Doctors } from '../doctors.component';
import { DoctorsService } from '../../shared/service/doctors.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ghalb',
  templateUrl: './ghalb.component.html',
  styleUrls: ['./ghalb.component.css']
})
export class GhalbComponent implements OnInit {

  atfal: Doctors[];
  filterstring = '';
  constructor(private doctorsservice: DoctorsService, private title: Title) {
    this.doctorsservice.getghalb().subscribe(
      (res) => {
        this.atfal = res;
      },
      (error) => {
        console.log(error);

      }
    )

  }


  ngOnInit() {
    this.title.setTitle('درمانگاه قلب')
  }

}
