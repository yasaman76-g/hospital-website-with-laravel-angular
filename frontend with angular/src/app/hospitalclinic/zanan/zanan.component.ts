import { Component, OnInit } from '@angular/core';
import { Doctors } from '../doctors.component';
import { DoctorsService } from '../../shared/service/doctors.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-zanan',
  templateUrl: './zanan.component.html',
  styleUrls: ['./zanan.component.css']
})
export class ZananComponent implements OnInit {
  atfal: Doctors[];
  filterstring = '';
  constructor(private doctorsservice: DoctorsService, private title: Title) {
    this.doctorsservice.getzanan().subscribe(
      (res) => {
        this.atfal = res;
      },
      (error) => {
        console.log(error);

      }
    )

  }

  ngOnInit() {
    this.title.setTitle('درمانگاه زنان')
  }

}
