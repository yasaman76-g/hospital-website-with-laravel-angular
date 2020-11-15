import { Component, OnInit } from '@angular/core';
import { Doctors } from '../doctors.component';
import { DoctorsService } from '../../shared/service/doctors.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-maghz',
  templateUrl: './maghz.component.html',
  styleUrls: ['./maghz.component.css']
})
export class MaghzComponent implements OnInit {
  atfal: Doctors[];
  filterstring = '';
  constructor(private doctorsservice: DoctorsService, private title: Title) {
    this.doctorsservice.getmaghz().subscribe(
      (res) => {
        console.log(res)
        this.atfal = res;
      },
      (error) => {
        console.log(error);

      }
    )

  }

  ngOnInit() {
    this.title.setTitle('درمانگاه مغز و اعصاب')
  }

}
