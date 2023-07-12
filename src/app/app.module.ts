import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BackConnService } from './back-conn.service';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { FixtureinfoComponent } from './fixtureinfo/fixtureinfo.component';
import { NextmatchinfoComponent } from './nextmatchinfo/nextmatchinfo.component';
import { WeekdaydrawinfoComponent } from './weekdaydrawinfo/weekdaydrawinfo.component';
import { FilteringslicerComponent } from './filteringslicer/filteringslicer.component';
import { YearcomparisonComponent } from './yearcomparison/yearcomparison.component';
import { LoginComponent } from './login/login.component';
import { LeagueinfoComponent } from './leagueinfo/leagueinfo.component';
import { MainsummaryComponent } from './mainsummary/mainsummary.component';
import { AuthGuard } from './auth.guard';
import { PersonaldataComponent } from './personaldata/personaldata.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeaguesummaryComponent } from './leaguesummary/leaguesummary.component';
import { TipstermodeComponent } from './tipstermode/tipstermode.component';
import { AlertedleaguesComponent } from './alertedleagues/alertedleagues.component';
import { ActivebetleaguesComponent } from './activebetleagues/activebetleagues.component';
import { TarjetitasComponent } from './tarjetitas/tarjetitas.component';

const routes: Routes = [
  { path: '', component: MainsummaryComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'personalData', component: PersonaldataComponent },
  { path: 'leagueSummary', component: LeaguesummaryComponent },
  { path: 'tipstermode', component: TipstermodeComponent },
  { path: 'alertedLeagues', component: AlertedleaguesComponent },
  { path: 'activeBetLeagues', component: ActivebetleaguesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    FixtureinfoComponent,
    NextmatchinfoComponent,
    WeekdaydrawinfoComponent,
    FilteringslicerComponent,
    YearcomparisonComponent,
    LoginComponent,
    LeagueinfoComponent,
    MainsummaryComponent,
    PersonaldataComponent,
    NavbarComponent,
    LeaguesummaryComponent,
    TipstermodeComponent,
    AlertedleaguesComponent,
    ActivebetleaguesComponent,
    TarjetitasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackConnService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
