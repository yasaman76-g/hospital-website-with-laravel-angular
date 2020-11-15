import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DropdownDirective } from './shared/directive/dropdown.directive';
import { SignupformComponent } from './signupform/signupform.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './homepage/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { DoctorComponent } from './doctor/doctor.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AppLogoutComponent } from './userpanel/logout/applogout.component';
import { TakingturnsComponent } from './takingturns/takingturns.component';
import { TurnsComponent } from './takingturns/turns/turns.component';
import { BankComponent } from './takingturns/turns/bank/bank.component';
import { AnswerComponent } from './answer/answer.component';
import { AuthGaurd } from './shared/service/auth-gaurd';
import { AuthGaurdService } from './shared/service/auth-gaurd.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManagerComponent } from './manager/manager.component';
import { AuthGaurd2 } from './shared/service/auth-gaurd2';
import { SharedModule } from './shared/shared.module';
import { UserService } from './shared/service/user.service';
import { ChangepasswordComponent } from './userpanel/changepassword/changepassword.component';
import { UpdateuserComponent } from './userpanel/updateuser/updateuser.component';
import { ShowuserComponent } from './userpanel/showuser/showuser.component';
import { NewsComponent } from './manager/news/news.component';
import { UpdatenewsComponent } from './manager/updatenews/updatenews.component';
import { TurnslistComponent } from './userpanel/turnslist/turnslist.component';
import { Maghale1Component } from './homepage/content/maghale1/maghale1.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    SignupformComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
    DoctorComponent,
    FooterComponent,
    AppLogoutComponent,
    TakingturnsComponent,
    TurnsComponent,
    BankComponent,
    AnswerComponent,
    ManagerComponent,
    ChangepasswordComponent,
    UpdateuserComponent,
    ShowuserComponent,
    NewsComponent,
    UpdatenewsComponent,
    TurnslistComponent,
    Maghale1Component


  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    NgbModule,
    SharedModule
  ],


  providers: [CookieService, AuthGaurd, AuthGaurd2, AuthGaurdService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
