import { Component, OnInit } from '@angular/core';
import { Doctors } from '../doctors.component';
import { DoctorsService } from '../../shared/service/doctors.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dakheli',
  templateUrl: './dakheli.component.html',
  styleUrls: ['./dakheli.component.css']
})
export class DakheliComponent implements OnInit {
  atfal: Doctors[];
  filterstring = '';
  constructor(private doctorsservice: DoctorsService, private title: Title) {
    this.doctorsservice.getdakheli().subscribe(
      (res) => {
        this.atfal = res;
      },
      (error) => {
        console.log(error);

      }
    )

  }
  ngOnInit() {
    this.title.setTitle('درمانگاه داخلی')
  }

}
