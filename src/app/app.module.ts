import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BackConnService } from './back-conn.service';
import { Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { FixtureinfoComponent } from './fixtureinfo/fixtureinfo.component';
import { CookieService } from 'ngx-cookie-service';
import { NextmatchinfoComponent } from './nextmatchinfo/nextmatchinfo.component';
import { WeekdaydrawinfoComponent } from './weekdaydrawinfo/weekdaydrawinfo.component';
import { FilteringslicerComponent } from './filteringslicer/filteringslicer.component';
import { YearcomparisonComponent } from './yearcomparison/yearcomparison.component';

// const appRoutes:Routes=[
// ];

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    FixtureinfoComponent,
    NextmatchinfoComponent,
    WeekdaydrawinfoComponent,
    FilteringslicerComponent,
    YearcomparisonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BackConnService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
