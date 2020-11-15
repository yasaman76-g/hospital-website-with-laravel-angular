import { Component, OnInit } from '@angular/core';
import { Doctors } from '../doctors.component';
import { DoctorsService } from '../../shared/service/doctors.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cheshm',
  templateUrl: './cheshm.component.html',
  styleUrls: ['./cheshm.component.css']
})
export class CheshmComponent implements OnInit {
  atfal: Doctors[];
  filterstring = '';
  constructor(private doctorsservice: DoctorsService, private title: Title) {
    this.doctorsservice.getcheshm().subscribe(
      (res) => {
        this.atfal = res;
      },
      (error) => {
        console.log(error);

      }
    )

  }
  ngOnInit() {
    this.title.setTitle('درمانگاه چشم')
  }

}
