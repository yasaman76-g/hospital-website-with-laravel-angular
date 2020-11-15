import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtfalComponent } from './atfal/atfal.component';
import { CheshmComponent } from './cheshm/cheshm.component';
import { DakheliComponent } from './dakheli/dakheli.component';
import { GhalbComponent } from './ghalb/ghalb.component';
import { MaghzComponent } from './maghz/maghz.component';
import { OrtopedComponent } from './ortoped/ortoped.component';
import { PostComponent } from './post/post.component';
import { ZananComponent } from './zanan/zanan.component';
import { ClinicComponent } from './clinic.component';
import { AppNotFoundComponent } from '../notfound/appnotfound.component';


const clinicRoute: Routes = [
  { path: '', component: ClinicComponent },
  { path: 'atfal', component: AtfalComponent },
  { path: 'cheshm', component: CheshmComponent },
  { path: 'dakheli', component: DakheliComponent },
  { path: 'ghalb', component: GhalbComponent },
  { path: 'maghz', component: MaghzComponent },
  { path: 'ortoped', component: OrtopedComponent },
  { path: 'post', component: PostComponent },
  { path: 'zanan', component: ZananComponent },
  { path: '**', component: AppNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(clinicRoute)
  ],
  exports: [RouterModule]
})
export class ClinicRoutingModule { }
