import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctors } from '../../hospitalclinic/doctors.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  atfal: Doctors[];
  constructor(private http: HttpClient) { }
  getcheshm(): Observable<Doctors[]> {
    return this.http.get<Doctors[]>("http://localhost/hospital-laravel/public/api/getcheshm")
  }
  getdakheli(): Observable<Doctors[]> {
    return this.http.get<Doctors[]>("http://localhost/hospital-laravel/public/api/getdakheli")
  }
  getghalb(): Observable<Doctors[]> {
    return this.http.get<Doctors[]>("http://localhost/hospital-laravel/public/api/getghalb")
  }
  getmaghz(): Observable<Doctors[]> {
    return this.http.get<Doctors[]>("http://localhost/hospital-laravel/public/api/getmaghz")
  }
  getortoped(): Observable<Doctors[]> {
    return this.http.get<Doctors[]>("http://localhost/hospital-laravel/public/api/getortoped")
  }
  getpost(): Observable<Doctors[]> {
    return this.http.get<Doctors[]>("http://localhost/hospital-laravel/public/api/getpost")
  }
  getzanan(): Observable<Doctors[]> {
    return this.http.get<Doctors[]>("http://localhost/hospital-laravel/public/api/getzanan")
  }
  getatfal(): Observable<Doctors[]> {
    return this.http.get<Doctors[]>("http://localhost/hospital-laravel/public/api/getatfal")
  }

}
