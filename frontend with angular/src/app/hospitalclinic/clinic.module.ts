import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaghzComponent } from './maghz/maghz.component';
import { GhalbComponent } from './ghalb/ghalb.component';
import { OrtopedComponent } from './ortoped/ortoped.component';
import { ZananComponent } from './zanan/zanan.component';
import { AtfalComponent } from './atfal/atfal.component';
import { DakheliComponent } from './dakheli/dakheli.component';
import { PostComponent } from './post/post.component';
import { CheshmComponent } from './cheshm/cheshm.component';
import { ClinicRoutingModule } from './clinic-routing.module';
import { DoctorsService } from '../shared/service/doctors.service';
import { ClinicComponent } from './clinic.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MaghzComponent,
    GhalbComponent,
    OrtopedComponent,
    ZananComponent,
    AtfalComponent,
    DakheliComponent,
    PostComponent,
    CheshmComponent,
    ClinicComponent
  ],
  imports: [
    CommonModule,
    ClinicRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [DoctorsService]

})
export class ClinicModule { }
