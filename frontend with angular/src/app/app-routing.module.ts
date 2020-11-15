import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupformComponent } from './signupform/signupform.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AppLogoutComponent } from './userpanel/logout/applogout.component';
import { TakingturnsComponent } from './takingturns/takingturns.component';
import { TurnsComponent } from './takingturns/turns/turns.component';
import { BankComponent } from './takingturns/turns/bank/bank.component';
import { AnswerComponent } from './answer/answer.component';
import { AuthGaurd } from './shared/service/auth-gaurd';
import { ManagerComponent } from './manager/manager.component';
import { AuthGaurd2 } from './shared/service/auth-gaurd2';
import { AppNotFoundComponent } from './notfound/appnotfound.component';
import { ChangepasswordComponent } from './userpanel/changepassword/changepassword.component';
import { UpdateuserComponent } from './userpanel/updateuser/updateuser.component';
import { ShowuserComponent } from './userpanel/showuser/showuser.component';
import { NewsComponent } from './manager/news/news.component';
import { UpdatenewsComponent } from './manager/updatenews/updatenews.component';
import { TurnslistComponent } from './userpanel/turnslist/turnslist.component';
import { Maghale1Component } from './homepage/content/maghale1/maghale1.component';




const appRoute: Routes = [

    { path: 'clinic', loadChildren: () => import('./hospitalclinic/clinic.module').then(m => m.ClinicModule) },
    { path: '', component: HomepageComponent },
    { path: 'answer', component: AnswerComponent },
    { path: 'signupform', component: SignupformComponent },
    { path: 'login', component: LoginComponent },
    { path: 'doctor', canActivate: [AuthGaurd], component: DoctorComponent },
    { path: 'manager', canActivate: [AuthGaurd2], component: ManagerComponent },
    { path: 'news', canActivate: [AuthGaurd2], component: NewsComponent },
    { path: 'updatenews', canActivate: [AuthGaurd2], component: UpdatenewsComponent },
    { path: 'takingturns', component: TakingturnsComponent },
    { path: 'turns', component: TurnsComponent },
    { path: 'turns/:userid', component: BankComponent },
    { path: 'logout', component: AppLogoutComponent },
    { path: 'changepassword', component: ChangepasswordComponent },
    { path: 'updateuser', component: UpdateuserComponent },
    { path: 'turnslist', component: TurnslistComponent },
    { path: 'showuser', component: ShowuserComponent },
    { path: 'shownews/:id', component: Maghale1Component },
    { path: '**', component: AppNotFoundComponent }


]
@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}